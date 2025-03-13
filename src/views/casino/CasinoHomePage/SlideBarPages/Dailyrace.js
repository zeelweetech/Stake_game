import React, { useEffect, useState } from "react";
import DailyRace from "../../../../assets/img/DailyRaces.jpg";

const Dailyrace = ({ onClose }) => {
    const [, setLearnMore] = useState(true);
    const [, setKey] = useState(0);;
    const [, setWindowWidth] = useState(window.innerWidth);

    const closeLearnMore = () => {
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
            onClick={closeLearnMore}>
            <div className="bg-[#213743] text-white rounded-lg shadow-lg w-full max-w-lg max-sm:mx-4 max-sm:-mt-0 relative overflow-auto xl:max-h-[700px] lg:max-h-[600px] max-h-[600px]"
                onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center p-4">
                    <h2 className="text-2xl font-semibold flex items-center z-10">
                        $100 Race
                    </h2>
                    <button
                        aria-label="Close"
                        onClick={closeLearnMore}>
                        ✖
                    </button>
                </div>
                <div className="flex justify-center p-4">
                    <img src={DailyRace} alt="" className="w-[20rem] rounded-md -mt-12" />
                </div>
                <div className="flex justify-start space-x-2 text-base font-bold">
                    {Object.entries(timeLeft).map(([key, value]) => (
                        <div key={key} className="bg-[#0F212E] w-[54px] h-[3.375rem] px-3 py-1 -mt-[4.4rem] ml-4">
                            <span className="flex justify-center">{value}</span>
                            <span className="flex justify-center text-[#B1BAD3]">
                                {key.charAt(0).toUpperCase() + key.slice(1, 3)}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="bg-[#1a2c38] text-white w-full p-4 space-y-4">
                    <div className="flex items-center justify-between space-x-4 p-4 bg-[#213743] rounded shadow-sm">
                        <div className="text-center flex-1">
                            <p className="text-sm font-normal text-[#B1BAD3]">
                                Your Position
                            </p>
                            <p className="text-base font-medium">-</p>
                        </div>
                        <div className="border-l border-[#557086] h-8"></div>
                        <div className="text-center flex-1">
                            <p className="text-sm font-normal text-[#B1BAD3]">
                                Your Current Prize
                            </p>
                            <p className="text-base font-medium">₹0.00</p>
                        </div>
                        <div className="border-l border-[#557086] h-8"></div>
                        <div className="relative text-center flex-1 group">
                            <p className="text-sm font-normal text-[#B1BAD3]">
                                Your Wagered
                            </p>
                            <p className="text-base font-medium">₹0.00</p>
                        </div>
                    </div>
                    <p className="text-sm font-normal text-center text-[#B1BAD3] leading-6">
                        Join Stake's $100,000 Daily Race! Place your bets on sports or
                        casino and climb the leaderboard, competing with thousands of other
                        players for a spot in the top 5,000. The higher you rank, the bigger
                        your prize! At the end of the 24-hour race, prizes will be instantly
                        credited to your balance in BTC. Don't miss your chance to win big -
                        start racing now!
                    </p>
                    <div className="cursor-pointer text-center font-semibold py-[0.7rem] px-[1.25rem] bg-[#2f4553] hover:bg-[#557086] rounded">
                        Read more
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dailyrace;
