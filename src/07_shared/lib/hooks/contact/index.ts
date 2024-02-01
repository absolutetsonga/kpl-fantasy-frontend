import { useMutation } from "@tanstack/react-query";
import { contact_service } from "@/src/07_shared/api/services";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

interface ApiErrorResponse {
  detail: string;
}

export function useCreateContactMessage() {
  return useMutation<any, AxiosError, any>({
    mutationFn: async (data: any) => await contact_service.createContact(data),
    onError: (error) => {
      toast.error(
        (error.response?.data as ApiErrorResponse).detail || "An error occurred"
      );
    },
  });
}
