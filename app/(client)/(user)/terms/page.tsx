import Container from "@/components/Container";
import React from "react";

const TermsPage = () => {
  return (
    <Container className="max-w-3xl px-6 sm:px-8 lg:px-12 py-12 bg-gray-50 rounded-xl shadow-xl">
      <h1 className="text-4xl font-extrabold text-darkColor text-center mb-8">
        Terms and Conditions
      </h1>
      <p className="text-gray-600 text-center mb-12">
        Please read these Terms and Conditions carefully before using our services.
      </p>
      <div className="space-y-8">
        <section className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing and using TULOS&apos;s services, you agree to be bound by these Terms and Conditions.
          </p>
        </section>
        <section className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Use of Services
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You agree to use TULOS&apos;s services only for lawful purposes and in accordance with these Terms and Conditions.
          </p>
        </section>
        <section className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Intellectual Property
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All content and materials available on TULOS&apos;s services are the property of TULOS and are protected by applicable intellectual property laws.
          </p>
        </section>
        <section className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            TULOS shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
          </p>
        </section>
        <section className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Governing Law
          </h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which TULOS operates.
          </p>
        </section>
      </div>
    </Container>
  );
};

export default TermsPage;
