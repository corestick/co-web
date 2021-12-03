import eslMssql from './esl.mssql';

class Esl {
  async getAllESL(req, res) {
    try {
      const output = await eslMssql.getAllESL();
      res.sendResponse(output);
    } catch (error) {
      console.log(error);
      res.sendError(
        global.HELPER.getException({
          error,
          message: 'Error in getting esl list.',
        })
      );
    }
  }

  async findLocation(req, res) {
    try {
      const output = await eslMssql.findLocation(req.body);
      res.sendResponse(output);
    } catch (error) {
      console.log(error);
      res.sendError(
        global.HELPER.getException({
          error,
          message: 'Error in find esl location.',
        })
      );
    }
  }

  async setQty(req, res) {
    try {
      const output = await eslMssql.setQty(req.body);
      res.sendResponse(output);
    } catch (error) {
      console.log(error);

      res.sendError(
        global.HELPER.getException({
          error,
          message: error.message,
        })
      );
    }
  }
}

export default new Esl();
