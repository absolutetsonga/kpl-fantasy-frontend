import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { UseMutationResult } from "@tanstack/react-query";
import { useSetAtom } from "jotai";
import { isAuthenticatedAtom, isLoadingAtom } from "@/src/07_shared/lib/store";

export default function useSocialAuth(
  authenticate: UseMutationResult<any, Error, any, unknown>,
  provider: string
) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const setIsAuthenticated = useSetAtom(isAuthenticatedAtom);
  const setIsLoading = useSetAtom(isLoadingAtom);

  useEffect(() => {
    const state = searchParams.get("state");
    const code = searchParams.get("code");

    if (state && code) {
      authenticate.mutate(
        { provider, state, code },
        {
          onSuccess: () => {
            toast.success("Logged In");
            setIsAuthenticated(true);
            setIsLoading(false);
          },
          onError: (err) => {
            console.log(err);
            toast.error("Failed to log in");
          },
          onSettled: () => {
            router.push("/draft");
          },
        }
      );
    }
  }, []);
}
