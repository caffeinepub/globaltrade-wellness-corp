import { useMutation } from "@tanstack/react-query";
import type { Division } from "../backend.d";
import { useActor } from "./useActor";

export function useSubmitContactForm() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      phone,
      subject,
      message,
    }: {
      name: string;
      email: string;
      phone: string;
      subject: Division;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitContactForm(name, email, phone, subject, message);
    },
  });
}
