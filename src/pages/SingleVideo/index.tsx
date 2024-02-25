import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "/src/components";
import Sidebar1 from "components/Sidebar1";

const SingleVideoPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-sfprodisplay sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar1 className="!sticky !w-[165px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <div className="flex-1 h-[1024px] sm:h-[1308px] md:h-[1610px] md:px-5 relative w-full">
          <div className="flex md:flex-col flex-row gap-2.5 h-full items-center justify-between m-auto w-full">
            <Line className="bg-white-A700_7e h-32 md:h-[5px] md:mt-0 my-[448px] rounded-sm w-[5px] md:w-full" />
            <div className="bg-white-A700 h-[1024px] rounded-bl-[32px] rounded-tl-[32px] w-[99%]"></div>
          </div>
          <div className="absolute flex flex-col gap-[42px] h-max inset-y-[0] items-center justify-start left-[7%] my-auto w-1/2">
            <div className="flex flex-col gap-10 items-start justify-start w-full">
              <Button
                className="common-pointer cursor-pointer flex items-center justify-center min-w-[103px] pr-[23px] py-[22px]"
                onClick={() => navigate("")}
                leftIcon={
                  <Img
                    className="h-[18px] ml-5 mr-2.5 my-5"
                    src="images/img_arrowleft_18X18.svg"
                    alt="arrow_left"
                  />
                }
                shape="round"
                color="gray_100"
                variant="fill"
              >
                <div className="font-bold sm:pr-5 text-left text-sm">Back</div>
              </Button>
              <div className="flex flex-col font-inter gap-[30px] items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[360px] items-center justify-end p-5 rounded-[12px] w-full"
                  style={{ backgroundImage: "url('images/img_video.png')" }}
                >
                  <div className="flex flex-col gap-[18px] items-center justify-start mt-64 pt-[3px] w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                        <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                          <Text
                            className="text-white-A700 text-xs"
                            size="txtInterRegular12WhiteA700"
                          >
                            01:23
                          </Text>
                          <Text
                            className="text-white-A700 text-xs"
                            size="txtInterRegular12WhiteA700"
                          >
                            05:46
                          </Text>
                        </div>
                        <div className="h-1 relative w-full">
                          <Line className="bg-white-A700_33 h-1 m-auto rounded-sm w-full" />
                          <div className="absolute h-1 inset-y-[0] left-[0] my-auto overflow-hidden w-3/5">
                            <div className="w-full h-full absolute bg-undefined"></div>
                            <div
                              className="h-full absolute"
                              style={{ width: "0%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                      <div className="flex flex-row items-center justify-between w-[16%]">
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_trash.svg"
                          alt="trash"
                        />
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_volume.svg"
                          alt="volume"
                        />
                        <div className="h-1 my-[7px] overflow-hidden relative">
                          <div className="w-full h-full absolute bg-white_A700_33 rounded-[2px]"></div>
                          <div
                            className="h-full absolute bg-white_A700  rounded-[2px]"
                            style={{ width: "67%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[18px] items-center justify-between w-[10%]">
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_settings_18X18.svg"
                          alt="settings Two"
                        />
                        <Img
                          className="common-pointer h-[18px] w-[18px]"
                          src="images/img_minimize.svg"
                          alt="minimize"
                          onClick={() => navigate("/videofullscreen")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <div className="flex sm:flex-1 flex-col items-center justify-start w-[24%] sm:w-full">
                    <div className="flex flex-row gap-2.5 items-end justify-between w-full">
                      <Img
                        className="h-12 md:h-auto object-cover rounded-[12px] w-12"
                        src="images/img_avatar.png"
                        alt="Avatar"
                      />
                      <div className="flex flex-col gap-2 items-start justify-start my-[5px]">
                        <Text
                          className="text-gray-900 text-sm"
                          size="txtInterMedium14Gray900"
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
                  </div>
                  <div className="flex sm:flex-1 flex-row items-start justify-between w-[46%] sm:w-full">
                    <div className="flex flex-row gap-[5px] items-center justify-start mt-1 p-1.5">
                      <Img
                        className="h-3.5 my-0.5 w-3.5"
                        src="images/img_favorite_1.svg"
                        alt="favorite"
                      />
                      <Text
                        className="text-gray-900 text-sm"
                        size="txtInterMedium14Gray900"
                      >
                        326
                      </Text>
                    </div>
                    <div className="flex flex-row gap-1.5 items-center justify-start mt-1 p-[5px]">
                      <Img
                        className="h-3.5 my-[3px] w-3.5"
                        src="images/img_location.svg"
                        alt="location"
                      />
                      <Text
                        className="my-0.5 text-gray-900 text-sm"
                        size="txtInterMedium14Gray900"
                      >
                        148
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-end mt-[3px] p-1.5">
                      <Img
                        className="h-3.5 w-3.5"
                        src="images/img_reply.svg"
                        alt="reply"
                      />
                      <Text
                        className="ml-1 text-gray-900 text-sm"
                        size="txtInterMedium14Gray900"
                      >
                        Share
                      </Text>
                    </div>
                    <Img
                      className="h-[38px] w-[38px]"
                      src="images/img_overflowmenu.svg"
                      alt="overflowmenu"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <Text
                      className="leading-[36.00px] text-3xl sm:text-[26px] md:text-[28px] text-gray-900 w-full"
                      size="txtInterBold30"
                    >
                      Tropical Fresh Tourism Is Back In Full Swing In Cancun
                      Mexico
                    </Text>
                    <Text
                      className="leading-[22.00px] text-gray-500 text-sm w-full"
                      size="txtInterRegular14"
                    >
                      Cancun is back, better than ever! Over a hundred Mexico
                      resorts have reopened and the state tourism minister
                      predicts Cancun will draw as many visitors in 2006 as it
                      did two years ago. And the travel deals are great! If you
                      haven’t been, now may be the best time to take a vacation
                      to Cancun.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start w-[59%] md:w-full">
                    <Button
                      className="cursor-pointer min-w-[52px] rounded text-center text-xs"
                      color="gray_500_48"
                      size="sm"
                      variant="fill"
                    >
                      Travel
                    </Button>
                    <Button
                      className="cursor-pointer min-w-[57px] rounded text-center text-xs"
                      color="gray_500_48"
                      size="sm"
                      variant="fill"
                    >
                      Mexico
                    </Button>
                    <Text
                      className="bg-gray-500_48 h-5 justify-center pt-1 px-2 rounded text-gray-500 text-xs w-[43px]"
                      size="txtInterRegular12"
                    >
                      Vlog
                    </Text>
                    <Text
                      className="bg-gray-500_48 h-5 justify-center pt-1 px-2 rounded text-gray-500 text-xs w-[42px]"
                      size="txtInterRegular12"
                    >
                      Tips
                    </Text>
                    <Button
                      className="cursor-pointer min-w-[65px] rounded text-center text-xs"
                      color="gray_500_48"
                      size="sm"
                      variant="fill"
                    >
                      Vacation
                    </Button>
                    <Button
                      className="cursor-pointer min-w-[60px] rounded text-center text-xs"
                      color="gray_500_48"
                      size="sm"
                      variant="fill"
                    >
                      Cancun
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-inter gap-[23px] items-start justify-start w-full">
              <Text className="text-gray-900 text-sm" size="txtInterBold14">
                Related Videos
              </Text>
              <List
                className="sm:flex-col flex-row gap-[18px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div
                  className="bg-cover bg-no-repeat flex flex-1 flex-col h-[115px] items-center justify-start rounded-lg w-full"
                  style={{ backgroundImage: "url('images/img_photo3.png')" }}
                >
                  <div className="bg-gray-900_7e flex flex-col items-center justify-end p-[38px] sm:px-5 rounded-lg w-full">
                    <Button
                      className="flex h-[38px] items-center justify-center w-[38px]"
                      shape="round"
                      color="white_A700_66"
                      size="2xl"
                      variant="fill"
                    >
                      <Img
                        className="h-[18px]"
                        src="images/img_play.svg"
                        alt="play"
                      />
                    </Button>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-1 flex-col h-[115px] items-center justify-start rounded-lg w-full"
                  style={{
                    backgroundImage: "url('images/img_videoplayerwe.png')",
                  }}
                >
                  <div className="bg-gray-900_7e flex flex-col items-center justify-end p-[38px] sm:px-5 rounded-lg w-full">
                    <Button
                      className="flex h-[38px] items-center justify-center w-[38px]"
                      shape="round"
                      color="white_A700_66"
                      size="2xl"
                      variant="fill"
                    >
                      <Img
                        className="h-[18px]"
                        src="images/img_play.svg"
                        alt="play One"
                      />
                    </Button>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-1 flex-col h-[115px] items-center justify-start rounded-lg w-full"
                  style={{
                    backgroundImage:
                      "url('images/img_videoplayerwe_115X200.png')",
                  }}
                >
                  <div className="bg-gray-900_7e flex flex-col items-center justify-end p-[38px] sm:px-5 rounded-lg w-full">
                    <Button
                      className="flex h-[38px] items-center justify-center w-[38px]"
                      shape="round"
                      color="white_A700_66"
                      size="2xl"
                      variant="fill"
                    >
                      <Img
                        className="h-[18px]"
                        src="images/img_play.svg"
                        alt="play Two"
                      />
                    </Button>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="absolute bg-gray-900 flex flex-col gap-[45px] h-full inset-y-[0] items-end justify-end my-auto p-10 sm:px-5 right-[0] rounded-bl-[32px] rounded-tl-[32px] w-[35%]">
            <div className="flex flex-row gap-5 items-center justify-end mr-2 mt-[5px] w-[33%] md:w-full">
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
                alt="Avatar One"
              />
            </div>
            <div className="flex flex-col font-inter md:gap-10 gap-[70px] items-center justify-start mr-2 w-[96%] md:w-full">
              <div className="flex flex-col gap-10 items-start justify-start w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtInterBold22WhiteA700"
                >
                  Comments (148)
                </Text>
                <List
                  className="flex flex-col gap-8 items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <div className="flex flex-row items-end justify-between w-[98%] md:w-full">
                        <div className="flex flex-row items-end justify-evenly">
                          <Img
                            className="h-7 md:h-auto object-cover rounded-[10px] w-7"
                            src="images/img_avatar_28X28.png"
                            alt="Avatar Two"
                          />
                          <Text
                            className="mb-1 mt-2 text-sm text-white-A700"
                            size="txtInterMedium14"
                          >
                            Billy Green
                          </Text>
                        </div>
                        <Text
                          className="mb-1 mt-2 text-gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          20min ago
                        </Text>
                      </div>
                      <Text
                        className="leading-[22.00px] text-sm text-white-A700 w-full"
                        size="txtInterRegular14WhiteA700"
                      >
                        Awesome Edward, remeber that five tips for low cost
                        holidays I sent you?
                      </Text>
                      <div className="flex flex-row gap-4 items-center justify-start w-[14%] md:w-full">
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_favorite_14X14.svg"
                          alt="favorite One"
                        />
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_laptop.svg"
                          alt="laptop"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <div className="flex flex-row items-end justify-between w-[98%] md:w-full">
                        <div className="flex flex-row items-end justify-evenly">
                          <Img
                            className="h-7 md:h-auto object-cover rounded-[10px] w-7"
                            src="images/img_image_6.png"
                            alt="Avatar Three"
                          />
                          <Text
                            className="mb-1 mt-2 text-sm text-white-A700"
                            size="txtInterMedium14"
                          >
                            Billy Green
                          </Text>
                        </div>
                        <Text
                          className="mb-1 mt-2 text-gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          20min ago
                        </Text>
                      </div>
                      <Text
                        className="leading-[22.00px] text-sm text-white-A700 w-full"
                        size="txtInterRegular14WhiteA700"
                      >
                        Awesome Edward, remeber that five tips for low cost{" "}
                      </Text>
                      <div className="flex flex-row gap-4 items-center justify-start w-[14%] md:w-full">
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_favorite.svg"
                          alt="favorite Two"
                        />
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_laptop.svg"
                          alt="laptop One"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <div className="flex flex-row items-end justify-between w-[98%] md:w-full">
                        <div className="flex flex-row items-end justify-evenly">
                          <Img
                            className="h-7 md:h-auto object-cover rounded-[10px] w-7"
                            src="images/img_avatar_2.png"
                            alt="Avatar Four"
                          />
                          <Text
                            className="mb-1 mt-2 text-sm text-white-A700"
                            size="txtInterMedium14"
                          >
                            Billy Green
                          </Text>
                        </div>
                        <Text
                          className="mb-1 mt-2 text-gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          20min ago
                        </Text>
                      </div>
                      <Text
                        className="leading-[22.00px] text-sm text-white-A700 w-full"
                        size="txtInterRegular14WhiteA700"
                      >
                        Awesome Edward, remeber that five tips for low cost
                        holidays I sent you?
                      </Text>
                      <div className="flex flex-row gap-4 items-center justify-start w-[14%] md:w-full">
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_favorite_14X14.svg"
                          alt="favorite Three"
                        />
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_laptop.svg"
                          alt="laptop Two"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <div className="flex flex-row items-end justify-between w-[98%] md:w-full">
                        <div className="flex flex-row items-end justify-evenly">
                          <Img
                            className="h-7 md:h-auto object-cover rounded-[10px] w-7"
                            src="images/img_image_68X68.png"
                            alt="Avatar Five"
                          />
                          <Text
                            className="mb-1 mt-2 text-sm text-white-A700"
                            size="txtInterMedium14"
                          >
                            Billy Green
                          </Text>
                        </div>
                        <Text
                          className="mb-1 mt-2 text-gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          20min ago
                        </Text>
                      </div>
                      <Text
                        className="leading-[22.00px] text-sm text-white-A700 w-full"
                        size="txtInterRegular14WhiteA700"
                      >
                        Awesome Edward, remeber that five tips for low cost{" "}
                      </Text>
                      <div className="flex flex-row gap-4 items-center justify-start w-[14%] md:w-full">
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_favorite.svg"
                          alt="favorite Four"
                        />
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_laptop.svg"
                          alt="laptop Three"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <div className="flex flex-row items-end justify-between w-[98%] md:w-full">
                        <div className="flex flex-row items-end justify-evenly">
                          <Img
                            className="h-7 md:h-auto object-cover rounded-[10px] w-7"
                            src="images/img_avatar_3.png"
                            alt="Avatar Six"
                          />
                          <Text
                            className="mb-1 mt-2 text-sm text-white-A700"
                            size="txtInterMedium14"
                          >
                            Billy Green
                          </Text>
                        </div>
                        <Text
                          className="mb-1 mt-2 text-gray-500 text-xs"
                          size="txtInterRegular12"
                        >
                          20min ago
                        </Text>
                      </div>
                      <Text
                        className="leading-[22.00px] text-sm text-white-A700 w-full"
                        size="txtInterRegular14WhiteA700"
                      >
                        Awesome Edward, remeber that five tips for low cost
                        holidays I sent you?
                      </Text>
                      <div className="flex flex-row gap-4 items-center justify-start w-[14%] md:w-full">
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_favorite_14X14.svg"
                          alt="favorite Five"
                        />
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_laptop.svg"
                          alt="laptop Four"
                        />
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="bg-white-A700 flex flex-row gap-[25px] items-center justify-start p-[11px] rounded w-full">
                <Input
                  name="FrameFive"
                  placeholder="Write a comment…"
                  className="font-medium p-0 placeholder:text-gray-500 text-left text-sm w-full"
                  wrapClassName="flex ml-1 w-[82%]"
                  suffix={
                    <Img
                      className="h-3.5 ml-[35px] mr-px my-1.5"
                      src="images/img_user_14X14.svg"
                      alt="user"
                    />
                  }
                ></Input>
                <Img
                  className="h-3.5 w-3.5"
                  src="images/img_send.svg"
                  alt="send"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleVideoPage;
