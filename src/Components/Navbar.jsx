import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart, FiUser } from "react-icons/fi"; // lightweight line icons

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full border-b border-[var(--color-text)] bg-[var(--color-mainPageBackground)] font-nunito">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Left: Site Title */}
        <h1 className="text-2xl text-[var(--color-text)]">Patterns Galore</h1>

        {/* Center: Desktop menu OR hamburger on mobile */}
        <div className="flex-1 flex justify-center">
          <div className="hidden md:flex gap-8 text-[var(--color-text)] text-base">
            <a href="#" className="hover:underline">Prints</a>
            <a href="#" className="hover:underline text-center">Hand Painted Frames & Illustrations</a>
            <a href="#" className="hover:underline">Commissions</a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[var(--color-text)]"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Right: Icon buttons */}
        <div className="flex items-center gap-6 text-[var(--color-text)]">
          <button className="hover:text-opacity-70">
            <IoIosSearch size={22} />
          </button>
          <button className="hover:text-opacity-70">
            <FiShoppingCart size={20} />
          </button>
          <button className="hover:text-opacity-70">
            <FiUser size={20} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="flex flex-col items-center gap-4 px-8 pb-4 md:hidden text-[var(--color-text)] text-base">
          <a href="#" className="hover:underline">Prints</a>
          <a href="#" className="hover:underline text-center">Hand Painted Frames & Illustrations</a>
          <a href="#" className="hover:underline">Commissions</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;


