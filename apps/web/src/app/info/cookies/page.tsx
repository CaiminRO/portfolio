"use client";

export default function CookieInfoPage() {

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-2">Privacy & Analytics Information</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What gets tracked</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-200">
          <li>Page Visits: Understanding which pages are most popular.</li>
          <li>User Interactions: Tracking clicks, navigation patterns, and time spent on pages.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why it gets tracked</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-200">
          <li>User Interactions: Tracking clicks, navigation patterns, and time spent on pages.</li>
          <li>Performance Monitoring: Ensuring the site runs smoothly and efficiently.</li>
        </ul>
      </section>

      <section className="mb-8">
        Data is anonymized and does not personally identify you.
      </section>

      <section className="mb-8">
        You can choose to disable cookies and tracking at any time through your browser settings.
      </section>
    </div>
  );
}
