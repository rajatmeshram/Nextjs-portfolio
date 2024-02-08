import React from 'react'
import Link from "next/link";

function NavLink({title,href}) {
  return (
    <Link
    href={href}
    className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:bg-transparent  md:p-0 hover:text-white "
      aria-current="page"
    >
    {title}
    </Link>
  )
}

export default NavLink
