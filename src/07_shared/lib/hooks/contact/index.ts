import { useMutation } from "@tanstack/react-query";
import { contact_service } from "@/src/07_shared/api/services";

export function useCreateContactMessage() {
  return useMutation({
    mutationFn: async (data: any) => await contact_service.createContact(data),
  });
}
