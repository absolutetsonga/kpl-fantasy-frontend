import { PageContainer } from "@/src/07_shared/ui";

export function PrivacyPolicyPage() {
  return (
    <PageContainer>
      <div className="mx-auto max-w-2xl">
        <p className="text-base font-semibold text-indigo-600">
          Last updated on February 1, 2024
        </p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
          Privacy policy
        </h1>

        <div className="mt-16">
          <div className="text-base text-gray-700">
            <p className="mt-6">
              This privacy policy (&quot;Policy&quot;) describes how KPL Fantasy
              (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;) collects,
              protects and uses the personally identifiable information
              (&quot;Personal Information&quot;) you (&quot;User&quot;,
              &quot;you&quot; or &quot;your&quot;) may provide through the KPL
              Fantasy website (kpl-fantasy.com) or in the course of using KPL
              Fantasy services (collectively, &quot;Website&quot;). The Policy
              also describes the choices available to you regarding our use of
              your Personal Information. This Policy does not apply to the
              practices of companies that we do not own or control, or to
              individuals that we do not employ or manage.
            </p>

            <h2 className="mt-16 text-2xl font-bold text-gray-900">
              Collection of personal information
            </h2>
            <p className="mt-6">
              We receive and store your email address, first and last names,
              which is required for you to be able to register to the Website
              and access our services.
            </p>

            <h2 className="mt-16 text-2xl font-bold text-gray-900">
              Collection of non-personal information
            </h2>
            <p className="mt-6">
              When you visit the Website our servers automatically record
              information that your browser sends. This data may include
              information such as your device&apos;s IP address, browser type
              and version, operating system type and version, language
              preferences, and pages of our Website that you visit.
            </p>

            <h2 className="mt-16 text-2xl font-bold text-gray-900">
              Use and processing of collected information
            </h2>
            <p className="mt-6">
              Any of the information we collect from you may be used to
              personalize your experience; improve our Website; improve customer
              service; send notification emails such as password resetings or
              email confirmations. Non-Personal Information collected is used
              only to identify potential cases of abuse and establish
              statistical information regarding Website usage. This statistical
              information is not otherwise aggregated in such a way that would
              identify any particular user of the system.
            </p>

            <h2 className="mt-16 text-2xl font-bold text-gray-900">Cookies</h2>
            <p className="mt-6">
              The Website uses &quot;cookies&quot; to help personalize your
              online experience. A cookie is a text file that is placed on your
              hard disk by a web page server. Cookies cannot be used to run
              programs or deliver viruses to your computer. Cookies are uniquely
              assigned to you, and can only be read by a web server in the
              domain that issued the cookie to you. We may use cookies to
              collect, store, and track information for authentication purposes
              (storing tokens) to operate our Website. Most web browsers
              automatically accept cookies, but you can usually modify your
              browser setting to decline cookies if you prefer.
            </p>

            <h2 className="mt-16 text-2xl font-bold text-gray-900">
              Managing personal information
            </h2>
            <p className="mt-6">
              You may request that we delete your email address, but this will
              prevent you from accessing the services you have used from KPL
              Fantasy.
            </p>

            <h2 className="mt-16 text-2xl font-bold text-gray-900">
              Contacting us
            </h2>
            <p className="mt-6">
              If you have any questions about this Policy, please contact us by
              email at maintsonga@gmail.com.
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
