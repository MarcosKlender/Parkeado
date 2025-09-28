import { useMutation } from "@tanstack/react-query";
import { AuthServices, UpdateUserPayload } from "@/services/auth/fetch-user.services";


export function useUpdateUser() {
  return useMutation({
    mutationFn: (payload: UpdateUserPayload) => AuthServices.updateUserProfile(payload),
  });
}