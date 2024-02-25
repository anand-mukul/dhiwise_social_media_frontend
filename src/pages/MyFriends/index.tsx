import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "/src/components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const MyFriendsPage: React.FC = () => {
  const navigate = useNavigate();

  const [frameonevalue, setFrameonevalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar1 className="!sticky !w-[165px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <div className="flex flex-1 flex-col md:gap-10 gap-[60px] items-center justify-start md:ml-[0] ml-[65px] md:px-5 w-full">
          <div className="bg-white-A700 flex sm:flex-col flex-row gap-[13px] items-center justify-start p-3 rounded-[12px] w-full">
            <Input
              name="FrameOne"
              placeholder="Search in social…"
              value={frameonevalue}
              onChange={(e) => setFrameonevalue(e)}
              className="!placeholder:text-gray-500 !text-gray-500 font-medium p-0 text-left text-sm w-full"
              wrapClassName="flex sm:flex-1 w-[89%] sm:w-full"
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
              shape="square"
              color="white_A700"
            ></Input>
            <Text
              className="text-gray-500 text-xs tracking-[1.00px] uppercase"
              size="txtInterBold12"
            >
              Filters
            </Text>
          </div>
          <div className="flex flex-col gap-10 items-center justify-start w-full">
            <div className="flex flex-row sm:gap-10 items-center justify-between pr-[9px] w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                size="txtInterBold30"
              >
                My Friends
              </Text>
              <Button
                className="bg-transparent cursor-pointer flex items-center justify-center min-w-[51px]"
                rightIcon={
                  <Img
                    className="h-3.5 mt-px ml-[3px]"
                    src="images/img_filter.svg"
                    alt="filter"
                  />
                }
                size="xs"
              >
                <div className="font-medium text-gray-900 text-left text-sm">
                  Filter
                </div>
              </Button>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-center justify-end p-[37px] sm:px-5 rounded-[12px] w-full">
                  <Img
                    className="h-[58px] md:h-auto mt-[3px] object-cover rounded-[18px] w-[58px]"
                    src="images/img_avatar.png"
                    alt="Avatar"
                  />
                  <div className="flex flex-col h-[85px] items-center justify-start w-[85px]">
                    <Text
                      className="text-base text-gray-900"
                      size="txtInterBold16"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="mt-1 text-gray-500 text-xs"
                      size="txtInterRegular12"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[84px] mt-[13px] rounded"
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
                        Freinds
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-center justify-end p-[37px] sm:px-5 rounded-[12px] w-full">
                  <Img
                    className="h-[58px] md:h-auto mt-[3px] object-cover rounded-[18px] w-[58px]"
                    src="images/img_avatar_11.png"
                    alt="Avatar One"
                  />
                  <div className="flex flex-col h-[85px] items-center justify-start w-[85px]">
                    <Text
                      className="text-base text-gray-900"
                      size="txtInterBold16"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="mt-1 text-gray-500 text-xs"
                      size="txtInterRegular12"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[84px] mt-[13px] rounded"
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
                        Freinds
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-center justify-end p-[37px] sm:px-5 rounded-[12px] w-full">
                  <Img
                    className="h-[58px] md:h-auto mt-[3px] object-cover rounded-[18px] w-[58px]"
                    src="images/img_avatar_21.png"
                    alt="Avatar Two"
                  />
                  <div className="flex flex-col h-[85px] items-center justify-start w-[85px]">
                    <Text
                      className="text-base text-gray-900"
                      size="txtInterBold16"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="mt-1 text-gray-500 text-xs"
                      size="txtInterRegular12"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[84px] mt-[13px] rounded"
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
                        Freinds
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-center justify-end p-[37px] sm:px-5 rounded-[12px] w-full">
                  <Img
                    className="h-[58px] md:h-auto mt-[3px] object-cover rounded-[18px] w-[58px]"
                    src="images/img_avatar_12.png"
                    alt="Avatar Three"
                  />
                  <div className="flex flex-col h-[85px] items-center justify-start w-[85px]">
                    <Text
                      className="text-base text-gray-900"
                      size="txtInterBold16"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="mt-1 text-gray-500 text-xs"
                      size="txtInterRegular12"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[84px] mt-[13px] rounded"
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
                        Freinds
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-center justify-end p-[37px] sm:px-5 rounded-[12px] w-full">
                  <Img
                    className="h-[58px] md:h-auto mt-[3px] object-cover rounded-[18px] w-[58px]"
                    src="images/img_avatar_7.png"
                    alt="Avatar Four"
                  />
                  <div className="flex flex-col h-[85px] items-center justify-start w-[85px]">
                    <Text
                      className="text-base text-gray-900"
                      size="txtInterBold16"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="mt-1 text-gray-500 text-xs"
                      size="txtInterRegular12"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[84px] mt-[13px] rounded"
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
                        Freinds
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-center justify-end p-[37px] sm:px-5 rounded-[12px] w-full">
                  <Img
                    className="h-[58px] md:h-auto mt-[3px] object-cover rounded-[18px] w-[58px]"
                    src="images/img_avatar_8.png"
                    alt="Avatar Five"
                  />
                  <div className="flex flex-col h-[85px] items-center justify-start w-[85px]">
                    <Text
                      className="text-base text-gray-900"
                      size="txtInterBold16"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="mt-1 text-gray-500 text-xs"
                      size="txtInterRegular12"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[84px] mt-[13px] rounded"
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
                        Freinds
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-center justify-end p-[37px] sm:px-5 rounded-[12px] w-full">
                  <Img
                    className="h-[58px] md:h-auto mt-[3px] object-cover rounded-[18px] w-[58px]"
                    src="images/img_avatar_58X58.png"
                    alt="Avatar Six"
                  />
                  <div className="flex flex-col h-[85px] items-center justify-start w-[85px]">
                    <Text
                      className="text-base text-gray-900"
                      size="txtInterBold16"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="mt-1 text-gray-500 text-xs"
                      size="txtInterRegular12"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[84px] mt-[13px] rounded"
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
                        Freinds
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-center justify-end p-[37px] sm:px-5 rounded-[12px] w-full">
                  <Img
                    className="h-[58px] md:h-auto mt-[3px] object-cover rounded-[18px] w-[58px]"
                    src="images/img_avatar_1.png"
                    alt="Avatar Seven"
                  />
                  <div className="flex flex-col h-[85px] items-center justify-start w-[85px]">
                    <Text
                      className="text-base text-gray-900"
                      size="txtInterBold16"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="mt-1 text-gray-500 text-xs"
                      size="txtInterRegular12"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[84px] mt-[13px] rounded"
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
                        Freinds
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-center justify-end p-[37px] sm:px-5 rounded-[12px] w-full">
                  <Img
                    className="h-[58px] md:h-auto mt-[3px] object-cover rounded-[18px] w-[58px]"
                    src="images/img_avatar_22.png"
                    alt="Avatar Eight"
                  />
                  <div className="flex flex-col h-[85px] items-center justify-start w-[85px]">
                    <Text
                      className="text-base text-gray-900"
                      size="txtInterBold16"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="mt-1 text-gray-500 text-xs"
                      size="txtInterRegular12"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[84px] mt-[13px] rounded"
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
                        Freinds
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 sm:flex-col flex-row font-sfprodisplay gap-2.5 items-center justify-start md:ml-[0] ml-[30px] pl-[5px] md:px-5 w-full">
          <div className="bg-gray-500_7e h-32 sm:mt-0 my-[448px] rounded-sm w-[2%]"></div>
          <div className="bg-gray-900 flex sm:flex-1 flex-col gap-[49px] justify-end p-[30px] sm:px-5 rounded-bl-[32px] rounded-tl-[32px] w-[97%] sm:w-full">
            <div className="flex flex-row gap-5 items-center justify-end md:ml-[0] ml-[214px] mr-2.5 mt-[15px] w-[35%] md:w-full">
              <Button
                className="common-pointer cursor-pointer font-bold h-12 rounded-[12px] sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center w-12"
                onClick={() => navigate("")}
                color="light_blue_200"
                size="lg"
                variant="fill"
              >
                1
              </Button>
              <Img
                className="h-12 md:h-auto object-cover rounded-[12px] w-12"
                src="images/img_avatar_48X48.png"
                alt="Avatar Nine"
              />
            </div>
            <div className="flex flex-col font-inter gap-[43px] items-start justify-start md:ml-[0] ml-[15px] mr-5 w-[90%] md:w-full">
              <Text
                className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                size="txtInterBold22WhiteA700"
              >
                Who to Follow
              </Text>
              <List
                className="flex flex-col gap-[30px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-row items-start justify-between w-full">
                  <Img
                    className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                    src="images/img_avatar.png"
                    alt="Avatar Ten"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start pr-[3px] pt-[3px]">
                    <Text
                      className="text-sm text-white-A700"
                      size="txtInterBold14WhiteA700"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="text-white-A700 text-xs"
                      size="txtInterRegular12WhiteA700"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button
                    className="flex h-7 items-center justify-center my-[5px] rounded-lg w-7"
                    shape="round"
                    color="indigo_A200"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-3.5"
                      src="images/img_camera_1.svg"
                      alt="camera"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-full">
                  <Img
                    className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                    src="images/img_avatar_12.png"
                    alt="Avatar Eleven"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start pr-[3px] pt-[3px]">
                    <Text
                      className="text-sm text-white-A700"
                      size="txtInterBold14WhiteA700"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="text-white-A700 text-xs"
                      size="txtInterRegular12WhiteA700"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button
                    className="flex h-7 items-center justify-center my-[5px] rounded-lg w-7"
                    shape="round"
                    color="indigo_A200"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-3.5"
                      src="images/img_camera_1.svg"
                      alt="camera One"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-full">
                  <Img
                    className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                    src="images/img_avatar_5.png"
                    alt="Avatar Twelve"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start pr-[3px] pt-[3px]">
                    <Text
                      className="text-sm text-white-A700"
                      size="txtInterBold14WhiteA700"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="text-white-A700 text-xs"
                      size="txtInterRegular12WhiteA700"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button
                    className="flex h-7 items-center justify-center my-[5px] rounded-lg w-7"
                    shape="round"
                    color="indigo_A200"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-3.5"
                      src="images/img_camera_1.svg"
                      alt="camera Two"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-full">
                  <Img
                    className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                    src="images/img_avatar_23.png"
                    alt="Avatar Thirteen"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start pr-[3px] pt-[3px]">
                    <Text
                      className="text-sm text-white-A700"
                      size="txtInterBold14WhiteA700"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="text-white-A700 text-xs"
                      size="txtInterRegular12WhiteA700"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button
                    className="flex h-7 items-center justify-center my-[5px] rounded-lg w-7"
                    shape="round"
                    color="indigo_A200"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-3.5"
                      src="images/img_camera_1.svg"
                      alt="camera Three"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-full">
                  <Img
                    className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                    src="images/img_avatar_1.png"
                    alt="Avatar Fourteen"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start pr-[3px] pt-[3px]">
                    <Text
                      className="text-sm text-white-A700"
                      size="txtInterBold14WhiteA700"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="text-white-A700 text-xs"
                      size="txtInterRegular12WhiteA700"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button
                    className="flex h-7 items-center justify-center my-[5px] rounded-lg w-7"
                    shape="round"
                    color="indigo_A200"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-3.5"
                      src="images/img_camera_1.svg"
                      alt="camera Four"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-full">
                  <Img
                    className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                    src="images/img_avatar_14.png"
                    alt="Avatar Fifteen"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start pr-[3px] pt-[3px]">
                    <Text
                      className="text-sm text-white-A700"
                      size="txtInterBold14WhiteA700"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="text-white-A700 text-xs"
                      size="txtInterRegular12WhiteA700"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button
                    className="flex h-7 items-center justify-center my-[5px] rounded-lg w-7"
                    shape="round"
                    color="indigo_A200"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-3.5"
                      src="images/img_camera_1.svg"
                      alt="camera Five"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-full">
                  <Img
                    className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                    src="images/img_avatar_24.png"
                    alt="Avatar Sixteen"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start pr-[3px] pt-[3px]">
                    <Text
                      className="text-sm text-white-A700"
                      size="txtInterBold14WhiteA700"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="text-white-A700 text-xs"
                      size="txtInterRegular12WhiteA700"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button
                    className="flex h-7 items-center justify-center my-[5px] rounded-lg w-7"
                    shape="round"
                    color="indigo_A200"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-3.5"
                      src="images/img_camera_1.svg"
                      alt="camera Six"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-full">
                  <Img
                    className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                    src="images/img_avatar_25.png"
                    alt="Avatar Seventeen"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start pr-[3px] pt-[3px]">
                    <Text
                      className="text-sm text-white-A700"
                      size="txtInterBold14WhiteA700"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="text-white-A700 text-xs"
                      size="txtInterRegular12WhiteA700"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button
                    className="flex h-7 items-center justify-center my-[5px] rounded-lg w-7"
                    shape="round"
                    color="indigo_A200"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-3.5"
                      src="images/img_camera_1.svg"
                      alt="camera Seven"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-full">
                  <Img
                    className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                    src="images/img_avatar_22.png"
                    alt="Avatar Eighteen"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start pr-[3px] pt-[3px]">
                    <Text
                      className="text-sm text-white-A700"
                      size="txtInterBold14WhiteA700"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="text-white-A700 text-xs"
                      size="txtInterRegular12WhiteA700"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button
                    className="flex h-7 items-center justify-center my-[5px] rounded-lg w-7"
                    shape="round"
                    color="indigo_A200"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-3.5"
                      src="images/img_camera_1.svg"
                      alt="camera Eight"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-full">
                  <Img
                    className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                    src="images/img_avatar_21.png"
                    alt="Avatar Nineteen"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start pr-[3px] pt-[3px]">
                    <Text
                      className="text-sm text-white-A700"
                      size="txtInterBold14WhiteA700"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="text-white-A700 text-xs"
                      size="txtInterRegular12WhiteA700"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button
                    className="flex h-7 items-center justify-center my-[5px] rounded-lg w-7"
                    shape="round"
                    color="indigo_A200"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-3.5"
                      src="images/img_camera_1.svg"
                      alt="camera Nine"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-full">
                  <Img
                    className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                    src="images/img_avatar_26.png"
                    alt="Avatar Twenty"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start pr-[3px] pt-[3px]">
                    <Text
                      className="text-sm text-white-A700"
                      size="txtInterBold14WhiteA700"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="text-white-A700 text-xs"
                      size="txtInterRegular12WhiteA700"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button
                    className="flex h-7 items-center justify-center my-[5px] rounded-lg w-7"
                    shape="round"
                    color="indigo_A200"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-3.5"
                      src="images/img_camera_1.svg"
                      alt="camera Ten"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-full">
                  <Img
                    className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                    src="images/img_avatar_7.png"
                    alt="Avatar TwentyOne"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start pr-[3px] pt-[3px]">
                    <Text
                      className="text-sm text-white-A700"
                      size="txtInterBold14WhiteA700"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="text-white-A700 text-xs"
                      size="txtInterRegular12WhiteA700"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button
                    className="flex h-7 items-center justify-center my-[5px] rounded-lg w-7"
                    shape="round"
                    color="indigo_A200"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-3.5"
                      src="images/img_camera_1.svg"
                      alt="camera Eleven"
                    />
                  </Button>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyFriendsPage;
