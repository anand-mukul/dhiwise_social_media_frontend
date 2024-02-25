import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const SettingsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-start justify-between md:px-5 w-3/5 md:w-full">
            <Sidebar1 className="!sticky !w-[165px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtInterBold22"
              >
                Account Informations
              </Text>
              <div className="flex flex-col items-center justify-start mt-16 w-[86%] md:w-full">
                <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between w-full">
                  <Img
                    className="h-32 md:h-auto object-cover rounded-[36px] w-32"
                    src="images/img_avatar.png"
                    alt="Avatar"
                  />
                  <div className="flex flex-col gap-6 items-start justify-start">
                    <Text
                      className="text-base text-gray-500"
                      size="txtInterBold16Gray500"
                    >
                      Profile Picture
                    </Text>
                    <div className="flex flex-row gap-5 items-center justify-between w-full">
                      <Button
                        className="cursor-pointer font-bold font-inter min-w-[180px] rounded-[29px] text-center text-sm"
                        color="light_blue_200"
                        size="lg"
                        variant="fill"
                      >
                        Replace
                      </Button>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[180px]"
                        leftIcon={
                          <Img
                            className="h-[18px] ml-[35px] mr-[7px] my-5"
                            src="images/img_trash_18X18.svg"
                            alt="trash"
                          />
                        }
                        shape="round"
                        color="gray_500_66"
                        size="lg"
                        variant="outline"
                      >
                        <div className="font-bold font-sfprodisplay text-left text-sm">
                          Delete
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="mt-[60px] text-base text-gray-500"
                size="txtInterBold16Gray500"
              >
                Basic Information
              </Text>
              <div className="flex flex-col items-center justify-start mt-[33px] pt-[3px] w-full">
                <div className="md:gap-5 gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col gap-[15px] items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xs tracking-[1.00px] uppercase"
                      size="txtInterBold12Gray900"
                    >
                      name
                    </Text>
                    <Input
                      name="Group4519"
                      placeholder="Anne Carry"
                      className="font-medium p-0 placeholder:text-gray-500 text-left text-sm w-full"
                      wrapClassName="w-full"
                      size="lg"
                    ></Input>
                  </div>
                  <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xs tracking-[1.00px] uppercase"
                      size="txtInterBold12Gray900"
                    >
                      username
                    </Text>
                    <Input
                      name="Group4518"
                      placeholder="annecarry"
                      className="font-medium p-0 placeholder:text-gray-500 text-left text-sm w-full"
                      wrapClassName="flex w-full"
                      suffix={
                        <Img
                          className="h-[18px] ml-[35px] mr-[15px] my-[15px]"
                          src="images/img_television_18X18.svg"
                          alt="television"
                        />
                      }
                      size="xl"
                    ></Input>
                  </div>
                  <div className="flex flex-1 flex-col gap-[15px] items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xs tracking-[1.00px] uppercase"
                      size="txtInterBold12Gray900"
                    >
                      Email
                    </Text>
                    <Input
                      name="email"
                      placeholder="anne.carry@mail.com"
                      className="font-medium p-0 placeholder:text-gray-500 text-left text-sm w-full"
                      wrapClassName="w-full"
                      size="lg"
                    ></Input>
                  </div>
                  <div className="flex flex-1 flex-col gap-[15px] items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xs tracking-[1.00px] uppercase"
                      size="txtInterBold12Gray900"
                    >
                      birthday
                    </Text>
                    <Input
                      name="month"
                      placeholder="January 25, 1991"
                      className="font-medium p-0 placeholder:text-gray-500 text-left text-sm w-full"
                      wrapClassName="flex w-full"
                      suffix={
                        <Img
                          className="h-[18px] ml-[35px] mr-[15px] my-[15px]"
                          src="images/img_checkmark_18X18.svg"
                          alt="checkmark"
                        />
                      }
                      size="xl"
                    ></Input>
                  </div>
                </div>
              </div>
              <Line className="bg-gray-500_6c h-px mt-10 w-full" />
              <div className="flex flex-col items-center justify-start mt-10 pt-[3px] w-full">
                <div className="md:gap-5 gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xs tracking-[1.00px] uppercase"
                      size="txtInterBold12Gray900"
                    >
                      Country
                    </Text>
                    <Input
                      name="Group4514"
                      placeholder="United States"
                      className="font-medium p-0 placeholder:text-gray-500 text-left text-sm w-full"
                      wrapClassName="flex w-full"
                      suffix={
                        <Img
                          className="h-[18px] ml-[35px] mr-[15px] my-[15px]"
                          src="images/img_checkmark_18X18.svg"
                          alt="checkmark"
                        />
                      }
                    ></Input>
                  </div>
                  <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xs tracking-[1.00px] uppercase"
                      size="txtInterBold12Gray900"
                    >
                      state
                    </Text>
                    <Input
                      name="Group4513"
                      placeholder="California"
                      className="font-medium p-0 placeholder:text-gray-500 text-left text-sm w-full"
                      wrapClassName="flex w-full"
                      suffix={
                        <Img
                          className="h-[18px] ml-[35px] mr-[15px] my-[15px]"
                          src="images/img_checkmark_18X18.svg"
                          alt="checkmark"
                        />
                      }
                    ></Input>
                  </div>
                  <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xs tracking-[1.00px] uppercase"
                      size="txtInterBold12Gray900"
                    >
                      City
                    </Text>
                    <Input
                      name="Group4515"
                      placeholder="San Francisco"
                      className="font-medium p-0 placeholder:text-gray-500 text-left text-sm w-full"
                      wrapClassName="flex w-full"
                      suffix={
                        <Img
                          className="h-[18px] ml-[35px] mr-[15px] my-[15px]"
                          src="images/img_checkmark_18X18.svg"
                          alt="checkmark"
                        />
                      }
                    ></Input>
                  </div>
                </div>
              </div>
              <Button
                className="cursor-pointer font-bold min-w-[180px] mt-16 rounded-[29px] text-center text-sm"
                color="green_400"
                size="lg"
                variant="fill"
              >
                Save Changes
              </Button>
            </div>
          </div>
          <div className="flex md:flex-1 sm:flex-col flex-row gap-2.5 items-center justify-start pl-[5px] md:px-5 w-[36%] md:w-full">
            <div className="bg-gray-500_7e h-32 sm:mt-0 my-[448px] rounded-sm w-[1%]"></div>
            <div className="bg-gray-900 flex flex-col gap-[45px] justify-start p-10 sm:px-5 rounded-bl-[32px] rounded-tl-[32px] w-[98%] sm:w-full">
              <div className="h-12 md:h-[53px] md:ml-[0] ml-[299px] mt-[5px] relative w-[28%]">
                <Img
                  className="absolute h-12 inset-y-[0] my-auto object-cover right-[0] rounded-[12px] w-12"
                  src="images/img_group4551.png"
                  alt="Image"
                />
                <div
                  className="common-pointer bg-light_blue-200 flex flex-col h-full items-center justify-start my-auto p-[13px] rounded-[12px] w-12"
                  onClick={() => navigate("")}
                >
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                    size="txtInterBold22WhiteA700"
                  >
                    1
                  </Text>
                </div>
                <div className="absolute flex flex-row font-sfprodisplay gap-5 h-full inset-[0] items-center justify-between m-auto w-full">
                  <Button
                    className="cursor-pointer font-bold h-12 sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center w-12"
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
              </div>
              <div className="flex flex-col gap-10 items-start justify-start mb-72 md:ml-[0] ml-[5px] mr-[204px] w-1/2 md:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtInterBold22WhiteA700"
                >
                  Settings
                </Text>
                <div className="flex flex-col font-sfprodisplay gap-10 items-start justify-start w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-[74%] md:w-full">
                    <Button
                      className="flex h-12 items-center justify-center w-12"
                      shape="round"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-[22px]"
                        src="images/img_user_1.svg"
                        alt="user One"
                      />
                    </Button>
                    <Text
                      className="text-base text-white-A700"
                      size="txtSFProDisplayBold16WhiteA700"
                    >
                      My Account
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-start w-[77%] md:w-full">
                    <Button
                      className="flex h-12 items-center justify-center w-12"
                      shape="round"
                      color="gray_500_66"
                      size="sm"
                      variant="outline"
                    >
                      <Img
                        className="h-[22px]"
                        src="images/img_notification.svg"
                        alt="notification"
                      />
                    </Button>
                    <Text
                      className="text-base text-white-A700"
                      size="txtSFProDisplayBold16WhiteA700"
                    >
                      Notifications
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-start w-[85%] md:w-full">
                    <Button
                      className="flex h-12 items-center justify-center w-12"
                      shape="round"
                      color="gray_500_66"
                      size="sm"
                      variant="outline"
                    >
                      <Img
                        className="h-[22px]"
                        src="images/img_clock_48X48.svg"
                        alt="clock"
                      />
                    </Button>
                    <Text
                      className="text-base text-white-A700"
                      size="txtSFProDisplayBold16WhiteA700"
                    >
                      Activity History
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                    <Button
                      className="flex h-12 items-center justify-center w-12"
                      shape="round"
                      color="gray_500_66"
                      size="sm"
                      variant="outline"
                    >
                      <Img
                        className="h-[22px]"
                        src="images/img_alarm_48X48.svg"
                        alt="alarm"
                      />
                    </Button>
                    <Text
                      className="text-base text-white-A700"
                      size="txtSFProDisplayBold16WhiteA700"
                    >
                      Billing and Payment
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-start w-[96%] md:w-full">
                    <Button
                      className="flex h-12 items-center justify-center w-12"
                      shape="round"
                      color="gray_500_66"
                      size="sm"
                      variant="outline"
                    >
                      <Img
                        className="h-[22px]"
                        src="images/img_lock.svg"
                        alt="lock"
                      />
                    </Button>
                    <Text
                      className="text-base text-white-A700"
                      size="txtSFProDisplayBold16WhiteA700"
                    >
                      Security & Privacy
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-start w-[48%] md:w-full">
                    <Button
                      className="flex h-12 items-center justify-center w-12"
                      shape="round"
                      color="gray_500_66"
                      size="sm"
                      variant="outline"
                    >
                      <Img
                        className="h-[22px]"
                        src="images/img_settings_4.svg"
                        alt="settings Three"
                      />
                    </Button>
                    <Text
                      className="text-base text-white-A700"
                      size="txtSFProDisplayBold16WhiteA700"
                    >
                      Help
                    </Text>
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

export default SettingsPage;
