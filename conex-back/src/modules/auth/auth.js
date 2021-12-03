import authMssql from './auth.mssql';
import jwt from 'jsonwebtoken';

class Auth {
  async login(req, res) {
    try {
      const output = await authMssql.findEmployee(req.body);

      if (output.length === 0) {
        return res.status(401).json({
          code: 401,
          message: '등록되지 않은 아이디 입니다.',
        });
      }

      const token = jwt.sign(
        {
          masterSite: output[0].masterSite,
          employeeCode: output[0].employeeCode,
          branchCode: output[0].branchCode,
          lotYes: output[0].lotYes,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: '365d',
          issuer: 'CONEX',
        }
      );

      res.cookie('access_token', token, {
        maxAge: 1000 * 60 * 60 * 24 * 365,
        httpOnly: true,
      });

      return res.json({
        code: 200,
        message: '토큰이 발급되었습니다.',
        token,
      });
    } catch (error) {
      console.log(error);
      res.sendError(
        global.HELPER.getException({
          error,
          message: 'Error in login.',
        })
      );
    }
  }

  async check(req, res) {
    try {
      res.json(req.decoded);
    } catch (error) {
      console.log(error);
      res.sendError(
        global.HELPER.getException({
          error,
          message: 'Error in check.',
        })
      );
    }
  }

  async logout(req, res) {
    try {
      res.cookie('access_token');
      res.status = 204;

      res.sendResponse('Logout');
    } catch (error) {
      console.log(error);
      res.sendError(
        global.HELPER.getException({
          error,
          message: 'Error in logout.',
        })
      );
    }
  }
}

export default new Auth();
