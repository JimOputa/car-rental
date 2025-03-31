import PopularCarCard from "@/components/PopularCarCard";
import HomeNavbar from "@/components/HomeNavbar";
import RecommendCarCard from "@/components/RecommendCarCard";
import { popularCarData, recommendCarData } from "@/lib/data";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <HomeNavbar />
      <main className="bg-[#F6F7F9] flex justify-center">
        <div className="max-w-[1440px] w-full sm:pt-[32px] md:pb-[64px] pb-[48px] xl:px-[64px] sm:px-[24px] px-[6px] sm:mt-[0px] mt-[-116px]">
          {/* Hero */}
          <div className="flex justify-between md:gap-[32px] gap-[15px] overflow-x-auto">
            <div className="md:p-[24px] p-[16px] rounded-[10px] md:bg-[url(/images/BG.png)] bg-[url(/images/BG-2.png)] bg-[#54A6FF] md:min-w-[640px] sm:min-w-[352px] w-full min-w-[272px] md:min-h-[360px] h-[252px] bg-no-repeat md:bg-[auto] sm:bg-[auto_250px] bg-bottom">
              <div className="flex flex-col items-start md:gap-[20px] gap-[12px] md:max-w-[284px]">
                <h2 className="md:text-[32px]/[1.5] text-[16px]/[1.5] font-semibold text-[#fff] sm:max-w-[100%] max-w-[240px]">
                  The Best Platform for Car Rental
                </h2>
                <p className="md:text-[16px]/[1.5] text-[12px]/[1.6] font-medium text-[#fff] md:max-w-[100%] max-w-[240px]">
                  Ease of doing a car rental safely and reliably. Of course at a
                  low price.
                </p>
                <button className="py-[10px] px-[20px] bg-[#3563E9] md:text-[16px]/[1.5] text-[12px]/[auto] md:mt-[0px] mt-[4px] font-semibold text-[#fff] rounded-[4px] cursor-pointer">
                  Rental Car
                </button>
              </div>
            </div>
            <div className="md:p-[24px] p-[16px] rounded-[10px] md:bg-[url(/images/BG-1.png)] bg-[url(/images/BG-4.png)] bg-[#3563E9] md:min-w-[640px] sm:min-w-[352px] w-full min-w-[272px] md:min-h-[360px] h-[252px] bg-no-repeat md:bg-[auto] sm:bg-[auto_250px] bg-bottom">
              <div className="flex flex-col items-start md:gap-[20px] gap-[12px] md:max-w-[284px]">
                <h2 className="md:text-[32px]/[1.5] text-[16px]/[1.5] font-semibold text-[#fff] sm:max-w-[100%] max-w-[240px]">
                  Easy way to rent a car at a low price
                </h2>
                <p className="md:text-[16px]/[1.5] text-[12px]/[1.6] font-medium text-[#fff] md:max-w-[100%] max-w-[240px]">
                  Providing cheap car rental services and safe and comfortable
                  facilities.
                </p>
                <button className="py-[10px] px-[20px] bg-[#54A6FF] md:text-[16px]/[1.5] text-[12px]/[auto] md:mt-[0px] mt-[4px] font-semibold text-[#fff] rounded-[4px] cursor-pointer">
                  Rental Car
                </button>
              </div>
            </div>
          </div>

          {/* Pick-Up & Drop-Off */}
          <div className="flex items-center justify-between pt-[32px] relative gap-[32px] flex-col md:flex-row">
            <div className="bg-white sm:max-w-[582px] max-w-[425px] w-full xl:py-[24px] py-[16px] rounded-[10px] flex justify-center">
              <div className="flex flex-col xl:gap-y-[16px] gap-y-[24px]">
                <div className="flex items-center gap-x-[8px]">
                  <span className="w-[16px] h-[16px] rounded-[50%] bg-[#3563e94d] block p-[4px]">
                    <span className="w-[8px] h-[8px] rounded-[50%] bg-[#3563E9] block"></span>
                  </span>
                  <span className="text-[16px]/[1.5] font-semibold text-[#1A202C]">
                    Pick - Up
                  </span>
                </div>

                <div className="flex xl:gap-x-[24px] md:gap-x-[20px] sm:gap-x-[24px] gap-x-[20px]">
                  <div className="flex flex-col gap-y-[8px]">
                    <span className="text-[16px]/[1.5] font-bold text-[#1A202C]">
                      Locations
                    </span>
                    <div className="flex items-center lg:gap-x-[8px] gap-x-[4px] cursor-pointer">
                      <span className="xl:w-[104px] w-full text-[12px]/[auto] font-medium text-[#90A3BF] lg:block md:hidden sm:block hidden">
                        Select your city
                      </span>{" "}
                      <span className="text-[12px]/[auto] font-normal text-[#90A3BF] lg:hidden md:block sm:hidden block">
                        Semarang
                      </span>{" "}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="xl:w-[14px] w-[12px] xl:h-[14px] h-[12px]"
                      >
                        <path
                          d="M7.00013 9.79969C6.5918 9.79969 6.18347 9.64219 5.8743 9.33303L2.07097 5.52969C1.9018 5.36053 1.9018 5.08053 2.07097 4.91136C2.24013 4.74219 2.52013 4.74219 2.6893 4.91136L6.49263 8.71469C6.77263 8.99469 7.22763 8.99469 7.50763 8.71469L11.311 4.91136C11.4801 4.74219 11.7601 4.74219 11.9293 4.91136C12.0985 5.08053 12.0985 5.36053 11.9293 5.52969L8.12597 9.33303C7.8168 9.64219 7.40847 9.79969 7.00013 9.79969Z"
                          fill="#1A202C"
                          stroke="#1A202C"
                          strokeWidth="0.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="h-[48px] outline-1 outline-[#c3d4e966]"></div>
                  <div className="flex flex-col gap-y-[8px]">
                    <span className="text-[16px]/[1.5] font-bold text-[#1A202C]">
                      Date
                    </span>
                    <div className="flex items-center lg:gap-x-[8px] gap-x-[4px] cursor-pointer">
                      <span className="xl:w-[112px] w-full text-[12px]/[auto] font-medium text-[#90A3BF] lg:block md:hidden sm:block hidden">
                        Select your date
                      </span>{" "}
                      <span className="text-[12px]/[auto] font-normal text-[#90A3BF] lg:hidden md:block sm:hidden block">
                        20 July 2022
                      </span>{" "}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="xl:w-[14px] w-[12px] xl:h-[14px] h-[12px]"
                      >
                        <path
                          d="M7.00013 9.79969C6.5918 9.79969 6.18347 9.64219 5.8743 9.33303L2.07097 5.52969C1.9018 5.36053 1.9018 5.08053 2.07097 4.91136C2.24013 4.74219 2.52013 4.74219 2.6893 4.91136L6.49263 8.71469C6.77263 8.99469 7.22763 8.99469 7.50763 8.71469L11.311 4.91136C11.4801 4.74219 11.7601 4.74219 11.9293 4.91136C12.0985 5.08053 12.0985 5.36053 11.9293 5.52969L8.12597 9.33303C7.8168 9.64219 7.40847 9.79969 7.00013 9.79969Z"
                          fill="#1A202C"
                          stroke="#1A202C"
                          strokeWidth="0.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="h-[48px] outline-1 outline-[#c3d4e966]"></div>
                  <div className="flex flex-col gap-y-[8px]">
                    <span className="text-[16px]/[1.5] font-bold text-[#1A202C]">
                      Time
                    </span>
                    <div className="flex items-center lg:gap-x-[8px] gap-x-[4px] cursor-pointer">
                      <span className="xl:w-[108px] w-full text-[12px]/[auto] font-medium text-[#90A3BF] lg:block md:hidden sm:block hidden">
                        Select your time
                      </span>{" "}
                      <span className="text-[12px]/[auto] font-normal text-[#90A3BF] lg:hidden md:block sm:hidden block">
                        07.00
                      </span>{" "}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="xl:w-[14px] w-[12px] xl:h-[14px] h-[12px]"
                      >
                        <path
                          d="M7.00013 9.79969C6.5918 9.79969 6.18347 9.64219 5.8743 9.33303L2.07097 5.52969C1.9018 5.36053 1.9018 5.08053 2.07097 4.91136C2.24013 4.74219 2.52013 4.74219 2.6893 4.91136L6.49263 8.71469C6.77263 8.99469 7.22763 8.99469 7.50763 8.71469L11.311 4.91136C11.4801 4.74219 11.7601 4.74219 11.9293 4.91136C12.0985 5.08053 12.0985 5.36053 11.9293 5.52969L8.12597 9.33303C7.8168 9.64219 7.40847 9.79969 7.00013 9.79969Z"
                          fill="#1A202C"
                          stroke="#1A202C"
                          strokeWidth="0.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute w-full h-full flex justify-center items-center md:bottom-[-6px] bottom-[-24px]">
              <svg
                width="140"
                height="122"
                viewBox="0 0 140 122"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_f_44_14970)">
                  <rect
                    x="40"
                    y="82"
                    width="42"
                    height="60"
                    rx="10"
                    transform="rotate(-90 40 82)"
                    fill="#103293"
                    fillOpacity="0.28"
                  />
                </g>

                <rect
                  x="40"
                  y="82"
                  width="60"
                  height="60"
                  rx="10"
                  transform="rotate(-90 40 82)"
                  fill="#3563E9"
                  className="cursor-pointer"
                />
                <path
                  d="M65.1605 43.8358V57.4536"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="cursor-pointer"
                />
                <path
                  d="M61.0827 47.9319L65.1605 43.8352L69.2383 47.9319"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="cursor-pointer"
                />
                <path
                  d="M75.0887 60.1671V46.5493"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="cursor-pointer"
                />
                <path
                  d="M79.1665 56.071L75.0887 60.1677L71.0109 56.071"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="cursor-pointer"
                />

                <defs>
                  <filter
                    id="filter0_f_44_14970"
                    x="0"
                    y="0"
                    width="140"
                    height="122"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="20"
                      result="effect1_foregroundBlur_44_14970"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="bg-white sm:max-w-[582px] max-w-[425px] w-full xl:py-[24px] py-[16px] rounded-[10px] flex justify-center">
              <div className="flex flex-col xl:gap-y-[16px] gap-y-[24px]">
                <div className="flex items-center gap-x-[8px]">
                  <span className="w-[16px] h-[16px] rounded-[50%] bg-[#5caffc4d] block p-[4px]">
                    <span className="w-[8px] h-[8px] rounded-[50%] bg-[#54A6FF] block"></span>
                  </span>
                  <span className="text-[16px]/[1.5] font-semibold text-[#1A202C]">
                    Drop - Off
                  </span>
                </div>

                <div className="flex xl:gap-x-[24px] md:gap-x-[20px] sm:gap-x-[24px] gap-x-[20px]">
                  <div className="flex flex-col gap-y-[8px]">
                    <span className="text-[16px]/[1.5] font-bold text-[#1A202C]">
                      Locations
                    </span>
                    <div className="flex items-center lg:gap-x-[8px] gap-x-[4px] cursor-pointer">
                      <span className="xl:w-[104px] w-full text-[12px]/[auto] font-medium text-[#90A3BF] lg:block md:hidden sm:block hidden">
                        Select your city
                      </span>{" "}
                      <span className="text-[12px]/[auto] font-normal text-[#90A3BF] lg:hidden md:block sm:hidden block">
                        Semarang
                      </span>{" "}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="xl:w-[14px] w-[12px] xl:h-[14px] h-[12px]"
                      >
                        <path
                          d="M7.00013 9.79969C6.5918 9.79969 6.18347 9.64219 5.8743 9.33303L2.07097 5.52969C1.9018 5.36053 1.9018 5.08053 2.07097 4.91136C2.24013 4.74219 2.52013 4.74219 2.6893 4.91136L6.49263 8.71469C6.77263 8.99469 7.22763 8.99469 7.50763 8.71469L11.311 4.91136C11.4801 4.74219 11.7601 4.74219 11.9293 4.91136C12.0985 5.08053 12.0985 5.36053 11.9293 5.52969L8.12597 9.33303C7.8168 9.64219 7.40847 9.79969 7.00013 9.79969Z"
                          fill="#1A202C"
                          stroke="#1A202C"
                          strokeWidth="0.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="h-[48px] outline-1 outline-[#c3d4e966]"></div>
                  <div className="flex flex-col gap-y-[8px]">
                    <span className="text-[16px]/[1.5] font-bold text-[#1A202C]">
                      Date
                    </span>
                    <div className="flex items-center lg:gap-x-[8px] gap-x-[4px] cursor-pointer">
                      <span className="xl:w-[112px] w-full text-[12px]/[auto] font-medium text-[#90A3BF] lg:block md:hidden sm:block hidden">
                        Select your date
                      </span>{" "}
                      <span className="text-[12px]/[auto] font-normal text-[#90A3BF] lg:hidden md:block sm:hidden block">
                        21 July 2022
                      </span>{" "}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="xl:w-[14px] w-[12px] xl:h-[14px] h-[12px]"
                      >
                        <path
                          d="M7.00013 9.79969C6.5918 9.79969 6.18347 9.64219 5.8743 9.33303L2.07097 5.52969C1.9018 5.36053 1.9018 5.08053 2.07097 4.91136C2.24013 4.74219 2.52013 4.74219 2.6893 4.91136L6.49263 8.71469C6.77263 8.99469 7.22763 8.99469 7.50763 8.71469L11.311 4.91136C11.4801 4.74219 11.7601 4.74219 11.9293 4.91136C12.0985 5.08053 12.0985 5.36053 11.9293 5.52969L8.12597 9.33303C7.8168 9.64219 7.40847 9.79969 7.00013 9.79969Z"
                          fill="#1A202C"
                          stroke="#1A202C"
                          strokeWidth="0.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="h-[48px] outline-1 outline-[#c3d4e966]"></div>
                  <div className="flex flex-col gap-y-[8px]">
                    <span className="text-[16px]/[1.5] font-bold text-[#1A202C]">
                      Time
                    </span>
                    <div className="flex items-center lg:gap-x-[8px] gap-x-[4px] cursor-pointer">
                      <span className="xl:w-[108px] w-full text-[12px]/[auto] font-medium text-[#90A3BF] lg:block md:hidden sm:block hidden">
                        Select your time
                      </span>{" "}
                      <span className="text-[12px]/[auto] font-normal text-[#90A3BF] lg:hidden md:block sm:hidden block">
                        01.00
                      </span>{" "}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="xl:w-[14px] w-[12px] xl:h-[14px] h-[12px]"
                      >
                        <path
                          d="M7.00013 9.79969C6.5918 9.79969 6.18347 9.64219 5.8743 9.33303L2.07097 5.52969C1.9018 5.36053 1.9018 5.08053 2.07097 4.91136C2.24013 4.74219 2.52013 4.74219 2.6893 4.91136L6.49263 8.71469C6.77263 8.99469 7.22763 8.99469 7.50763 8.71469L11.311 4.91136C11.4801 4.74219 11.7601 4.74219 11.9293 4.91136C12.0985 5.08053 12.0985 5.36053 11.9293 5.52969L8.12597 9.33303C7.8168 9.64219 7.40847 9.79969 7.00013 9.79969Z"
                          fill="#1A202C"
                          stroke="#1A202C"
                          strokeWidth="0.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Car */}
          <div className="lg:pt-[36px] pt-[32px] flex flex-col gap-y-[20px] items-center">
            <div className="flex items-center justify-between lg:px-[20px] px-[0px] lg:py-[10px] py-[0px]  w-full">
              <span className="lg:text-[16px]/[auto] text-[14px]/[1.5] text-[#90A3BF] font-semibold">
                Popular Car
              </span>
              <span className="lg:text-[16px]/[auto] text-[12px]/[auto] text-[#3563E9] font-semibold cursor-pointer">
                View All
              </span>
            </div>

            <div className="flex overflow-x-auto lg:gap-x-[32px] gap-x-[20px] w-full">
              {/* Card */}
              {popularCarData.map((item, index) => {
                return (
                  <PopularCarCard
                    like={item.like}
                    carName={item.name}
                    category={item.category}
                    imageURL={item.imageURL}
                    gasoline={item.gasoline}
                    carType={item.carType}
                    peopleCapacity={item.peopleCapacity}
                    price={item.price}
                    discount={item.discount}
                    discountOldPrice={item.discountOldPrice}
                    key={"PopularCard-" + index}
                  />
                );
              })}
            </div>
          </div>

          {/* Recommendation Car */}
          <div className="lg:pt-[36px] pt-[32px] flex flex-col gap-y-[20px] items-center">
            <div className="flex items-center justify-between lg:px-[20px] px-[0px] lg:py-[10px] py-[0px]  w-full">
              <span className="lg:text-[16px]/[auto] text-[14px]/[1.5] text-[#90A3BF] font-semibold">
                Recommendation Car
              </span>
            </div>

            <div className="flex flex-wrap justify-around lg:gap-[32px] gap-[20px] w-full">
              {/* Card */}
              {recommendCarData.map((item, index) => {
                return (
                  <RecommendCarCard
                    like={item.like}
                    carName={item.name}
                    category={item.category}
                    imageURL={item.imageURL}
                    gasoline={item.gasoline}
                    carType={item.carType}
                    peopleCapacity={item.peopleCapacity}
                    price={item.price}
                    discount={item.discount}
                    discountOldPrice={item.discountOldPrice}
                    key={"PopularCard-" + index}
                  />
                );
              })}
            </div>

            <div className="relative lg:mt-[44px] mt-[28px] w-full flex justify-center">
              <button className="lg:text-[16px]/[1.5] text-[12px]/[auto] font-semibold lg:px-[20px] px-[16px] py-[10px] bg-[#3563E9] text-white rounded-[4px] cursor-pointer">
                Show more cars
              </button>
              <span className="absolute right-[0px] lg:top-[11px] top-[8px] lg:text-[14px]/[1.5] text-[14px]/[auto] lg:font-medium font-bold text-[#90A3BF]">
                120 Cars
              </span>
            </div>
          </div>
        </div>
      </main>
      <footer className="sm:bg-white bg-[#F6F7F9] flex justify-center">
        <div className="max-w-[1440px] w-full xl:px-[60px] sm:px-[24px] px-[6px] sm:pt-[80px] pt-[0px] sm:pb-[60px] pb-[24px]">
          <div className="flex justify-between lg:flex-row flex-col gap-y-[48px]">
            <div className="flex flex-col gap-y-[16px]">
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
              <span className="max-w-[292px] block lg:text-[16px]/[1.5] text-[12px]/[2.0] text-[#13131399] font-medium">
                Our vision is to provide convenience and help increase your
                sales business.
              </span>
            </div>
            <div className="sm:flex grid grid-cols-2 sm:gap-x-[60px] gap-x-[65px] gap-y-[48px]">
              <div className="sm:min-w-[152px] min-w-[142px] flex flex-col gap-y-[24px]">
                <span className="text-[20px]/[1.5] text-[#1A202C] font-semibold">
                  About
                </span>
                <div className="flex flex-col gap-y-[16px] text-[16px]/[1.5] text-[#13131399] font-medium">
                  <span>How it works</span>
                  <span>Featured</span>
                  <span>Partnership</span>
                  <span>Business Relation</span>
                </div>
              </div>
              <div className="sm:min-w-[152px] min-w-[120px] flex flex-col gap-y-[24px] row-[2]">
                <span className="text-[20px]/[1.5] text-[#1A202C] font-semibold">
                  Community
                </span>
                <div className="flex flex-col gap-y-[16px] text-[16px]/[1.5] text-[#13131399] font-medium">
                  <span>Events</span>
                  <span>Blog</span>
                  <span>Podcast</span>
                  <span>Invite a friend</span>
                </div>
              </div>
              <div className="sm:min-w-[152px] min-w-[120px] flex flex-col gap-y-[24px]">
                <span className="text-[20px]/[1.5] text-[#1A202C] font-semibold">
                  Socials
                </span>
                <div className="flex flex-col gap-y-[16px] text-[16px]/[1.5] text-[#13131399] font-medium">
                  <span>Discord</span>
                  <span>Instagram</span>
                  <span>Twitter</span>
                  <span>Facebook</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between md:flex-row flex-col-reverse gap-y-[32px] md:items-center sm:pt-[36px] pt-[48px] sm:mt-[36px] sm:border-t-[1px] sm:border-[#13131329] lg:text-[16px]/[1.5] text-[12px]/[auto] text-[#1A202C] font-semibold">
            <span>©{year} MORENT. All rights reserved</span>
            <div className="flex gap-x-[60px] sm:justify-start justify-between items-center">
              <span>Privacy & Policy</span>
              <span>Terms & Condition</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
