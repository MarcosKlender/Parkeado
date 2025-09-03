import { useQuery } from "@tanstack/react-query";
import { ParkingsServices } from "@/services/dashboard/fetch-parkings.services";

/**
 * Custom hook for fetching reservation by user data.
 * @returns A React Query object containing reservation data and status.
 */
export function useReservation(email: string) {
  return useQuery({
    queryKey: ["reservations-by-user"],
    queryFn: () => ParkingsServices.getReservationByUser(email),
  });
}
