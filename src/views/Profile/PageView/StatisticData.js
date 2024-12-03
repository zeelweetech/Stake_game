import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { getStatisticsData } from "../../../services/InProfileServices";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";


const GetStatistic = ({ userId }) => {
    const [statisticsData, setStatisticsData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (userId) {
            fetchStatistics();
        }
    }, [userId]);

    const fetchStatistics = async () => {
        try {
            setLoading(true);
            if (!userId) throw new Error("User ID is undefined");
            const response = await getStatisticsData({ id: userId });
            // console.log("?????????????", response);

            setStatisticsData(response || {});
        } catch (error) {
            console.error("Failed to fetch statistics data:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="text-white items-center">
            <div className="flex justify-center">
                {statisticsData ? (
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-3 justify-center items-center">
                        <div className="w-40 h-24 bg-[#4d718768] p-2 rounded-xl flex flex-col items-center space-y-2">
                            <p className="text-gray-400 font-semibold h-5">Total Bets  </p> <span className="font-bold text-xl">{statisticsData?.totalBets}</span>
                        </div>
                        <div className="w-40 h-24 bg-[#4d718768] p-2 rounded-xl flex flex-col items-center space-y-2">
                            <p className="text-gray-400 font-semibold h-5">Total Wins </p><span className=" font-bold text-xl">{statisticsData?.totalWins}</span>
                        </div>

                        <div className="w-40 h-24 bg-[#4d718768] p-2 rounded-xl flex flex-col items-center space-y-2">
                            <p className="text-gray-400 font-semibold h-5">Total Losses </p> <span className="font-bold text-xl">{statisticsData?.totalLosses}</span>
                        </div>
                        <div className="w-40 h-24 bg-[#4d718768] p-2 rounded-xl flex flex-col items-center space-y-2">
                            <p className="text-gray-400 font-semibold h-5">Total Wagered </p> <span className="font-bold text-xl ">{statisticsData?.totalWagered} ₹</span>
                        </div>

                    </div>
                ) : (
                    <p>No statistics available.</p>
                )}
            </div>
        </div>
    );
};

export default GetStatistic;
