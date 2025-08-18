import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createReservation, PayloadProps } from "@/config/create-reservation";

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
    mutationFn: (payload: PayloadProps) => createReservation(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["parkings"] });
    },
  });
}
