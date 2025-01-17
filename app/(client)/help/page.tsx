import React from "react";

const HelpPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 p-6 sm:p-12">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-8 sm:mb-10">
        Help & Support
      </h1>

      {/* Section: FAQ */}
      <section className="mb-16 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 sm:space-y-8">
          {[
            {
              question: "How do I create an account?",
              answer:
                "To create an account, click on the 'Login' button located at the top right corner of the screen. Follow the on-screen instructions to complete the registration process.",
            },
            {
              question: "How do I reset my password?",
              answer:
                "If you've forgotten your password, click the 'Forgot Password' link on the login page. Enter your email address, and you'll receive a link to reset your password.",
            },
            {
              question: "How do I contact customer support?",
              answer:
                "You can contact customer support via email at support@tulos.com or use the live chat option available in the bottom right corner of the app.",
            },
            {
              question: "What should I do if I encounter a bug or error?",
              answer:
                "If you encounter a bug or error, please report it to customer support through the live chat option or email us at support@tulos.com. Include any relevant details, such as error messages or steps to reproduce the issue.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
                {item.question}
              </h3>
              <p className="text-gray-600 text-base sm:text-lg">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Contact Information */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8">
          Contact Us
        </h2>
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
            Email:
          </h3>
          <p className="text-gray-600 mb-4">
            <a
              href="mailto:support@tulos.com"
              className="text-blue-600 hover:underline"
            >
              support@tulos.com
            </a>
          </p>

          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
            Phone:
          </h3>
          <p className="text-gray-600 mb-4">+91 958 648 597</p>

          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
            Address:
          </h3>
          <p className="text-gray-600">
            25 Park Street, 2nd Floor, Kolkata, West Bengal, 700016
          </p>
        </div>
      </section>
    </div>
  );
};

export default HelpPage;
