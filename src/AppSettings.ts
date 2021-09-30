export const server =
  process.env.REACT_APP_ENV === 'production'
    ? 'https://qna2021backend.azurewebsites.net'
    : process.env.REACT_APP_ENV === 'staging'
    ? 'https://qanda2021-backend-staging.azurewebsites.net'
    : 'https://localhost:5001';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'dev-mres3rei.us.auth0.com',
  client_id: 'zFExgFxmyAQrjjjPUHw9B9x7fjr00GjE',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
