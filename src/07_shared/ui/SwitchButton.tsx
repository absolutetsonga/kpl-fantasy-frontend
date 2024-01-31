import { useAtom } from "jotai";

import { Switch } from "@headlessui/react";
import { hasAgreedAtom } from "../lib/store";

import Link from "next/link";

export const SwitchButton = () => {
  const [hasAgreed, setHasAgreed] = useAtom(hasAgreedAtom);
  
  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
      <div className="flex h-6 items-center">
        <Switch
          checked={hasAgreed}
          onChange={setHasAgreed}
          className={classNames(
            hasAgreed ? "bg-indigo-600" : "bg-gray-200",
            "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          )}
        >
          <span className="sr-only">Agree to policies</span>
          <span
            aria-hidden="true"
            className={classNames(
              hasAgreed ? "translate-x-3.5" : "translate-x-0",
              "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
            )}
          />
        </Switch>
      </div>

      <Switch.Label className="text-sm leading-6 text-gray-600">
        By selecting this, you agree to our{" "}
        <Link href="/privacy-policy" className="font-semibold text-indigo-600">
          privacy&nbsp;policy
        </Link>
        .
      </Switch.Label>
    </Switch.Group>
  );
};
