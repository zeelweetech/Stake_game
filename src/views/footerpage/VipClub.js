import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import InfoIcon from "@mui/icons-material/Info";
import { getMedalsProgress } from "../../services/LoginServices";
import { decodedToken } from "../../resources/utility";
import vipHeader from "../../assets/img/vip-header.png";
import boost1 from "../../assets/img/boost.DF2DDCCE.png";
import boost2 from "../../assets/img/host.D2yyI_0f.png";
import boost3 from "../../assets/img/cashback.ChSM43vI.png";
import boost4 from "../../assets/img/levelup.BPAS_FPf.png";
import boost5 from "../../assets/img/bespoke.CxQq-dvx.png";
import { GoCheck } from "react-icons/go";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

const VipClub = () => {
  const { userId } = useParams();
  const [progressData, setProgressData] = useState([]);
  const [loading, setLoading] = useState(false);
  const decoded = decodedToken();
  const [activeLink, setActiveLink] = useState("General");

  const links = [
    { label: "General" },
    { label: "Benefits" },
    { label: "VIP Hosts" },
  ];

  const renderContent = () => {
    switch (activeLink) {
      case "General":
        return (
          <div className="max-w-3xl mx-auto bg-[#10161b] rounded-lg p-4 shadow-lg">
            {/* General Content */}
            <AccordionContent
              items={[
                {
                  question: "Why is Stake’s VIP program the best?",
                  answer:
                    "Stake’s VIP program is often rated as one of the best online casino experiences due to the amount of bonuses we give out to players. Additionally, our award winning support team is online 24/7 to answer any questions you have. We have the highest customer satisfaction rate out of many online casinos where we have amassed a community of some of the most passionate gamblers across the globe.",
                },
                {
                  question: "How much has Stake given out in bonuses?",
                  answer:
                    "We have given over $1 Billion in bonuses. This is primarily the reason we have the best VIP program online. We truly believe in rewarding our players for their gameplay and loyalty.",
                },
                {
                  question: "How do I enter the $75,000 weekly raffle?",
                  answer:
                    "To get one ticket to enter the raffle, you must wager $1000 on Stake.com. The more you wager, the more tickets you get, which increases your chances of winning.",
                },
                {
                  question: "Where can I find the Stake Telegram Channel?",
                  answer: "The Stake Telegram channel is (@StakeCasino).",
                },
                {
                  question: "Where can I find the Stake VIP Telegram channel?",
                  answer:
                    "Once you reach Bronze, you can ask live support to be added to the Stake VIP Telegram Channel.",
                },
              ]}
            />
          </div>
        );
      case "Benefits":
        return (
          <div className="max-w-3xl mx-auto bg-[#10161b] rounded-lg p-4 shadow-lg">
            {/* Benefits Content */}
            <AccordionContent
              items={[
                {
                  question: "What is a recent gameplay bonus?",
                  answer:
                    "This is a bonus given to you by the discretion of your host or VIP manager and is based on significant player wagers and luck.",
                },
                {
                  question: "What is rakeback?",
                  answer:
                    "Rakeback is a percentage of a player's rake (house edge) refunded to you.",
                },
                {
                  question: "What is a reload? How do I claim my reload?",
                  answer:
                    "Reload is a bonus which is calculated on the basis of a player's recent activity. A player is eligible to choose between either a Daily, Hourly or 10 Minute reload intervals.",
                },
                {
                  question: "When is the Monthly bonus scheduled for?",
                  answer:
                    "The monthly bonus is distributed once a month. The date is generally around the 15th. In some instances it can be a little later or even earlier. This is why it’s one of the most anticipated bonuses on Stake. When it’s released, you will be notified via email. To ensure you do not miss out on a bonus, please check your spam folder in your email.",
                },
                {
                  question:
                    "How do I calculate the amount I need to wager to move to the next level?",
                  answer:
                    "Firstly, view the percentage left in your VIP progress bar in your account page on the top right hand corner. Multiply the percentage number left to the full 100% bar with the wager requirement you need to meet to unlock the new level.",
                },
                {
                  question: "What rewards do I get when I level up?",
                  answer:
                    "Level Up Bonuses: These are fixed bonuses that get larger every time you level up. However we add extra on top in the form of a recent gameplay bonus depending on your profit/loss between levels. Weekly/Monthly Bonuses: These are calculated with a base amount based on your VIP level. You will then receive extra for every $1,000 you wager in the corresponding time period.",
                },
                {
                  question: "How do you calculate bonuses?",
                  answer:
                    "Bonuses are calculated as a mix between both your wagered amount and profit. We believe that players should always be rewarded regardless of whether you're winning or losing. It'd be unfair to only reward losing players. However, if you are unlucky, we'll be adding extra on top!",
                },
              ]}
            />
          </div>
        );
      case "VIP Hosts":
        return (
          <div className="max-w-3xl mx-auto bg-[#10161b] rounded-lg p-4 shadow-lg">
            {/* VIP Hosts Content */}
            <AccordionContent
              items={[
                {
                  question: "What can my VIP Host do for me?",
                  answer:
                    "Your VIP Host is there to ensure you are being rewarded for your gaming experiences. They assist with reload renewals, guide you through your level-up progression, review sports limits, assess extra bonuses when available and address any issues faced by a user on the site.",
                },
                {
                  question:
                    "When I’m assigned a VIP host, does my Reload become a continuous or renewable benefit?",
                  answer:
                    "When you reach Platinum IV and get assigned a host, you start receiving weekly reloads that are renewable. Once your weekly reload expires, you can contact your host who can renew your reload for the following 7 day period.",
                },
                {
                  question:
                    "What is the job of a VIP host and how does it differ from regular Live Support assistance?",
                  answer:
                    "VIP hosts are only given to players in Platinum IV and beyond. They are there to answer your queries about the VIP program and to ensure that you are collecting all the bonuses you are entitled to. VIP hosts have the ability to send more frequent and larger bonuses to players whilst ensuring the bonuses are befitting to your needs..",
                },
                {
                  question: "When do I get a VIP host?",
                  answer:
                    "VIP hosts are given to a player when they reach Platinum IV. They will be your dedicated support member who will help you with all of your queries and help guide your gaming experience. Eligibility is also subject to recent activity.",
                },
                {
                  question: "What can I do if my VIP host is on vacation?",
                  answer:
                    "Make sure you ask your VIP host for a link to their unique VIP hosting channel. If you’ve missed out on doing so, you can send a message to live support and you will be given a VIP backup link. This backup host will be temporary until your host comes back.",
                },
              ]}
            />
          </div>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    getVipProgress();
  }, [userId]);

  const getVipProgress = async () => {
    try {
      const response = await getMedalsProgress({
        userId: decoded?.userId,
      });
      setProgressData(response || []);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch users: ", error);
      setLoading(false);
    }
  };
  return (
    <>
      <div>
        {decoded?.userId ? (
          <div className="w-full">
            <div
              className="xl:w-full lg:w-full flex flex-col lg:flex-row items-center py-16"
              style={{
                backgroundImage: `url(${vipHeader})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div
                style={{
                  border: "8px solid transparent",
                  borderImage: "linear-gradient(to bottom, #213743, #0f212e) 1",
                }}
                className="mb-6 lg:mb-0 xl:ml-40 lg:ml-28 ml-4"
              >
                <div className="bg-[#0f212e] w-full md:w-80 px-5 py-7 border text-white border-[#2f4553]">
                  <div className="flex justify-between items-center">
                    <p>{progressData?.userName || "User"}</p>
                    <FaRegStar size={22} color="#2f4553" />
                  </div>
                  <div className="flex justify-between mt-10">
                    <div className="flex items-center space-x-2.5">
                      <Link className="text-sm font-medium">
                        Your VIP Progress
                      </Link>
                      <FaArrowRight
                        size={13}
                        className="mt-1"
                        color="#b1bad3"
                      />
                    </div>
                    <div className="flex items-center space-x-1">
                      <p className="text-sm font-medium">
                        {progressData?.vipProgress || "0.00%"}
                      </p>
                      <InfoIcon fontSize="small" className="text-[#b1bad3]" />
                    </div>
                  </div>
                  <div className="relative w-full my-2.5 h-[0.625em]">
                    <div
                      className="h-full w-full shadow-lg rounded-[10px]"
                      style={{ right: "100%", backgroundColor: "#2f4553" }}
                    ></div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-1">
                      <FaRegStar size={18} color="#2f4553" />
                      <p className="text-sm text-[#b1bad3] font-medium">
                        {progressData?.medal || "None"}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaRegStar size={18} color="#2f4553" />
                      <p className="text-sm text-[#b1bad3] font-medium">
                        {progressData?.nextMedal || "Bronze"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full">
            <div
              className="h-auto xl:w-[95.7rem] lg:w-full flex flex-col lg:flex-row justify-evenly items-center p-4"
              // style={{
              //   backgroundImage: `url(${mainbarBGimage})`,
              //   backgroundSize: "cover",
              //   backgroundPosition: "center",
              //   backgroundRepeat: "no-repeat",
              // }}
            >
              <div>
                <div className="w-full md:w-[30rem] p-5 text-white">
                  <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">
                      The Unrivaled VIP Experience
                    </h1>
                  </div>
                  <div className="flex justify-between mt-3">
                    <div className="text-[#b1bad3]">
                      Unlock exclusive benefits and receive instantly
                      withdrawable bonuses without any strings attached
                    </div>
                  </div>
                  <div className="flex justify-between mt-5">
                    <button className="bg-[#4175e1] p-3 rounded-lg">
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="my-10">
          <div className="text-white font-bold text-center text-xl mb-6">
            Stake VIP Ranking System
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 lg:px-16">
            {/* Bronze Card */}
            <div className="bg-[#213743] p-6 rounded-lg text-[#b1bad3] shadow-md">
              <div className="text-[#071d2a] font-semibold">
                <button className="bg-[#c69c6d] p-1 rounded-md">Bronze</button>
              </div>
              <div className=" text-white text-lg font-bold mt-2">$10k</div>
              <div className=" text-[#b1bad3] text-sm">Wager amount</div>
              <ul className="mt-4 space-y-1 text-white">
                <li className="flex items-center">
                  <span className="pr-3">
                    <GoCheck
                      style={{
                        backgroundColor: "#c69c6d",
                        color: "#071d2a",
                        borderRadius: "50%",
                        float: "bold",
                      }}
                    />
                  </span>{" "}
                  Monthly Bonuses
                </li>
                <li className="flex items-center">
                  <span className="pr-3">
                    <GoCheck
                      style={{
                        backgroundColor: "#c69c6d",
                        color: "#071d2a",
                        borderRadius: "50%",
                        float: "bold",
                      }}
                    />
                  </span>{" "}
                  Level Up Bonuses
                </li>
                <li className="flex items-center">
                  <span className="pr-3">
                    <GoCheck
                      style={{
                        backgroundColor: "#c69c6d",
                        color: "#071d2a",
                        borderRadius: "50%",
                        float: "bold",
                      }}
                    />
                  </span>{" "}
                  Rakeback
                </li>
                <li className="flex items-center">
                  <span className="pr-3">
                    <GoCheck
                      style={{
                        backgroundColor: "#c69c6d",
                        color: "#071d2a",
                        borderRadius: "50%",
                        float: "bold",
                      }}
                    />
                  </span>{" "}
                  Weekly Bonuses
                </li>
              </ul>
            </div>

            {/* Silver Card */}
            <div className="bg-[#213743] p-6 rounded-lg text-[#b1bad3] shadow-md">
              <div className="text-[#071d2a] font-semibold">
                <button className="bg-[#b2cccc] p-1 rounded-md">Silver</button>
              </div>
              <div className=" text-white text-lg font-bold mt-2">$10k</div>
              <div className=" text-[#b1bad3] text-sm">Wager amount</div>
              <ul className="mt-4 space-y-1 text-white">
                <li className="flex items-center">
                  <span className="pr-3">
                    <GoCheck
                      style={{
                        backgroundColor: "#b2cccc",
                        color: "#071d2a",
                        borderRadius: "50%",
                        float: "bold",
                      }}
                    />
                  </span>{" "}
                  Monthly Bonuses
                </li>
                <li className="flex items-center">
                  <span className="pr-3">
                    <GoCheck
                      style={{
                        backgroundColor: "#b2cccc",
                        color: "#071d2a",
                        borderRadius: "50%",
                        float: "bold",
                      }}
                    />
                  </span>{" "}
                  Level Up Bonuses
                </li>
                <li className="flex items-center">
                  <span className="pr-3">
                    <GoCheck
                      style={{
                        backgroundColor: "#b2cccc",
                        color: "#071d2a",
                        borderRadius: "50%",
                        float: "bold",
                      }}
                    />
                  </span>{" "}
                  Rakeback
                </li>
                <li className="flex items-center">
                  <span className="pr-3">
                    <GoCheck
                      style={{
                        backgroundColor: "#b2cccc",
                        color: "#071d2a",
                        borderRadius: "50%",
                        float: "bold",
                      }}
                    />
                  </span>{" "}
                  Weekly Bonuses
                </li>
                <li className="flex items-center">
                  <span className="pr-3">
                    <GoCheck
                      style={{
                        backgroundColor: "#b2cccc",
                        color: "#071d2a",
                        borderRadius: "50%",
                        float: "bold",
                      }}
                    />
                  </span>{" "}
                  Bonus Growth
                </li>
              </ul>
            </div>

            {/* Gold Card */}
            <div className="bg-[#213743] p-6 rounded-lg text-[#b1bad3] shadow-md">
              <div className="text-[#071d2a] font-semibold">
                <button className="bg-[#fed100] p-1 rounded-md">Gold</button>
              </div>
              <div className=" text-white text-lg font-bold mt-2">$10k</div>
              <div className=" text-[#b1bad3] text-sm">Wager amount</div>
              <ul className="mt-4 space-y-1 text-white">
                <li className="flex items-center">
                  <span className="pr-3">
                    <GoCheck
                      style={{
                        backgroundColor: "#fed100",
                        color: "#071d2a",
                        borderRadius: "50%",
                        float: "bold",
                      }}
                    />
                  </span>{" "}
                  Monthly Bonuses
                </li>
                <li className="flex items-center">
                  <span className="pr-3">
                    <GoCheck
                      style={{
                        backgroundColor: "#fed100",
                        color: "#071d2a",
                        borderRadius: "50%",
                        float: "bold",
                      }}
                    />
                  </span>{" "}
                  Level Up Bonuses
                </li>
                <li className="flex items-center">
                  <span className="pr-3">
                    <GoCheck
                      style={{
                        backgroundColor: "#fed100",
                        color: "#071d2a",
                        borderRadius: "50%",
                        float: "bold",
                      }}
                    />
                  </span>{" "}
                  Rakeback
                </li>
                <li className="flex items-center">
                  <span className="pr-3">
                    <GoCheck
                      style={{
                        backgroundColor: "#fed100",
                        color: "#071d2a",
                        borderRadius: "50%",
                        float: "bold",
                      }}
                    />
                  </span>{" "}
                  Weekly Bonuses
                </li>
                <li className="flex items-center">
                  <span className="pr-3">
                    <GoCheck
                      style={{
                        backgroundColor: "#fed100",
                        color: "#071d2a",
                        borderRadius: "50%",
                        float: "bold",
                      }}
                    />
                  </span>{" "}
                  Bonus Growth
                </li>
              </ul>
            </div>

            {/* Platinum Card */}
            <div className="bg-[#213743] p-6 rounded-lg text-[#b1bad3] shadow-md">
              <div className="text-[#071d2a] font-semibold">
                <button className="bg-[#6fdde7] p-1 rounded-md">
                  Platinum I-III
                </button>
              </div>
              <div className=" text-white text-lg font-bold mt-2">$10k</div>
              <div className=" text-[#b1bad3] text-sm">Wager amount</div>
              <ul className="mt-4 space-y-1 text-white">
                <li className="flex items-center">
                  <span className="pr-3">
                    <GoCheck
                      style={{
                        backgroundColor: "#6fdde7",
                        color: "#071d2a",
                        borderRadius: "50%",
                        float: "bold",
                      }}
                    />
                  </span>{" "}
                  Monthly Bonuses
                </li>
                <li className="flex items-center">
                  <span className="pr-3">
                    <GoCheck
                      style={{
                        backgroundColor: "#6fdde7",
                        color: "#071d2a",
                        borderRadius: "50%",
                        float: "bold",
                      }}
                    />
                  </span>{" "}
                  Level Up Bonuses
                </li>
                <li className="flex items-center">
                  <span className="pr-3">
                    <GoCheck
                      style={{
                        backgroundColor: "#6fdde7",
                        color: "#071d2a",
                        borderRadius: "50%",
                        float: "bold",
                      }}
                    />
                  </span>{" "}
                  Rakeback
                </li>
                <li className="flex items-center">
                  <span className="pr-3">
                    <GoCheck
                      style={{
                        backgroundColor: "#6fdde7",
                        color: "#071d2a",
                        borderRadius: "50%",
                        float: "bold",
                      }}
                    />
                  </span>{" "}
                  Weekly Bonuses
                </li>
                <li className="flex items-center">
                  <span className="pr-3">
                    <GoCheck
                      style={{
                        backgroundColor: "#6fdde7",
                        color: "#071d2a",
                        borderRadius: "50%",
                        float: "bold",
                      }}
                    />
                  </span>{" "}
                  Bonus Growth
                </li>
                <li className="flex items-center">
                  <span className="pr-3">
                    <GoCheck
                      style={{
                        backgroundColor: "#6fdde7",
                        color: "#071d2a",
                        borderRadius: "50%",
                        float: "bold",
                      }}
                    />
                  </span>{" "}
                  Daily Bonuses / Reload
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 px-4 lg:px-16">
          <h2 className="text-white text-center text-lg font-bold mb-6">
            Stake VIP Club Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#213743] p-6 rounded-lg text-white shadow-md flex space-x-4">
              <div>
                <img src={boost1} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Boost</h3>
                <p className="text-sm text-gray-300 mt-1">
                  Every week and every month, expect a fresh bonus based on your
                  recent games. The more you play, the higher the bonuses.
                </p>
              </div>
            </div>
            <div className="bg-[#213743] p-6 rounded-lg text-white shadow-md flex space-x-4">
              <div>
                <img src={boost2} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Dedicated VIP Host</h3>
                <p className="text-sm text-gray-300 mt-1">
                  Receive your own dedicated VIP host who will support and cater
                  to your betting needs.
                </p>
              </div>
            </div>
            <div className="bg-[#213743] p-6 rounded-lg text-white shadow-md flex space-x-4">
              <div>
                <img src={boost3} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Recent Play Bonuses</h3>
                <p className="text-sm text-gray-300 mt-1">
                  Having a rough streak? Get bonuses every time you level up.
                </p>
              </div>
            </div>
            <div className="bg-[#213743] p-6 rounded-lg text-white shadow-md flex space-x-4">
              <div>
                <img src={boost4} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Level-Ups</h3>
                <p className="text-sm text-gray-300 mt-1">
                  Reach a new level and get paid. The level-ups get better the
                  higher you go.
                </p>
              </div>
            </div>
            <div className="bg-[#213743] p-6 rounded-lg text-white shadow-md flex space-x-4">
              <div>
                <img src={boost5} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Bespoke</h3>
                <p className="text-sm text-gray-300 mt-1">
                  Work with your dedicated VIP host to tailor benefits to your
                  gaming needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="py-10 px-4 lg:px-16">
          <h2 class="text-white text-center text-2xl font-bold mb-2">
            Frequently Asked Questions
          </h2>
          <p class="text-[#b1bad3] text-center mb-8">
            Reach out to our award-winning support team
          </p>

          <div className="flex justify-center">
            <div class="bg-[#10161b]">
              <div className="bg-[#10161b] w-48">
                {links.map((link, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveLink(link.label)}
                    className={`w-full text-sm p-2 xl:p-4 cursor-pointer ${
                      activeLink === link.label
                        ? "bg-[#2c4a5a] text-white"
                        : "bg-[#10161b] text-white hover:bg-[#2c4a5a] hover:border-l-4 border-[#1475e1]"
                    }`}
                  >
                    {link.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-grow p-4">{renderContent()}</div>
          </div>
        </div>
      </div>
    </>
  );
};

const AccordionContent = ({ items }) => {
  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border-b border-[#2f4553] pb-3">
          <Accordion className="bg-[#213743]">
            <AccordionSummary
              className="bg-[#213743]"
              expandIcon={<ExpandMoreIcon />}
            >
              {item.question}
            </AccordionSummary>
            <AccordionDetails>{item.answer}</AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default VipClub;
