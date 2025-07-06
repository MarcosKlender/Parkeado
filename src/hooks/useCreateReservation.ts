import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createReservation, PayloadProps } from "@/lib/create-reservation"

export function useCreateReservation() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: PayloadProps) => createReservation(payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['parkings'] })
        }
    })
}