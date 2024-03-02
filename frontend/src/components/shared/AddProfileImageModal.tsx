'use client'
/* eslint-disable @next/next/no-img-element */

import { ChangeEvent, useState } from "react";

const AddProfileImage = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onloadend = () => {
            setSelectedImage(reader.result as string);
        };

        reader.readAsDataURL(file);
    };
    return (
        <div className="modal fade" id="addProfileImage" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content modal__playlist">
                    <div className="d-flex align-items-center mb-30 justify-content-between">
                        <h4>Select An Image</h4>
                    </div>
                    <div className="modal-body fs-16 d-block fw-500 text-center bodyfont pra title">
                        {selectedImage && (
                            <div>
                                <h2>Preview:</h2>
                                <img src={selectedImage} alt="Preview" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px', outline:'5px solid #3FCA90' }} />
                            </div>
                        )}
                        <label htmlFor="profile">
                            <span className="cmn--btn cursor-pointer">
                                <span>
                                    {selectedImage ? 'change' : 'Select'}
                                </span>
                            </span>
                        </label>
                        <input onChange={handleImageChange} type="file" id="profile" name="profile" hidden />
                    </div>
                    <div className="modal-footer mt-40 d-flex gap-2 align-items-center justify-content-center">
                        <button
                            type="button"
                            aria-label="button button"
                            className="btn white"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>
                        <button type="button" aria-label="button" className="btn base2">
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProfileImage;
