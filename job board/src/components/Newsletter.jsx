import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";

function Newsletter() {
  return (
    <div>
      <div>
        <h3 className=" text-lg font-bold mb-2 flex items-center gap-2 ">
          <FaEnvelopeOpenText />
          Email me for Jobs
        </h3>
        <p className=" text-primary/75 text-base mb-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsa
          nesciunt recusandae consequuntur in ab blanditiis autem fugit maiores
          amet inventore, dignissimos velit.
        </p>
        <div className=" w-full space-y-4   ">
          <input
            type="email"
            name="email"
            placeholder="name@email.com"
            className=" w-full block py-2 pl-3 focus:outline-none"
          />
          <input
            type="submit"
            value={"Subscribe"}
            className=" w-full block py-2 pl-3 focus:outline-none bg-blue text-white cursor-pointer font-semibold"
          />
        </div>
      </div>

      {/* second part */}

      <div className=" mt-20">
        <h3 className=" text-lg font-bold mb-2 flex items-center gap-2 ">
          <FaRocket />
          Get me Notification
        </h3>
        <p className=" text-primary/75 text-base mb-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsa
          nesciunt recusandae consequuntur in ab blanditiis autem fugit maiores
          amet inventore, dignissimos velit.
        </p>
        <div className=" w-full space-y-4   ">
          <input
            type="submit"
            value={"Upload your resume"}
            className=" w-full block py-2 pl-3 focus:outline-none bg-blue text-white cursor-pointer font-semibold"
          />
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
