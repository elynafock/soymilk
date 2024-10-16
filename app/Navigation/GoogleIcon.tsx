import React from "react";

type Props = {
  className?: string;
  disabled?: boolean;
};

const GoogleIcon = (props: Props) => {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <g clip-path="url(#clip0_239_451)">
        <path
          d="M32.1186 16.2994C32.1186 14.9884 32.0123 14.0317 31.782 13.0396H16.8114V18.9569H25.5988C25.4217 20.4274 24.465 22.642 22.339 24.1301L22.3092 24.3282L27.0426 27.9952L27.3705 28.0279C30.3823 25.2463 32.1186 21.1537 32.1186 16.2994Z"
          fill={props.disabled ? "#c8c8c8" : "#4285F4"}
        />
        <path
          d="M16.8114 31.8901C21.1165 31.8901 24.7307 30.4727 27.3706 28.0279L22.339 24.1301C20.9925 25.0691 19.1854 25.7246 16.8114 25.7246C12.5949 25.7246 9.01612 22.9432 7.74039 19.0986L7.5534 19.1145L2.63151 22.9236L2.56714 23.1025C5.18918 28.3112 10.5751 31.8901 16.8114 31.8901Z"
          fill="#34A853"
        />
        <path
          d="M7.74047 19.0987C7.40386 18.1066 7.20905 17.0435 7.20905 15.9451C7.20905 14.8466 7.40386 13.7837 7.72276 12.7915L7.71384 12.5803L2.73027 8.70996L2.56722 8.78752C1.48655 10.949 0.866455 13.3762 0.866455 15.9451C0.866455 18.5141 1.48655 20.9412 2.56722 23.1026L7.74047 19.0987Z"
          fill="#FBBC05"
        />
        <path
          d="M16.8114 6.16537C19.8055 6.16537 21.8252 7.45869 22.9768 8.53948L27.4768 4.14571C24.7131 1.57679 21.1165 0 16.8114 0C10.5751 0 5.18918 3.57875 2.56714 8.78742L7.72268 12.7915C9.01612 8.94693 12.5949 6.16537 16.8114 6.16537Z"
          fill="#EB4335"
        />
      </g>
      <defs>
        <clipPath id="clip0_239_451">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GoogleIcon;
