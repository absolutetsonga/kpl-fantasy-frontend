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
        toast.success(
          "Сообщение для сброса пароля отправлено, проверьте свою почту"
        );
      },
      onError: () => {
        toast.error(
          "Не удалось отправить сообщение для сброса пароля, попробуйте еще раз или напишите в Службу Поддержки"
        );
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
