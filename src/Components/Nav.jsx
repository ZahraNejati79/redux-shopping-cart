import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="w-full h-16 shadow-2xl bg-white sticky top-0 container flex items-center justify-center">
      <nav className="flex justify-between md:max-w-6xl w-full px-4">
        <div>
          <div>cart</div>
        </div>
        <div>
          <Link to="/">home</Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
