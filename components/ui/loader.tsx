const Loader = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* rotation happens here, not on the positioning wrapper */}
      <div className="loader-goo m-auto h-[200px] w-[200px]">
        <div className="dot dot-1 absolute inset-0 m-auto h-[70px] w-[70px] rounded-full bg-forest" />
        <div className="dot dot-2 absolute inset-0 m-auto h-[70px] w-[70px] rounded-full bg-forest" />
        <div className="dot dot-3 absolute inset-0 m-auto h-[70px] w-[70px] rounded-full bg-forest" />
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          <filter id="goo">
            <feGaussianBlur result="blur" stdDeviation={10} in="SourceGraphic" />
            <feColorMatrix
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
              mode="matrix"
              in="blur"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Loader;
