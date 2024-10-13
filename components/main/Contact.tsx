import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "YOUR_SERVICE_ID", // Replace with your actual service ID
          "YOUR_TEMPLATE_ID", // Replace with your actual template ID
          form.current,
          "YOUR_PUBLIC_KEY" // Replace with your actual public key
        )
        .then(
          (result) => {
            alert("Message sent successfully!");
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            alert("Failed to send message. Please try again later.");
            console.error("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col space-y-4 p-5 bg-purple-800 rounded-lg shadow-md w-96"
    >
      <label htmlFor="user_name" className="text-white">
        Name
      </label>
      <input
        type="text"
        name="user_name"
        id="user_name"
        required
        className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label htmlFor="user_email" className="text-white">
        Email
      </label>
      <input
        type="email"
        name="user_email"
        id="user_email"
        required
        className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label htmlFor="message" className="text-white">
        Message
      </label>
      <textarea
        name="message"
        id="message"
        required
        className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition button"
      >
        Send
      </button>
    </form>
  );
};

export default ContactUs;
