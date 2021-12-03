import auth from './auth';
import express from 'express';

const router = express.Router();

class AuthController {
  constructor(app) {
    router.post('/login', auth.login);
    router.get('/check', auth.check);
    router.post('/logout', auth.logout);

    app.use('/api/v1/auth', router);
  }
}

export default AuthController;
