import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const SinglePostPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-sfprodisplay gap-[15px] items-start mx-auto w-full">
        <Sidebar1 className="!sticky !w-[165px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <div className="bg-white-A700 flex flex-1 flex-col items-end justify-start pl-20 md:px-5 rounded-bl-[32px] rounded-tl-[32px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-10 items-start justify-start w-[54%] md:w-full">
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
              <div className="flex flex-col font-inter items-center justify-start w-full">
                <div className="flex flex-col gap-10 items-center justify-start w-full">
                  <div className="flex flex-col gap-10 items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <div className="flex sm:flex-1 flex-row gap-2.5 items-end justify-between w-1/4 sm:w-full">
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
                      <div className="flex sm:flex-1 flex-row items-start justify-between w-[46%] sm:w-full">
                        <div className="flex flex-row gap-[5px] items-center justify-start mt-1 p-1.5">
                          <Img
                            className="h-3.5 my-0.5 w-3.5"
                            src="images/img_favorite.svg"
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
                            src="images/img_laptop.svg"
                            alt="laptop"
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
                    <Img
                      className="h-[330px] md:h-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                      src="images/img_image_150X290.png"
                      alt="Image"
                    />
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start w-full">
                    <Text
                      className="leading-[36.00px] text-3xl sm:text-[26px] md:text-[28px] text-gray-900 w-full"
                      size="txtInterBold30"
                    >
                      The Best Fashion Instagrams of the Week: Céline Dion,
                      Lizzo, and More
                    </Text>
                    <Text
                      className="leading-[22.00px] text-gray-500 text-sm"
                      size="txtInterRegular14"
                    >
                      <>
                        f you are looking for a break from the cold, take a cue
                        from Lizzo: This week, the singer headed to Disneyland
                        in warm and sunny California. She dressed up for the
                        occasion in pure Minnie Mouse style perfection,
                        including a cartoon merch sweatshirt from the artist
                        Shelby Swain, cycling shorts, and adorable pulled-up
                        polka dot socks. All the way over in Montreal, Céline
                        Dion also had quite the wardrobe moment. For a concert,
                        the singer wore a pair of fringed, XXL-flared cowboy
                        jeans by Ukrainian label Ksenia Schnaider. The
                        Kiev-based designer is responsible for other viral denim
                        creations, like her asymmetrical jeans that launched
                        earlier this year. Fun fact: The daring Dion has worn a
                        pair of those, too!
                        <br />
                        <br />
                        Of course, back in New York, there was Marc Jacobs. The
                        designer has been having quite the year when it comes to
                        flexing his fashion muscles on the ’gram. This week, he
                        channeled The Wizard Of Oz with a full-green look that
                        included some shimmery Sies Marjan pants, and a pair of
                        platform boots to anchor the ensemble.
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 flex md:flex-1 flex-col gap-[45px] items-end justify-end p-10 sm:px-5 rounded-bl-[32px] rounded-tl-[32px] w-[37%] md:w-full">
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
                            alt="laptop Four"
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
                            alt="laptop Five"
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
      </div>
    </>
  );
};

export default SinglePostPage;
