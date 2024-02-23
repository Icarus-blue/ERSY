import createError from 'http-errors'
import express from 'express'
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import http from 'http'
import cors from 'cors'
import passport from 'passport';
import session from 'express-session';


import authRouter from './routes/auth.js'
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import { connectDB } from './utils/connector.js';
import './utils/passport.js'
import { createToken } from './utils/createToken.js';
import { PrismaClient } from '@prisma/client'
import client from './utils/client.js';


const app = express();
const server = http.createServer(app)
const port = process.env.PORT || 8000


app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  resave: false, saveUninitialized: true, secret: 'my-secret'
}))

app.use(passport.initialize())
app.use(passport.session());

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
})


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter)


app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/callback', passport.authenticate('google', { failureRedirect: '/auth/google' }), async (req, res, next) => {
  const token = await createToken(req.user.id_);
  res.redirect(`${process.env.FRONTEND_URL}?access_token=${token}&user=${JSON.stringify({ ...req.user })}`)
})




// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ status: false, message: res.locals.message })
});


connectDB()
  .then(() => {
    server.listen(port, () => {
      console.log("listening on port:", port);
    })
  })
  .catch((err) => {
    console.log('error connecting to database', err.message);
  })



export default app;
