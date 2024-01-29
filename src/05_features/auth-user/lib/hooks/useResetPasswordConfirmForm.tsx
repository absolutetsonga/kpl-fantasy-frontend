import { useForm, SubmitHandler } from "react-hook-form";
import { useResetPasswordConfirmUser } from "@/src/07_shared/lib/hooks/auth/";

import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "react-toastify";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { resetPassowrdUserSchema } from "@/src/07_shared/lib/schemas";

type IConfirmPassword = {
  uid: string;
  token: string;
  password: string;
  re_password: string;
};

export const useResetPasswordConfirmForm = ({
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
    resolver: zodResolver(resetPassowrdUserSchema),
  });

  const onSubmit: SubmitHandler<IConfirmPassword> = (data) => {
    confirmUser.mutate(data, {
      onSuccess: async () => {
        toast.success("Password confirmed and changed successfully");
        router.push("/auth/login");
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
