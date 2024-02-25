import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const MyProfilePage: React.FC = () => {
  const navigate = useNavigate();

  const [frameonevalue, setFrameonevalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
          <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar1 className="!sticky !w-[165px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
            <div className="flex flex-1 flex-col gap-10 items-center justify-start md:mt-0 mt-10 w-full">
              <div className="bg-white-A700 flex sm:flex-col flex-row gap-[13px] items-center justify-start p-3 rounded-[12px] w-full">
                <Input
                  name="FrameOne"
                  placeholder="Search in social…"
                  value={frameonevalue}
                  onChange={(e) => setFrameonevalue(e)}
                  className="font-medium p-0 placeholder:text-gray-500 text-left text-sm w-full"
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
                  size="xs"
                ></Input>
                <Text
                  className="text-gray-500 text-xs tracking-[1.00px] uppercase"
                  size="txtInterBold12"
                >
                  Filters
                </Text>
              </div>
              <div className="bg-gray-100 flex flex-col items-center justify-start w-full">
                <List
                  className="flex flex-col gap-[0] items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 md:flex-col flex-row gap-[30px] items-start justify-between my-0 w-full">
                    <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded-[12px] w-[47%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-between w-[66%]">
                          <Img
                            className="h-12 md:h-auto object-cover rounded-[12px] w-12"
                            src="images/img_image_48X48.png"
                            alt="Image"
                          />
                          <div className="flex flex-col gap-2 items-start justify-end">
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
                        <div className="flex flex-col gap-[15px] items-center justify-start mt-5 w-full">
                          <Text
                            className="leading-[22.00px] text-base text-gray-900 w-full"
                            size="txtInterBold16"
                          >
                            The Best Fashion Instagrams of the Week: Céline
                            Dion, Lizzo, and More
                          </Text>
                          <Text
                            className="leading-[20.00px] text-gray-500 text-sm w-full"
                            size="txtInterMedium14Gray500"
                          >
                            If you are looking for a break from the cold, take a
                            cue from Lizzo: This week, the singer headed to
                            Disneyland in warm and sunny California.
                          </Text>
                        </div>
                        <Text
                          className="mt-3 text-gray-500 text-xs tracking-[1.00px] uppercase"
                          size="txtInterBold12"
                        >
                          Read More
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-start mt-5 w-full">
                        <div className="flex flex-row gap-[5px] items-center justify-start p-1.5 w-[23%]">
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
                        <div className="flex flex-row gap-1.5 items-center justify-start ml-2.5 p-[5px] w-[22%]">
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
                        <div className="flex flex-row items-center justify-center ml-[77px] p-[7px] w-[26%]">
                          <Text
                            className="ml-0.5 text-gray-900 text-sm"
                            size="txtInterMedium14Gray900"
                          >
                            Share
                          </Text>
                          <Img
                            className="h-3.5 mx-0.5 w-3.5"
                            src="images/img_reply.svg"
                            alt="reply"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex md:flex-1 flex-col font-sfprodisplay items-center justify-end mb-[30px] p-[30px] sm:px-5 rounded-[12px] w-1/2 md:w-full">
                      <div className="flex flex-col gap-8 items-start justify-start mt-[3px] w-full">
                        <Text
                          className="text-base text-gray-900"
                          size="txtSFProDisplayBold16"
                        >
                          Photos
                        </Text>
                        <div className="flex flex-col font-inter gap-[30px] items-start justify-start w-full">
                          <div className="flex flex-col gap-2.5 h-80 items-center justify-start rounded-[12px] w-80">
                            <div className="flex flex-row gap-2.5 items-center justify-between rounded-[12px] w-full">
                              <Img
                                className="h-[100px] md:h-auto object-cover rounded-[12px] w-[100px]"
                                src="images/img_5.png"
                                alt="Image Two"
                              />
                              <Img
                                className="h-[100px] md:h-auto object-cover rounded-[12px] w-[100px]"
                                src="images/img_image_221X221.png"
                                alt="Image Three"
                              />
                              <Img
                                className="h-[100px] md:h-auto object-cover rounded-[12px] w-[100px]"
                                src="images/img_image_20.png"
                                alt="Image Four"
                              />
                            </div>
                            <div className="flex flex-row gap-2.5 items-center justify-between rounded-[12px] w-full">
                              <Img
                                className="h-[100px] md:h-auto object-cover rounded-[12px] w-[100px]"
                                src="images/img_photo3.png"
                                alt="Image Five"
                              />
                              <Img
                                className="h-[100px] md:h-auto object-cover rounded-[12px] w-[100px]"
                                src="images/img_image_21.png"
                                alt="Image Six"
                              />
                              <Img
                                className="h-[100px] md:h-auto object-cover rounded-[12px] w-[100px]"
                                src="images/img_image_160X200.png"
                                alt="Image Seven"
                              />
                            </div>
                            <div className="flex flex-row gap-2.5 items-center justify-between rounded-[12px] w-full">
                              <Img
                                className="h-[100px] md:h-auto object-cover rounded-[12px] w-[100px]"
                                src="images/img_image_22.png"
                                alt="Image Eight"
                              />
                              <Img
                                className="h-[100px] md:h-auto object-cover rounded-[12px] w-[100px]"
                                src="images/img_image_23.png"
                                alt="Image Nine"
                              />
                              <Img
                                className="h-[100px] md:h-auto object-cover rounded-[12px] w-[100px]"
                                src="images/img_image_24.png"
                                alt="Image Ten"
                              />
                            </div>
                          </div>
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[97px] rounded"
                            rightIcon={
                              <Img
                                className="h-3.5 ml-[-3px] mr-[11px] my-2"
                                src="images/img_arrowright_1.svg"
                                alt="arrow_right"
                              />
                            }
                            color="gray_500_6c"
                            size="xs"
                            variant="outline"
                          >
                            <div className="font-medium text-left text-sm">
                              See more
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row gap-[30px] items-start justify-between my-0 w-full">
                    <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[30px] p-[30px] sm:px-5 rounded-[12px] w-[47%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-between w-[66%]">
                          <Img
                            className="h-12 md:h-auto object-cover rounded-[12px] w-12"
                            src="images/img_image_48X48.png"
                            alt="Image One"
                          />
                          <div className="flex flex-col gap-2 items-start justify-end">
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
                          alt="overflowmenu One"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start mt-[30px] w-full">
                        <Img
                          className="h-[150px] sm:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                          src="images/img_cardmobile_3.png"
                          alt="Image One One"
                        />
                        <div className="flex flex-col gap-[15px] items-center justify-start mt-5 w-full">
                          <Text
                            className="leading-[22.00px] text-base text-gray-900 w-full"
                            size="txtInterBold16"
                          >
                            The Best Fashion Instagrams of the Week: Céline
                            Dion, Lizzo, and More
                          </Text>
                          <Text
                            className="leading-[20.00px] text-gray-500 text-sm w-full"
                            size="txtInterMedium14Gray500"
                          >
                            If you are looking for a break from the cold, take a
                            cue from Lizzo: This week, the singer headed to
                            Disneyland in warm and sunny California.
                          </Text>
                        </div>
                        <Text
                          className="mt-[9px] text-gray-500 text-xs tracking-[1.00px] uppercase"
                          size="txtInterBold12"
                        >
                          Read More
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-start mt-4 w-full">
                        <div className="flex flex-row gap-[5px] items-center justify-start p-[5px] w-[23%]">
                          <Img
                            className="h-3.5 w-3.5"
                            src="images/img_favorite_1.svg"
                            alt="favorite One"
                          />
                          <Text
                            className="text-gray-900 text-sm"
                            size="txtInterMedium14Gray900"
                          >
                            326
                          </Text>
                        </div>
                        <div className="flex flex-row gap-1.5 items-center justify-start ml-2.5 p-[5px] w-[22%]">
                          <Img
                            className="h-3.5 w-3.5"
                            src="images/img_location.svg"
                            alt="location One"
                          />
                          <Text
                            className="text-gray-900 text-sm"
                            size="txtInterMedium14Gray900"
                          >
                            148
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center ml-[77px] p-[5px] w-[26%]">
                          <Text
                            className="ml-[5px] text-gray-900 text-sm"
                            size="txtInterMedium14Gray900"
                          >
                            Share
                          </Text>
                          <Img
                            className="h-3.5 mr-1.5 w-3.5"
                            src="images/img_reply.svg"
                            alt="reply One"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex md:flex-1 flex-col font-sfprodisplay items-center justify-end mb-[173px] p-[30px] sm:px-5 rounded-[12px] w-[380px] md:w-full">
                      <div className="flex flex-col items-start justify-start mt-[3px] w-full">
                        <Text
                          className="text-base text-gray-900"
                          size="txtSFProDisplayBold16"
                        >
                          Videos
                        </Text>
                        <div className="flex flex-row font-inter gap-2.5 items-center justify-between mt-8 w-full">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[69px] items-center justify-start rounded-lg w-[38%]"
                            style={{
                              backgroundImage:
                                "url('images/img_group4506.png')",
                            }}
                          >
                            <div className="bg-gray-900_7e md:h-[38px] h-[69px] p-[15px] relative rounded-lg w-full">
                              <Img
                                className="absolute h-[38px] inset-[0] justify-center m-auto w-[38px]"
                                src="images/img_play.svg"
                                alt="play"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-2.5 items-start justify-start">
                            <Text
                              className="leading-[20.00px] text-gray-900 text-sm w-full"
                              size="txtInterBold14"
                            >
                              Tropical Fresh Tourism Is Back In Full Swing In{" "}
                            </Text>
                            <Text
                              className="text-gray-500 text-sm"
                              size="txtInterRegular14"
                            >
                              2 days ago
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row font-inter gap-2.5 items-center justify-between mt-[30px] w-full">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[69px] items-center justify-start rounded-lg w-[38%]"
                            style={{
                              backgroundImage: "url('images/img_image_14.png')",
                            }}
                          >
                            <div className="bg-gray-900_7e md:h-[38px] h-[69px] p-[15px] relative rounded-lg w-full">
                              <Img
                                className="absolute h-[38px] inset-[0] justify-center m-auto w-[38px]"
                                src="images/img_play.svg"
                                alt="play One"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-2.5 items-start justify-start">
                            <Text
                              className="leading-[20.00px] text-gray-900 text-sm w-full"
                              size="txtInterBold14"
                            >
                              How Timberland created the visual campaign of the{" "}
                            </Text>
                            <Text
                              className="text-gray-500 text-sm"
                              size="txtInterRegular14"
                            >
                              2 days ago
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-between mt-[30px] w-full">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[69px] items-center justify-start rounded-lg w-[38%]"
                            style={{
                              backgroundImage: "url('images/img_image_19.png')",
                            }}
                          >
                            <div className="bg-gray-900_7e md:h-[38px] h-[69px] p-[15px] relative rounded-lg w-full">
                              <Img
                                className="absolute h-[38px] inset-[0] justify-center m-auto w-[38px]"
                                src="images/img_play.svg"
                                alt="play Two"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-2.5 items-start justify-start">
                            <Text
                              className="leading-[20.00px] text-gray-900 text-sm w-full"
                              size="txtInterBold14"
                            >
                              Take your mobile photography to the next{" "}
                            </Text>
                            <Text
                              className="text-gray-500 text-sm"
                              size="txtSFProDisplayRegular14"
                            >
                              2 days ago
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 sm:flex-col flex-row font-sfprodisplay gap-2.5 items-center justify-between md:px-5 w-[27%] md:w-full">
            <div className="bg-gray-500_7e h-32 sm:mt-0 my-[448px] rounded-sm w-[2%]"></div>
            <div className="bg-gray-900 flex flex-col md:gap-10 gap-[85px] items-end justify-start p-[38px] sm:px-5 rounded-bl-[32px] rounded-tl-[32px]">
              <div className="flex flex-row gap-5 items-center justify-end mt-[7px] w-2/5 md:w-full">
                <Button
                  className="common-pointer cursor-pointer font-bold h-12 sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center w-12"
                  onClick={() => navigate("")}
                  shape="round"
                  color="light_blue_200"
                  size="sm"
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
              <div className="flex flex-col font-inter gap-[30px] items-center justify-start mb-[42px] w-[99%] md:w-full">
                <div className="flex flex-col gap-2.5 items-center justify-start w-[65%] md:w-full">
                  <Img
                    className="h-[108px] md:h-auto object-cover rounded-[36px] w-[108px]"
                    src="images/img_avatar.png"
                    alt="Avatar One"
                  />
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                    size="txtInterBold30"
                  >
                    Edward Ford
                  </Text>
                  <Text
                    className="text-gray-500 text-sm"
                    size="txtInterRegular14"
                  >
                    @edwardford
                  </Text>
                </div>
                <div className="flex flex-row gap-[25px] items-center justify-center w-[71%] md:w-full">
                  <div className="flex flex-row items-center justify-end pr-0.5 py-0.5 w-[41%]">
                    <Text
                      className="text-base text-white-A700"
                      size="txtInterBold16WhiteA700"
                    >
                      518
                    </Text>
                    <Text
                      className="ml-[5px] text-base text-gray-500"
                      size="txtInterBold16Gray500"
                    >
                      Posts
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-end pb-0.5 pr-0.5 w-[47%]">
                    <Text
                      className="mt-[3px] text-base text-white-A700"
                      size="txtInterBold16WhiteA700"
                    >
                      22k
                    </Text>
                    <Text
                      className="ml-[3px] text-base text-gray-500"
                      size="txtInterBold16Gray500"
                    >
                      Friends
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row gap-5 items-center justify-between w-full">
                    <Button
                      className="cursor-pointer font-bold min-w-[217px] rounded-[29px] text-center text-sm"
                      color="green_400"
                      size="lg"
                      variant="fill"
                    >
                      Edit Profile
                    </Button>
                    <Button
                      className="flex h-12 items-center justify-center w-12"
                      shape="round"
                      color="gray_500_33"
                      size="sm"
                      variant="outline"
                    >
                      <Img
                        className="h-[22px]"
                        src="images/img_overflowmenu_2.svg"
                        alt="overflowmenu Two"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-3.5 items-start justify-start mt-[43px]">
                    <Text
                      className="text-white-A700 text-xs tracking-[1.00px] uppercase"
                      size="txtInterBold12WhiteA700"
                    >
                      About
                    </Text>
                    <Text
                      className="leading-[22.00px] text-sm text-white-A700_cc"
                      size="txtInterRegular14WhiteA700cc"
                    >
                      <>
                        Travel, Adventure & Lifestyle
                        <br />
                        Photographer & Digital Influencer
                        <br />
                        Nikon Ambassador
                        <br />
                        Let&#39;s Work:
                        <br />
                        ed.ford@mail.com
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col font-sfprodisplay gap-[22px] items-start justify-start mt-[61px] w-full">
                    <Text
                      className="text-base text-white-A700"
                      size="txtSFProDisplayBold16WhiteA700"
                    >
                      Friends
                    </Text>
                    <List
                      className="flex flex-col gap-[15px] items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-full">
                        <Img
                          className="h-[45px] md:h-auto object-cover rounded-[14px] w-[45px]"
                          src="images/img_avatar_45X45.png"
                          alt="Avatar Two"
                        />
                        <Img
                          className="h-[45px] md:h-auto object-cover rounded-[14px] w-[45px]"
                          src="images/img_avatar_27.png"
                          alt="Avatar One"
                        />
                        <Img
                          className="h-[45px] md:h-auto object-cover rounded-[14px] w-[45px]"
                          src="images/img_avatar_38X38.png"
                          alt="Avatar Two"
                        />
                        <Img
                          className="h-[45px] md:h-auto object-cover rounded-[14px] w-[45px]"
                          src="images/img_avatar_28.png"
                          alt="Avatar Three"
                        />
                        <Img
                          className="h-[45px] md:h-auto object-cover rounded-[14px] w-[45px]"
                          src="images/img_avatar_15.png"
                          alt="Avatar Four"
                        />
                      </div>
                      <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-full">
                        <Img
                          className="h-[45px] md:h-auto object-cover rounded-[14px] w-[45px]"
                          src="images/img_avatar_22.png"
                          alt="Avatar Three"
                        />
                        <Img
                          className="h-[45px] md:h-auto object-cover rounded-[14px] w-[45px]"
                          src="images/img_avatar_14.png"
                          alt="Avatar One One"
                        />
                        <Img
                          className="h-[45px] md:h-auto object-cover rounded-[14px] w-[45px]"
                          src="images/img_avatar_25.png"
                          alt="Avatar Two One"
                        />
                        <Img
                          className="h-[45px] md:h-auto object-cover rounded-[14px] w-[45px]"
                          src="images/img_avatar_13.png"
                          alt="Avatar Three One"
                        />
                        <Img
                          className="h-[45px] md:h-auto object-cover rounded-[14px] w-[45px]"
                          src="images/img_avatar_8.png"
                          alt="Avatar Four One"
                        />
                      </div>
                      <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-full">
                        <Img
                          className="h-[45px] md:h-auto object-cover rounded-[14px] w-[45px]"
                          src="images/img_avatar_1.png"
                          alt="Avatar Four"
                        />
                        <Img
                          className="h-[45px] md:h-auto object-cover rounded-[14px] w-[45px]"
                          src="images/img_avatar_11.png"
                          alt="Avatar One Two"
                        />
                        <Img
                          className="h-[45px] md:h-auto object-cover rounded-[14px] w-[45px]"
                          src="images/img_avatar_6.png"
                          alt="Avatar Two Two"
                        />
                        <Img
                          className="h-[45px] md:h-auto object-cover rounded-[14px] w-[45px]"
                          src="images/img_avatar_5.png"
                          alt="Avatar Three Two"
                        />
                        <Img
                          className="h-[45px] md:h-auto object-cover rounded-[14px] w-[45px]"
                          src="images/img_avatar_7.png"
                          alt="Avatar Four Two"
                        />
                      </div>
                    </List>
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

export default MyProfilePage;
