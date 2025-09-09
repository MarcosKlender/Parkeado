import { ENDPOINTS } from "../enpoints";
import { HttpRequest } from "../httpRequest";

export interface CancelReservationType{
  id: string;
  parkingId: string;
  spotId: string;
  floorNumber: number;
}

export const ParkingsServices = {
  getAllParkings: async () => {
    const resp = await HttpRequest.get(
      ENDPOINTS.PARKINGS_URLS.get_all_parkings
    )
    if(resp.status === 200){
      return resp.data?.parkings;
    }
    return resp;
  },
  getReservationByUser: async (email: string) => {
    const resp = await HttpRequest.get(
      `${ENDPOINTS.PARKINGS_URLS.get_reservations_by_user}/${email}`
    )
    if(resp.status === 200){
      return resp.data?.reservations;
    }
    return resp;
  },
  createReservation: async (body:any) => {
    const resp = await HttpRequest.post(
      `${ENDPOINTS.PARKINGS_URLS.post_create_reservation}/${body?.parkingId}/reservations`,
      body
    )
    return resp;
  },
  getDetailsParking: async (id: string) => {
    const resp = await HttpRequest.get(
      `${ENDPOINTS.PARKINGS_URLS.get_details_parking}/${id}?floorNumber=1`
    )
    if(resp.status === 200){
      return resp;
    }
    return resp;
  },
  cancelReservation: async (body:CancelReservationType) => {
    const {id, parkingId, spotId, floorNumber} = body;
    const resp = await HttpRequest.patch(
      `${ENDPOINTS.PARKINGS_URLS.patch_cancel_reservation}/${id}`,
      { parkingId, spotId, floorNumber }
    )
    if(resp.status === 200){
      return resp.data;
    }
    return resp;
  }
}
