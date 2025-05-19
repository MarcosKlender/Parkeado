import { useQuery } from "@tanstack/react-query";
import { fetchParkings } from "@/lib/fetch-parkings";

export function useParkings() {
    return useQuery({
        queryKey: ["parkings"],
        queryFn: fetchParkings
    })
}