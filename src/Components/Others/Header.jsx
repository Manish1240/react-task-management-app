import React from 'react';

function Header(props) {
  const LogoutHandler = () => {
    props.changeuser('');
    localStorage.removeItem('LoggedInUser');
  };

  return (
    <div className="w-full flex flex-col sm:flex-row px-6 md:px-12 lg:px-16 py-6 md:py-8 lg:py-10 items-center sm:items-end justify-between bg-[#0F172A] shadow-lg rounded-b-lg">
      <h1 className="text-3xl md:text-4xl font-semibold text-white text-center sm:text-left">
        Hello, <br className="sm:hidden" /> {props.data?.name}
      </h1>
      <button
        onClick={LogoutHandler}
        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg md:text-xl py-3 px-8 rounded-full mt-4 sm:mt-0 shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-blue-700"
      >
        Log out
      </button>
    </div>
  );
}

export default Header;

