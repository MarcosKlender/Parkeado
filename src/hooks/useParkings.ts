import { useQuery } from "@tanstack/react-query";
import { fetchParkings } from "@/config/fetch-parkings";
import { ParkingsServices } from "@/services/dashboard/fetch-parkings.services";

/**
 * Custom hook for fetching parking data.
 * @returns A React Query object containing parking data and status.
 */
export function useParkings() {
  return useQuery({
    queryKey: ["parkings"],
    queryFn: ParkingsServices.getAllParkings,
  });
}
