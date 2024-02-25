import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const MessagesPage: React.FC = () => {
  const navigate = useNavigate();

  const [searchvalue, setSearchvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-sfprodisplay items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-[52px] items-center justify-between w-full">
          <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between md:px-5 w-[41%] md:w-full">
            <Sidebar1 className="!sticky !w-[165px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
            <div className="flex flex-1 flex-col gap-10 items-center justify-start w-full">
              <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
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
                <div className="flex flex-col gap-10 items-start justify-start w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                    size="txtSFProDisplayBold30"
                  >
                    Inbox
                  </Text>
                  <div className="flex flex-row font-inter items-start justify-start w-[84%] md:w-full">
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
              <List
                className="flex flex-col font-inter gap-10 items-center w-[98%]"
                orientation="vertical"
              >
                <div
                  className="common-pointer flex flex-row items-start justify-between w-full"
                  onClick={() => navigate("/directmessage")}
                >
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
                <div className="flex flex-row items-start justify-between w-full">
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
                <div className="flex flex-row items-start justify-between w-full">
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
          <div className="flex md:flex-1 md:flex-col flex-row gap-2.5 items-center justify-between md:px-5 w-[56%] md:w-full">
            <div className="bg-gray-500_48 h-32 md:mt-0 my-[448px] rounded-sm w-[1%]"></div>
            <div className="bg-white-A700 flex flex-col md:gap-10 gap-[291px] items-center justify-start p-10 sm:px-5 rounded-bl-[32px] rounded-tl-[32px]">
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
              <div className="flex flex-col font-inter md:gap-10 gap-[319px] items-center justify-start mb-4 w-[62%] md:w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  <div className="bg-gray-100 h-40 md:h-[75px] p-[41px] md:px-10 sm:px-5 relative rounded-[50px] w-40">
                    <Img
                      className="absolute h-[75px] inset-[0] justify-center m-auto w-[49%]"
                      src="images/img_mail_75X78.svg"
                      alt="mail One"
                    />
                  </div>
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-gray-500"
                      size="txtInterBold30Gray500"
                    >
                      <>It&#39;s nice to chat with someone</>
                    </Text>
                    <Text
                      className="text-gray-500 text-sm"
                      size="txtInterMedium14Gray500"
                    >
                      Pick a person from left menu and start your conversation
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center w-[72%] md:w-full">
                  <Img
                    className="h-[18px] w-[18px]"
                    src="images/img_download.svg"
                    alt="download"
                  />
                  <Text
                    className="ml-[5px] text-gray-500 text-sm"
                    size="txtInterMedium14Gray500"
                  >
                    Social is available for Mac
                  </Text>
                  <Text
                    className="ml-[5px] text-gray-900 text-sm"
                    size="txtInterMedium14"
                  >
                    Download it now
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagesPage;
