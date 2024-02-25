import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "/src/components";
import Sidebar1 from "components/Sidebar1";

const GalleryPage: React.FC = () => {
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
            <div className="bg-gray-500_66 h-32 mb-[494px] md:mt-0 mt-[448px] rounded-sm w-[1%]"></div>
            <div className="h-[1070px] md:h-[1880px] sm:h-[2828px] relative w-[99%] md:w-full">
              <div className="absolute bg-white-A700 flex sm:flex-col flex-row sm:gap-10 inset-x-[0] items-center justify-between mx-auto p-10 sm:px-5 rounded-bl-[32px] rounded-tl-[32px] top-[0] w-full">
                <div className="flex sm:flex-1 flex-row items-start justify-center ml-2.5 sm:ml-[0] pt-0.5 w-[39%] sm:w-full">
                  <Text
                    className="common-pointer text-gray-500 text-sm"
                    size="txtInterBold14Gray500"
                    onClick={() => navigate("/userprofile")}
                  >
                    Posts
                  </Text>
                  <div className="flex flex-col gap-[9px] items-center justify-start ml-[31px] w-[18%]">
                    <Text
                      className="text-gray-900 text-sm"
                      size="txtInterBold14"
                    >
                      Photos
                    </Text>
                    <div className="bg-gray-900 h-0.5 w-[82%]"></div>
                  </div>
                  <Text
                    className="ml-8 text-gray-500 text-sm"
                    size="txtInterBold14Gray500"
                  >
                    Videos
                  </Text>
                  <Text
                    className="ml-[25px] text-gray-500 text-sm"
                    size="txtInterBold14Gray500"
                  >
                    Events
                  </Text>
                </div>
                <div className="flex sm:flex-1 flex-row font-sfprodisplay gap-5 items-center justify-center mb-[891px] sm:mt-0 mt-[5px] w-[17%] sm:w-full">
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
              <List
                className="absolute bottom-[0] flex flex-col gap-4 inset-x-[0] items-center mx-auto rounded-[12px] w-[89%]"
                orientation="vertical"
              >
                <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between my-0 rounded-[12px] w-full">
                  <Img
                    className="h-[221px] md:h-auto object-cover rounded-[12px] w-[221px]"
                    src="images/img_5.png"
                    alt="Image"
                  />
                  <Img
                    className="h-[221px] md:h-auto object-cover rounded-[12px] w-[221px]"
                    src="images/img_image_221X221.png"
                    alt="Image One"
                  />
                  <Img
                    className="h-[221px] md:h-auto object-cover rounded-[12px] w-[221px]"
                    src="images/img_image_20.png"
                    alt="Image Two"
                  />
                </div>
                <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between my-0 rounded-[12px] w-full">
                  <Img
                    className="common-pointer h-[221px] md:h-auto object-cover rounded-[12px] w-[221px]"
                    src="images/img_photo3.png"
                    alt="Image One"
                    onClick={() => navigate("")}
                  />
                  <Img
                    className="h-[221px] md:h-auto object-cover rounded-[12px] w-[221px]"
                    src="images/img_image_21.png"
                    alt="Image One One"
                  />
                  <Img
                    className="h-[221px] md:h-auto object-cover rounded-[12px] w-[221px]"
                    src="images/img_image_160X200.png"
                    alt="Image Two One"
                  />
                </div>
                <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between my-0 rounded-[12px] w-full">
                  <Img
                    className="h-[221px] md:h-auto object-cover rounded-[12px] w-[221px]"
                    src="images/img_image_22.png"
                    alt="Image Two"
                  />
                  <Img
                    className="h-[221px] md:h-auto object-cover rounded-[12px] w-[221px]"
                    src="images/img_image_23.png"
                    alt="Image One Two"
                  />
                  <Img
                    className="h-[221px] md:h-auto object-cover rounded-[12px] w-[221px]"
                    src="images/img_image_24.png"
                    alt="Image Two Two"
                  />
                </div>
                <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between my-0 rounded-[12px] w-full">
                  <Img
                    className="h-[221px] md:h-auto object-cover rounded-[12px] w-[221px]"
                    src="images/img_image_768X540.png"
                    alt="Image Three"
                  />
                  <Img
                    className="h-[221px] md:h-auto object-cover rounded-[12px] w-[221px]"
                    src="images/img_image_75X80.png"
                    alt="Image One Three"
                  />
                  <Img
                    className="h-[221px] md:h-auto object-cover rounded-[12px] w-[221px]"
                    src="images/img_photo3_145X160.png"
                    alt="Image Two Three"
                  />
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
