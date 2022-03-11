import React from "react";

function UserConnection(props: React.SVGProps<SVGSVGElement>, color: string) {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M58.75 46.2501C58.75 49.5653 57.433 52.7448 55.0888 55.089C52.7446 57.4332 49.5652 58.7501 46.25 58.7501C42.9348 58.7501 39.7554 57.4332 37.4112 55.089C35.067 52.7448 33.75 49.5653 33.75 46.2501C33.75 42.9349 35.067 39.7555 37.4112 37.4113C39.7554 35.0671 42.9348 33.7501 46.25 33.7501C49.5652 33.7501 52.7446 35.0671 55.0888 37.4113C57.433 39.7555 58.75 42.9349 58.75 46.2501V46.2501Z"
        stroke={color}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M52.5 46.2501H40M46.25 40.0001V52.5001V40.0001Z"
        stroke="#0F9AFE"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.9125 33.2063C32.975 32.5625 30.875 31.875 28.75 31.0625V24.8125C28.75 24.8125 32.5 23.2688 32.5 17.3125C34.4563 17.3125 34.4563 12.1375 32.5 12.1375C32.5 11.5625 34.5625 8.12501 33.75 4.81251C32.5625 0.0625126 18.6875 0.0625126 17.5 4.81876C11.5813 3.63126 15 11.525 15 12.3188C13.0438 12.3188 13.0438 17.3188 15 17.3188C15 23.275 18.75 24.8188 18.75 24.8188V31.0688C11.8063 33.7125 3.53125 35.4625 2.5 38.5688C1.3125 42.1438 1.25 48.75 1.25 48.75H27.5"
        stroke="#0F9AFE"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default UserConnection;
