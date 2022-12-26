import { useState } from "react";
import { TbMenu, TbX } from "react-icons/tb";
import { Link } from "react-scroll";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    document.body.style.overflow = menu ? "unset" : "hidden";
    setMenu(!menu);
  };

  return (
    <header>
      <nav className="shadow fixed w-full z-10 bg-base-100/95 backdrop-blur-sm">
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
              <span className="pt-2 text-sm">
                <Link href="/" to="home" smooth={true} duration={500}>
                  <button className="btn btn-block" onClick={handleClick}>
                    Home
                  </button>
                </Link>
              </span>
              <span className="pt-2 text-sm">
                <Link href="/" to="skill" smooth={true} duration={500}>
                  <button className="btn btn-block" onClick={handleClick}>
                    Skillset
                  </button>
                </Link>
              </span>
              <span className="pt-2 text-sm">
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