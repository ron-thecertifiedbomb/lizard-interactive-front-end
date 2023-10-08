import React from "react";
import navbar from "./navbarstyle.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../logo/logo";

const Navbar = () => {

  const pathname = usePathname();
  
  const navLinks = [
    {
      title: "Home",
      url: "/home",
    },
    {
      title: "Privacy Policy",
      url: "/privacypolicy",
    },
    {
      title: "FAQs",
      url: "/faqs",
    },
    {
      title: "Terms and Condition",
      url: "/termsandcondition",
    },
    {
      title: "Contact Us",
      url: "/contactus",
    },
  ];

  return (
    <div className={navbar.container}>
      <div><Logo /></div>
      <div className={navbar.wrapper}>
        {navLinks.map((link, index) => (
          <p key={index}>
            <Link
          key={index}
          href={link.url}
          className={`link ${pathname === link.url ? navbar.active : ''}`}
        >
          {link.title}
        </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
