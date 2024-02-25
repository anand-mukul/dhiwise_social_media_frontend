import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "/src/components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const EventsPage: React.FC = () => {
  const navigate = useNavigate();

  const [frameonevalue, setFrameonevalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar1 className="!sticky !w-[165px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <div className="flex flex-1 flex-col items-start justify-end md:ml-[0] ml-[65px] md:mt-0 mt-10 pb-[30px] md:px-5 w-full">
          <div className="bg-white-A700 flex md:flex-col flex-row gap-[13px] items-center justify-start p-3 rounded-[12px] w-[97%] md:w-full">
            <Input
              name="FrameOne"
              placeholder="Search in social…"
              value={frameonevalue}
              onChange={(e) => setFrameonevalue(e)}
              className="font-medium p-0 placeholder:text-gray-500 text-left text-sm w-full"
              wrapClassName="flex w-[89%] md:w-full"
              prefix={
                <Img
                  className="cursor-pointer h-[18px] ml-[9px] mr-[15px] my-[7px]"
                  src="images/img_search.svg"
                  alt="search"
                />
              }
              suffix={
                <CloseSVG
                  fillColor="#8f92a1"
                  className="cursor-pointer h-[18px] my-auto"
                  onClick={() => setFrameonevalue("")}
                  style={{
                    visibility:
                      frameonevalue?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={18}
                  width={18}
                  viewBox="0 0 18 18"
                />
              }
              size="md"
            ></Input>
            <Text
              className="text-gray-500 text-xs tracking-[1.00px] uppercase"
              size="txtInterBold12"
            >
              Filters
            </Text>
          </div>
          <Text
            className="mt-[60px] text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
            size="txtInterBold30"
          >
            Events
          </Text>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-10 py-0.5 w-[62%] md:w-full">
            <div className="flex flex-col gap-1.5 items-center justify-start sm:mt-0 mt-0.5 w-[13%] sm:w-full">
              <Text className="text-gray-900 text-sm" size="txtInterBold14">
                Anytime
              </Text>
              <Line className="bg-gray-900 h-0.5 w-[87%]" />
            </div>
            <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[25px] sm:mt-0 mt-0.5">
              <Text
                className="text-gray-500 text-sm"
                size="txtInterBold14Gray500"
              >
                Today
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[26px]">
              <Text
                className="text-gray-500 text-sm"
                size="txtInterBold14Gray500"
              >
                Tomorrow
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[22px]">
              <Text
                className="text-gray-500 text-sm"
                size="txtInterBold14Gray500"
              >
                This Week
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[22px]">
              <Text
                className="text-gray-500 text-sm"
                size="txtInterBold14Gray500"
              >
                This Month
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[22px]">
              <Text
                className="text-gray-500 text-sm"
                size="txtInterBold14Gray500"
              >
                Select
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-10 w-full">
            <div className="md:gap-5 gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[29px] sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Img
                    className="h-[180px] sm:h-auto object-cover rounded-lg w-full"
                    src="images/img_image_180X320.png"
                    alt="Image"
                  />
                  <div className="flex flex-row items-center justify-between mt-5 w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-between w-[45%]">
                      <Button
                        className="cursor-pointer font-bold h-12 rounded-[15.16px] text-[22px] text-center sm:text-lg md:text-xl w-12"
                        color="gray_500_33"
                        size="2xl"
                        variant="outline"
                      >
                        10
                      </Button>
                      <div className="flex flex-col gap-[5px] items-start justify-start">
                        <Text
                          className="text-gray-900 text-sm"
                          size="txtInterBold14"
                        >
                          Monday
                        </Text>
                        <Text
                          className="text-gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          December, 2019
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-[38px] w-[38px]"
                      src="images/img_overflowmenu_1.svg"
                      alt="overflowmenu"
                    />
                  </div>
                  <div className="flex flex-col gap-3.5 items-start justify-start mt-5">
                    <Text
                      className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                      size="txtInterBold22"
                    >
                      Fashion Meetup
                    </Text>
                    <Text
                      className="text-gray-500 text-sm"
                      size="txtInterMedium14Gray500"
                    >
                      Starts at 9:00am in Los Angeles
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[30px] w-full">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[101px] rounded"
                      leftIcon={
                        <Img
                          className="h-3.5 ml-[9px] mr-[3px] my-2"
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                      }
                      color="green_400"
                      size="lg"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-sm">
                        Interested
                      </div>
                    </Button>
                    <div className="flex font-sfprodisplay relative w-[24%]">
                      <div className="flex my-auto w-[69%]">
                        <Img
                          className="h-7 my-auto object-cover rounded-lg w-7"
                          src="images/img_avatar.png"
                          alt="Avatar"
                        />
                        <Img
                          className="h-7 ml-[-5px] my-auto object-cover rounded-lg w-7 z-[1]"
                          src="images/img_avatar.png"
                          alt="Avatar One"
                        />
                      </div>
                      <Button
                        className="cursor-pointer font-bold h-7 ml-[-5px] my-auto rounded-[8.84px] text-[10.32px] text-center w-7 z-[1]"
                        color="gray_900"
                        size="xl"
                        variant="fill"
                      >
                        +9
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="common-pointer bg-white-A700 flex flex-1 flex-col items-center justify-start p-[29px] sm:px-5 rounded-[12px] w-full"
                onClick={() => navigate("")}
              >
                <div className="flex flex-col items-start justify-start w-full">
                  <Img
                    className="h-[180px] sm:h-auto object-cover rounded-lg w-full"
                    src="images/img_image_12.png"
                    alt="Image One"
                  />
                  <div className="flex flex-row font-inter items-start justify-between mt-5 pb-[3px] w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-between w-[45%]">
                      <Button
                        className="cursor-pointer font-bold h-12 rounded-[15.16px] text-[22px] text-center sm:text-lg md:text-xl w-12"
                        color="gray_500_6c"
                        size="2xl"
                        variant="outline"
                      >
                        10
                      </Button>
                      <div className="flex flex-col gap-[5px] items-start justify-start">
                        <Text
                          className="text-gray-900 text-sm"
                          size="txtInterBold14"
                        >
                          Wednesday
                        </Text>
                        <Text
                          className="text-gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          December, 2019
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-[38px] mt-[5px] w-[38px]"
                      src="images/img_overflowmenu_1.svg"
                      alt="overflowmenu One"
                    />
                  </div>
                  <Text
                    className="leading-[30.00px] mt-5 text-[22px] text-gray-900 sm:text-lg md:text-xl w-full"
                    size="txtInterBold22"
                  >
                    2019 DUB Show at Los Angeles Auto Show
                  </Text>
                  <Text
                    className="mt-3.5 text-gray-500 text-sm"
                    size="txtSFProDisplayMedium14"
                  >
                    Starts at 9:00am in Los Angeles
                  </Text>
                  <div className="flex flex-row font-inter items-start justify-between mt-[25px] w-full">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[101px] rounded"
                      leftIcon={
                        <Img
                          className="h-3.5 ml-[9px] mr-[3px] my-2"
                          src="images/img_checkmark_14X14.svg"
                          alt="checkmark"
                        />
                      }
                      color="gray_500_33"
                      size="lg"
                      variant="outline"
                    >
                      <div className="font-medium text-left text-sm">
                        Interested
                      </div>
                    </Button>
                    <div className="flex font-sfprodisplay mt-0.5 relative w-[24%]">
                      <div className="flex my-auto w-[69%]">
                        <Img
                          className="h-7 my-auto object-cover rounded-lg w-7"
                          src="images/img_avatar.png"
                          alt="Avatar One"
                        />
                        <Img
                          className="h-7 ml-[-5px] my-auto object-cover rounded-lg w-7 z-[1]"
                          src="images/img_avatar.png"
                          alt="Avatar One One"
                        />
                      </div>
                      <Button
                        className="cursor-pointer font-bold h-7 ml-[-5px] my-auto rounded-[8.84px] text-[10.32px] text-center w-7 z-[1]"
                        color="gray_900"
                        size="xl"
                        variant="fill"
                      >
                        +9
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[29px] sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[180px] md:h-auto object-cover rounded-lg w-full"
                    src="images/img_image_13.png"
                    alt="Image Two"
                  />
                  <div className="flex flex-row items-center justify-between mt-5 w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-between w-[45%]">
                      <Button
                        className="cursor-pointer font-bold h-12 rounded-[15.16px] text-[22px] text-center sm:text-lg md:text-xl w-12"
                        color="gray_500_33"
                        size="xl"
                        variant="outline"
                      >
                        10
                      </Button>
                      <div className="flex flex-col gap-[7px] items-start justify-start">
                        <Text
                          className="text-gray-900 text-sm"
                          size="txtInterBold14"
                        >
                          Monday
                        </Text>
                        <Text
                          className="text-gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          December, 2019
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-[38px] w-[38px]"
                      src="images/img_overflowmenu_1.svg"
                      alt="overflowmenu Two"
                    />
                  </div>
                  <div className="flex flex-col gap-2.5 items-center justify-start mt-5 w-full">
                    <Text
                      className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                      size="txtInterBold22"
                    >
                      Fashion Meetup
                    </Text>
                    <Text
                      className="text-gray-500 text-sm"
                      size="txtInterMedium14Gray500"
                    >
                      Starts at 9:00am in Los Angeles
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[30px] w-full">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[101px] rounded"
                      leftIcon={
                        <Img
                          className="h-3.5 ml-[9px] mr-[3px] my-2"
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                      }
                      color="green_400"
                      size="md"
                      variant="fill"
                    >
                      <div className="font-medium text-center text-sm">
                        Interested
                      </div>
                    </Button>
                    <div className="flex font-sfprodisplay relative w-[24%]">
                      <div className="flex my-auto w-[69%]">
                        <Img
                          className="h-7 my-auto object-cover rounded-lg w-7"
                          src="images/img_avatar.png"
                          alt="Avatar Two"
                        />
                        <Img
                          className="h-7 ml-[-5px] my-auto object-cover rounded-lg w-7 z-[1]"
                          src="images/img_avatar.png"
                          alt="Avatar One Two"
                        />
                      </div>
                      <Button
                        className="cursor-pointer font-bold h-7 ml-[-5px] my-auto rounded-[8.84px] text-[10.32px] text-center w-7 z-[1]"
                        color="gray_900"
                        size="sm"
                        variant="fill"
                      >
                        +9
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[29px] sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[180px] md:h-auto object-cover rounded-lg w-full"
                    src="images/img_image_14.png"
                    alt="Image Three"
                  />
                  <div className="flex flex-row items-center justify-between mt-5 w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-between w-[45%]">
                      <Button
                        className="cursor-pointer font-bold h-12 rounded-[15.16px] text-[22px] text-center sm:text-lg md:text-xl w-12"
                        color="gray_500_33"
                        size="xl"
                        variant="outline"
                      >
                        10
                      </Button>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-gray-900 text-sm"
                          size="txtInterBold14"
                        >
                          Monday
                        </Text>
                        <Text
                          className="text-gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          December, 2019
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-[38px] w-[38px]"
                      src="images/img_overflowmenu_1.svg"
                      alt="overflowmenu Three"
                    />
                  </div>
                  <div className="flex flex-col gap-2.5 items-center justify-start mt-5 w-full">
                    <Text
                      className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                      size="txtInterBold22"
                    >
                      Fashion Meetup
                    </Text>
                    <Text
                      className="text-gray-500 text-sm"
                      size="txtInterMedium14Gray500"
                    >
                      Starts at 9:00am in Los Angeles
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[30px] w-full">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[101px] rounded"
                      leftIcon={
                        <Img
                          className="h-3.5 ml-[9px] mr-[3px] my-2"
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                      }
                      color="green_400"
                      size="md"
                      variant="fill"
                    >
                      <div className="font-medium text-center text-sm">
                        Interested
                      </div>
                    </Button>
                    <div className="flex font-sfprodisplay relative w-[24%]">
                      <div className="flex my-auto w-[69%]">
                        <Img
                          className="h-7 my-auto object-cover rounded-lg w-7"
                          src="images/img_avatar.png"
                          alt="Avatar Three"
                        />
                        <Img
                          className="h-7 ml-[-5px] my-auto object-cover rounded-lg w-7 z-[1]"
                          src="images/img_avatar.png"
                          alt="Avatar One Three"
                        />
                      </div>
                      <Button
                        className="cursor-pointer font-bold h-7 ml-[-5px] my-auto rounded-[8.84px] text-[10.32px] text-center w-7 z-[1]"
                        color="gray_900"
                        size="sm"
                        variant="fill"
                      >
                        +9
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-row font-sfprodisplay gap-2.5 items-center justify-between md:ml-[0] ml-[66px] md:px-5 w-full">
          <Line className="bg-gray-500_7e h-32 my-[448px] rounded-[2.5px] w-[5px]" />
          <div className="bg-gray-900 flex flex-col gap-[51px] items-end justify-start p-10 sm:px-5 rounded-bl-[32px] rounded-tl-[32px]">
            <div className="flex flex-row gap-5 items-center justify-end mt-[5px] w-[45%] md:w-full">
              <Button
                className="common-pointer cursor-pointer font-bold h-12 sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center w-12"
                onClick={() => navigate("")}
                shape="round"
                color="light_blue_200"
                size="2xl"
                variant="fill"
              >
                1
              </Button>
              <Img
                className="h-12 md:h-auto object-cover rounded-[12px] w-12"
                src="images/img_avatar_48X48.png"
                alt="Avatar Four"
              />
            </div>
            <div className="flex flex-col font-inter items-start justify-start mb-[45px] pb-[3px] w-[97%] md:w-full">
              <Text
                className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                size="txtInterBold22WhiteA700"
              >
                My Next Events
              </Text>
              <List
                className="flex flex-col gap-10 items-center mt-10 w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                      src="images/img_image_140X250.png"
                      alt="Image Four"
                    />
                    <div className="flex flex-row gap-3 items-center justify-start w-[96%] md:w-full">
                      <div className="flex flex-col gap-[11px] items-start justify-start pr-1 pt-1">
                        <Text
                          className="text-sm text-white-A700"
                          size="txtInterBold14WhiteA700"
                        >
                          Dua Lipa Live Concert
                        </Text>
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtInterRegular14"
                        >
                          December 12, 2019
                        </Text>
                      </div>
                      <Button
                        className="flex h-7 items-center justify-center my-[9px] rounded-lg w-7"
                        color="white_A700_33"
                        size="xl"
                        variant="fill"
                      >
                        <Img
                          className="h-3.5"
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                      src="images/img_image_15.png"
                      alt="Image Five"
                    />
                    <div className="flex flex-row gap-3 items-center justify-start w-[96%] md:w-full">
                      <div className="flex flex-col gap-[11px] items-start justify-start pr-1 pt-1">
                        <Text
                          className="text-sm text-white-A700"
                          size="txtInterBold14WhiteA700"
                        >
                          Dua Lipa Live Concert
                        </Text>
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtInterRegular14"
                        >
                          December 12, 2019
                        </Text>
                      </div>
                      <Button
                        className="flex h-7 items-center justify-center my-[9px] rounded-lg w-7"
                        color="white_A700_33"
                        size="xl"
                        variant="fill"
                      >
                        <Img
                          className="h-3.5"
                          src="images/img_checkmark.svg"
                          alt="checkmark One"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                      src="images/img_image_16.png"
                      alt="Image Six"
                    />
                    <div className="flex flex-row gap-3 items-center justify-start w-[96%] md:w-full">
                      <div className="flex flex-col gap-[11px] items-start justify-start pr-1 pt-1">
                        <Text
                          className="text-sm text-white-A700"
                          size="txtInterBold14WhiteA700"
                        >
                          Dua Lipa Live Concert
                        </Text>
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtInterRegular14"
                        >
                          December 12, 2019
                        </Text>
                      </div>
                      <Button
                        className="flex h-7 items-center justify-center my-[9px] rounded-lg w-7"
                        color="white_A700_33"
                        size="xl"
                        variant="fill"
                      >
                        <Img
                          className="h-3.5"
                          src="images/img_checkmark.svg"
                          alt="checkmark Two"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </List>
              <Button
                className="bg-transparent cursor-pointer flex items-center justify-center min-w-[90px] mt-[43px]"
                rightIcon={
                  <Img
                    className="h-3.5 ml-2"
                    src="images/img_arrowright_18X18.svg"
                    alt="arrow_right"
                  />
                }
                size="xs"
              >
                <div className="font-bold text-gray-500 text-left text-xs tracking-[1.00px] uppercase">
                  See more
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsPage;
