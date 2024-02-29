"use client";

import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { useAtom } from "jotai";
import { useRouter } from "next/navigation";

import { isAuthenticatedAtom } from "@/src/07_shared/lib/store";

import { AuthLinks, GuestLinks } from "../lib/constants";
import { useHandleLogout } from "../lib/utils/useHandleLogout";

export const Navbar = () => {
  const router = useRouter();

  const handleLogout = useHandleLogout(router);
  const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom);

  return (
    <Disclosure as="nav" className="bg-primary">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
              <Image
                src={"/images/kpl-fantasy-logo.svg"}
                width={60}
                height={60}
                alt={"KPL Fantasy Logo"}
              />
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {isAuthenticated ? (
                      <AuthLinks isMobile={false} handleLogout={handleLogout} />
                    ) : (
                      <GuestLinks isMobile={false} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {isAuthenticated ? (
                <AuthLinks isMobile={true} handleLogout={handleLogout} />
              ) : (
                <GuestLinks isMobile={true} />
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
