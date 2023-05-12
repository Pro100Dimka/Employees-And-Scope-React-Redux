export const JOBS = 'jobs';
export const EMPLOYEES = 'employees';

const ENDPOINTS = {
  [JOBS]: {
    url: '/jobs',
    method: 'GET',
  },
  [EMPLOYEES]: {
    url: '/employees',
    method: 'GET',
  },
};
export default ENDPOINTS;
