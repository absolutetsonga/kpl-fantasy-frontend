import { useForm, SubmitHandler } from "react-hook-form";

import { useLoginUser } from "@/src/07_shared/lib/hooks/auth/";
import { IUser } from "@/src/07_shared/models";

import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { toast } from "react-toastify";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { useReAuth } from "@/src/07_shared/lib/hooks/auth/useReAuth";
import { BASE_URL } from "@/src/07_shared/lib/constants";

import Cookies from "js-cookie";
import { useSetAtom } from "jotai";
import { isAuthenticatedAtom } from "@/src/07_shared/lib/store";

const userSchema = zod.object({
  email: zod.string().email("Invalid email address"),
  password: zod.string().min(6, "Password must be at least 6 characters long"),
});

export const useLoginForm = (router: AppRouterInstance) => {
  const loginUser = useLoginUser();
  const setIsAuthenticated = useSetAtom(isAuthenticatedAtom);
  const reAuth = useReAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<IUser> = (data) => {
    loginUser.mutate(data, {
      onSuccess: async (resData) => {
        toast.success("Successfully logged in");

        setIsAuthenticated(true);

        Cookies.set("access", resData.access);
        Cookies.set("refresh", resData.refresh);

        await reAuth({
          url: `${BASE_URL}users/me/`,
          method: "GET",
        });

        router.push("/dashboard");
      },
      onError: () => {
        toast.error("Failed to log in");
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
