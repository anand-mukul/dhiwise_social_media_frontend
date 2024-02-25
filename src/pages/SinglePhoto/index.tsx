import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const SinglePhotoPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 font-sfprodisplay h-[1024px] mx-auto relative w-full">
        <div className="absolute h-[1024px] md:h-[1610px] inset-y-[0] my-auto md:px-5 right-[0] w-[89%] md:w-full">
          <div className="flex md:flex-col flex-row gap-2.5 h-full items-center justify-start m-auto pl-[5px] w-full">
            <Line className="bg-gray-500_7e h-32 md:h-[5px] md:mt-0 my-[448px] rounded-sm w-[5px] md:w-full" />
            <div className="bg-gray-900 h-[1024px] rounded-bl-[32px] rounded-tl-[32px] w-[99%]"></div>
          </div>
          <div className="absolute flex flex-col md:gap-10 gap-36 items-center justify-start left-[7%] top-[4%] w-[55%]">
            <div className="flex flex-row sm:gap-10 items-center justify-between w-[96%] md:w-full">
              <Button
                className="common-pointer cursor-pointer flex items-center justify-center min-w-[103px]"
                onClick={() => navigate("")}
                leftIcon={
                  <Img
                    className="h-[18px] ml-5 mr-2.5 my-5"
                    src="images/img_arrowleft.svg"
                    alt="arrow_left"
                  />
                }
                shape="round"
                color="white_A700_33"
                size="lg"
                variant="fill"
              >
                <div className="font-bold text-left text-sm">Back</div>
              </Button>
              <div className="flex flex-row font-inter gap-2.5 items-center justify-between w-[19%]">
                <Text
                  className="text-sm text-white-A700"
                  size="txtInterMedium14"
                >
                  Edward Ford
                </Text>
                <Img
                  className="h-[38px] md:h-auto object-cover rounded-[12px] w-[38px]"
                  src="images/img_avatar.png"
                  alt="Avatar"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <Button
                className="flex h-12 items-center justify-center w-12"
                shape="round"
                color="white_A700_33"
                size="md"
                variant="outline"
              >
                <Img src="images/img_arrowleft_48X48.svg" alt="arrowleft" />
              </Button>
              <Img
                className="h-[540px] md:h-auto object-cover rounded-lg"
                src="images/img_photo3.png"
                alt="Image"
              />
              <Button
                className="flex h-12 items-center justify-center w-12"
                shape="round"
                color="white_A700_33"
                size="md"
                variant="outline"
              >
                <Img
                  src="images/img_arrowright_white_A700.svg"
                  alt="arrowright"
                />
              </Button>
            </div>
          </div>
          <div className="absolute flex sm:flex-col flex-row gap-2.5 h-full inset-y-[0] items-center justify-between my-auto right-[0] w-[36%]">
            <div className="bg-gray-500_7e h-32 sm:mt-0 my-[448px] rounded-sm w-[2%]"></div>
            <div className="bg-white-A700 flex flex-col md:gap-10 gap-[843px] items-end justify-end p-10 sm:px-5 rounded-bl-[32px] rounded-tl-[32px]">
              <div className="flex flex-row gap-5 items-center justify-end mt-[5px] w-[33%] md:w-full">
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
                  alt="Avatar One"
                />
              </div>
              <div className="bg-gray-100 flex flex-row font-inter gap-2.5 items-center justify-start p-[5px] rounded w-[96%] md:w-full">
                <Input
                  name="FrameEight"
                  placeholder="Write a comment…"
                  className="font-medium p-0 placeholder:text-gray-500 text-left text-sm w-full"
                  wrapClassName="flex w-[87%]"
                  suffix={
                    <Img
                      className="h-3.5 ml-[35px] mr-1.5 my-3"
                      src="images/img_user_14X14.svg"
                      alt="user"
                    />
                  }
                  shape="square"
                  color="gray_100"
                  size="sm"
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
        <Sidebar1 className="!sticky !w-[165px] flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto md:px-5 top-[0]" />
      </div>
    </>
  );
};

export default SinglePhotoPage;
