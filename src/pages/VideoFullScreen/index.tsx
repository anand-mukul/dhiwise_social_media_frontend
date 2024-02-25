import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "/src/components";
import Sidebar1 from "components/Sidebar1";

const VideoFullScreenPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar1 className="!sticky !w-[165px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <div className="flex flex-1 flex-col items-center justify-start md:ml-[0] ml-[5px] md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-2.5 items-center justify-between w-full">
            <Line className="bg-white-A700_7e h-32 md:h-[5px] md:mt-0 my-[448px] rounded-[2.5px] w-[5px] md:w-full" />
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[1024px] items-center justify-end p-8 sm:px-5 rounded-bl-[32px] rounded-tl-[32px]"
              style={{ backgroundImage: "url('images/img_group4506.png')" }}
            >
              <div className="flex flex-col md:gap-10 gap-[640px] items-center justify-start mb-[13px] mt-7 w-full">
                <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
                  <div className="flex flex-col gap-10 items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="flex sm:flex-1 flex-col items-center justify-start w-[12%] sm:w-full">
                        <div className="flex flex-row gap-2.5 items-end justify-between w-full">
                          <Img
                            className="h-12 md:h-auto object-cover rounded-[12px] w-12"
                            src="images/img_avatar.png"
                            alt="Avatar"
                          />
                          <div className="flex flex-col gap-[7px] items-start justify-start my-[5px]">
                            <Text
                              className="text-sm text-white-A700"
                              size="txtInterMedium14"
                            >
                              Edward Ford
                            </Text>
                            <Text
                              className="text-white-A700 text-xs"
                              size="txtInterRegular12WhiteA700"
                            >
                              5min ago
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-1 flex-row items-center justify-between w-[26%] sm:w-full">
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[65px] my-1 rounded"
                          leftIcon={
                            <Img
                              className="h-3.5 ml-[9px] mr-1.5 my-2"
                              src="images/img_favorite_2.svg"
                              alt="favorite"
                            />
                          }
                          color="white_A700_33"
                          size="lg"
                          variant="fill"
                        >
                          <div className="font-medium text-left text-sm">
                            326
                          </div>
                        </Button>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[63px] my-1 rounded"
                          leftIcon={
                            <Img
                              className="h-3.5 ml-[9px] mr-1.5 my-2"
                              src="images/img_laptop_14X14.svg"
                              alt="laptop"
                            />
                          }
                          color="white_A700_33"
                          size="lg"
                          variant="fill"
                        >
                          <div className="font-medium text-left text-sm">
                            148
                          </div>
                        </Button>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[75px] my-1 rounded"
                          leftIcon={
                            <Img
                              className="h-3.5 ml-[9px] mr-[5px] my-2"
                              src="images/img_reply_14X14.svg"
                              alt="reply"
                            />
                          }
                          color="white_A700_33"
                          size="lg"
                          variant="fill"
                        >
                          <div className="font-medium text-left text-sm">
                            Share
                          </div>
                        </Button>
                        <Img
                          className="h-[38px] w-[38px]"
                          src="images/img_overflowmenu_38X38.svg"
                          alt="overflowmenu"
                        />
                      </div>
                    </div>
                    <Text
                      className="leading-[36.00px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                      size="txtInterBold30WhiteA700"
                    >
                      <>
                        Tropical Fresh Tourism Is Back In Full Swing
                        <br />
                        In Cancun Mexico
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-8 items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-7 items-center justify-start w-full">
                        <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                          <Text
                            className="text-sm text-white-A700"
                            size="txtInterMedium14"
                          >
                            01:23
                          </Text>
                          <Text
                            className="text-sm text-white-A700"
                            size="txtInterMedium14"
                          >
                            05:46
                          </Text>
                        </div>
                        <div className="h-2 relative w-full">
                          <div className="absolute bg-white-A700_33 bottom-[0] h-2 inset-x-[0] mx-auto rounded-[3.95px] w-full"></div>
                          <div className="absolute h-2 left-[0] overflow-hidden top-[0] w-3/5">
                            <div className="w-full h-full absolute bg-white_A700_a2 rounded-[3.95px]"></div>
                            <div
                              className="h-full absolute bg-light_blue_200  rounded-[3.95px]"
                              style={{ width: "88%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                      <div className="flex flex-row items-center justify-between w-[16%]">
                        <Img
                          className="h-[30px] w-[30px]"
                          src="images/img_trash.svg"
                          alt="trash"
                        />
                        <Img
                          className="h-[30px] w-[30px]"
                          src="images/img_volume.svg"
                          alt="volume"
                        />
                        <div className="h-2 my-[11px] overflow-hidden relative">
                          <div className="w-full h-full absolute bg-white_A700_33 rounded-[3.95px]"></div>
                          <div
                            className="h-full absolute bg-white_A700  rounded-[4px]"
                            style={{ width: "67%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[31px] items-center justify-between w-[8%]">
                        <Img
                          className="h-[30px] w-[30px]"
                          src="images/img_settings_18X18.svg"
                          alt="settings Two"
                        />
                        <Img
                          className="common-pointer h-[30px] w-[29px]"
                          src="images/img_minimize.svg"
                          alt="minimize"
                          onClick={() => navigate("/singlevideo")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoFullScreenPage;
