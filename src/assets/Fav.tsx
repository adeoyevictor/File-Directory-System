const Fav = () => {
  return (
    <svg
      className="fav"
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_1_2004)">
        <circle cx="17.5" cy="17.5" r="17.5" fill="black" fillOpacity="0.28" />
      </g>
      <path
        d="M17.5008 12.2077C19.1647 10.7142 21.7359 10.7638 23.3386 12.3698C24.9413 13.9758 24.9964 16.5345 23.5058 18.2034L17.5 24.2185L11.4944 18.2034C10.0038 16.5345 10.0595 13.9718 11.6615 12.3698C13.2654 10.766 15.8321 10.712 17.5008 12.2077ZM22.3359 13.3705C21.274 12.3065 19.5596 12.2633 18.4471 13.262L17.5014 14.1108L16.5552 13.2626C15.4395 12.2626 13.7282 12.3066 12.6633 13.3715C11.608 14.4268 11.5551 16.1168 12.5275 17.2331L17.5 22.2135L22.4727 17.2331C23.4455 16.1164 23.3927 14.4296 22.3359 13.3705Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_b_1_2004"
          x="-4"
          y="-4"
          width="43"
          height="43"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1_2004"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1_2004"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Fav;
