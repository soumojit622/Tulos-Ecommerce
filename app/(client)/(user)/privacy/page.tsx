import Container from "@/components/Container";
import React from "react";

const PrivacyPage = () => {
  return (
    <Container className="max-w-3xl px-6 sm:px-8 lg:px-12 py-12 bg-gray-50 rounded-xl shadow-xl">
      <h1 className="text-4xl font-extrabold text-darkColor text-center mb-8">
        Privacy Policy
      </h1>
      <p className="text-gray-600 text-center mb-12">
        Your privacy is important to us. Please read this Privacy Policy to
        understand how we collect, use, and protect your personal information.
      </p>
      <div className="space-y-8">
        <section className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Information Collection
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We collect information you provide directly to us when using our
            services, as well as information about your use of our services.
          </p>
        </section>
        <section className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Use of Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We use the information we collect to provide, maintain, and improve
            our services, as well as to communicate with you.
          </p>
        </section>
        <section className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Information Sharing
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We do not share your personal information with third parties except
            as described in this Privacy Policy or with your consent.
          </p>
        </section>
        <section className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We take reasonable measures to help protect your personal
            information from loss, theft, misuse, and unauthorized access.
          </p>
        </section>
        <section className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Your Rights
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You have the right to access, correct, or delete your personal
            information. Please contact us for assistance with these requests.
          </p>
        </section>
      </div>
    </Container>
  );
};

export default PrivacyPage;
