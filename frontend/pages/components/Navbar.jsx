import React from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const isIndexPage = router.pathname === "/";

  return (
    <nav className="bg-[#0B4EA2] p-5 flex justify-between">
      <img className="w-24" src="iims.PNG" alt="iims" />
      {isIndexPage && (
        <button className="hidden md:flex px-3 py-1 bg-white text-[#FF1493] rounded-md hover:bg-[#FF1493] hover:text-white">
          Sign Up
        </button>
      )}
    </nav>
  );
};

export default Navbar;
