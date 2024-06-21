import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants/index';

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center bg-black fixed top-0 z-50">
      <nav className="flex w-full max-w-screen-xl mx-auto items-center">
        <img src={appleImg} alt="appleimg" width={14} height={18} className="mr-4" />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div key={nav} className="px-5 text-sm cursor-pointer text-gray-400 hover:text-white transition-all">
              {nav}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
