import { NavLink } from "@/src/06_entities/nav-link";
import { useGetUser } from "@/src/07_shared/lib/hooks/auth";
import { usePathname } from "next/navigation";

type LinkProps = {
  isMobile: boolean;
  handleLogout?: () => void;
};

export const AuthLinks = ({ isMobile, handleLogout }: LinkProps) => {
  const pathname = usePathname();

  const isSelected = (path: string) => (pathname === path ? true : false);
  const { data: userData } = useGetUser();

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
      <NavLink
        isSelected={isSelected("/contact")}
        isMobile={isMobile}
        href="/contact"
      >
        Contact Support Team
      </NavLink>
      {userData?.is_staff && (
        <NavLink
          isSelected={isSelected("/admin")}
          isMobile={isMobile}
          href="/admin"
        >
          Admin
        </NavLink>
      )}
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
      <NavLink
        isSelected={isSelected("/contact")}
        isMobile={isMobile}
        href="/contact"
      >
        Contact Support Team
      </NavLink>
    </>
  );
};
