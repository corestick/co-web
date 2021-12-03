import client from './client';

export const login = ({ masterSite, employeeCode, password }) =>
  client.post('/api/v1/auth/login', {
    masterSite: masterSite,
    employeeCode: employeeCode,
    password: password,
  });

export const check = () => client.get('/api/v1/auth/check');

export const logout = () => client.post('/api/v1/auth/logout');
