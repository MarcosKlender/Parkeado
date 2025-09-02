import { useQuery } from "@tanstack/react-query";
import { AuthServices } from "@/services/auth/fetch-user.services";

/**
 * Custom hook for fetching user data.
 * @returns A React Query object containing user data and status.
 */
export function useUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: AuthServices.getUserProfile,
  });
}
