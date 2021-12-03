class EslMSSql {
  async getAllESL() {
    const res = await global.MSSQLConn.request().query(
      'Select * From dbo.Master_Item_ESL (NOLOCK)'
    );

    return res.recordset;
  }

  async findLocation(esl) {
    const res = await global.MSSQLConn.request()
      .input('BranchCode', esl.branchCode)
      .input('ItemCode', esl.itemCode)
      .input('EmployeeCode', esl.employeeCode)
      .execute('spPDA_FindLocation');

    return res.recordset;
  }

  async setQty(esl) {
    const res = await global.MSSQLConn.request()
      .input('MasterSite', esl.masterSite)
      .input('SerialNo', esl.serialNo)
      .input('LotNo', esl.lotNo)
      .input('Qty', esl.qty)
      .input('EmployeeCode', esl.employeeCode)
      .execute('spPDA_RackInOut');

    return res.recordset;
  }
}

export default new EslMSSql();
