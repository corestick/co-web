import eslcontroller from './esl/esl.controller';
import facilitycontroller from './facility/facility.controller';
import authcontroller from './auth/auth.controller';

class Module {
  constructor(app) {
    this.app = app;
  }

  init() {
    new eslcontroller(this.app);
    new facilitycontroller(this.app);
    new authcontroller(this.app);
  }
}
export default Module;
