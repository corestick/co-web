class AuthMSSql {
  async findEmployee(auth) {
    const res = await global.MSSQLConn.request()
      .input('MasterSite', auth.masterSite)
      .input('EmployeeCode', auth.employeeCode)
      .input('Password', auth.password)
      .execute('spLogin');

    return res.recordset;
  }
}

export default new AuthMSSql();
