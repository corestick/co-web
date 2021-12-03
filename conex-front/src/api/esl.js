import client from './client';

export const find = ({ branchCode, itemCode, employeeCode }) =>
  client.post('/api/v1/esl/find', {
    branchCode: branchCode,
    itemCode: itemCode,
    employeeCode: employeeCode,
  });

export const inout = ({ masterSite, serialNo, lotNo, qty, employeeCode }) =>
  client.post('/api/v1/esl/inout', {
    masterSite: masterSite,
    serialNo: serialNo,
    lotNo: lotNo,
    qty: qty,
    employeeCode: employeeCode,
  });
