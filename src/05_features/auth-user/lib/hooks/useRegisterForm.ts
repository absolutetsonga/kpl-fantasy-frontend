import { useForm, SubmitHandler } from "react-hook-form";

import { useRegisterUser } from "@/src/07_shared/lib/hooks/auth";
import { IUser } from "@/src/07_shared/models";

import { zodResolver } from "@hookform/resolvers/zod";
import { registerUserSchema } from "@/src/07_shared/lib/schemas";
import { toast } from "react-toastify";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const useRegisterForm = (router: AppRouterInstance) => {
  const registerUser = useRegisterUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: zodResolver(registerUserSchema),
  });

  const onSubmit: SubmitHandler<IUser> = (data) => {
    registerUser.mutate(data, {
      onSuccess: () => {
        toast.success(
          "Пожалуйста, проверьте вашу почту для подтверждения аккаунта"
        );
        router.push("/auth/login");
      },
      onError: () => {
        toast.error(
          "Не удалось зарегистрироваться, попробуйте еще раз или напишите в Службу Поддержки"
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
    status: registerUser.status,
  };
};
