import React, { useState } from "react";
import Button from "./Button";

const ContactForm = ({ footerStyle }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const renderInput = (field, type, placeholder, required = false) => (
    <div
      key={field}
      className="w-full flex-1 flex flex-col justify-start items-start gap-3"
    >
      <label
        htmlFor={field}
        className={`text-sm font-medium tracking-[-0.28px] ${
          footerStyle ? "text-black" : "text-white"
        }`}
      >
        {field === "name" ? "Your Name:" : "Email Address:"}{" "}
        {["name", "email"].includes(field) && (
          <span className="text-red-500">*</span>
        )}
      </label>
      <input
        type={type}
        name={field}
        id={field}
        value={formData[field]}
        onChange={handleInputChange}
        placeholder={`Enter your ${field} here`}
        className="text-xs font-medium tracking-[-0.24px] bg-[#cacdd1]/10 rounded-sm p-5 w-full text-white"
        required={required}
      />
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="mt-10">
      <div className="w-full flex flex-col sm:flex-row justify-center items-center mb-6 gap-6">
        {["name", "email"].map((field) =>
          renderInput(field, field === "email" ? "email" : "text", true)
        )}
      </div>
      <div className="flex flex-col justify-start items-start gap-3">
        <label
          htmlFor="message"
          className={`text-sm font-medium tracking-[-0.28px] ${
            footerStyle ? "text-black" : "text-white"
          }`}
        >
          Message:
        </label>
        <textarea
          name="message"
          id="message"
          rows={8}
          placeholder="Write your message here"
          className="text-xs font-medium tracking-[-0.24px] bg-[#cacdd1]/10 rounded-sm p-5 w-full text-white resize-none"
        ></textarea>
      </div>
      <Button type="submit" label="send message" style="mt-6" />
    </form>
  );
};

export default ContactForm;
