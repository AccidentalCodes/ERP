import React from "react";

const Header = () => {
  return (
    <section>
      <header className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-slate-900">Projects</h2>
          {/* <a
            href="/new"
            className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
          >
            Add User
          </a> */}
          <button
            type="button"
            class="py-2 px-4 bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  border-radius: 1.5rem;  rounded-lg"
           
          >
            Add User
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
