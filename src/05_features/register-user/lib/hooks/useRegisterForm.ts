import { useForm, SubmitHandler } from "react-hook-form";

import { useRegisterUser } from "@/src/07_shared/lib/hooks/auth/useRegisterUser";
import { IUser } from "@/src/07_shared/models";

import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { toast } from "react-toastify";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const userSchema = zod.object({
  first_name: zod.string().min(1, "First name is required"),
  last_name: zod.string().min(1, "Last name is required"),
  email: zod.string().email("Invalid email address"),
  password: zod.string().min(6, "Password must be at least 6 characters long"),
  re_password: zod
    .string()
    .min(6, "Password must be at least 6 characters long"),
});

export const useRegisterForm = (router: AppRouterInstance) => {
  const registerUser = useRegisterUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<IUser> = (data) => {
    registerUser.mutate(data, {
      onSuccess: () => {
        toast.success("Please check email to verify account");
        router.push("/auth/login");
      },
      onError: () => {
        toast.error("Failed to register account");
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
