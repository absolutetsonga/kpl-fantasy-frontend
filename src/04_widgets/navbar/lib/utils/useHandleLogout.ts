import { useLogoutUser } from "@/src/07_shared/lib/hooks/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useSetAtom } from "jotai";
import { isAuthenticatedAtom } from "@/src/07_shared/lib/store";

export const useHandleLogout = () => {
  const logoutUser = useLogoutUser();
  const router = useRouter();
  const setIsAuthenticated = useSetAtom(isAuthenticatedAtom);

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
