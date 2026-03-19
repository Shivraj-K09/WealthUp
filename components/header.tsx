import Image from "next/image";

export function Header() {
  return (
    <header className="flex justify-center w-full z-50 absolute top-0 left-0 right-0  bg-white/50 backdrop-blur-sm">
      <div className="flex justify-between items-center px-8 md:px-12 h-18 w-full max-w-[1250px] mx-auto">
        <div className="relative w-36 h-8 cursor-pointer pl-2 lg:pl-0">
          <Image
            src="/logo.png"
            alt="WealthUp Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </div>
        <nav className="pr-2 lg:pr-0">
          <button className="px-7 py-2 rounded-full bg-linear-to-b from-[#ffffff] to-[#eff4f8] text-[#1f3a52] font-semibold text-[13px] tracking-wide border border-[#d6e5f1] shadow-[0_2px_12px_rgba(180,210,240,0.4)] hover:shadow-[0_4px_16px_rgba(180,210,240,0.5)] transition-all cursor-pointer">
            Login
          </button>
        </nav>
      </div>
    </header>
  );
}
