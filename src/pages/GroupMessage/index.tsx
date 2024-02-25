import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "/src/components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const GroupMessagePage: React.FC = () => {
  const navigate = useNavigate();

  const [searchvalue, setSearchvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-sfprodisplay items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-[45px] items-center justify-between w-full">
          <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-[45px] items-start justify-between md:px-5 w-[42%] md:w-full">
            <Sidebar1 className="!sticky !w-[165px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
            <div className="flex flex-1 flex-col gap-10 items-start justify-start sm:mt-0 mt-10 w-full">
              <div className="flex flex-col md:gap-10 gap-[60px] justify-start w-[95%] md:w-full">
                <div className="flex flex-row gap-[15px] items-center justify-end ml-5 md:ml-[0] w-[95%] md:w-full">
                  <Input
                    name="Search"
                    placeholder="Search in social…"
                    value={searchvalue}
                    onChange={(e) => setSearchvalue(e)}
                    className="!placeholder:text-gray-500 !text-gray-500 font-medium p-0 text-left text-sm w-full"
                    wrapClassName="flex w-[82%]"
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
                    color="white_A700"
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
                <div className="flex flex-col font-inter gap-10 items-start justify-start mr-3 w-[97%] md:w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                    size="txtInterBold30"
                  >
                    Inbox
                  </Text>
                  <div className="flex flex-row items-start justify-start py-0.5 w-[84%] md:w-full">
                    <div className="flex flex-col items-center justify-start mt-0.5">
                      <Text
                        className="common-pointer text-gray-500 text-sm"
                        size="txtInterBold14Gray500"
                        onClick={() => navigate("")}
                      >
                        Direct Messages
                      </Text>
                    </div>
                    <div className="flex flex-col gap-1.5 items-center justify-start ml-5 mt-0.5 w-[27%]">
                      <Text
                        className="text-gray-900 text-sm"
                        size="txtInterBold14"
                      >
                        Group Chat
                      </Text>
                      <Line className="bg-gray-900 h-0.5 w-full" />
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
                className="flex flex-col gap-5 items-center w-full"
                orientation="vertical"
              >
                <div className="flex md:flex-1 flex-row items-start justify-between w-[90%] md:w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-between w-3/5">
                    <div className="flex flex-col relative w-[51px]">
                      <div className="flex mx-auto w-full">
                        <Img
                          className="h-7 my-auto object-cover rounded-lg w-7"
                          src="images/img_avatar_21.png"
                          alt="Avatar"
                        />
                        <Img
                          className="h-7 ml-[-5px] my-auto object-cover rounded-lg w-7 z-[1]"
                          src="images/img_image_28X28.png"
                          alt="Image"
                        />
                      </div>
                      <Button
                        className="cursor-pointer font-bold h-7 mt-[-5px] mx-auto text-[10.32px] text-center w-7 z-[1]"
                        shape="round"
                        color="gray_900"
                        size="md"
                        variant="fill"
                      >
                        +9
                      </Button>
                    </div>
                    <div className="flex flex-col font-inter gap-2 items-start justify-start">
                      <Text
                        className="text-gray-900 text-sm"
                        size="txtInterMedium14"
                      >
                        Close Friends
                      </Text>
                      <Text
                        className="text-gray-500 text-sm"
                        size="txtInterRegular14"
                      >
                        Thank you for sharing
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-start mt-[3px] w-[14%]">
                    <Text
                      className="mt-1 text-gray-500 text-xs"
                      size="txtInterRegular12"
                    >
                      3:03pm
                    </Text>
                    <Button
                      className="cursor-pointer font-medium font-sfprodisplay h-[18px] mt-0.5 text-[10px] text-center w-[18px]"
                      shape="round"
                      color="red_A200"
                      size="sm"
                      variant="fill"
                    >
                      1
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[12px] w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-row gap-[15px] items-center justify-between w-3/5">
                      <div className="flex flex-col relative w-[51px]">
                        <div className="flex mx-auto w-full">
                          <Img
                            className="h-7 my-auto object-cover rounded-lg w-7"
                            src="images/img_avatar_4.png"
                            alt="Avatar One"
                          />
                          <Img
                            className="h-7 ml-[-5px] my-auto object-cover rounded-lg w-7 z-[1]"
                            src="images/img_image_7.png"
                            alt="Image One"
                          />
                        </div>
                        <Button
                          className="cursor-pointer font-bold h-7 mt-[-5px] mx-auto text-[10.32px] text-center w-7 z-[1]"
                          shape="round"
                          color="gray_900"
                          size="md"
                          variant="fill"
                        >
                          +9
                        </Button>
                      </div>
                      <div className="flex flex-col font-inter gap-2 items-start justify-start">
                        <Text
                          className="text-gray-900 text-sm"
                          size="txtInterMedium14"
                        >
                          Close Friends
                        </Text>
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtInterRegular14"
                        >
                          Thank you for sharing
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-start mt-[3px] w-[14%]">
                      <Text
                        className="mt-1 text-gray-500 text-xs"
                        size="txtInterRegular12"
                      >
                        3:03pm
                      </Text>
                      <Button
                        className="cursor-pointer font-medium font-sfprodisplay h-[18px] mt-0.5 text-[10px] text-center w-[18px]"
                        shape="round"
                        color="red_A200"
                        size="sm"
                        variant="fill"
                      >
                        1
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-row items-start justify-between w-[90%] md:w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-between w-3/5">
                    <div className="flex flex-col relative w-[51px]">
                      <div className="flex mx-auto w-full">
                        <Img
                          className="h-7 my-auto object-cover rounded-lg w-7"
                          src="images/img_avatar_6.png"
                          alt="Avatar Two"
                        />
                        <Img
                          className="h-7 ml-[-5px] my-auto object-cover rounded-lg w-7 z-[1]"
                          src="images/img_avatar_2.png"
                          alt="Image Two"
                        />
                      </div>
                      <Button
                        className="cursor-pointer font-bold h-7 mt-[-5px] mx-auto text-[10.32px] text-center w-7 z-[1]"
                        shape="round"
                        color="gray_900"
                        size="md"
                        variant="fill"
                      >
                        +9
                      </Button>
                    </div>
                    <div className="flex flex-col font-inter gap-2 items-start justify-start">
                      <Text
                        className="text-gray-900 text-sm"
                        size="txtInterMedium14"
                      >
                        Close Friends
                      </Text>
                      <Text
                        className="text-gray-500 text-sm"
                        size="txtInterRegular14"
                      >
                        Thank you for sharing
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col font-inter items-end justify-start mt-[3px]">
                    <Text
                      className="mb-[19px] mt-1 text-gray-500 text-xs"
                      size="txtInterRegular12"
                    >
                      3:03pm
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="flex md:flex-1 md:flex-col flex-row gap-2.5 items-center justify-between md:px-5 w-[56%] md:w-full">
            <div className="bg-gray-500_48 h-32 md:mt-0 my-[448px] rounded-sm w-[1%]"></div>
            <div className="bg-white-A700 flex flex-col md:gap-10 gap-[60px] items-end justify-end p-10 sm:px-5 rounded-bl-[32px] rounded-tl-[32px]">
              <div className="flex flex-row gap-5 items-center justify-end mt-[5px] w-[17%] md:w-full">
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
                  alt="Avatar Three"
                />
              </div>
              <div className="flex flex-col font-inter items-start justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[99%] md:w-full">
                  <div className="flex flex-row gap-5 items-center justify-between w-[43%] md:w-full">
                    <div className="flex relative w-[54%]">
                      <div className="flex my-auto w-[69%]">
                        <Img
                          className="h-[58px] my-auto object-cover rounded-[16px] w-[58px]"
                          src="images/img_avatar_58X58.png"
                          alt="Avatar Four"
                        />
                        <Img
                          className="h-[58px] ml-[-10px] my-auto object-cover rounded-[16px] w-[58px] z-[1]"
                          src="images/img_avatar_4.png"
                          alt="Avatar Five"
                        />
                      </div>
                      <Button
                        className="cursor-pointer font-bold h-[58px] ml-[-10px] my-auto rounded-[16px] text-[22px] text-center sm:text-lg md:text-xl w-[58px] z-[1]"
                        color="gray_900"
                        size="2xl"
                        variant="fill"
                      >
                        +4
                      </Button>
                    </div>
                    <Text
                      className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                      size="txtInterBold22"
                    >
                      Beach Trip
                    </Text>
                  </div>
                  <Img
                    className="h-[25px] ml-60 md:ml-[0] w-[25px]"
                    src="images/img_call.svg"
                    alt="call"
                  />
                  <Img
                    className="h-[25px] ml-10 md:ml-[0] w-[25px]"
                    src="images/img_videocamera.svg"
                    alt="videocamera"
                  />
                  <Img
                    className="h-[25px] ml-10 md:ml-[0] w-[25px]"
                    src="images/img_overflowmenu.svg"
                    alt="overflowmenu"
                  />
                </div>
                <div className="flex flex-col items-start justify-start mt-[70px] w-[46%] md:w-full">
                  <List
                    className="flex flex-col gap-10 w-[79%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row gap-[15px] items-start justify-between my-0 pb-[3px] pr-[3px] w-full">
                      <Img
                        className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                        src="images/img_avatar_12.png"
                        alt="Avatar Six"
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
                    <div className="flex flex-row gap-[15px] items-start justify-between my-0 pb-[3px] pr-[3px] w-full">
                      <Img
                        className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                        src="images/img_avatar_5.png"
                        alt="Avatar Seven"
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
                        src="images/img_avatar_48X48.png"
                        alt="Avatar Eight"
                      />
                      <div className="flex flex-col gap-[13px] items-start justify-start mt-0.5">
                        <div className="flex flex-row items-start justify-start w-[53%] md:w-full">
                          <Text
                            className="text-gray-900 text-sm"
                            size="txtInterBold14"
                          >
                            Gunther Ackner
                          </Text>
                          <Text
                            className="text-gray-500 text-xs"
                            size="txtInterRegular12"
                          >
                            4min
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-between rounded-lg w-full">
                          <Img
                            className="h-20 md:h-auto object-cover rounded-lg w-20"
                            src="images/img_image_75X80.png"
                            alt="PhotoTwo"
                          />
                          <Img
                            className="h-20 md:h-auto object-cover rounded-lg w-20"
                            src="images/img_photo3_145X160.png"
                            alt="PhotoThree"
                          />
                          <Img
                            className="h-20 md:h-auto object-cover rounded-lg w-20"
                            src="images/img_5.png"
                            alt="PhotoFive"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[49px] w-[95%] md:w-full">
                    <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                      <Img
                        className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                        src="images/img_avatar_4.png"
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
                  <div className="flex flex-row gap-[15px] items-start justify-start mt-[49px] pb-[3px] pr-[3px] w-[79%] md:w-full">
                    <Img
                      className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                      src="images/img_avatar_48X48.png"
                      alt="Avatar Ten"
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
                </div>
                <div className="flex md:flex-col flex-row gap-[15px] items-center justify-between mt-[91px] w-full">
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

export default GroupMessagePage;
