import esl from './esl';
import express from 'express';

const router = express.Router();

class EslController {
  constructor(app) {
    router.get('/', esl.getAllESL);
    router.post('/find', esl.findLocation);
    router.post('/inout', esl.setQty);

    app.use('/api/v1/esl', router);
  }
}

export default EslController;
