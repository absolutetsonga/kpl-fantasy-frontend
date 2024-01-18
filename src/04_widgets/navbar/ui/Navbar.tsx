"use client";

import Image from "next/image";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

import { usePathname, useRouter } from "next/navigation";
import { useLogoutUser } from "@/src/07_shared/lib/hooks/auth";
import { useAtomValue, useSetAtom } from "jotai";

import { isAuthenticatedAtom } from "@/src/07_shared/lib/store";

import { NavLink } from "@/src/07_shared/ui";
import { toast } from "react-toastify";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  const logoutUser = useLogoutUser();
  const router = useRouter();

  const setIsAuthenticated = useSetAtom(isAuthenticatedAtom);

  const isSelected = (path: string) => (pathname === path ? true : false);

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

  const authLinks = (isMobile: boolean) => (
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

  const guestLinks = (isMobile: boolean) => (
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

  const isAuthenticated = useAtomValue(isAuthenticatedAtom);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {isAuthenticated ? authLinks(false) : guestLinks(false)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {isAuthenticated ? authLinks(true) : guestLinks(true)}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
