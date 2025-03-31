"use client";
import logo from "@/public/images/Logo.png";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

export default function HomeNavbar() {
  const [inputActive, setInputActive] = useState(false);

  return (
    <nav className="xl:py-[40px] pt-[32px] sm:pb-[32px] pb-[148px] xl:px-[32px] sm:px-[24px] px-[6px] flex justify-center sm:outline-1 sm:outline-[#c3d4e966] sm:z-10">
      <div className="w-full max-w-[1440px] flex items-center justify-between lg:static relative">
        <div className="flex flex-col lg:flex-row lg:items-center items-start lg:gap-[81px] gap-[32px] w-full xl:ml-[28px]">
          {/* Logo */}
          <div className="lg:max-w-[131px] max-w-[103px] w-full lg:py-[9px] py-[3.781px]">
            <svg
              width={131}
              height={26}
              viewBox="0 0 131 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
            >
              <path
                d="M0.304 25V1.16H4.464L13.392 13.288H11.408L20.144 1.16H24.304V25H19.92V6.12L21.616 6.536L12.56 18.6H12.048L3.216 6.536L4.656 6.12V25H0.304ZM39.6505 25.384C37.9012 25.384 36.2692 25.0747 34.7545 24.456C33.2398 23.8373 31.9172 22.9733 30.7865 21.864C29.6558 20.7547 28.7705 19.4533 28.1305 17.96C27.5118 16.4453 27.2025 14.8133 27.2025 13.064C27.2025 11.2933 27.5118 9.66133 28.1305 8.168C28.7492 6.67467 29.6238 5.37333 30.7545 4.264C31.8852 3.15467 33.2078 2.30133 34.7225 1.704C36.2372 1.08533 37.8798 0.775999 39.6505 0.775999C41.4212 0.775999 43.0638 1.08533 44.5785 1.704C46.0932 2.32266 47.4158 3.18667 48.5465 4.296C49.6772 5.384 50.5518 6.67467 51.1705 8.168C51.8105 9.66133 52.1305 11.2933 52.1305 13.064C52.1305 14.8133 51.8105 16.4453 51.1705 17.96C50.5305 19.4533 49.6452 20.7547 48.5145 21.864C47.3838 22.9733 46.0612 23.8373 44.5465 24.456C43.0532 25.0747 41.4212 25.384 39.6505 25.384ZM39.6505 21.416C40.8238 21.416 41.9012 21.2133 42.8825 20.808C43.8638 20.3813 44.7172 19.7947 45.4425 19.048C46.1892 18.3013 46.7545 17.416 47.1385 16.392C47.5438 15.368 47.7465 14.2587 47.7465 13.064C47.7465 11.8693 47.5438 10.7707 47.1385 9.768C46.7545 8.744 46.1892 7.85867 45.4425 7.112C44.7172 6.344 43.8638 5.75733 42.8825 5.352C41.9012 4.94667 40.8238 4.744 39.6505 4.744C38.4985 4.744 37.4318 4.94667 36.4505 5.352C35.4692 5.75733 34.6052 6.344 33.8585 7.112C33.1332 7.85867 32.5678 8.744 32.1625 9.768C31.7572 10.7707 31.5545 11.8693 31.5545 13.064C31.5545 14.2587 31.7572 15.368 32.1625 16.392C32.5678 17.416 33.1332 18.3013 33.8585 19.048C34.6052 19.7947 35.4692 20.3813 36.4505 20.808C37.4318 21.2133 38.4985 21.416 39.6505 21.416ZM55.0403 25V1.16H63.9043C65.5256 1.16 66.9549 1.45867 68.1923 2.056C69.4509 2.632 70.4323 3.48533 71.1363 4.616C71.8403 5.72533 72.1923 7.08 72.1923 8.68C72.1923 10.3227 71.7976 11.72 71.0083 12.872C70.2403 14.024 69.1949 14.8773 67.8723 15.432L73.3443 25H68.4163L62.5603 14.536L65.3763 16.2H59.3923V25H55.0403ZM59.3923 12.36H63.9683C64.7576 12.36 65.4403 12.2107 66.0163 11.912C66.5923 11.592 67.0403 11.1547 67.3603 10.6C67.6803 10.0453 67.8403 9.40533 67.8403 8.68C67.8403 7.93333 67.6803 7.29333 67.3603 6.76C67.0403 6.20533 66.5923 5.77867 66.0163 5.48C65.4403 5.16 64.7576 5 63.9683 5H59.3923V12.36ZM75.2365 25V1.16H91.0765V5H79.5885V11.112H90.4365V14.952H79.5885V21.16H91.0765V25H75.2365ZM93.3078 25V1.16H96.6998L109.82 18.824L108.06 19.176V1.16H112.412V25H108.988L96.0598 7.208L97.6598 6.856V25H93.3078ZM120.29 25V5H114.114V1.16H130.754V5H124.674V25H120.29Z"
                fill="#3563E9"
              />
            </svg>
          </div>

          {/* Search Bar */}
          <div className={clsx("lg:py-[10px] lg:px-[20px] lg:rounded-[70px] lg:max-w-[492px] w-full", {"lg:outline-1 lg:outline-[#c3d4e966]" : !inputActive, "lg:outline-3 lg:outline-[#5caffc4d]" : inputActive})}>
            <form
              className="flex items-center justify-between w-full lg:gap-[20px] gap-[16px]"
              onSubmit={(e)=> e.preventDefault()}
            >
              <div className={clsx("flex items-center lg:gap-[20px] gap-[8px] w-full lg:py-[0px] py-[12px] lg:px-[0px] px-[24px] lg:rounded-[0px] rounded-[10px] lg:outline-0", {"outline-1 outline-[#c3d4e966]" : !inputActive, "outline-3 outline-[#5caffc4d]" : inputActive})}>
                <label
                  htmlFor="morent-nav-search-bar"
                  className="min-h-[24px] min-w-[24px]"
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-text"
                  >
                    <path
                      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                      stroke="#596780"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 22L20 20"
                      stroke="#596780"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </label>
                <input
                  type="text"
                  name=""
                  id="morent-nav-search-bar"
                  placeholder="Search something here"
                  className="w-full text-[14px]/[1.5] font-medium text-[#596780] outline-0 placeholder:text-[#596780]"
                  onFocus={() => setInputActive(true)}
                  onBlur={() => setInputActive(false)}
                />
              </div>
              {/* Search filter */}
              <div className="min-w-[48px] h-[48px] lg:min-w-[0px] lg:h-[0px] flex items-center justify-center lg:rounded-[0px] rounded-[10px] lg:outline-0 outline-1 outline-[#c3d4e966]">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                >
                  <path
                    d="M22 6.5H16"
                    stroke="#596780"
                    strokeWidth={1.5}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6.5H2"
                    stroke="#596780"
                    strokeWidth={1.5}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z"
                    stroke="#596780"
                    strokeWidth={1.5}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 17.5H18"
                    stroke="#596780"
                    strokeWidth={1.5}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 17.5H2"
                    stroke="#596780"
                    strokeWidth={1.5}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z"
                    stroke="#596780"
                    strokeWidth={1.5}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </form>
          </div>
        </div>

        <div className="flex items-center gap-[20px]">
          <div className="lg:flex items-center gap-[20px] hidden">
            <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[50%] outline-1 outline-[#c3d4e966] cursor-pointer">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.44 3.09998C14.63 3.09998 13.01 3.97998 12 5.32998C10.99 3.97998 9.37 3.09998 7.56 3.09998C4.49 3.09998 2 5.59998 2 8.68998C2 9.87998 2.19 10.98 2.52 12C4.1 17 8.97 19.99 11.38 20.81C11.72 20.93 12.28 20.93 12.62 20.81C15.03 19.99 19.9 17 21.48 12C21.81 10.98 22 9.87998 22 8.68998C22 5.59998 19.51 3.09998 16.44 3.09998Z"
                  fill="#596780"
                />
              </svg>
            </div>
            <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[50%] outline-1 outline-[#c3d4e966] cursor-pointer relative">
            <div className="absolute top-[2px] left-[31px] w-[11px] h-[11px]">
            <svg
    width={11}
    height={11}
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <circle cx={5.5} cy={5.5} r={5.5} fill="#FF4423" />
  </svg>
            </div>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3399 14.49L18.3399 12.83C18.1299 12.46 17.9399 11.76 17.9399 11.35V8.82C17.9399 6.47 16.5599 4.44 14.5699 3.49C14.0499 2.57 13.0899 2 11.9899 2C10.8999 2 9.91994 2.59 9.39994 3.52C7.44994 4.49 6.09994 6.5 6.09994 8.82V11.35C6.09994 11.76 5.90994 12.46 5.69994 12.82L4.68994 14.49C4.28994 15.16 4.19994 15.9 4.44994 16.58C4.68994 17.25 5.25994 17.77 5.99994 18.02C7.93994 18.68 9.97994 19 12.0199 19C14.0599 19 16.0999 18.68 18.0399 18.03C18.7399 17.8 19.2799 17.27 19.5399 16.58C19.7999 15.89 19.7299 15.13 19.3399 14.49Z"
                  fill="#596780"
                />
                <path
                  d="M14.8299 20.01C14.4099 21.17 13.2999 22 11.9999 22C11.2099 22 10.4299 21.68 9.87993 21.11C9.55993 20.81 9.31993 20.41 9.17993 20C9.30993 20.02 9.43993 20.03 9.57993 20.05C9.80993 20.08 10.0499 20.11 10.2899 20.13C10.8599 20.18 11.4399 20.21 12.0199 20.21C12.5899 20.21 13.1599 20.18 13.7199 20.13C13.9299 20.11 14.1399 20.1 14.3399 20.07C14.4999 20.05 14.6599 20.03 14.8299 20.01Z"
                  fill="#596780"
                />
              </svg>
            </div>
            <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[50%] outline-1 outline-[#c3d4e966] cursor-pointer">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.1 9.22006C18.29 9.22006 17.55 7.94006 18.45 6.37006C18.97 5.46006 18.66 4.30006 17.75 3.78006L16.02 2.79006C15.23 2.32006 14.21 2.60006 13.74 3.39006L13.63 3.58006C12.73 5.15006 11.25 5.15006 10.34 3.58006L10.23 3.39006C9.78 2.60006 8.76 2.32006 7.97 2.79006L6.24 3.78006C5.33 4.30006 5.02 5.47006 5.54 6.38006C6.45 7.94006 5.71 9.22006 3.9 9.22006C2.86 9.22006 2 10.0701 2 11.1201V12.8801C2 13.9201 2.85 14.7801 3.9 14.7801C5.71 14.7801 6.45 16.0601 5.54 17.6301C5.02 18.5401 5.33 19.7001 6.24 20.2201L7.97 21.2101C8.76 21.6801 9.78 21.4001 10.25 20.6101L10.36 20.4201C11.26 18.8501 12.74 18.8501 13.65 20.4201L13.76 20.6101C14.23 21.4001 15.25 21.6801 16.04 21.2101L17.77 20.2201C18.68 19.7001 18.99 18.5301 18.47 17.6301C17.56 16.0601 18.3 14.7801 20.11 14.7801C21.15 14.7801 22.01 13.9301 22.01 12.8801V11.1201C22 10.0801 21.15 9.22006 20.1 9.22006ZM12 15.2501C10.21 15.2501 8.75 13.7901 8.75 12.0001C8.75 10.2101 10.21 8.75006 12 8.75006C13.79 8.75006 15.25 10.2101 15.25 12.0001C15.25 13.7901 13.79 15.2501 12 15.2501Z"
                  fill="#596780"
                />
              </svg>
            </div>
          </div>
          <div className="block lg:w-[44px] w-[28px] lg:h-[44px] h-[28px] rounded-[50%] outline-1 outline-[#c3d4e966] cursor-pointer lg:static absolute top-[0px] right-[0px] bg-[url(/images/Profile.png)] bg-contain"></div>
        </div>
      </div>
    </nav>
  );
}
