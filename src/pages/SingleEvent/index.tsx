import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "/src/components";
import Sidebar1 from "components/Sidebar1";

const SingleEventPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-sfprodisplay sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar1 className="!sticky !w-[165px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <div className="flex-1 h-[1024px] sm:h-[1609px] md:h-[1610px] md:px-5 relative w-full">
          <div className="flex md:flex-col flex-row gap-2.5 h-full items-center justify-between m-auto w-full">
            <Line className="bg-white-A700_7e h-32 md:h-[5px] md:mt-0 my-[448px] rounded-sm w-[5px] md:w-full" />
            <div className="bg-white-A700 h-[1024px] rounded-bl-[32px] rounded-tl-[32px] w-[99%]"></div>
          </div>
          <div className="absolute flex flex-col gap-10 h-max inset-y-[0] items-start justify-start left-[7%] my-auto w-1/2">
            <Button
              className="common-pointer cursor-pointer flex items-center justify-center min-w-[103px] rounded-[12px]"
              onClick={() => navigate("")}
              leftIcon={
                <Img
                  className="h-[18px] ml-5 mr-2.5 my-5"
                  src="images/img_arrowleft_18X18.svg"
                  alt="arrow_left"
                />
              }
              color="gray_100"
              size="2xl"
              variant="fill"
            >
              <div className="font-bold text-left text-sm">Back</div>
            </Button>
            <div className="flex flex-col font-inter items-center justify-start pb-2 w-full">
              <div className="flex flex-col gap-10 items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                    <div className="flex sm:flex-1 flex-col items-center justify-start w-[26%] sm:w-full">
                      <div className="flex flex-row gap-2.5 items-end justify-between w-full">
                        <Img
                          className="h-12 md:h-auto object-cover rounded-[12px] w-12"
                          src="images/img_avatar.png"
                          alt="Avatar"
                        />
                        <div className="flex flex-col gap-[7px] items-start justify-start my-[5px]">
                          <Text
                            className="text-gray-900 text-sm"
                            size="txtInterMedium14"
                          >
                            Gunther Ackner
                          </Text>
                          <Text
                            className="text-gray-500 text-xs"
                            size="txtInterRegular12"
                          >
                            3 days ago
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-1 flex-row gap-[15px] items-center justify-between w-[39%] sm:w-full">
                      <div className="flex flex-row items-center justify-end p-1.5">
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_reply.svg"
                          alt="reply"
                        />
                        <Text
                          className="ml-1 text-gray-900 text-sm"
                          size="txtInterMedium14"
                        >
                          Share
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[101px] my-1"
                        leftIcon={
                          <Img
                            className="h-3.5 ml-[9px] mr-[3px] my-2"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                        }
                        shape="round"
                        color="green_400"
                        size="md"
                        variant="fill"
                      >
                        <div className="font-medium text-left text-sm">
                          Interested
                        </div>
                      </Button>
                      <Img
                        className="h-[38px] w-[38px]"
                        src="images/img_overflowmenu.svg"
                        alt="overflowmenu"
                      />
                    </div>
                  </div>
                  <Img
                    className="h-[330px] sm:h-auto mt-10 object-cover rounded-lg w-full"
                    src="images/img_image_12.png"
                    alt="Image"
                  />
                  <Text
                    className="mt-10 text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                    size="txtInterBold30"
                  >
                    2019 DUB Show at Los Angeles Auto Show
                  </Text>
                  <div className="flex flex-row gap-[90px] items-center justify-start mt-[30px] w-[66%] md:w-full">
                    <div className="flex flex-row gap-2.5 items-end justify-between w-[47%]">
                      <Button
                        className="flex h-12 items-center justify-center rounded-[12px] w-12"
                        color="gray_100"
                        size="xl"
                        variant="fill"
                      >
                        <Img
                          className="h-[18px]"
                          src="images/img_clock.svg"
                          alt="clock"
                        />
                      </Button>
                      <div className="flex flex-col gap-[5px] items-start justify-start mb-1 mt-2">
                        <Text
                          className="text-gray-900 text-sm"
                          size="txtInterBold14"
                        >
                          12 December, 2019{" "}
                        </Text>
                        <Text
                          className="text-gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          From 9:00am to 6:00pm
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-between w-[32%]">
                      <Button
                        className="flex h-12 items-center justify-center rounded-[12px] w-12"
                        color="gray_100"
                        size="xl"
                        variant="fill"
                      >
                        <Img
                          className="h-[18px]"
                          src="images/img_reply_48X48.svg"
                          alt="reply One"
                        />
                      </Button>
                      <div className="flex flex-col items-start justify-start pb-1 pr-1">
                        <Text
                          className="text-gray-900 text-sm"
                          size="txtInterBold14"
                        >
                          $60 - $90
                        </Text>
                        <Text
                          className="mt-[3px] text-gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          +30% Taxes
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-8 items-start justify-start w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Text
                      className="text-base text-gray-900"
                      size="txtInterBold16"
                    >
                      Event Description
                    </Text>
                    <Text
                      className="leading-[22.00px] text-gray-500 text-sm w-full"
                      size="txtInterRegular14"
                    >
                      For evidence of the double standard, we need look no
                      farther than Arlington, Oregon, where Mayor Carmen
                      Kontur-Gronquist was recalled in a 142-139 vote after the
                      town’s denizens discovered that the mayor’s MySpace page
                      featured photos of her in lingerie. Although
                      Kontur-Gronquist is alleging election fraud and
                      challenging the returns, and even though the mayoral
                      position was unpaid, no one is arguing that her MySpace
                      page did her in.{" "}
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-3/5 md:w-full">
                    <div className="bg-gray-100_90 h-5 relative rounded w-[11%] sm:w-full">
                      <Text
                        className="ml-[7px] my-auto text-white-A700 text-xs"
                        size="txtSFProDisplayRegular12"
                      >
                        Car
                      </Text>
                      <Button
                        className="absolute cursor-pointer font-inter h-full inset-[0] justify-center m-auto min-w-[38px] text-center text-xs"
                        shape="round"
                        color="gray_100_90"
                        size="xs"
                        variant="fill"
                      >
                        Car
                      </Button>
                    </div>
                    <Text
                      className="bg-gray-100_90 h-5 justify-center pl-[7px] pr-1 pt-1 rounded text-gray-500 text-xs w-[82px]"
                      size="txtInterRegular12"
                    >
                      Los Angeles
                    </Text>
                    <Button
                      className="cursor-pointer min-w-[70px] text-center text-xs"
                      shape="round"
                      color="gray_100_90"
                      size="xs"
                      variant="fill"
                    >
                      Exhibition
                    </Button>
                    <Button
                      className="cursor-pointer min-w-[44px] text-center text-xs"
                      shape="round"
                      color="gray_100_90"
                      size="xs"
                      variant="fill"
                    >
                      Auto
                    </Button>
                    <Button
                      className="cursor-pointer min-w-[44px] text-center text-xs"
                      shape="round"
                      color="gray_100_90"
                      size="xs"
                      variant="fill"
                    >
                      DUB
                    </Button>
                    <Button
                      className="cursor-pointer min-w-[49px] text-center text-xs"
                      shape="round"
                      color="gray_100_90"
                      size="xs"
                      variant="fill"
                    >
                      Show
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex sm:flex-col flex-row gap-2.5 h-full inset-y-[0] items-center justify-between my-auto right-[0] w-[36%]">
            <Line className="bg-gray-500_7e h-32 sm:h-[5px] sm:mt-0 my-[448px] rounded-[2.5px] w-[5px] sm:w-full" />
            <div className="bg-gray-900 flex flex-col gap-[49px] items-end justify-start p-10 sm:px-5 rounded-bl-[32px] rounded-tl-[32px]">
              <div className="flex flex-row gap-5 items-center justify-end mt-[5px] w-[33%] md:w-full">
                <Button
                  className="common-pointer cursor-pointer font-bold h-12 rounded-[12px] sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center w-12"
                  onClick={() => navigate("/notifications")}
                  color="light_blue_200"
                  size="lg"
                  variant="fill"
                >
                  1
                </Button>
                <Img
                  className="h-12 md:h-auto object-cover rounded-[12px] w-12"
                  src="images/img_avatar_48X48.png"
                  alt="Avatar One"
                />
              </div>
              <div className="flex flex-col font-inter md:gap-10 gap-[60px] items-center justify-start mb-7 w-[97%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtInterBold22"
                    >
                      Address
                    </Text>
                    <Img
                      className="h-60 sm:h-auto mt-[33px] object-cover rounded-lg w-full"
                      src="images/img_image_240X340.png"
                      alt="Image One"
                    />
                    <div className="flex flex-row items-center justify-between mt-[30px] w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-between w-[52%]">
                        <Button
                          className="flex h-12 items-center justify-center rounded-[12px] w-12"
                          color="white_A700_33"
                          size="xl"
                          variant="fill"
                        >
                          <Img
                            className="h-[18px]"
                            src="images/img_map.svg"
                            alt="map"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start pr-1 py-1">
                          <Text
                            className="text-sm text-white-A700"
                            size="txtInterBold14WhiteA700"
                          >
                            Los Angeles, CA
                          </Text>
                          <Text
                            className="my-0.5 text-gray-500 text-xs"
                            size="txtInterRegular12"
                          >
                            189 The Grove Dr
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-medium min-w-[82px] text-center text-sm"
                        shape="round"
                        color="gray_500_99"
                        size="md"
                        variant="outline"
                      >
                        Directions
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[45px] items-start justify-start w-full">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                    size="txtInterBold22"
                  >
                    Friends Interested
                  </Text>
                  <List
                    className="flex flex-col gap-[30px] items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row items-center justify-start w-full">
                      <Img
                        className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                        src="images/img_avatar_4.png"
                        alt="Avatar Two"
                      />
                      <Text
                        className="ml-2.5 text-sm text-white-A700"
                        size="txtInterMedium14WhiteA700"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex h-7 items-center justify-center ml-[159px] my-[5px] rounded-lg w-7"
                        color="green_400"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-3.5"
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-start w-full">
                      <Img
                        className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                        src="images/img_avatar.png"
                        alt="Avatar Three"
                      />
                      <Text
                        className="ml-2.5 text-sm text-white-A700"
                        size="txtInterMedium14WhiteA700"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex h-7 items-center justify-center ml-[159px] my-[5px] rounded-lg w-7"
                        color="green_400"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-3.5"
                          src="images/img_checkmark.svg"
                          alt="checkmark One"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-start w-full">
                      <Img
                        className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                        src="images/img_avatar_5.png"
                        alt="Avatar Four"
                      />
                      <Text
                        className="ml-2.5 text-sm text-white-A700"
                        size="txtInterMedium14WhiteA700"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex h-7 items-center justify-center ml-[159px] my-[5px] rounded-lg w-7"
                        color="green_400"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-3.5"
                          src="images/img_checkmark.svg"
                          alt="checkmark Two"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-start w-full">
                      <Img
                        className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                        src="images/img_avatar_6.png"
                        alt="Avatar Five"
                      />
                      <Text
                        className="ml-2.5 text-sm text-white-A700"
                        size="txtInterMedium14WhiteA700"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex h-7 items-center justify-center ml-[159px] my-[5px] rounded-lg w-7"
                        color="green_400"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-3.5"
                          src="images/img_checkmark.svg"
                          alt="checkmark Three"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-start w-full">
                      <Img
                        className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                        src="images/img_avatar_7.png"
                        alt="Avatar Six"
                      />
                      <Text
                        className="ml-2.5 text-sm text-white-A700"
                        size="txtInterMedium14WhiteA700"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex h-7 items-center justify-center ml-[159px] my-[5px] rounded-lg w-7"
                        color="green_400"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-3.5"
                          src="images/img_send_20X20.svg"
                          alt="send"
                        />
                      </Button>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleEventPage;
