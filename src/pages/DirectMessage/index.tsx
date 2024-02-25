import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "/src/components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const DirectMessagePage: React.FC = () => {
  const navigate = useNavigate();

  const [searchvalue, setSearchvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-sfprodisplay items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-[45px] items-center justify-between w-full">
          <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-[45px] items-start justify-between md:px-5 w-[42%] md:w-full">
            <Sidebar1 className="!sticky !w-[165px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
            <div className="flex flex-1 flex-col gap-10 items-center justify-start w-full">
              <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-[92%] md:w-full">
                <div className="flex flex-row gap-[15px] items-center justify-between w-[98%] md:w-full">
                  <Input
                    name="Search"
                    placeholder="Search in social…"
                    value={searchvalue}
                    onChange={(e) => setSearchvalue(e)}
                    className="!placeholder:text-gray-500 !text-gray-500 font-medium p-0 text-left text-sm w-full"
                    wrapClassName="flex"
                    prefix={
                      <Img
                        className="cursor-pointer h-[18px] ml-5 mr-[15px] my-5"
                        src="images/img_search.svg"
                        alt="search"
                      />
                    }
                    suffix={
                      <CloseSVG
                        fillColor="#8f92a1"
                        className="cursor-pointer h-[18px] my-auto"
                        onClick={() => setSearchvalue("")}
                        style={{
                          visibility:
                            searchvalue?.length <= 0 ? "hidden" : "visible",
                        }}
                        height={18}
                        width={18}
                        viewBox="0 0 18 18"
                      />
                    }
                    size="sm"
                  ></Input>
                  <Button
                    className="flex h-12 items-center justify-center my-[5px] rounded-[12px] w-12"
                    color="green_400"
                    size="lg"
                    variant="fill"
                  >
                    <Img
                      className="h-[22px]"
                      src="images/img_laptop_14X14.svg"
                      alt="laptop"
                    />
                  </Button>
                </div>
                <div className="flex flex-col font-inter gap-10 items-start justify-start w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                    size="txtInterBold30"
                  >
                    Inbox
                  </Text>
                  <div className="flex flex-row items-start justify-start w-[84%] md:w-full">
                    <div className="flex flex-col gap-[7px] items-center justify-start mt-[3px] w-[39%]">
                      <Text
                        className="text-gray-900 text-sm"
                        size="txtInterBold14"
                      >
                        Direct Messages
                      </Text>
                      <Line className="bg-gray-900 h-0.5 w-full" />
                    </div>
                    <div className="flex flex-col items-center justify-start ml-5 mt-[3px]">
                      <Text
                        className="common-pointer text-gray-500 text-sm"
                        size="txtInterBold14Gray500"
                        onClick={() => navigate("")}
                      >
                        Group Chat
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start ml-[23px]">
                      <Text
                        className="text-gray-500 text-sm"
                        size="txtInterBold14Gray500"
                      >
                        Archived
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-inter gap-5 items-center justify-start w-full">
                <List
                  className="flex flex-col gap-10 items-center w-[90%]"
                  orientation="vertical"
                >
                  <div className="flex flex-row items-start justify-between my-0 w-full">
                    <div className="flex flex-row gap-[13px] items-end justify-between w-3/5">
                      <div className="h-12 relative w-1/4">
                        <Img
                          className="absolute h-12 inset-y-[0] left-[0] my-auto object-cover rounded-[12px] w-12"
                          src="images/img_avatar_28X28.png"
                          alt="Avatar"
                        />
                        <div className="absolute h-3 right-[0] top-[0] w-[30%]">
                          <div className="bg-gray-100 h-3 m-auto rounded-[7.58px] w-full"></div>
                          <div className="absolute bg-green-400 h-2.5 inset-x-[0] mx-auto rounded-[50%] top-[0] w-2.5"></div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 items-start justify-start mb-[3px] mt-[7px]">
                        <Text
                          className="text-gray-900 text-sm"
                          size="txtInterMedium14"
                        >
                          Billy Green
                        </Text>
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtInterRegular14"
                        >
                          Thank you for sharing
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-start mt-[3px] pl-1 pt-1 w-1/4">
                      <Text
                        className="text-gray-500 text-xs"
                        size="txtInterRegular12"
                      >
                        3:03pm
                      </Text>
                      <Button
                        className="cursor-pointer font-bold font-sfprodisplay mt-0.5 rounded-md text-[10px] text-center tracking-[1.00px] uppercase w-[17px]"
                        shape="round"
                        color="red_A200"
                        size="xs"
                        variant="fill"
                      >
                        1
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-between my-0 w-full">
                    <div className="flex flex-row gap-[13px] items-end justify-between w-3/5">
                      <div className="h-12 relative w-1/4">
                        <Img
                          className="absolute h-12 inset-y-[0] left-[0] my-auto object-cover rounded-[12px] w-12"
                          src="images/img_image_10.png"
                          alt="Avatar One"
                        />
                        <div className="absolute h-3 right-[0] top-[0] w-[30%]">
                          <div className="bg-gray-100 h-3 m-auto rounded-[7.58px] w-full"></div>
                          <div className="absolute bg-green-400 h-2.5 inset-x-[0] mx-auto rounded-[50%] top-[0] w-2.5"></div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 items-start justify-start mb-[3px] mt-[7px]">
                        <Text
                          className="text-gray-900 text-sm"
                          size="txtInterMedium14"
                        >
                          Billy Green
                        </Text>
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtInterRegular14"
                        >
                          Thank you for sharing
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-start mt-[3px] pl-1 pt-1 w-1/4">
                      <Text
                        className="text-gray-500 text-xs"
                        size="txtInterRegular12"
                      >
                        3:03pm
                      </Text>
                      <Button
                        className="cursor-pointer font-bold font-sfprodisplay mt-0.5 rounded-md text-[10px] text-center tracking-[1.00px] uppercase w-[17px]"
                        shape="round"
                        color="red_A200"
                        size="xs"
                        variant="fill"
                      >
                        1
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-between my-0 w-full">
                    <div className="flex flex-row gap-[13px] items-end justify-between w-3/5">
                      <div className="h-12 relative w-1/4">
                        <Img
                          className="absolute h-12 inset-y-[0] left-[0] my-auto object-cover rounded-[12px] w-12"
                          src="images/img_image_8.png"
                          alt="Avatar Two"
                        />
                        <div className="absolute h-3 right-[0] top-[0] w-[30%]">
                          <div className="bg-gray-100 h-3 m-auto rounded-[7.58px] w-full"></div>
                          <div className="absolute bg-green-400 h-2.5 inset-x-[0] mx-auto rounded-[50%] top-[0] w-2.5"></div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 items-start justify-start mb-[3px] mt-[7px]">
                        <Text
                          className="text-gray-900 text-sm"
                          size="txtInterMedium14"
                        >
                          Billy Green
                        </Text>
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtInterRegular14"
                        >
                          Thank you for sharing
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-start mt-[3px] pl-1 pt-1 w-1/4">
                      <Text
                        className="text-gray-500 text-xs"
                        size="txtInterRegular12"
                      >
                        3:03pm
                      </Text>
                      <Button
                        className="cursor-pointer font-bold font-sfprodisplay mt-0.5 rounded-md text-[10px] text-center tracking-[1.00px] uppercase w-[17px]"
                        shape="round"
                        color="red_A200"
                        size="xs"
                        variant="fill"
                      >
                        1
                      </Button>
                    </div>
                  </div>
                </List>
                <div className="bg-white-A700 flex flex-col items-center justify-start p-5 rounded-[12px] w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-row gap-[13px] items-end justify-between w-3/5">
                      <div className="h-12 relative w-1/4">
                        <Img
                          className="absolute h-12 inset-y-[0] left-[0] my-auto object-cover rounded-[12px] w-12"
                          src="images/img_avatar_17.png"
                          alt="Avatar Three"
                        />
                        <div className="absolute h-3 right-[0] top-[0] w-[30%]">
                          <div className="bg-gray-100 h-3 m-auto rounded-[7.58px] w-full"></div>
                          <div className="absolute bg-green-400 h-2.5 inset-x-[0] mx-auto rounded-[50%] top-[0] w-2.5"></div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 items-start justify-start mb-[3px] mt-[7px]">
                        <Text
                          className="text-gray-900 text-sm"
                          size="txtInterMedium14"
                        >
                          Billy Green
                        </Text>
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtInterRegular14"
                        >
                          Thank you for sharing
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-start mt-[3px]">
                      <Text
                        className="mb-[19px] mt-1 text-gray-500 text-xs"
                        size="txtInterRegular12"
                      >
                        Yesterday
                      </Text>
                    </div>
                  </div>
                </div>
                <List
                  className="flex flex-col gap-10 items-center w-[90%]"
                  orientation="vertical"
                >
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-row gap-[13px] items-end justify-between w-3/5">
                      <div className="h-12 relative w-1/4">
                        <Img
                          className="absolute h-12 inset-y-[0] left-[0] my-auto object-cover rounded-[12px] w-12"
                          src="images/img_avatar_2.png"
                          alt="Avatar Four"
                        />
                        <div className="absolute h-3 right-[0] top-[0] w-[30%]">
                          <div className="bg-gray-100 h-3 m-auto rounded-[7.58px] w-full"></div>
                          <div className="absolute bg-green-400 h-2.5 inset-x-[0] mx-auto rounded-[50%] top-[0] w-2.5"></div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 items-start justify-start mb-[3px] mt-[7px]">
                        <Text
                          className="text-gray-900 text-sm"
                          size="txtInterMedium14"
                        >
                          Billy Green
                        </Text>
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtInterRegular14"
                        >
                          Thank you for sharing
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-start mt-[3px]">
                      <Text
                        className="mb-[19px] mt-1 text-gray-500 text-xs"
                        size="txtInterRegular12"
                      >
                        Yesterday
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-row gap-[13px] items-end justify-between w-3/5">
                      <div className="h-12 relative w-1/4">
                        <Img
                          className="absolute h-12 inset-y-[0] left-[0] my-auto object-cover rounded-[12px] w-12"
                          src="images/img_avatar_20.png"
                          alt="Avatar Five"
                        />
                        <div className="absolute h-3 right-[0] top-[0] w-[30%]">
                          <div className="bg-gray-100 h-3 m-auto rounded-[7.58px] w-full"></div>
                          <div className="absolute bg-green-400 h-2.5 inset-x-[0] mx-auto rounded-[50%] top-[0] w-2.5"></div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 items-start justify-start mb-[3px] mt-[7px]">
                        <Text
                          className="text-gray-900 text-sm"
                          size="txtInterMedium14"
                        >
                          Billy Green
                        </Text>
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtInterRegular14"
                        >
                          Thank you for sharing
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-start mt-[3px]">
                      <Text
                        className="mb-6 mt-[3px] text-gray-500 text-xs"
                        size="txtInterRegular12"
                      >
                        Oct 26
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-row gap-[13px] items-end justify-between w-3/5">
                      <div className="h-12 relative w-1/4">
                        <Img
                          className="absolute h-12 inset-y-[0] left-[0] my-auto object-cover rounded-[12px] w-12"
                          src="images/img_avatar_18.png"
                          alt="Avatar Six"
                        />
                        <div className="absolute h-3 right-[0] top-[0] w-[30%]">
                          <div className="bg-gray-100 h-3 m-auto rounded-[7.58px] w-full"></div>
                          <div className="absolute bg-green-400 h-2.5 inset-x-[0] mx-auto rounded-[50%] top-[0] w-2.5"></div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 items-start justify-start mb-[3px] mt-[7px]">
                        <Text
                          className="text-gray-900 text-sm"
                          size="txtInterMedium14"
                        >
                          Billy Green
                        </Text>
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtInterRegular14"
                        >
                          Thank you for sharing
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5 items-end justify-start mt-[3px] pl-[3px] pt-[3px] w-1/4">
                      <Text
                        className="text-gray-500 text-xs"
                        size="txtInterRegular12"
                      >
                        Oct 26
                      </Text>
                      <Button
                        className="cursor-pointer font-bold font-sfprodisplay rounded-md text-[10px] text-center tracking-[1.00px] uppercase w-[17px]"
                        shape="round"
                        color="red_A200"
                        size="xs"
                        variant="fill"
                      >
                        1
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-row gap-[13px] items-end justify-between w-3/5">
                      <div className="h-12 relative w-1/4">
                        <Img
                          className="absolute h-12 inset-y-[0] left-[0] my-auto object-cover rounded-[12px] w-12"
                          src="images/img_image_7.png"
                          alt="Avatar Seven"
                        />
                        <div className="absolute h-3 right-[0] top-[0] w-[30%]">
                          <div className="bg-gray-100 h-3 m-auto rounded-[7.58px] w-full"></div>
                          <div className="absolute bg-green-400 h-2.5 inset-x-[0] mx-auto rounded-[50%] top-[0] w-2.5"></div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 items-start justify-start mb-[3px] mt-[7px]">
                        <Text
                          className="text-gray-900 text-sm"
                          size="txtInterMedium14"
                        >
                          Billy Green
                        </Text>
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtInterRegular14"
                        >
                          Thank you for sharing
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5 items-end justify-start mt-[3px] pl-[3px] pt-[3px] w-1/4">
                      <Text
                        className="text-gray-500 text-xs"
                        size="txtInterRegular12"
                      >
                        Oct 26
                      </Text>
                      <Button
                        className="cursor-pointer font-bold font-sfprodisplay rounded-md text-[10px] text-center tracking-[1.00px] uppercase w-[17px]"
                        shape="round"
                        color="red_A200"
                        size="xs"
                        variant="fill"
                      >
                        1
                      </Button>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 md:flex-col flex-row gap-2.5 items-center justify-between md:px-5 w-[56%] md:w-full">
            <div className="bg-gray-500_48 h-32 md:mt-0 my-[448px] rounded-sm w-[1%]"></div>
            <div className="bg-white-A700 flex flex-col md:gap-10 gap-[60px] items-end justify-end p-10 sm:px-5 rounded-bl-[32px] rounded-tl-[32px]">
              <div className="flex flex-row gap-5 items-center justify-end mt-[5px] w-[17%] md:w-full">
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
                  alt="Avatar Eight"
                />
              </div>
              <div className="flex flex-col font-inter items-start justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[99%] md:w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-between w-[30%] md:w-full">
                    <div
                      className="bg-cover bg-no-repeat md:h-[15px] h-[58px] pb-[42px] md:pl-10 sm:pl-5 pl-[42px] relative rounded-[16px] w-[58px]"
                      style={{
                        backgroundImage: "url('images/img_avatar.png')",
                      }}
                    >
                      <Img
                        className="absolute h-[15px] right-[0] top-[0] w-[15px]"
                        src="images/img_settings_15X15.svg"
                        alt="settings Two"
                      />
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start">
                      <Text
                        className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                        size="txtInterBold22Gray900"
                      >
                        Marriet Miles
                      </Text>
                      <Text
                        className="text-gray-500 text-sm"
                        size="txtInterMedium14Gray500"
                      >
                        Online
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-8 md:ml-[0] ml-[254px] w-8"
                    src="images/img_user_32X32.svg"
                    alt="user One"
                  />
                  <Img
                    className="h-[25px] ml-10 md:ml-[0] w-[25px]"
                    src="images/img_call.svg"
                    alt="call"
                  />
                  <Img
                    className="common-pointer h-[25px] ml-10 md:ml-[0] w-[25px]"
                    src="images/img_videocamera.svg"
                    alt="videocamera"
                    onClick={() => navigate("")}
                  />
                  <Img
                    className="h-[25px] ml-10 md:ml-[0] w-[25px]"
                    src="images/img_overflowmenu.svg"
                    alt="overflowmenu"
                  />
                </div>
                <div className="flex flex-col items-start justify-start mt-[70px] w-[43%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                      <Img
                        className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                        src="images/img_avatar_48X48.png"
                        alt="Avatar Nine"
                      />
                      <div className="flex flex-col gap-[9px] items-start justify-start">
                        <div className="flex flex-row items-start justify-start pr-[3px] pt-[3px] w-[57%] md:w-full">
                          <Text
                            className="text-gray-900 text-sm"
                            size="txtInterBold14"
                          >
                            Anne Carry
                          </Text>
                          <Text
                            className="ml-[5px] text-gray-500 text-xs"
                            size="txtInterRegular12"
                          >
                            4min
                          </Text>
                        </div>
                        <div className="bg-gray-100 flex flex-row items-center justify-between p-2.5 rounded-[12px] w-full">
                          <Button
                            className="flex h-[38px] items-center justify-center rounded-[12px] w-[38px]"
                            color="light_blue_200_33"
                            size="lg"
                            variant="fill"
                          >
                            <Img
                              className="h-[18px]"
                              src="images/img_forward.svg"
                              alt="forward"
                            />
                          </Button>
                          <Line className="bg-gray-500_7e h-1 my-[17px] rounded-sm w-[68%]" />
                          <Text
                            className="text-gray-500 text-xs"
                            size="txtInterRegular12"
                          >
                            0:06
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <List
                    className="flex flex-col gap-10 mt-[49px] w-[84%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row gap-[15px] items-start justify-between pb-[3px] pr-[3px] w-full">
                      <Img
                        className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                        src="images/img_avatar.png"
                        alt="Avatar Ten"
                      />
                      <div className="flex flex-col gap-3.5 items-start justify-start mb-1.5">
                        <div className="flex flex-row items-start justify-start pr-0.5 py-0.5 w-[72%] md:w-full">
                          <Text
                            className="text-gray-900 text-sm"
                            size="txtInterBold14"
                          >
                            Marriet Miles
                          </Text>
                          <Text
                            className="ml-[5px] text-gray-500 text-xs"
                            size="txtInterRegular12"
                          >
                            4min
                          </Text>
                        </div>
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtInterRegular14"
                        >
                          Yes, I saw his post yesterday
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[15px] items-start justify-between pb-[3px] pr-[3px] w-full">
                      <Img
                        className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                        src="images/img_avatar_48X48.png"
                        alt="Avatar Eleven"
                      />
                      <div className="flex flex-col gap-3.5 items-start justify-start mb-1.5">
                        <div className="flex flex-row items-start justify-start pr-0.5 py-0.5 w-[72%] md:w-full">
                          <Text
                            className="text-gray-900 text-sm"
                            size="txtInterBold14"
                          >
                            Marriet Miles
                          </Text>
                          <Text
                            className="ml-[5px] text-gray-500 text-xs"
                            size="txtInterRegular12"
                          >
                            4min
                          </Text>
                        </div>
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtInterRegular14"
                        >
                          Yes, I saw his post yesterday
                        </Text>
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-col items-center justify-start mt-10 w-full">
                    <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                      <Img
                        className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                        src="images/img_avatar.png"
                        alt="Avatar Twelve"
                      />
                      <div className="flex flex-col gap-[9px] items-start justify-start">
                        <div className="flex flex-row items-start justify-start pr-[3px] pt-[3px] w-[57%] md:w-full">
                          <Text
                            className="text-gray-900 text-sm"
                            size="txtInterBold14"
                          >
                            Anne Carry
                          </Text>
                          <Text
                            className="ml-[5px] text-gray-500 text-xs"
                            size="txtInterRegular12"
                          >
                            4min
                          </Text>
                        </div>
                        <div className="bg-gray-100 flex flex-row items-center justify-between p-2.5 rounded-[12px] w-full">
                          <Button
                            className="flex h-[38px] items-center justify-center rounded-[12px] w-[38px]"
                            color="light_blue_200_33"
                            size="lg"
                            variant="fill"
                          >
                            <Img
                              className="h-[18px]"
                              src="images/img_forward.svg"
                              alt="forward One"
                            />
                          </Button>
                          <Line className="bg-gray-500_7e h-1 my-[17px] rounded-sm w-[68%]" />
                          <Text
                            className="text-gray-500 text-xs"
                            size="txtInterRegular12"
                          >
                            0:06
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[15px] items-start justify-start mt-[49px] pb-[3px] pr-[3px] w-[84%] md:w-full">
                    <Img
                      className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                      src="images/img_avatar_48X48.png"
                      alt="Avatar Thirteen"
                    />
                    <div className="flex flex-col gap-3.5 items-start justify-start mb-1.5 w-[79%]">
                      <div className="flex flex-row items-start justify-start pr-0.5 py-0.5 w-[72%] md:w-full">
                        <Text
                          className="text-gray-900 text-sm"
                          size="txtInterBold14"
                        >
                          Marriet Miles
                        </Text>
                        <Text
                          className="ml-[5px] text-gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          4min
                        </Text>
                      </div>
                      <Text
                        className="text-gray-500 text-sm"
                        size="txtInterRegular14"
                      >
                        Yes, I saw his post yesterday
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-start mt-[30px] w-[29%] md:w-full">
                    <Img
                      className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                      src="images/img_avatar.png"
                      alt="Avatar Fourteen"
                    />
                    <Img
                      className="h-[13px] w-[37%]"
                      src="images/img_signal.svg"
                      alt="signal"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[15px] items-center justify-between mt-[45px] w-full">
                  <Button
                    className="flex h-12 items-center justify-center md:mt-0 my-[5px] rounded-[12px] w-12"
                    color="indigo_A200"
                    size="lg"
                    variant="fill"
                  >
                    <Img
                      className="h-[22px]"
                      src="images/img_minimize_48X48.svg"
                      alt="minimize"
                    />
                  </Button>
                  <Input
                    name="Field"
                    placeholder="Start typing…"
                    className="font-medium p-0 placeholder:text-gray-500 text-left text-sm w-full"
                    wrapClassName="flex md:flex-1 md:w-full"
                    suffix={
                      <Img
                        className="h-[18px] ml-[35px] mr-5 my-5"
                        src="images/img_user_14X14.svg"
                        alt="user"
                      />
                    }
                    color="gray_100"
                    size="md"
                  ></Input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectMessagePage;
