import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "/src/components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const SearchResultsPage: React.FC = () => {
  const navigate = useNavigate();

  const [frametwovalue, setFrametwovalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[35px] items-start justify-between w-full">
          <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar1 className="!sticky !w-[165px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
            <div className="flex flex-1 flex-col md:gap-10 gap-16 items-center justify-start md:mt-0 mt-10 w-full">
              <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start w-full">
                <div className="bg-white-A700 flex rounded-[12px] w-full">
                  <div className="flex md:flex-col flex-row gap-[18px] items-end justify-center ml-[640px] mr-[30px] mt-[15px] w-[12%]">
                    <Text
                      className="md:mt-0 mt-[9px] text-gray-500 text-xs tracking-[1.00px] uppercase"
                      size="txtInterBold12"
                    >
                      Filters
                    </Text>
                    <Text
                      className="bg-red-A200 flex h-7 items-center justify-center rounded-[8.84px] text-[10.32px] text-center text-white-A700 w-7"
                      size="txtSFProDisplayBold1032"
                    >
                      1
                    </Text>
                  </div>
                  <Input
                    name="FrameTwo"
                    placeholder="Nass"
                    value={frametwovalue}
                    onChange={(e) => setFrametwovalue(e)}
                    className="!placeholder:text-gray-900 !text-gray-900 font-medium p-0 text-left text-sm w-full"
                    wrapClassName="flex ml-5 mr-[130px] w-[81%]"
                    prefix={
                      <Img
                        className="cursor-pointer h-[18px] mr-[15px] my-[7px]"
                        src="images/img_search_18X18.svg"
                        alt="search"
                      />
                    }
                    suffix={
                      <CloseSVG
                        fillColor="#1e1f20"
                        className="cursor-pointer h-[18px] my-auto"
                        onClick={() => setFrametwovalue("")}
                        style={{
                          visibility:
                            frametwovalue?.length <= 0 ? "hidden" : "visible",
                        }}
                        height={18}
                        width={18}
                        viewBox="0 0 18 18"
                      />
                    }
                    shape="square"
                  ></Input>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                    size="txtInterBold22Gray900"
                  >
                    People
                  </Text>
                  <div className="flex flex-col items-center justify-start mt-10 w-full">
                    <div className="md:gap-5 gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                      <div className="bg-white-A700 flex flex-1 flex-row items-center justify-between p-[30px] sm:px-5 rounded-[12px] w-full">
                        <div className="flex flex-row gap-[15px] items-end justify-center">
                          <Img
                            className="h-12 md:h-auto object-cover rounded-[12px] w-12"
                            src="images/img_avatar.png"
                            alt="Avatar"
                          />
                          <div className="flex flex-col items-start justify-start mb-[3px] mt-[7px]">
                            <Text
                              className="text-base text-gray-900"
                              size="txtInterBold16"
                            >
                              Logan Nasser
                            </Text>
                            <Text
                              className="mt-1 text-gray-500 text-xs"
                              size="txtInterRegular12"
                            >
                              @louisaingram
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[65px] my-[9px]"
                          leftIcon={
                            <Img
                              className="h-3.5 ml-[9px] mr-[5px] my-2"
                              src="images/img_checkmark.svg"
                              alt="checkmark"
                            />
                          }
                          shape="round"
                          color="indigo_A200"
                          size="md"
                          variant="fill"
                        >
                          <div className="font-medium text-left text-sm">
                            Add
                          </div>
                        </Button>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-row items-center justify-between p-[30px] sm:px-5 rounded-[12px] w-full">
                        <div className="flex flex-row gap-[15px] items-end justify-center">
                          <Img
                            className="h-12 md:h-auto object-cover rounded-[12px] w-12"
                            src="images/img_avatar_8.png"
                            alt="Avatar One"
                          />
                          <div className="flex flex-col items-start justify-start mb-[3px] mt-[7px]">
                            <Text
                              className="text-base text-gray-900"
                              size="txtInterBold16"
                            >
                              Logan Nasser
                            </Text>
                            <Text
                              className="mt-1 text-gray-500 text-xs"
                              size="txtInterRegular12"
                            >
                              @louisaingram
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[65px] my-[9px]"
                          leftIcon={
                            <Img
                              className="h-3.5 ml-[9px] mr-[5px] my-2"
                              src="images/img_checkmark.svg"
                              alt="checkmark"
                            />
                          }
                          shape="round"
                          color="indigo_A200"
                          size="md"
                          variant="fill"
                        >
                          <div className="font-medium text-left text-sm">
                            Add
                          </div>
                        </Button>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-row items-center justify-between p-[30px] sm:px-5 rounded-[12px] w-full">
                        <div className="flex flex-row gap-[15px] items-end justify-center">
                          <Img
                            className="h-12 md:h-auto object-cover rounded-[12px] w-12"
                            src="images/img_avatar_9.png"
                            alt="Avatar Two"
                          />
                          <div className="flex flex-col items-start justify-start mb-[3px] mt-[7px]">
                            <Text
                              className="text-base text-gray-900"
                              size="txtInterBold16"
                            >
                              Logan Nasser
                            </Text>
                            <Text
                              className="mt-1 text-gray-500 text-xs"
                              size="txtInterRegular12"
                            >
                              @louisaingram
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[65px] my-[9px]"
                          leftIcon={
                            <Img
                              className="h-3.5 ml-[9px] mr-[5px] my-2"
                              src="images/img_checkmark.svg"
                              alt="checkmark"
                            />
                          }
                          shape="round"
                          color="indigo_A200"
                          size="md"
                          variant="fill"
                        >
                          <div className="font-medium text-left text-sm">
                            Add
                          </div>
                        </Button>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-row items-center justify-between p-[30px] sm:px-5 rounded-[12px] w-full">
                        <div className="flex flex-row gap-[15px] items-end justify-center">
                          <Img
                            className="h-12 md:h-auto object-cover rounded-[12px] w-12"
                            src="images/img_avatar_10.png"
                            alt="Avatar Three"
                          />
                          <div className="flex flex-col items-start justify-start mb-[3px] mt-[7px]">
                            <Text
                              className="text-base text-gray-900"
                              size="txtInterBold16"
                            >
                              Logan Nasser
                            </Text>
                            <Text
                              className="mt-1 text-gray-500 text-xs"
                              size="txtInterRegular12"
                            >
                              @louisaingram
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[65px] my-[9px]"
                          leftIcon={
                            <Img
                              className="h-3.5 ml-[9px] mr-[5px] my-2"
                              src="images/img_checkmark.svg"
                              alt="checkmark"
                            />
                          }
                          shape="round"
                          color="indigo_A200"
                          size="md"
                          variant="fill"
                        >
                          <div className="font-medium text-left text-sm">
                            Add
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[97px] mt-[30px]"
                    rightIcon={
                      <Img
                        className="h-3.5 ml-[-3px] mr-[11px] my-2"
                        src="images/img_arrowright_1.svg"
                        alt="arrow_right"
                      />
                    }
                    shape="round"
                    color="gray_500_6c"
                    size="md"
                    variant="outline"
                  >
                    <div className="font-medium text-left text-sm">
                      See more
                    </div>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-[43px] items-start justify-start w-full">
                <Text
                  className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                  size="txtInterBold22Gray900"
                >
                  Posts
                </Text>
                <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between w-full">
                  <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded-[12px] w-[49%] md:w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-between w-[63%]">
                        <Img
                          className="h-12 md:h-auto object-cover rounded-[12px] w-12"
                          src="images/img_image_48X48.png"
                          alt="Image"
                        />
                        <div className="flex flex-col gap-[9px] items-start justify-end">
                          <Text
                            className="mt-0.5 text-gray-900 text-sm"
                            size="txtInterBold14"
                          >
                            Katherine Cole
                          </Text>
                          <Text
                            className="text-gray-500 text-xs"
                            size="txtInterRegular12"
                          >
                            5min ago
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-[38px] w-[38px]"
                        src="images/img_overflowmenu_1.svg"
                        alt="overflowmenu"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start mt-[30px] w-full">
                      <Img
                        className="h-[150px] sm:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                        src="images/img_image_150X290.png"
                        alt="Image One"
                      />
                      <div className="flex flex-col gap-[19px] items-center justify-start mt-5 w-full">
                        <Text
                          className="leading-[22.00px] text-base text-gray-900 w-full"
                          size="txtInterBold16"
                        >
                          The Best Fashion Instagrams of the Week: Céline Dion,
                          Lizzo, and More
                        </Text>
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtInterMedium14Gray500"
                        >
                          If you are looking for a break from the cold, take a
                          cue from Lizzo: This week, the singer headed to
                          Disneyland in warm and sunny California.
                        </Text>
                      </div>
                      <Text
                        className="mt-[66px] text-gray-500 text-xs tracking-[1.00px] uppercase"
                        size="txtInterBold12"
                      >
                        Read More
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-start mt-4 w-full">
                      <div className="flex flex-row gap-[5px] items-center justify-start p-[5px] w-[22%]">
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_favorite_1.svg"
                          alt="favorite"
                        />
                        <Text
                          className="text-gray-900 text-sm"
                          size="txtInterMedium14"
                        >
                          326
                        </Text>
                      </div>
                      <div className="flex flex-row gap-1.5 items-center justify-start ml-2.5 p-[5px] w-[21%]">
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_location.svg"
                          alt="location"
                        />
                        <Text
                          className="text-gray-900 text-sm"
                          size="txtInterMedium14"
                        >
                          148
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-center ml-[92px] p-[5px] w-1/4">
                        <Text
                          className="ml-[5px] text-gray-900 text-sm"
                          size="txtInterMedium14"
                        >
                          Share
                        </Text>
                        <Img
                          className="h-3.5 mr-1.5 w-3.5"
                          src="images/img_reply.svg"
                          alt="reply"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start mb-[124px] p-[23px] sm:px-5 rounded-[12px] w-[49%] md:w-full">
                    <div className="flex flex-col gap-[25px] items-center justify-start my-[7px] w-[98%] md:w-full">
                      <div className="flex flex-col gap-[30px] items-start justify-start w-[98%] md:w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="flex flex-row gap-2.5 items-center justify-between w-[58%]">
                            <Img
                              className="h-12 md:h-auto object-cover rounded-[12px] w-12"
                              src="images/img_image_1.png"
                              alt="Image Two"
                            />
                            <div className="flex flex-col gap-[9px] items-start justify-end">
                              <Text
                                className="mt-0.5 text-gray-900 text-sm"
                                size="txtInterBold14"
                              >
                                Dustin Houston
                              </Text>
                              <Text
                                className="text-gray-500 text-xs"
                                size="txtInterRegular12"
                              >
                                5min ago
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-[38px] w-[38px]"
                            src="images/img_overflowmenu_1.svg"
                            alt="overflowmenu One"
                          />
                        </div>
                        <Text
                          className="text-gray-500 text-sm"
                          size="txtInterMedium14Gray500"
                        >
                          Whether its a driving tour 😂
                        </Text>
                      </div>
                      <div className="flex flex-col font-sfprodisplay items-center justify-start w-[98%] md:w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                          <Img
                            className="h-40 md:h-auto object-cover rounded-lg"
                            src="images/img_image_160X200.png"
                            alt="image Three"
                          />
                          <div className="flex flex-col gap-2.5 items-center justify-start">
                            <Img
                              className="h-[75px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                              src="images/img_image_75X80.png"
                              alt="image Four"
                            />
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[75px] items-center justify-start p-[13px] rounded-lg w-full"
                              style={{
                                backgroundImage: "url('images/img_photo3.png')",
                              }}
                            >
                              <div className="flex flex-row gap-[7px] items-center justify-center my-2 p-[7px] w-[97%] md:w-full">
                                <Img
                                  className="h-3.5 w-3.5"
                                  src="images/img_settings_2.svg"
                                  alt="settings Two"
                                />
                                <Text
                                  className="mr-0.5 text-sm text-white-A700"
                                  size="txtSFProDisplayMedium14"
                                >
                                  17
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row font-inter items-center justify-between w-[98%] md:w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-between w-[46%]">
                          <div className="flex flex-row gap-[5px] items-center justify-start p-1.5 w-[48%]">
                            <Img
                              className="h-3.5 my-0.5 w-3.5"
                              src="images/img_favorite_1.svg"
                              alt="favorite One"
                            />
                            <Text
                              className="text-gray-900 text-sm"
                              size="txtInterMedium14"
                            >
                              326
                            </Text>
                          </div>
                          <div className="flex flex-row gap-1.5 items-center justify-start p-[5px] w-[46%]">
                            <Img
                              className="h-3.5 my-[3px] w-3.5"
                              src="images/img_location.svg"
                              alt="location One"
                            />
                            <Text
                              className="my-0.5 text-gray-900 text-sm"
                              size="txtInterMedium14"
                            >
                              148
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-center p-[7px] w-1/4">
                          <Text
                            className="ml-0.5 text-gray-900 text-sm"
                            size="txtInterMedium14"
                          >
                            Share
                          </Text>
                          <Img
                            className="h-3.5 mx-0.5 w-3.5"
                            src="images/img_reply.svg"
                            alt="reply One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 sm:flex-col flex-row font-sfprodisplay gap-2.5 items-center justify-between md:px-5 w-[29%] md:w-full">
            <Line className="bg-gray-500_7e h-32 sm:h-[5px] sm:mt-0 my-[448px] rounded-[2.5px] w-[5px] sm:w-full" />
            <div className="bg-gray-900 flex flex-col gap-[45px] items-end justify-start p-10 sm:px-5 rounded-bl-[32px] rounded-tl-[32px]">
              <div className="flex flex-row gap-5 items-center justify-end mt-[5px] w-[37%] md:w-full">
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
                  alt="Avatar Four"
                />
              </div>
              <div className="flex flex-col font-inter items-center justify-start mb-0.5 w-[99%] md:w-full">
                <div className="bg-red-A200 h-[174px] pt-5 relative rounded-[12px] w-full">
                  <div className="bg-gray-900_33 h-[19px] mb-[-3px] ml-auto mr-[118px] rounded-[50%] w-[19px] z-[1]"></div>
                  <Text
                    className="mb-[-8.66px] ml-5 text-[22px] sm:text-lg text-white-A700 md:text-xl z-[1]"
                    size="txtInterBold22"
                  >
                    Go Premium!
                  </Text>
                  <div className="flex flex-col gap-[25px] items-start justify-start mb-[undefinedpx] mt-auto mx-auto w-[85%] z-[1]">
                    <Text
                      className="leading-[22.00px] text-sm text-white-A700"
                      size="txtInterRegular14WhiteA700"
                    >
                      <>
                        Try premium membership and enjoy
                        <br />a full experience of our community.
                      </>
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[97px] rounded-[12px]"
                      rightIcon={
                        <Img
                          className="h-3.5 ml-[-3px] mr-[11px] rounded-[7px] my-2"
                          src="images/img_arrowright_14X14.svg"
                          alt="arrow_right"
                        />
                      }
                      color="gray_900_33"
                      size="md"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-sm">
                        See more
                      </div>
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="bg-green-400 h-[87px] mb-[50px] rounded-[43.5px] w-[19%]"></div>
                      <Img
                        className="h-[92px] md:h-auto mt-[45px] object-cover"
                        src="images/img_oval.png"
                        alt="Oval One"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[43px] items-start justify-start mt-16 w-full">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                    size="txtInterBold22"
                  >
                    Who to Follow
                  </Text>
                  <List
                    className="flex flex-col gap-[30px] items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row items-start justify-start w-full">
                      <Img
                        className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                        src="images/img_avatar_11.png"
                        alt="Avatar Five"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start ml-2.5 pr-[3px] pt-[3px]">
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
                        className="flex h-7 items-center justify-center ml-10 my-[5px] rounded-lg w-7"
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
                    <div className="flex flex-1 flex-row items-start justify-start w-full">
                      <Img
                        className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                        src="images/img_avatar_12.png"
                        alt="Avatar Six"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start ml-2.5 pr-[3px] pt-[3px]">
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
                        className="flex h-7 items-center justify-center ml-10 my-[5px] rounded-lg w-7"
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
                    <div className="flex flex-1 flex-row items-start justify-start w-full">
                      <Img
                        className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                        src="images/img_avatar_1.png"
                        alt="Avatar Seven"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start ml-2.5 pr-[3px] pt-[3px]">
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
                        className="flex h-7 items-center justify-center ml-10 my-[5px] rounded-lg w-7"
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
                  </List>
                  <Button
                    className="bg-transparent cursor-pointer flex items-center justify-center min-w-[90px]"
                    rightIcon={
                      <Img
                        className="h-[18px] ml-1"
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
                <div className="flex flex-col gap-[45px] items-start justify-start mt-[60px] w-full">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                    size="txtInterBold22"
                  >
                    Friends
                  </Text>
                  <List
                    className="flex flex-col gap-[30px] items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row items-center justify-start w-full">
                      <Img
                        className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                        src="images/img_avatar_13.png"
                        alt="Avatar Eight"
                      />
                      <Text
                        className="ml-2.5 text-sm text-white-A700"
                        size="txtInterMedium14WhiteA700"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex h-7 items-center justify-center ml-[134px] my-[5px] rounded-lg w-7"
                        color="white_A700_33"
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
                        src="images/img_avatar_14.png"
                        alt="Avatar Nine"
                      />
                      <Text
                        className="ml-2.5 text-sm text-white-A700"
                        size="txtInterMedium14WhiteA700"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex h-7 items-center justify-center ml-[134px] my-[5px] rounded-lg w-7"
                        color="white_A700_33"
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
                        src="images/img_avatar_15.png"
                        alt="Avatar Ten"
                      />
                      <Text
                        className="ml-2.5 text-sm text-white-A700"
                        size="txtInterMedium14WhiteA700"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex h-7 items-center justify-center ml-[134px] my-[5px] rounded-lg w-7"
                        color="white_A700_33"
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

export default SearchResultsPage;
