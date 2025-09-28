import { toast } from "sonner";

export const notify = {
  loginOk(user?: string) {
    toast.success(user ? `Bienvenido, ${user}` : "Sesión iniciada", {
      duration: 6000,
    });
  },
  invalidToken() {
    toast.error("Token inválido. Vuelve a iniciar sesión.", {
      duration: 6000,
    });
  },
  aboutToExpire(seconds: number) {
    toast.warning(
      `Tu sesión vencerá en ${seconds} segundos. Guarda tus cambios.`,
      { duration: 6000 }
    );
  },
  expired() {
    toast.error("Tu sesión ha vencido. Inicia sesión nuevamente.", {
      duration: 6000,
    });
  },
  loggedOut() {
    toast.info("Cerraste sesión correctamente.", {
      duration: 6000,
    });
  },
  authError() {
    toast.error("No pudimos validar tu sesión. Vuelve a iniciar sesión.", {
      duration: 6000,
    });
  },
};