import { useForm, SubmitHandler } from "react-hook-form";
import { useResetPasswordUser } from "@/src/07_shared/lib/hooks/auth/";

import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "react-toastify";
import { resetPasswordRequestUserSchema } from "@/src/07_shared/lib/schemas";

export const useResetPasswordRequestForm = () => {
  const resetPassword = useResetPasswordUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>({
    resolver: zodResolver(resetPasswordRequestUserSchema),
  });

  const onSubmit: SubmitHandler<{ email: string }> = (data) => {
    resetPassword.mutate(data.email, {
      onSuccess: async () => {
        toast.success("Request sent, check your email for reset link");
      },
      onError: () => {
        toast.error("Failed to send request");
      },
    });
  };

  const onInvalid = () => console.error(errors);

  return {
    register,
    handleSubmit,
    onSubmit,
    onInvalid,
    errors,
    status: resetPassword.status,
  };
};
