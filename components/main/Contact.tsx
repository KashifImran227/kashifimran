import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    if (form.current) {
      try {
        await emailjs.sendForm(
          "service_oadb8fe", // Replace with your actual service ID
          "template_jcsjill", // Replace with your actual template ID
          form.current,
          "kashif.imran227@gmail.com" // Replace with your actual public key
        );
        setStatusMessage("Message sent successfully!");
      } catch (error) {
        setStatusMessage("Failed to send message. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br to-gray-800 p-10 ">
      <h1 className="text-purple-200 text-3xl font-light mb-6 text-center">
        CONTACT ME
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col space-y-4 p-5 bg-[#350d35] rounded-lg shadow-md w-full max-w-lg mx-auto"
      >
        <label htmlFor="user_name" className="text-white text-sm md:text-base">
          Name
        </label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          required
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="user_email" className="text-white text-sm md:text-base">
          Email
        </label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          required
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="message" className="text-white text-sm md:text-base">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          required
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        ></textarea>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`text-white p-2 rounded transition duration-300 ${
            isSubmitting
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#0a010a9f] hover:bg-blue-600"
          }`}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
      {statusMessage && (
        <p
          className={`text-white mt-4 text-sm ${
            statusMessage.includes("successfully")
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {statusMessage}
        </p>
      )}
      <div className="text-white h-auto mb-10 border-collapse bg-[#3a103a9f] items-center w-full mt-6">
        <marquee behavior="scroll" direction="left">
          Thanks for considering me as your future partner
        </marquee>
      </div>
    </div>
  );
};

export default ContactUs;
