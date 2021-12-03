import facility from './facility';
import express from 'express';

const router = express.Router();

class FacilityController {
  constructor(app) {
    router.post('/facilityStatus', facility.getFacilityStatus);

    app.use('/api/v1/facility', router);
  }
}

export default FacilityController;
