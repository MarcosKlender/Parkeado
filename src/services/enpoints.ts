const MICRO_AUTH = 'ms-auth-tfm';
const MICRO_PARKING = 'ms-elastic-tfm';

export const ENDPOINTS = Object.freeze({
  AUTH_URLS: {
    register_users: `/${MICRO_AUTH}/api/users`,
    login_user: `/${MICRO_AUTH}/api/sessions`,
    update_profile: `/${MICRO_AUTH}/api/profiles`,
    get_user_profile: `/${MICRO_AUTH}/api/profiles`,
  },
  PARKINGS_URLS:{
    get_all_parkings: `/${MICRO_PARKING}/api/parkings`,
    post_create_reservation: `/${MICRO_PARKING}/api/parkings/`,
    get_reservations_by_user: `/${MICRO_PARKING}/api/reservations`,
    get_details_parking: `/${MICRO_PARKING}/api/parkings`,
    patch_cancel_reservation: `/${MICRO_PARKING}/api/reservations`,
  }
});
