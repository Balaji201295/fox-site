import React from "react";
import { contacts } from "../constants";
const ContactDetails = ({ footerStyle }) => (
  <div>
    {contacts.map(({ icon, title, text }, index) => {
      const IconImg = icon;
      return (
        <div
          key={title}
          className={`flex justify-start items-center gap-4 ${
            index !== contacts.length - 1 ? "mb-10" : ""
          }`}
        >
          <IconImg color="#FE390C" fontSize={24} />
          <div>
            <h5
              className={`text-base tracking-[0.32px] mb-2 font-medium ${
                footerStyle ? "text-black" : "text-white"
              }`}
            >
              {title}
            </h5>
            <p className="text-sm text-gray tracking-[0.28px] font-medium">
              {text}
            </p>
          </div>
        </div>
      );
    })}
  </div>
);
export default ContactDetails;
