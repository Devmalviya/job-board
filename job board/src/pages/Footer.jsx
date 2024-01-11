import React from "react";

function Footer() {
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex items-center justify-center">
          <span className="text-sm text-gray-500 text-center">
            © 2024
            <a href="#" className="hover:underline">
              . Dev.malviya
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
