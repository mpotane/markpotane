export default function Footer() {
  return (
    <footer className="pt-6 w-full mx-auto">
      <div className="flex flex-col-reverse justify-center pt-5 pb-10 border-t lg:flex-row items-center">
        <p className="text-sm">
          © Copyright {new Date().getFullYear()} @mpotane. All rights
          reserved.
        </p>
        {/* <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm transition-colors duration-300 hover:text-orange-400"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm transition-colors duration-300 hover:text-orange-400"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm transition-colors duration-300 hover:text-orange-400"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul> */}
      </div>
    </footer>
  );
}
