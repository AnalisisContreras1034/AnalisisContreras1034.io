import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../css/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const lastScrollY = useRef(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      if (isScrollingDown && currentScrollY > 100) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Sobre mí", href: "#about" },
    { name: "Servicios", href: "#services" },
    { name: "Proyectos", href: "#projects" },
    { name: "Stack", href: "#stack" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <AnimatePresence>
      {!hideNavbar && (
        <motion.nav
          className="navbar"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="navbar-container">
            {/* Brand */}
            <motion.a
              href="#hero"
              className="navbar-brand"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Andres · Data
            </motion.a>

            {/* Tagline */}
            <span className="navbar-tagline">
              Transformando datos en decisiones
            </span>

            {/* Desktop menu */}
            <motion.ul
              className="desktop-menu"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {navItems.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="nav-link">
                    {item.name}
                  </a>
                </li>
              ))}
            </motion.ul>

            {/* Hamburger */}
            <button
              className={`menu-toggle ${isOpen ? "open" : ""}`}
              onClick={toggleMenu}
              aria-label="Abrir menú"
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                className="mobile-menu"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="nav-link"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
