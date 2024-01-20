import { useLogoutUser } from "@/src/07_shared/lib/hooks/auth";
import { toast } from "react-toastify";
import { useSetAtom } from "jotai";
import { isAuthenticatedAtom } from "@/src/07_shared/lib/store";

export const useHandleLogout = ({ router }: any) => {
  const logoutUser = useLogoutUser();
  const setIsAuthenticated = useSetAtom(isAuthenticatedAtom);

  const handleLogout = () => {
    logoutUser.mutate(undefined, {
      onSuccess: () => {
        toast.success("Successfully logged out");
        setIsAuthenticated(false);
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
