import React, { useEffect, useState } from "react";
import ChristmasRase from "../../../../assets/img/ChristmasRace.png"

const Christmas = ({ onClose }) => {
    const [, setLearnMore] = useState(true);
    const [, setKey] = useState(0);;
    const [, setWindowWidth] = useState(window.innerWidth);

    const closeChristmas = () => {
        setLearnMore(false);
        setKey((prevKey) => prevKey + 1);
        if (onClose) onClose();
    };

    // Load timer from localStorage or default time
    const getStoredTime = () => {
        const savedTime = localStorage.getItem("dailyRaceTimer");
        return savedTime
            ? JSON.parse(savedTime)
            : { days: 5, hours: 2, minutes: 1, seconds: 10 };
    };

    const [timeLeft, setTimeLeft] = useState(getStoredTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prevTime) => {
                let { days, hours, minutes, seconds } = prevTime;

                if (seconds > 0) {
                    seconds--;
                } else {
                    seconds = 59;
                    if (minutes > 0) {
                        minutes--;
                    } else {
                        minutes = 59;
                        if (hours > 0) {
                            hours--;
                        } else {
                            hours = 23;
                            if (days > 0) {
                                days--;
                            }
                        }
                    }
                }

                const newTime = { days, hours, minutes, seconds };

                // Save updated time to localStorage
                localStorage.setItem("dailyRaceTimer", JSON.stringify(newTime));
                return newTime;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-[9999]"
            onClick={closeChristmas}>
            <div className="bg-[#213743] text-white rounded-lg shadow-lg w-[90%] max-w-lg p-4 max-sm:mx-4 relative overflow-auto xl:max-h-[680px] lg:max-h-[600px] max-h-[600px]"
                onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold flex items-center">
                        $10 Million Christmas Race
                    </h2>
                    <button className="text-gray-400 hover:text-white"
                        aria-label="Close"
                        onClick={closeChristmas}>
                        ✖
                    </button>
                </div>
                <div className="flex justify-center">
                    <img className="w-[20rem] rounded-md"
                        src={ChristmasRase}
                        alt=""
                    />
                </div>
                <div className="flex justify-start space-x-2 text-base font-bold">
                    {Object.entries(timeLeft).map(([key, value]) => (
                        <div key={key} className="bg-[#0F212E] w-[54px] h-[3.375rem] px-3 py-1 -mt-[4.4rem]">
                            <span className="flex justify-center">{value}</span>
                            <span className="flex justify-center text-[#B1BAD3]">
                                {key.charAt(0).toUpperCase() + key.slice(1, 3)}{" "}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="bg-[#1a2c38] text-white rounded-sm shadow-md p-4 flex items-center justify-between space-x-4">
                    <div className="text-center flex-1">
                        <p className="text-sm font-normal text-[#B1BAD3]">
                            Your Position
                        </p>
                        <p className="text-base font-medium">-</p>
                    </div>
                    <div className="border-l border-[#557086] h-8"></div>
                    <div className="relative text-center flex-1 group">
                        <p className="text-sm font-normal text-[#B1BAD3]">
                            Your Current Prize
                        </p>
                        <p className="text-base font-medium">₹0.00</p>
                        <div className="absolute left-1/2 w-20 h-9 -mt-[4.2rem] transform -translate-x-1/2 bg-white text-[#0f212e] text-sm font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 flex justify-center items-center">
                            ₹0.00
                            <div className="tooltip-arrow w-3 h-3 bg-white rotate-45 absolute bottom-[-5px] left-1/2 transform -translate-x-1/2"></div>
                        </div>
                    </div>
                    <div className="border-l border-[#557086] h-8"></div>
                    <div className="relative text-center flex-1 group">
                        <p className="text-sm font-normal text-[#B1BAD3]">
                            Your Wagered
                        </p>
                        <p className="text-base font-medium">₹0.00</p>
                        <div className="absolute left-1/2 w-20 h-9 -mt-[4.2rem] transform -translate-x-1/2 bg-white text-[#0f212e] text-sm font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 flex justify-center items-center">
                            ₹0.00
                            <div className="tooltip-arrow w-3 h-3 bg-white rotate-45 absolute bottom-[-5px] left-1/2 transform -translate-x-1/2"></div>
                        </div>
                    </div>
                </div>
                <p className="text-base font-normal text-center text-[#B1BAD3] leading-6 mt-3 p-1">
                    Join Stake's $10m Christmas Race! Over the next 30 days, every bet
                    you place - whether in sports or casino - helps you climb the
                    leaderboard and secure a spot among the top 25,000 racers. The
                    higher you rank, the bigger your prize! Once the race ends, all
                    prizes will be instantly credited to your balance in BTC. Get in
                    on the action and race your way to incredible rewards this holiday
                    season!
                </p>
                <div className="cursor-pointer text-center font-semibold py-[0.7rem] px-[1.25rem] bg-[#2f4553] hover:bg-[#557086] rounded">
                    Read more
                </div>
            </div>
        </div>
    )
}

export default Christmas