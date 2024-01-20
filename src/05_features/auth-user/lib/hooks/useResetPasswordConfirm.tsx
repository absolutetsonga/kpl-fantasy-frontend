import { useForm, SubmitHandler } from "react-hook-form";
import { useResetPasswordConfirmUser } from "@/src/07_shared/lib/hooks/auth/";

import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { toast } from "react-toastify";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type IConfirmPassword = {
  uid: string;
  token: string;
  password: string;
  re_password: string;
};

const userSchema = zod.object({
  password: zod.string().min(6, "Password must be at least 6 characters long"),
  re_password: zod
    .string()
    .min(6, "Password must be at least 6 characters long"),
});

export const useResetPasswordConfirm = ({
  uid,
  token,
  router,
}: {
  uid: string;
  token: string;
  router: AppRouterInstance;
}) => {
  const confirmUser = useResetPasswordConfirmUser({ uid, token });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IConfirmPassword>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<IConfirmPassword> = (data) => {
    confirmUser.mutate(data, {
      onSuccess: async () => {
        toast.success("Password confirmed and changed successfully");
        router.push("/login");
      },
      onError: (error) => {
        console.error(error);
        toast.error("Failed to confirm and change the password");
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
    status: confirmUser.status,
  };
};
``;
