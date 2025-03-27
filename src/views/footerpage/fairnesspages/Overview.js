import React from 'react'
import cryptogambling from "../../../assets/img/cryptogambling.png";

const Overview = () => {
    return (
        <div className="w-full text-white bg-[#0f212e] rounded-lg p-[1.5rem] font-semibold shadow-lg">
            <h2 className="text-2xl font-semibold cursor-default">
                Solving the Trust Issue with Online Gambling
            </h2>

            <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                The underlying concept of provable fairness is that players have
                the ability to prove and verify that their results are fair and
                unmanipulated. This is achieved through the use of a
                <a
                    href="#"
                    className=" items-center inline-flex ml-1 font-semibold text-white cursor-default"
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
                <span className="ml-2 cursor-default">
                    , along with cryptographic hashing.
                </span>
            </p>

            <p className="mt-4 text-[#B1BAD3] font-normal cursor-default">
                The commitment scheme is used to ensure that the player has an
                influence on all results generated. Cryptographic hashing is used
                to ensure that the casino also remains honest to this commitment
                scheme. Both concepts combined create a trust-less environment
                when gambling online.
            </p>
            <p className="mt-4 text-[#B1BAD3] font-normal cursor-default">
                This is simplified in the following representation:
            </p>
            <div className="bg-[#213743] p-4 rounded mt-4 cursor-default">
                <p className="block font-medium tracking-widest">
                    fair result = operators input (hashed) + customers input
                </p>
            </div>
            <div>
                <h2 className="text-2xl font-semibold mt-4 cursor-default">
                    3rd Party Verification
                </h2>
                <p className="mt-4 text-[#B1BAD3] font-normal cursor-default">
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
                        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
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
                <h2 className="text-2xl mt-6 font-semibold cursor-default">
                    Crypto Gambling Foundation
                </h2>
                <p className="mt-4 text-[#B1BAD3] font-normal cursor-default">
                    Listor is a verified operator on the Crypto Gambling Foundation
                    network. This foundation aims to uphold the highest standard of
                    provably fair gambling, and we are proud to be a part of their
                    network. You can find further information and insights about
                    provable fairness and the power it has in this industry. Check
                    out the Crypto Gambling Foundation via their website:
                    <a
                        // href="https://cryptogambling.org"
                        target="_blank"
                        className="text-white font-semibold cursor-pointer ml-2 inline-flex items-center"
                    >
                        cryptogambling.org
                        <svg
                            className="ml-2 h-4 w-4 text-[#B1BAD3] cursor-pointer"
                            viewBox="0 0 64 64"
                            fill="currentColor"
                        >
                            <path d="M10.823 53.176h42.353V39.941h7.059v20.294H3.765V3.765h20.293v7.058H10.823v42.353Zm28.236-42.353V3.765h21.176V24.94h-7.059v-9.123L27.88 41.115l-4.994-4.995 25.297-25.296H39.06Z" />
                        </svg>
                    </a>
                </p>
                <div className="rounded mt-4 flex flex-col items-start c">
                    <img
                        src={cryptogambling}
                        alt="cryptogambling"
                        className="w-[7.5rem] h-[3rem] rounded cursor-pointer"
                    />
                    <span className="text-[0.7rem] px-2 cursor-pointer">
                        VERIFIED OPERATOR
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Overview