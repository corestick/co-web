import client from './client';

export const getFacilityStatus = ({ masterSite, siteGroup }) =>
  client.post('/api/v1/facility/facilityStatus', {
    masterSite: 'MP',
    siteGroup: 'A',
  });
