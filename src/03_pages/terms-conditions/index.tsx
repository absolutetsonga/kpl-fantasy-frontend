import Link from "next/link";

export const TermsConditionsPage = () => {
  return (
    <div className="relative overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-0">
      <div className="mx-auto max-w-2xl">
        <p className="text-base font-semibold text-indigo-600">
          Last updated: February 1, 2024
        </p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
          Privacy policy
        </h1>

        <div className="mt-16">
          <div className="text-base text-gray-700">
            <p className="mt-6">
              Welcome to KPL Fantasy (&apos;us&apos;, &apos;we&apos;, or
              &apos;our&apos;). KPL Fantasy offers services under these terms
              and conditions. By accessing or using our site, you agree to be
              bound by these terms.
            </p>

            <h2 className="mt-16 text-2xl font-bold text-gray-900">
              General Terms
            </h2>
            <p className="mt-6">
              Use of Our Service: By accessing our services, you confirm your
              agreement to our digital-only product policy. We&apos;re not
              liable for any indirect damages arising from your use or inability
              to use our site. We may change policies at any time and will
              notify you of significant changes through email.
            </p>

            <h2 className="mt-16 text-2xl font-bold text-gray-900">
              User Account
            </h2>
            <p className="mt-6">
              Account Responsibility: For some services, an account is required.
              Keep your account details confidential. Providing false
              information may lead to account termination.
            </p>

            <h2 className="mt-16 text-2xl font-bold text-gray-900">
              Use and processing of collected information
            </h2>
            <p className="mt-6">
              Digital Product Delivery: All our products are 100% digital and
              delivered electronically. They can be accessed on your account
              page. We aren&apos;t responsible for delays outside our control.
            </p>

            <h2 className="mt-16 text-2xl font-bold text-gray-900">
              Third-Party Links
            </h2>
            <p className="mt-6">
              External Sites: Our website might have links to third-party sites.
              We aren&apos;t responsible for their content or practices. Please
              review their terms.
            </p>

            <h2 className="mt-16 text-2xl font-bold text-gray-900">
              Product Availability and Errors
            </h2>
            <p className="mt-6">
              Information Accuracy: We try to provide up-to-date information
              about our 100% digital products but errors in pricing and
              availability may occur. We reserve the right to correct any errors
              without liability.
            </p>

            <h2 className="mt-16 text-2xl font-bold text-gray-900">
              Data Rights
            </h2>
            <p className="mt-6">
              Data Modification and Deletion: For details on how we handle data
              modification, deletion, and protect your privacy, please refer to
              our{" "}
              <Link
                href="/privacy-policy"
                className="text-base font-semibold text-indigo-600"
              >
                Privacy Policy
              </Link>
              .
            </p>

            <h2 className="mt-16 text-2xl font-bold text-gray-900">
              Contact Information
            </h2>
            <p className="mt-6">
              Queries: If you have questions about these terms, contact us via
              contact support team, email at maintsonga@gmail.com or by{"  "}
              <Link
                href="https://t.me/kpl_fantasy"
                className="text-base font-semibold text-indigo-600"
              >
                group
              </Link>{" "}
              in Telegram .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
