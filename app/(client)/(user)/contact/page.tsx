import Container from "@/components/Container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const ContactPage = () => {
  return (
    <Container className="max-w-3xl px-8 py-12 bg-white rounded-2xl shadow-2xl">
      <h1 className="text-4xl font-extrabold text-center text-darkColor mb-6">
        Get in Touch
      </h1>
      <p className="text-lg text-gray-500 text-center mb-10">
        We’d love to hear from you! Whether you have questions or just want to say hi, fill out the form, and we’ll respond promptly.
      </p>
      <form className="space-y-8">
        <div className="space-y-2">
          <Label
            htmlFor="name"
            className="text-lg font-semibold text-gray-800"
          >
            Your Name
          </Label>
          <Input
            type="text"
            name="name"
            placeholder="Enter your full name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="text-lg font-semibold text-gray-800"
          >
            Your Email
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="message"
            className="text-lg font-semibold text-gray-800"
          >
            Your Message
          </Label>
          <Textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Type your message here..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-gray-600 to-gray-400 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:from-gray-700 hover:to-gray-500 hover:shadow-lg transition-transform transform"
        >
          Send Message
        </button>
      </form>
    </Container>
  );
};

export default ContactPage;
