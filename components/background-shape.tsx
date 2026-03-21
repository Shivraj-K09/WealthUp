export function BackgroundShape() {
  return (
    <div className="absolute inset-0 w-full h-full -z-50 pointer-events-none overflow-hidden">
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-80 blur-[130px] md:blur-[180px]"
        style={{ display: "block", transform: "translate3d(0,0,0)" }}
        viewBox="0 0 1440 5591"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMin slice"
      >
        <path
          d="M262.942 2969.65L60.3242 4194.68L442.181 5069.7L649.669 3214.66L752.926 2365.89L986.716 519.596L796.762 659.599L481.146 1613.37L262.942 2969.65Z"
          fill="#C8E8FF"
        />
      </svg>
    </div>
  );
}
