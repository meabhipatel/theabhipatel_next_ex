import React from "react";

export const metadata = {
  title: "Login | Theabhipatel",
  description: "you can login into my website here.",
};

const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-[#2f2ce9] after:dark:via-[#ff0141] after:dark:opacity-90 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <h1 className="text-5xl font-semibold tracking-wider text-slate-100">
          TheAbhiPatel
        </h1>
      </div>
    </div>
  );
};

export default Login;
