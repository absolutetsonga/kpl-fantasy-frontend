import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { isAuthenticatedAtom, isLoadingAtom } from "@/src/07_shared/lib/store";
import { Spinner } from "@/src/07_shared/ui";
import { toast } from "react-toastify";

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const isLoading = useAtom(isLoadingAtom);
  const isAuthenticated = useAtom(isAuthenticatedAtom);

  if (isLoading) {
    return (
      <div className="flex justify-center my-8">
        <Spinner lg />
      </div>
    );
  }

  if (isAuthenticated) {
    toast.error("Must be logged in");
    router.push("/auth/login");
  }

  return children;
};

export default RequireAuth;
