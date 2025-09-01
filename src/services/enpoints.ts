const MICRO_AUTH = 'ms-auth-tfm';
const MICRO_PARKING = 'ms-elastic-tfm';

export const ENDPOINTS = Object.freeze({
  AUTH_URLS: {
    register_users: `/${MICRO_AUTH}/api/users`,
    login_user: `/${MICRO_AUTH}/api/sessions`,
    update_profile: `/${MICRO_AUTH}/api/users/profile`,
    update_password: `/${MICRO_AUTH}/api/users/password`,
  },
  PARKINGS_URLS:{

  }
});
