import Image from "next/image";

export function Header() {
  return (
    <header className="flex justify-center w-full z-50 fixed top-0 left-0 right-0 bg-[#CFE6F7]/20 backdrop-blur-lg rounded-b-[20px] md:rounded-b-[24px] border-b border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
      <div className="flex justify-between items-center px-8 md:px-0 h-[72px] w-full max-w-[1040px] mx-auto">
        <div className="relative w-44 h-10 cursor-pointer pl-2 lg:pl-0">
          <Image
            src="/wealthup-logo.webp"
            alt="WealthUp Logo"
            fill
            className="object-contain object-left invert"
            priority
          />
        </div>
        <nav className="pr-2 lg:pr-0">
          <button className="rounded-full px-8 h-10 bg-[#F8FAFC]/20 text-[#2C68A6] border border-white/50 backdrop-blur-md shadow-[0_8px_24px_-6px_rgba(0,150,255,0.5)] hover:bg-[#F8FAFC]/30 hover:text-[#2C68A6] hover:shadow-[0_8px_24px_-4px_rgba(0,150,255,0.6)] transition-all font-semibold cursor-pointer">
            Login
          </button>
        </nav>
      </div>
    </header>
  );
}
