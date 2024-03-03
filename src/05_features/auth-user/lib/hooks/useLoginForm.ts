import { useForm, SubmitHandler } from "react-hook-form";

import { useLoginUser } from "@/src/07_shared/lib/hooks/auth/";
import { useSetAtom } from "jotai";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { zodResolver } from "@hookform/resolvers/zod";

import { IUser } from "@/src/07_shared/models";
import { isAuthenticatedAtom, isLoadingAtom } from "@/src/07_shared/lib/store";

import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { loginUserSchema } from "@/src/07_shared/lib/schemas";

export const useLoginForm = (router: AppRouterInstance) => {
  const loginUser = useLoginUser();

  const setIsAuthenticated = useSetAtom(isAuthenticatedAtom);
  const setIsLoading = useSetAtom(isLoadingAtom);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: zodResolver(loginUserSchema),
  });

  const onSubmit: SubmitHandler<IUser> = (data) => {
    loginUser.mutate(data, {
      onSuccess: async (resData) => {
        toast.success("Вы успешно вошли в аккаунт");

        setIsAuthenticated(true);
        setIsLoading(false);

        Cookies.set("access", resData.access);
        Cookies.set("refresh", resData.refresh);

        router.push("/draft");
      },
      onError: (error) => {
        console.error(error);
        toast.error("Не удалось войти, попробуйте еще раз или напишите в Службу Поддержки");
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
    status: loginUser.status,
  };
};
``;
