import React, { useState } from "react";

const Fairness = () => {
  const [activeLink, setActiveLink] = useState("Overview");

  const links = [
    { label: "Overview" },
    { label: "Implementation" },
    { label: "Conversions" },
    { label: "Game Events" },
    { label: "Unhash Server Seed" },
    { label: "Calculation" },
  ];

  const renderContent = () => {
    switch (activeLink) {
      case "Overview":
        return (
          <div className="w-full mx-auto text-white bg-[#0f212e] rounded-lg p-[1.5rem] font-semibold shadow-lg">
            <h2 className="text-2xl font-semibold">
              Solving the Trust Issue with Online Gambling
            </h2>

            <p className="text-[#B1BAD3] text-base mt-4 font-normal">
              The underlying concept of provable fairness is that players have
              the ability to prove and verify that their results are fair and
              unmanipulated. This is achieved through the use of a
              <a
                href="#"
                className=" items-center inline-flex ml-1 font-semibold text-white"
              >
                commitment scheme
                <svg
                  className="ml-2 h-4 w-4 text-[#B1BAD3]"
                  viewBox="0 0 64 64"
                  fill="currentColor"
                >
                  <path d="M10.823 53.176h42.353V39.941h7.059v20.294H3.765V3.765h20.293v7.058H10.823v42.353Zm28.236-42.353V3.765h21.176V24.94h-7.059v-9.123L27.88 41.115l-4.994-4.995 25.297-25.296H39.06Z" />
                </svg>
              </a>
              <span className="ml-2">, along with cryptographic hashing.</span>
            </p>

            <p className="mt-4 text-[#B1BAD3] font-normal">
              The commitment scheme is used to ensure that the player has an
              influence on all results generated. Cryptographic hashing is used
              to ensure that the casino also remains honest to this commitment
              scheme. Both concepts combined create a trust-less environment
              when gambling online.
            </p>
            <p className="mt-4 text-[#B1BAD3] font-normal">
              This is simplified in the following representation:
            </p>
            <div className="bg-[#213743] p-4 rounded mt-4">
              <p className="block font-medium tracking-widest">
                fair result = operators input (hashed) + customers input
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mt-4">
                3rd Party Verification
              </h2>
              <p className="mt-4 text-gray-400">
                All Listor Originals played on Lister can be verified both here
                and via 3rd party websites who have also open-sourced the
                verification procedure. You can find them via a Google search,
                or simply check out some of these that have been put together by
                our community:
              </p>

              <ul
                className="mt-4 space-y-2 ml-4"
                style={{ liststyletype: "disc" }}
              >
                <li className="flex items-center space-x-2">
                  <span class="w-2 h-2 bg-gray-300 rounded-full"></span>
                  <a
                    // href="https://provablyfair.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold cursor-pointer"
                  >
                    https://provablyfair.me
                  </a>
                  <svg
                    className="ml-2 h-4 w-4 text-[#B1BAD3] cursor-pointer"
                    viewBox="0 0 64 64"
                    fill="currentColor"
                  >
                    <path d="M10.823 53.176h42.353V39.941h7.059v20.294H3.765V3.765h20.293v7.058H10.823v42.353Zm28.236-42.353V3.765h21.176V24.94h-7.059v-9.123L27.88 41.115l-4.994-4.995 25.297-25.296H39.06Z" />
                  </svg>
                </li>

                <li className="flex items-center space-x-2">
                  <span class="w-2 h-2 bg-gray-300 rounded-full"></span>
                  <a
                    // href="https://Listorstats.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold cursor-pointer"
                  >
                    https://Listorstats.net
                  </a>
                  <svg
                    className="ml-2 h-4 w-4 text-[#B1BAD3] cursor-pointer"
                    viewBox="0 0 64 64"
                    fill="currentColor"
                  >
                    <path d="M10.823 53.176h42.353V39.941h7.059v20.294H3.765V3.765h20.293v7.058H10.823v42.353Zm28.236-42.353V3.765h21.176V24.94h-7.059v-9.123L27.88 41.115l-4.994-4.995 25.297-25.296H39.06Z" />
                  </svg>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl mt-6 font-semibold">
                Crypto Gambling Foundation
              </h2>
              <p className="mt-4 text-gray-400">
                Listor is a verified operator on the Crypto Gambling Foundation
                network. This foundation aims to uphold the highest standard of
                provably fair gambling and we are proud to be a part of their
                network. You can find further information and insights about
                provable fairness and the power it has in this industry, check
                out the Crypto Gambling Foundation via their website:
                <a
                  href="https://cryptogambling.org"
                  target="_blank"
                  className="text-blue-400 underline"
                >
                  cryptogambling.org
                </a>
              </p>
              <div className=" p-4 rounded mt-4 flex items-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Crypto Gambling Foundation"
                  className="w-12 h-12 rounded"
                />
                <span className="ml-4">Verified Operator</span>
              </div>
            </div>
          </div>
        );
      case "Implementation":
        return (
          <div className="w-full mx-auto text-white bg-[#0f212e] rounded-lg p-4 font-semibold shadow-lg">
            VIP Hosts Content
          </div>
        );
      case "Conversions":
        return (
          <div className="w-full mx-auto text-white bg-[#0f212e] rounded-lg p-4 font-semibold shadow-lg">
            VIP Hosts Content
          </div>
        );
      case "Game Events":
        return (
          <div className="w-full mx-auto text-white bg-[#0f212e] rounded-lg p-4  font-semibold shadow-lg">
            General Content
          </div>
        );
      case "Unhash Server Seed":
        return (
          <div className="w-full mx-auto text-white bg-[#0f212e] rounded-lg p-4  font-semibold shadow-lg">
            Unhash server seed
          </div>
        );
      case "Calculation":
        return (
          <div className="w-full mx-auto text-white bg-[#0f212e] rounded-lg p-4  font-semibold shadow-lg">
            General Content
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className=" text-white flex justify-between px-[2.5294rem] py-4 ">
        <h1 className="text-xl font-semibold flex items-center gap-5">
          <svg viewBox="0 0 64 64" fill="currentColor" className="w-4 h-4 ">
            <path d="M54.727 15.006h3.12V8.37H34.654V2.61H27.99v5.758H4.746v6.637h4.505L0 37.452c0 7.037 5.704 12.741 12.741 12.741 7.038 0 12.741-5.704 12.741-12.741l-9.25-22.446h11.73v39.745h-9.303v6.638h25.165V54.75h-9.171V15.006h13.115l-9.25 22.446c0 7.037 5.703 12.741 12.74 12.741C58.297 50.193 64 44.489 64 37.452l-9.273-22.446ZM5.334 37.452l7.411-17.887 7.357 17.887H5.334Zm38.492 0 7.357-17.887 7.463 17.887h-14.82Z" />
          </svg>
          Provably Fair
        </h1>
      </div>
      <div className=" mx-auto px-[2.5294rem] h-full">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="bg-[#0f212e] md:w-44 md:ml-40 h-full flex-shrink-0  py-2 rounded-md">
            <div className="bg-[#0f212e]">
              {links.map((link, index) => (
                <div
                  key={index}
                  onClick={() => setActiveLink(link.label)}
                  className={`w-full text-sm p-2 md:px-[1.25rem] md:py-[0.9375rem] cursor-pointer ${
                    activeLink === link.label
                      ? "bg-[#071824] text-white font-bold border-l-[0.1875rem] border-[#1475e1] "
                      : "bg-[#0f212e] text-white font-bold hover:bg-[#071824] "
                  }`}
                >
                  {link.label}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-grow mt-4 md:mt-0 md:ml-4">
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Fairness;
