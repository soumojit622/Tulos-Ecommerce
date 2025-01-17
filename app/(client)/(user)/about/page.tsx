import Container from "@/components/Container";
import React from "react";

const AboutPage = () => {
  return (
    <Container className="max-w-6xl lg:px-8 py-12 space-y-12">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-gray-800">
          About TULOS
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Empowering businesses through innovative technology and transformative digital solutions.
        </p>
      </div>

      {/* Introduction */}
      <div className="space-y-6">
        <p className="text-lg text-gray-700 leading-relaxed">
          TULOS is a cutting-edge technology company founded in 2024, dedicated to revolutionizing
          the way modern businesses operate. With a passion for innovation and a commitment to
          excellence, we have established ourselves as a trusted partner for digital transformation
          and software development.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our mission is to help businesses navigate the complexities of the digital age by
          delivering tailored solutions that enhance efficiency, streamline operations, and drive
          growth. Whether you&apos;re a startup or an enterprise, we are here to help you succeed in an
          ever-changing technological landscape.
        </p>
      </div>

      {/* Vision and Mission */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Our Vision & Mission
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li>
            <strong>Vision:</strong> To empower businesses globally by leveraging the latest
            technological advancements and delivering unparalleled value.
          </li>
          <li>
            <strong>Mission:</strong> To create custom, scalable, and user-friendly solutions that
            transform business operations and improve lives through technology.
          </li>
        </ul>
      </div>

      {/* Core Values */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-2xl font-semibold text-blue-600">
              Innovation
            </h3>
            <p className="text-gray-600 mt-4">
              We embrace creativity and innovation to provide cutting-edge solutions.
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-2xl font-semibold text-green-600">
              Excellence
            </h3>
            <p className="text-gray-600 mt-4">
              We strive for excellence in every project we undertake, ensuring the highest quality
              outcomes.
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-2xl font-semibold text-gray-600">
              Integrity
            </h3>
            <p className="text-gray-600 mt-4">
              We uphold transparency and honesty in all our business practices.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Meet Our Team
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Our team is composed of visionary leaders, skilled developers, creative designers, and
          strategic thinkers. Together, we bring a diverse range of expertise to deliver
          transformative solutions for our clients.
        </p>
      </div>

      {/* Call to Action */}
      <div className="bg-darkColor text-white p-8 rounded-lg text-center shadow-lg">
        <h3 className="text-3xl font-bold mb-4">
          Ready to Transform Your Business?
        </h3>
        <p className="text-lg mb-6">
          Partner with TULOS to unlock the potential of technology and take your business to the
          next level.
        </p>
        <button className="bg-white text-darkColor font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
          Contact Us
        </button>
      </div>
    </Container>
  );
};

export default AboutPage;
