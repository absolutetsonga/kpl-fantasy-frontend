import { useLogoutUser } from "@/src/07_shared/lib/hooks/auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { toast } from "react-toastify";
``
export const useHandleLogout = (router: AppRouterInstance) => {
  const logoutUser = useLogoutUser();

  const handleLogout = () => {
    logoutUser.mutateAsync(undefined, {
      onSuccess: () => {
        return toast.success("Вы вышли с аккаунта");
      },

      onError: () => {
        return toast.error("Не удалось войти в аккаунт. Попробуйте еще раз");
      },

      onSettled: () => {
        return router.push('/auth/login')
      }
    });
  };

  return handleLogout;
};
