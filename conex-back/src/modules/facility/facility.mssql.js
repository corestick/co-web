class FacilityMSSql {
  async getFacilityStatus(facility) {
    const res = await global.MSSQLConn.request()
      .input('MasterSite', facility.masterSite)
      .input('SiteGroup', facility.siteGroup)
      .execute('spLMS_FacilityStatus');

    return res.recordset;
  }
}

export default new FacilityMSSql();
