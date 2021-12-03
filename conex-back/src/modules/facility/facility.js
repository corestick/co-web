import facilityMssql from './facility.mssql';

class Facility {
  async getFacilityStatus(req, res) {
    try {
      const output = await facilityMssql.getFacilityStatus(req.body);
      res.sendResponse(output);
    } catch (error) {
      console.log(error);
      res.sendError(
        global.HELPER.getException({
          error,
          message: 'Error in find facility status.',
        })
      );
    }
  }
}

export default new Facility();
