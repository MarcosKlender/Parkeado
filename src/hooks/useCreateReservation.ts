import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PayloadProps } from "@/config/create-reservation";
import { ParkingsServices } from "@/services/dashboard/fetch-parkings.services";

/**
 * Custom hook for creating a reservation.
 *
 * - Executes the reservation request.
 * - Invalidates "parkings" query on success.
 *
 * @returns A React Query mutation object (`mutate`, `mutateAsync`, `isPending`, `isSuccess`, `isError`, `error`).
 */
export function useCreateReservation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["createReservation"],
    mutationFn: (payload: PayloadProps) => ParkingsServices.createReservation(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["parkings"] });
    },
  });
}
