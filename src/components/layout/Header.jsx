import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/templates", label: "Templates" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    checkScreenSize();
    handleScroll();

    const resizeHandler = () => {
      checkScreenSize();
      if (window.innerWidth >= 1024) setOpen(false);
    };

    window.addEventListener("resize", resizeHandler);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          // ? "bg-white/95 backdrop-blur-md shadow-md"
          ? "bg-transparent"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between relative">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Elite Cards Logo"
            className="h-8 w-auto"
          />
          <span
            className={`text-sm font-bold transition-colors ${
              scrolled ? "text-white" : "text-white"
            }`}
          >
            Elite
            <span
              className={`ml-1 ${
                scrolled ? "text-green-600" : "text-[var(--mango-green)]"
              }`}
            >
              Cards
            </span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        {isLargeScreen && (
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    scrolled
                      ? isActive
                        ? "text-green-600"
                        : "text-white hover:text-green-600"
                      : isActive
                      ? "text-[var(--mango-green)]"
                      : "text-white hover:text-[var(--mango-green)]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        )}

        {/* Mobile Menu Button */}
        {!isLargeScreen && (
          <button
            onClick={() => setOpen((v) => !v)}
            className={`p-2 rounded-lg transition-colors ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        {/* Mobile Menu */}
        {open && !isLargeScreen && (
          <div className="absolute inset-x-0 top-full">
            <div
              className={`mx-3 mt-2 rounded-xl px-4 py-3 shadow-lg ${
                scrolled
                  ? "bg-transparent"
                  : "bg-black/90 backdrop-blur-md"
              }`}
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-2 py-2 rounded-lg text-sm transition-colors ${
                      scrolled
                        ? isActive
                          ? "text-green-600"
                          : "text-black hover:text-green-600"
                        : isActive
                        ? "text-[var(--mango-green)]"
                        : "text-white hover:text-[var(--mango-green)]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}