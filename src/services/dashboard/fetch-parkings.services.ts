import { ENDPOINTS } from "../enpoints";
import { HttpRequest } from "../httpRequest";


export const ParkingsServices = {
  getAllParkings: async () => {
    const resp = await HttpRequest.get(
      ENDPOINTS.PARKINGS_URLS.get_all_parkings
    )
    console.log("Fetched parkings:", resp);
    if(resp.status === 200){
      return resp.data?.parkings;
    }
    return resp;
  },
  createReservation: async (body:any) => {
    const resp = await HttpRequest.post(
      ENDPOINTS.PARKINGS_URLS.post_create_reservation,
      body
    )
    return resp;
  }
}
