import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const PasswordRecoveryPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex font-inter mx-auto relative w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[1024px] items-center justify-center my-auto p-[305px] md:px-5 w-[58%]"
          style={{ backgroundImage: "url('images/img_left.png')" }}
        >
          <div className="flex flex-col items-center justify-start my-[130px] w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtInterBold30"
            >
              Hello!
            </Text>
            <Text
              className="mt-3.5 text-sm text-white-A700"
              size="txtInterMedium14"
            >
              Remember your password?
            </Text>
            <Button
              className="common-pointer cursor-pointer font-bold min-w-[220px] mt-[30px] rounded-[29px] text-center text-sm"
              onClick={() => navigate("/")}
              color="indigo_A200"
              size="xl"
              variant="fill"
            >
              Lognin
            </Button>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-2.5 items-center justify-between ml-[-45px] my-auto md:px-5 w-[46%] z-[1]">
          <div className="bg-white-A700_7e h-32 md:mt-0 my-[448px] rounded-sm w-[1%]"></div>
          <div className="bg-white-A700 flex flex-col items-start justify-start p-[90px] md:px-10 sm:px-5 rounded-bl-[32px] rounded-tl-[32px]">
            <div className="flex flex-col items-start justify-start mb-[468px] md:ml-[0] ml-[35px] w-[77%] md:w-full">
              <Img
                className="h-[41px] w-[41px]"
                src="images/img_question.svg"
                alt="question"
              />
              <div className="flex flex-col gap-3.5 items-start justify-start mt-[65px]">
                <Text
                  className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                  size="txtInterBold22"
                >
                  Password Recovery
                </Text>
                <Text
                  className="text-gray-500 text-sm"
                  size="txtInterMedium14Gray500"
                >
                  Enter your email to recover your password
                </Text>
              </div>
              <div className="flex flex-col gap-3.5 items-start justify-start mt-[63px] w-full">
                <Text
                  className="text-gray-900 text-xs tracking-[1.00px] uppercase"
                  size="txtInterBold12"
                >
                  Email
                </Text>
                <Input
                  name="email"
                  placeholder="anne.carry@mail.com"
                  className="font-medium p-0 placeholder:text-gray-500 text-left text-sm w-full"
                  wrapClassName="flex w-full"
                  type="email"
                  suffix={
                    <Img
                      className="h-[18px] ml-[35px] mr-[15px] my-[15px]"
                      src="images/img_television_18X18.svg"
                      alt="television"
                    />
                  }
                  shape="round"
                ></Input>
              </div>
              <Button
                className="cursor-pointer font-bold min-w-[350px] mt-5 rounded-[29px] text-center text-sm"
                color="indigo_A200"
                size="xl"
                variant="fill"
              >
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordRecoveryPage;
