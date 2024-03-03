"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const Accordion = () => {
  const sections = [
    {
      id: 1,
      title: "Выбор вашего первоначального состава",
      content: (
        <>
          Flowbite is an open-source library of interactive components built on
          top of Tailwind CSS including buttons, dropdowns, modals, navbars, and
          more. Check out this guide to learn how to{" "}
          <a
            href="/docs/getting-started/introduction/"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            get started
          </a>{" "}
          and start developing websites even faster with components on top of
          Tailwind CSS.
        </>
      ),
    },
    {
      id: 2,
      title: "Is there a Figma file available?",
      content: (
        <>
          Flowbite is first conceptualized and designed using the Figma software
          so everything you see in the library has a design equivalent in our
          Figma file. Check out the{" "}
          <a
            href="https://flowbite.com/figma/"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Figma design system
          </a>{" "}
          based on the utility classes from Tailwind CSS and components from
          Flowbite.
        </>
      ),
    },
    {
      id: 3,
      title: "What are the differences between Flowbite and Tailwind UI?",
      content: (
        <>
          The main difference is that the core components from Flowbite are open
          source under the MIT license, whereas Tailwind UI is a paid product.
          Learn more about these technologies:{" "}
          <a
            href="https://flowbite.com/pro/"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Flowbite Pro
          </a>
          ,{" "}
          <a
            href="https://tailwindui.com/"
            rel="nofollow"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Tailwind UI
          </a>
          .
        </>
      ),
    },
  ];

  const [openSection, setOpenSection] = useState<number>(1);

  const toggleSection = (sectionId: number) => {
    setOpenSection(openSection === sectionId ? 0 : sectionId);
  };

  return (
    <div className="w-full lg:max-w-6xl divide-y divide-blue-400 dark:divide-blue-700 px-4">
      {sections.map(({ id, title, content }) => (
        <div key={id} className="w-full">
          <h2>
            <button
              className="flex items-center justify-between w-full py-5 font-medium text-left text-black"
              onClick={() => toggleSection(id)}
            >
              <span>{title}</span>
              <FiChevronDown
                className={`w-5 h-5 transform transition-transform ${
                  openSection === id ? "rotate-180" : ""
                }`}
              />
            </button>
          </h2>
          <div className={`${openSection === id ? "block" : "hidden"} py-5`}>
            <p className="mb-2 text-black">{content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
