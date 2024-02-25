import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "/src/components";
import Sidebar1 from "components/Sidebar1";

const VideoChatPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-sfprodisplay sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar1 className="!sticky !w-[165px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <div className="flex flex-1 md:ml-[0] ml-[5px] md:px-5 relative w-full">
          <div className="flex flex-col items-center justify-start my-auto w-[73%]">
            <div className="flex md:flex-col flex-row gap-2.5 items-center justify-between w-full">
              <Line className="bg-white-A700_7e h-32 md:h-[5px] md:mt-0 my-[448px] rounded-[2.5px] w-[5px] md:w-full" />
              <div
                className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[667px] h-[1024px] justify-start p-10 sm:px-5 rounded-bl-[32px] rounded-tl-[32px]"
                style={{ backgroundImage: "url('images/img_group4507.png')" }}
              >
                <Img
                  className="h-[199px] md:h-auto md:ml-[0] ml-[5px] object-cover rounded-[12px] w-1/5"
                  src="images/img_image_199X160.png"
                  alt="Image"
                />
                <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start md:ml-[0] ml-[226px] mr-[300px] w-[36%] md:w-full">
                  <Button
                    className="flex h-[78px] items-center justify-center rounded-[24px] w-[78px]"
                    color="white_A700"
                    size="3xl"
                    variant="fill"
                  >
                    <Img
                      className="h-9"
                      src="images/img_iconmicoff.svg"
                      alt="IconMicOff"
                    />
                  </Button>
                  <Button
                    className="flex h-[78px] items-center justify-center rounded-[24px] w-[78px]"
                    color="white_A700_33"
                    size="3xl"
                    variant="fill"
                  >
                    <Img
                      className="h-9"
                      src="images/img_minimize_78X78.svg"
                      alt="minimize"
                    />
                  </Button>
                  <Button
                    className="flex h-[78px] items-center justify-center rounded-[24px] w-[78px]"
                    color="red_A200"
                    size="3xl"
                    variant="fill"
                  >
                    <Img
                      className="h-9"
                      src="images/img_alarm.svg"
                      alt="alarm"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col md:gap-10 gap-[60px] items-end justify-end ml-[-75px] my-auto p-10 sm:px-5 rounded-bl-[32px] rounded-tl-[32px] w-[34%] z-[1]">
            <div className="flex flex-row gap-5 items-center justify-end mt-[5px] w-[34%] md:w-full">
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
                alt="Avatar"
              />
            </div>
            <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
              <div className="flex flex-row font-sfprodisplay items-center justify-between w-[97%] md:w-full">
                <div className="flex flex-col items-center justify-start">
                  <div className="flex flex-row gap-[15px] items-end justify-between w-full">
                    <div
                      className="bg-cover bg-no-repeat md:h-[15px] h-[58px] pb-[42px] md:pl-10 sm:pl-5 pl-[42px] relative rounded-[12px] w-[58px]"
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
                    <div className="flex flex-col gap-[13px] items-start justify-start mt-[5px]">
                      <Text
                        className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                        size="txtSFProDisplayBold22"
                      >
                        Marriet Miles
                      </Text>
                      <Text
                        className="text-gray-500 text-sm"
                        size="txtSFProDisplayMedium14"
                      >
                        Ongoing Call…
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  className="h-[25px] w-[25px]"
                  src="images/img_overflowmenu.svg"
                  alt="overflowmenu"
                />
              </div>
              <div className="flex flex-col font-inter items-start justify-start mt-[60px] w-[88%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                    <Img
                      className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                      src="images/img_avatar_48X48.png"
                      alt="Avatar One"
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
                      alt="Avatar Two"
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
                      alt="Avatar Three"
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
                      alt="Avatar Four"
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
                <div className="flex flex-row gap-[15px] items-start justify-start mt-11 pb-[3px] pr-[3px] w-[84%] md:w-full">
                  <Img
                    className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                    src="images/img_avatar_48X48.png"
                    alt="Avatar Five"
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
                <div className="flex flex-row items-center justify-start mt-[35px] w-[29%] md:w-full">
                  <Img
                    className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                    src="images/img_avatar.png"
                    alt="Avatar Six"
                  />
                  <div className="bg-gray-500_cc h-[7px] ml-[15px] my-[15px] rounded-[50%] w-[7px]"></div>
                  <div className="bg-gray-500_99 h-[7px] mb-3 ml-[5px] mt-[19px] rounded-[50%] w-[7px]"></div>
                  <div className="bg-gray-500_33 h-[7px] mb-[9px] ml-[5px] mt-[22px] rounded-[50%] w-[7px]"></div>
                </div>
              </div>
              <Input
                name="WriteBox"
                placeholder="Start typing…"
                className="font-inter font-medium p-0 placeholder:text-gray-500 text-left text-sm w-full"
                wrapClassName="flex mt-[55px] w-full"
                prefix={
                  <div className="h-[38px] w-[38px] bg-gray-500_33 p-2.5 m-2.5 rounded-[12px] flex justify-center items-center">
                    <Img
                      className="h-[18px] my-auto"
                      src="images/img_plus_38X38.svg"
                      alt="plus"
                    />
                  </div>
                }
                suffix={
                  <Img
                    className="h-[18px] ml-[35px] mr-5 my-5"
                    src="images/img_user_14X14.svg"
                    alt="user"
                  />
                }
                size="md"
              ></Input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoChatPage;
