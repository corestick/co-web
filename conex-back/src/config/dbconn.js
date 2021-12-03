import mssql from 'mssql';

class DBConn {
  getConn = async (dbConfig) => {
    try {
      return await mssql.connect(dbConfig);
    } catch (error) {
      console.log(error);
    }
  };
}

export default new DBConn();
