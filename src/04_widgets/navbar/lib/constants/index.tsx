import { NavLink } from "@/src/06_entities/nav-link";
import { usePathname } from "next/navigation";
import { useHandleLogout } from "../utils/useHandleLogout";

type LinkProps = {
  isMobile: boolean;
  router: any;
};

export const AuthLinks = ({ isMobile, router }: LinkProps) => {
  const pathname = usePathname();
  const handleLogout = useHandleLogout({ router });

  const isSelected = (path: string) => (pathname === path ? true : false);

  return (
    <>
      <NavLink
        isSelected={isSelected("/draft")}
        isMobile={isMobile}
        href="/draft"
      >
        Draft
      </NavLink>
      <NavLink isMobile={isMobile} onClick={handleLogout}>
        Logout
      </NavLink>
    </>
  );
};

export const GuestLinks = ({ isMobile }: LinkProps) => {
  const pathname = usePathname();

  const isSelected = (path: string) => (pathname === path ? true : false);

  return (
    <>
      <NavLink
        isSelected={isSelected("/auth/login")}
        isMobile={isMobile}
        href="/auth/login"
      >
        Login
      </NavLink>
      <NavLink
        isSelected={isSelected("/auth/register")}
        isMobile={isMobile}
        href="/auth/register"
      >
        Register
      </NavLink>
    </>
  );
};
