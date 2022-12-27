import { useEffect, useState } from "react";
import { TbMenu, TbX } from "react-icons/tb";
import { Link } from "react-scroll";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  // When the component is first mounted, add a scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Get the vertical offset in pixels
      const offset = window.scrollY;
      const nav = document.querySelector("nav");

      // If the offset is greater than 100, add the class
      if (offset > 100) {
        nav?.classList.add("bg-base-100/95", "backdrop-blur-sm");
      } else {
        // Otherwise, remove the class
        nav?.classList.remove("bg-base-100/95", "backdrop-blur-sm");
      }
    };

    // Add the event listener
    window.addEventListener("scroll", handleScroll);

    // When the component is unmounted, remove the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Create a function that will be called when the button is clicked
  const handleClick = () => {
    // Get the html element
    const html = document.querySelector("html");
    // If the html element exists, then toggle the overflow property
    if (html) {
      html.style.overflow = menu ? "unset" : "hidden";
    }
    // Toggle the menu state
    setMenu(!menu);
  };

  return (
    <header>
      <nav className="fixed w-full z-10">
        <div className="flex flex-wrap items-center justify-between md:mx-20 p-5">
          <p className="text-lg font-semibold">Mark Edzel Potane</p>
          <div className="hidden md:block">
            <ul className="flex gap-x-12">
              <li className="hover:scale-105 cursor-pointer">
                <Link
                  href="/"
                  activeClass="text-success"
                  spy={true}
                  to="home"
                  smooth={true}
                  duration={500}
                >
                  {"< Home />"}
                </Link>
              </li>
              <li className="hover:scale-105 cursor-pointer">
                <Link
                  href="/"
                  activeClass="text-success"
                  spy={true}
                  to="skill"
                  smooth={true}
                  duration={500}
                >
                  Skillset
                </Link>
              </li>
              <li className="hover:scale-105 cursor-pointer">
                <Link
                  href="/"
                  activeClass="text-success"
                  spy={true}
                  to="about"
                  smooth={true}
                  duration={500}
                >
                  About Me.
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <div
              className="border border-gray-600 rounded px-2 py-0.5"
              onClick={handleClick}
            >
              {!menu ? <TbMenu size={23} /> : <TbX size={23} />}
            </div>
            <div
              className={
                menu
                  ? "fixed right-0 px-5 py-2 flex flex-col gap-2 top-[69px] w-full h-screen ease-in-out duration-300 bg-base-100"
                  : "fixed right-[-100%] px-5 py-2 flex flex-col gap-2 top-[69px] w-full h-screen ease-in-out duration-200 bg-base-100"
              }
            >
              <span className="text-sm">
                <Link href="/" to="home" smooth={true} duration={500}>
                  <button className="btn btn-block" onClick={handleClick}>
                    Home
                  </button>
                </Link>
              </span>
              <span className="text-sm">
                <Link href="/" to="skill" smooth={true} duration={500}>
                  <button className="btn btn-block" onClick={handleClick}>
                    Skillset
                  </button>
                </Link>
              </span>
              <span className="text-sm">
                <Link href="/" to="about" smooth={true} duration={500}>
                  <button className="btn btn-block" onClick={handleClick}>
                    About Me
                  </button>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
