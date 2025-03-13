import React, { useEffect, useState } from 'react';
import WeeklyRaffle from "../../../../assets/img/WeeklyRaffle.png";

const Weeklyraffle = ({ onClose }) => {
    const [
        // LearnMore
        , setLearnMore] = useState(true);
    const [
        // key
        , setKey] = useState(0);
    const [
        // windowWidth
        , setWindowWidth] = useState(window.innerWidth);

    const closeLearnMore = () => {
        setLearnMore(false);
        setKey(prevKey => prevKey + 1); // Force re-render
        if (onClose) onClose();
    };

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
            <div className="bg-[#213743] text-white rounded-lg shadow-lg w-full max-w-lg max-sm:mx-4 relative overflow-auto xl:max-h-[660px] lg:max-h-[600px] max-h-[600px]"
                onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center p-4">
                    <h2 className="text-2xl font-semibold flex items-center z-10">
                        $75k Weekly Raffle
                    </h2>
                    <button className="text-gray-400 hover:text-white"
                        aria-label="Close"
                        onClick={closeLearnMore}>
                        ✖
                    </button>
                </div>
                <div className="flex justify-center p-4">
                    <img src={WeeklyRaffle} alt="" className="w-[20rem] rounded-md -mt-12" />
                </div>
                <div className="flex justify-start space-x-2 text-base font-bold">
                    {Object.entries(timeLeft).map(([key, value]) => (
                        <div className="bg-[#0F212E] w-[54px] h-[3.375rem] px-3 py-1 -mt-[4.4rem] ml-4" key={key}>
                            <span className="flex justify-center">{value}</span>
                            <span className="flex justify-center text-[#B1BAD3]">
                                {key.charAt(0).toUpperCase() + key.slice(1, 3)}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="bg-[#1a2c38] text-white w-full flex flex-col p-4 gap-y-4">
                    <div className="text-center bg-[#213743] rounded-sm p-4">
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-normal text-[#B1BAD3]">
                                Next ticket
                            </span>
                            <span className="text-sm font-medium">₹0.00 / ₹1,000</span>
                        </div>
                        <div className="w-full bg-[#213743] rounded-full h-2.5">
                            <div className="bg-[#2F4553] h-4 rounded-full"></div>
                        </div>
                        <div className="text-sm font-normal mt-2 text-start text-[#B1BAD3]">
                            Your number of entries: <span className="font-medium text-[#FFFFFF]">0</span>
                        </div>
                    </div>
                    <span className="text-[14px] font-normal text-center leading-normal  text-[#B1BAD3]">
                        Wager to earn tickets into a giveaway where anybody can win.
                        Just one ticket could see you sharing in $75,000 every single week.
                        With $1,000 wagered equating to one ticket, earn as many tickets as
                        possible to give yourself the best chance of winning big! Winners
                        drawn on live stream every Saturday 2:00pm GMT at www.kick.com/Eddie
                    </span>
                    <div className="cursor-pointer text-center font-semibold py-[0.7rem] px-[1.25rem] bg-[#2f4553] hover:bg-[#557086] rounded">
                        Read more
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weeklyraffle;
