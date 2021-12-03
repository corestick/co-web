import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  try {
    if (req.url !== '/api/v1/auth/login') {
      let token = req.cookies.access_token;

      if (!token) {
        if (req.headers.authorization !== null)
          token = req.headers.authorization;
        else return next();
      }

      req.decoded = jwt.verify(token, process.env.JWT_SECRET);
    }

    return next();
  } catch (error) {
    console.log(error);

    if (error.name === 'TokenExpiredError') {
      return res.status(419).json({
        code: 419,
        message: '토큰이 만료되었습니다.',
      });
    }
    return res.status(401).json({
      code: 401,
      message: '유효하지 않은 토큰입니다.',
    });
  }
};
