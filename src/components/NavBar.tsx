"use client";
import { useEffect, useState } from "react";
import { TbMenu, TbX } from "react-icons/tb";
import Image from "next/image";

export default function NavBar() {
  const [menu, setMenu] = useState(false);

  // When the component is first mounted, add a scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Get the vertical offset in pixels
      const offset = window.scrollY;
      const nav = document.querySelector("nav");

      // If the offset is greater than 100, add the class
      if (offset > 5) {
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

  function handleScrollElem(id: string) {
    const elem = document.getElementById(id);
    if (!elem) {
      throw new Error("No element found with id " + id);
    }
    elem.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header>
      <nav className="fixed w-full z-10">
        <div className="flex flex-wrap items-center justify-between md:mx-20 p-5">
          <div className="flex gap-4">
            <div className="avatar">
              <div className="w-7 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <Image
                  src="/gt.jpg"
                  alt="mpotane profile"
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <p className="text-lg font-semibold">@mpotane</p>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-x-12">
              <li className="hover:scale-105 cursor-pointer">
                <button onClick={() => handleScrollElem('hero')}>{"< Home />"}</button>
              </li>
              <li className="hover:scale-105 cursor-pointer">
                <button onClick={() => handleScrollElem("tstack")}>Skillset</button>
              </li>
              <li className="hover:scale-105 cursor-pointer">
                <button onClick={() => handleScrollElem("aboutpge")}>About Me.</button>
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
                  <button className="btn btn-block" onClick={() => {
                    handleClick()
                    handleScrollElem('hero')
                  }
                  }>
                    Home
                  </button>
              </span>
              <span className="text-sm">
                  <button className="btn btn-block" onClick={() => {
                    handleClick()
                    handleScrollElem('tstack')
                    }}>
                    Skillset
                  </button>
              </span>
              <span className="text-sm">
                  <button className="btn btn-block" onClick={() => {
                    handleClick()
                    handleScrollElem('aboutpge')
                  }}>
                    About Me
                  </button>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
