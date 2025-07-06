export type PayloadProps = {
    parkingId: string;
    spotId: string;
    floorNumber: number;
    carPlate: string;
    email: string;
};

export async function createReservation(payload: PayloadProps) {
    const response = await fetch(
        "https://spring-cloud-gateway-production-4db6.up.railway.app/ms-elastic-tfm/reservations",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        }
    )

    if (!response.ok) throw new Error("Error al crear la reserva")
    return response.json();
}