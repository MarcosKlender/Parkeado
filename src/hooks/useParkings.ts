import { useQuery } from "@tanstack/react-query";
import { ParkingsServices } from "@/services/dashboard/fetch-parkings.services";

/**
 * Custom hook for fetching parking data.
 * @returns A React Query object containing parking data and status.
 */
export function useParkings() {
  return useQuery({
    queryKey: ["parkings"],
    queryFn: ParkingsServices.getAllParkings,
    refetchInterval: 5000, // Refetch every 5 seconds
  });
}
