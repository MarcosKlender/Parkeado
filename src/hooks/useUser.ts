import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "@/lib/user";

export function useUser() {
    return useQuery({
        queryKey: ["user"],
        queryFn: fetchUser
    })
}