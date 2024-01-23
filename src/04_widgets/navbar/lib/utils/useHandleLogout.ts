import { useLogoutUser } from "@/src/07_shared/lib/hooks/auth";
import { toast } from "react-toastify";
import { useSetAtom } from "jotai";
import { isAuthenticatedAtom } from "@/src/07_shared/lib/store";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const useHandleLogout = (router : AppRouterInstance) => {
  const logoutUser = useLogoutUser();
  const setIsAuthenticated = useSetAtom(isAuthenticatedAtom);

  const handleLogout = () => {
    logoutUser.mutate(undefined, {
      onSuccess: () => {
        toast.success("Successfully logged out");
        // setIsAuthenticated(false);
      },

      onError: () => {
        toast.error("Failed to log out");
      },

      onSettled: () => {
        router.push("/auth/login");
      },
    });
  };

  return handleLogout;
};
