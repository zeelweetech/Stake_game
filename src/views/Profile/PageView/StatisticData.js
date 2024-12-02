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
            setStatisticsData(response || {});
        } catch (error) {
            console.error("Failed to fetch statistics data:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center">
                <CircularProgress color="secondary" />
            </div>
        );
    }

    return (
        <div className="text-white items-center">
            {/* <h2 className="text-lg font-bold">User Statistics</h2> */}
            {statisticsData ? (
                <div className="grid grid-cols-2 gap-y-3 justify-center items-center">
                    {/* <div className="w-40 h-24 bg-[#0f212e] p-3 rounded-md">
            <p>Joining Date : {statisticsData?.joiningDate}</p>
          </div> */}
                    <div className="w-40 h-24 bg-[#0f212e] p-2 rounded-md ">
                        <p className="text-gray-400">totalWins <span>{statisticsData?.totalWins}</span></p>
                    </div>
                    {/* <div className="w-40 h-24 bg-[#0f212e]  p-3 rounded-md ">
            <p>username: {statisticsData?.username}</p>
          </div> */}
                    <div className="w-40 h-24 bg-[#0f212e] p-2 rounded-md">
                        <p className="text-gray-400"> totalWagered <span>{statisticsData?.totalWagered}<RiMoneyRupeeCircleFill /></span></p>
                    </div>
                    <div className="w-40 h-24 bg-[#0f212e]  p-2 rounded-md">
                        <p className="text-gray-400">totalBets <span>{statisticsData?.totalBets}</span> </p>
                    </div>
                    <div className="w-40 h-24 bg-[#0f212e]  p-2 rounded-md">
                        <p className="text-gray-400">totalLosses <span>{statisticsData?.totalLosses}</span></p>
                    </div>
                </div>
            ) : (
                <p>No statistics available.</p>
            )}
        </div>
    );
};

export default GetStatistic;
