import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const UserProfilePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-sfprodisplay items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
          <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between md:px-5 w-2/5 md:w-full">
            <Sidebar1 className="!sticky !w-[165px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
            <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[103px] pr-[23px] py-[22px] rounded-[12px]"
                leftIcon={
                  <Img
                    className="h-[18px] ml-5 mr-2.5 my-5"
                    src="images/img_arrowleft_18X18.svg"
                    alt="arrow_left"
                  />
                }
                color="gray_500_33"
                variant="fill"
              >
                <div className="font-bold sm:pr-5 text-left text-sm">Back</div>
              </Button>
              <div className="bg-white-A700 flex flex-col font-inter items-center justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-col gap-[30px] items-center justify-start my-2.5 w-full">
                  <div className="flex flex-col gap-2.5 items-center justify-start w-[65%] md:w-full">
                    <Img
                      className="h-[108px] md:h-auto object-cover rounded-[36px] w-[108px]"
                      src="images/img_avatar.png"
                      alt="Avatar"
                    />
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
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
                  <div className="flex flex-row gap-[22px] items-center justify-center w-[71%] md:w-full">
                    <div className="flex flex-row gap-[9px] items-center justify-start w-[42%]">
                      <Text
                        className="text-base text-gray-900"
                        size="txtInterBold16"
                      >
                        518
                      </Text>
                      <Text
                        className="text-base text-gray-500"
                        size="txtInterBold16Gray500"
                      >
                        Posts
                      </Text>
                    </div>
                    <div className="flex flex-row gap-1.5 items-start justify-start w-[48%]">
                      <Text
                        className="mt-[3px] text-base text-gray-900"
                        size="txtInterBold16"
                      >
                        22k
                      </Text>
                      <Text
                        className="mb-0.5 text-base text-gray-500"
                        size="txtInterBold16Gray500"
                      >
                        Friends
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col font-sfprodisplay items-start justify-start w-full">
                    <div className="flex flex-row gap-5 items-center justify-between w-full">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[149px] pr-[35px] py-[22px] rounded-[12px]"
                        leftIcon={
                          <Img
                            className="h-[18px] ml-[35px] mr-2 my-5"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                        }
                        color="green_400"
                        variant="fill"
                      >
                        <div className="font-bold sm:pr-5 text-left text-sm">
                          Freinds
                        </div>
                      </Button>
                      <Img
                        className="h-12 w-12"
                        src="images/img_mail_3.svg"
                        alt="mail One"
                      />
                      <Button
                        className="flex h-12 items-center justify-center rounded-[12px] w-12"
                        color="gray_500_33"
                        size="lg"
                        variant="outline"
                      >
                        <Img
                          className="h-[22px]"
                          src="images/img_overflowmenu_48X48.svg"
                          alt="overflowmenu"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col font-inter gap-3.5 items-start justify-start mt-[43px]">
                      <Text
                        className="text-gray-900 text-xs tracking-[1.00px] uppercase"
                        size="txtInterBold12Gray900"
                      >
                        About
                      </Text>
                      <Text
                        className="leading-[22.00px] text-gray-500 text-sm"
                        size="txtInterRegular14"
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
                        className="text-base text-gray-900"
                        size="txtSFProDisplayBold16"
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
                            alt="Avatar One"
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
                            alt="Avatar Two"
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
                            alt="Avatar Three"
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
          <div className="flex md:flex-1 md:flex-col flex-row font-inter gap-2.5 items-start justify-between md:px-5 w-[56%] md:w-full">
            <div className="bg-gray-500_66 h-32 mb-[716px] md:mt-0 mt-[448px] rounded-sm w-[1%]"></div>
            <div className="sm:h-[1153px] h-[1292px] md:h-[2336px] relative w-[99%] md:w-full">
              <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-start mx-auto p-10 sm:px-5 rounded-bl-[32px] rounded-tl-[32px] top-[0] w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mb-[891px] mt-[5px] w-[99%] md:w-full">
                  <div className="flex flex-row items-start justify-between py-0.5 w-2/5 sm:w-full">
                    <div className="flex flex-col gap-[9px] items-center justify-start w-[15%]">
                      <Text
                        className="text-gray-900 text-sm"
                        size="txtInterBold14"
                      >
                        Posts
                      </Text>
                      <div className="bg-gray-900 h-0.5 w-full"></div>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="common-pointer text-gray-500 text-sm"
                        size="txtInterBold14Gray500"
                        onClick={() => navigate("/gallery")}
                      >
                        Photos
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-gray-500 text-sm"
                        size="txtInterBold14Gray500"
                      >
                        Videos
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-gray-500 text-sm"
                        size="txtInterBold14Gray500"
                      >
                        Events
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row font-sfprodisplay gap-5 items-center justify-between w-[17%] sm:w-full">
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
                      alt="Avatar Four"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[89%]">
                <List
                  className="sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col gap-[30px] items-center justify-start mb-20 sm:ml-[0] w-full">
                    <div className="bg-white-A700 border-2 border-gray-500_33 border-solid flex flex-col items-center justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
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
                          alt="overflowmenu One"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start mt-[30px] w-full">
                        <Img
                          className="h-[150px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                          src="images/img_cardmobile_3.png"
                          alt="Image One"
                        />
                        <div className="flex flex-col gap-[15px] items-center justify-start mt-5 w-full">
                          <Text
                            className="leading-[22.00px] text-base text-gray-900 w-full"
                            size="txtInterBold16"
                          >
                            The Best Fashion Instagrams of the Week: Céline
                            Dion, Lizzo
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
                        <div className="flex flex-row gap-[5px] items-center justify-start p-1.5 w-[24%]">
                          <Img
                            className="h-3.5 my-0.5 w-3.5"
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
                        <div className="flex flex-row gap-1.5 items-center justify-start ml-2.5 p-[5px] w-[24%]">
                          <Img
                            className="h-3.5 my-[3px] w-3.5"
                            src="images/img_location.svg"
                            alt="location"
                          />
                          <Text
                            className="my-0.5 text-gray-900 text-sm"
                            size="txtInterMedium14"
                          >
                            148
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center ml-[59px] p-[7px] w-[28%]">
                          <Text
                            className="ml-0.5 text-gray-900 text-sm"
                            size="txtInterMedium14"
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
                    <div className="bg-white-A700 border-2 border-gray-500_33 border-solid flex flex-col items-center justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-between w-[66%]">
                          <Img
                            className="h-12 md:h-auto object-cover rounded-[12px] w-12"
                            src="images/img_image_48X48.png"
                            alt="Image Two"
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
                          className="h-[150px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                          src="images/img_image_150X272.png"
                          alt="Image Three"
                        />
                        <div className="flex flex-col gap-[15px] items-center justify-start mt-5 w-full">
                          <Text
                            className="leading-[22.00px] text-base text-gray-900 w-full"
                            size="txtInterBold16"
                          >
                            The Best Fashion Instagrams of the Week: Céline
                            Dion, Lizzo
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
                        <div className="flex flex-row gap-[5px] items-center justify-start p-[5px] w-[24%]">
                          <Img
                            className="h-3.5 w-3.5"
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
                        <div className="flex flex-row gap-1.5 items-center justify-start ml-2.5 p-[5px] w-[24%]">
                          <Img
                            className="h-3.5 w-3.5"
                            src="images/img_location.svg"
                            alt="location One"
                          />
                          <Text
                            className="text-gray-900 text-sm"
                            size="txtInterMedium14"
                          >
                            148
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center ml-[59px] p-[5px] w-[28%]">
                          <Text
                            className="ml-[5px] text-gray-900 text-sm"
                            size="txtInterMedium14"
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
                  </div>
                  <div className="flex flex-1 flex-col gap-[30px] items-center justify-start sm:ml-[0] w-full">
                    <div className="bg-white-A700 border-2 border-gray-500_33 border-solid flex flex-col items-center justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-between w-[66%]">
                          <Img
                            className="h-12 md:h-auto object-cover rounded-[12px] w-12"
                            src="images/img_image_48X48.png"
                            alt="Image Two"
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
                          alt="overflowmenu Two"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start mt-[30px] w-full">
                        <Img
                          className="h-[150px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                          src="images/img_image_150X290.png"
                          alt="Image One One"
                        />
                        <div className="flex flex-col gap-[15px] items-center justify-start mt-5 w-full">
                          <Text
                            className="leading-[22.00px] text-base text-gray-900 w-full"
                            size="txtInterBold16"
                          >
                            The Best Fashion Instagrams of the Week: Céline
                            Dion, Lizzo
                          </Text>
                          <Text
                            className="leading-[20.00px] text-gray-500 text-sm"
                            size="txtInterMedium14Gray500"
                          >
                            <span className="text-gray-500 font-inter text-left font-medium">
                              <>
                                If you are looking for a break from the cold,
                                take a cue from Lizzo: This week, the singer
                                headed to Disneyland in warm and sunny
                                California.
                                <br />
                              </>
                            </span>
                            <span className="text-gray-500 font-inter text-left font-medium">
                              warm and sunny California.warm and sunny
                              California.
                            </span>
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
                        <div className="flex flex-row gap-[5px] items-center justify-start p-1.5 w-[24%]">
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
                        <div className="flex flex-row gap-1.5 items-center justify-start ml-2.5 p-[5px] w-[24%]">
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
                        <div className="flex flex-row items-center justify-center ml-[59px] p-[7px] w-[28%]">
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
                    <div className="bg-white-A700 border-2 border-gray-500_33 border-solid flex flex-col items-center justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-between w-[66%]">
                          <Img
                            className="h-12 md:h-auto object-cover rounded-[12px] w-12"
                            src="images/img_image_48X48.png"
                            alt="Image Two One"
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
                          alt="overflowmenu One One"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start mt-[30px] w-full">
                        <Img
                          className="h-[150px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                          src="images/img_image_19.png"
                          alt="Image Three One"
                        />
                        <div className="flex flex-col gap-[41px] items-start justify-start mt-5 w-full">
                          <Text
                            className="text-base text-gray-900"
                            size="txtInterBold16"
                          >
                            The Best Fashion Instagrams of the Week: Céline
                            Dion, Lizzo
                          </Text>
                          <Text
                            className="leading-[20.00px] text-gray-500 text-sm"
                            size="txtInterMedium14Gray500"
                          >
                            <span className="text-gray-500 font-inter text-left font-medium">
                              <>
                                If you are looking for a break from the cold,
                                take a cue from Lizzo: This week, the singer
                                headed to Disneyland in warm and sunny
                                California.
                                <br />
                              </>
                            </span>
                            <span className="text-gray-500 font-inter text-left font-medium">
                              warm and sunny California.warm and sunny
                              California.
                            </span>
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
                        <div className="flex flex-row gap-[5px] items-center justify-start p-[5px] w-[24%]">
                          <Img
                            className="h-3.5 w-3.5"
                            src="images/img_favorite_1.svg"
                            alt="favorite One One"
                          />
                          <Text
                            className="text-gray-900 text-sm"
                            size="txtInterMedium14"
                          >
                            326
                          </Text>
                        </div>
                        <div className="flex flex-row gap-1.5 items-center justify-start ml-2.5 p-[5px] w-[24%]">
                          <Img
                            className="h-3.5 w-3.5"
                            src="images/img_location.svg"
                            alt="location One One"
                          />
                          <Text
                            className="text-gray-900 text-sm"
                            size="txtInterMedium14"
                          >
                            148
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center ml-[59px] p-[5px] w-[28%]">
                          <Text
                            className="ml-[5px] text-gray-900 text-sm"
                            size="txtInterMedium14"
                          >
                            Share
                          </Text>
                          <Img
                            className="h-3.5 mr-1.5 w-3.5"
                            src="images/img_reply.svg"
                            alt="reply One One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;
