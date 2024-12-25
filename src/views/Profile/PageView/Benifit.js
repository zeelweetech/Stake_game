import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { TbDiamondFilled } from 'react-icons/tb';

const Benifit = () => {

    const [gameMenu, setGameMenu] = useState("Progress"); 

    const BronzeList = [
        "Bonus from Support in currency of your choice",
        "Rakeback enabled",
        "Weekly bonuses",
        "Monthly bonuses",
        "VIP Telegram channel access",
    ];

    const Silver = [
        "Bonus from Support in currency of your choice",
        "Weekly & monthly bonuses increased"
    ];

    const Gold = [
        "Bonus from Support in currency of your choice",
        "Weekly & monthly bonuses increased"
    ];

    const PlatinumI = [
        "Bonus from Support in currency of your choice", 
        "Weekly & monthly bonuses increased",
        "14 - 42 Day, Daily bonus (Reload)",
    ];

    const PlatinumII = [
        "Dedicated VIP host",
        "Bonus from VIP host in currency of your choice",
        "Weekly & monthly bonuses increased",
        "Monthly bonuses",
    ];

    const Diamond = [
        "Bonus from VIP host in currency of your choice",
        "Exclusively customized benefits",
        "Weekly & monthly bonuses increased",
        "Monthly bonuses",
    ];

    return (
        <div className="w-full">
          
            {/* {gameMenu === "Benefit" && ( */}
            <div  className="w-full px-2 p-2">
            <Accordion sx={{backgroundColor: "#213743"}}>
            <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "#b1bad3" }} />}
                        sx={{ padding: "0 16px ", color: "white" }}
                    >
                        <div className="flex items-center space-x-2 ">
                            <FaRegStar color="#c69c6d" /> 
                            <Typography className='#ffffff'>Bronze</Typography>
                        </div>
                    </AccordionSummary>
                    <hr className= 'border-gray-500 border'></hr>

                    <AccordionDetails sx={{ backgroundColor: "#1a2c38", color: "#b1bad3" }}>
                        {BronzeList.map((benefit, index) => (
                            <Typography key={index} className="text-sm mb-2">
                                 <ul className='list-disc m-2 font-thin'>
                                <li> {benefit}</li>
                               </ul>
                            </Typography>
                        ))}
                    </AccordionDetails>
                </Accordion>
            </div>
           
            {/* )} */}

            {/* Silver */}
            <div className="w-full px-2 p-2">
            <Accordion sx={{backgroundColor: "#213743"}}>
            <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "#b1bad3" }} />}
                        sx={{ padding: "0 16px",color: "white" }}
                    >
                        <div className="flex items-center space-x-2">
                            <FaRegStar color="#c0c0c0" /> {/* Silver icon */}
                            <Typography>Silver</Typography>
                        </div>
                    </AccordionSummary>
                    <hr className= 'border-gray-500 border'></hr>

                    <AccordionDetails sx={{ backgroundColor: "#1a2c38", color: "#b1bad3" }}>
                        {Silver.map((benefit, index) => (
                            <Typography key={index} className="text-sm mb-2">
                                <ul className='list-disc m-2 font-thin'>
                                <li> {benefit}</li>
                               </ul>
                            </Typography>
                        ))}
                    </AccordionDetails>
                </Accordion>
            </div>

            {/* Gold */}
            <div className="w-full px-2 p-2">
            <Accordion sx={{backgroundColor: "#213743"}}>
            <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "#b1bad3" }} />}
                        sx={{ padding: "0 16px",color: "white"  }}
                    >
                        <div className="flex items-center space-x-2">
                            <FaRegStar color="#FFD700" /> {/* Gold icon */}
                            <Typography>Gold</Typography>
                        </div>
                    </AccordionSummary>
                    <hr className= 'border-gray-500 border'></hr>

                    <AccordionDetails sx={{ backgroundColor: "#1a2c38", color: "#b1bad3" }}>
                        {Gold.map((benefit, index) => (
                            <Typography key={index} className="text-sm mb-2">
                                 <ul className='list-disc m-2 font-thin'>
                                <li> {benefit}</li>
                               </ul>
                            </Typography>
                        ))}
                    </AccordionDetails>
                </Accordion>
            </div>

            {/* Platinum I - III */}
            <div className="w-full px-2 p-2">
            <Accordion sx={{backgroundColor: "#213743"}}>
            <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "#b1bad3" }} />}
                        sx={{ padding: "0 16px",color: "white"  }}
                    >
                        <div className="flex items-center space-x-2">
                            <FaStar color="#87CEEB" /> 
                            <Typography>Platinum I - III</Typography>
                        </div>
                    </AccordionSummary>
                    <hr className= 'border-gray-500 border'></hr>

                    <AccordionDetails sx={{ backgroundColor: "#1a2c38", color: "#b1bad3" }}>
                        {PlatinumI.map((benefit, index) => (
                            <Typography key={index} className="text-sm mb-2">
                                 <ul className='list-disc m-2 font-thin'>
                                <li> {benefit}</li>
                               </ul>
                            </Typography>
                        ))}
                    </AccordionDetails>
                </Accordion>
            </div>

            {/* Platinum IV - VI */}
            <div className="w-full px-2 p-2">
            <Accordion sx={{backgroundColor: "#213743"}}>
            <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "#b1bad3" }} />}
                        sx={{ padding: "0 16px",color: "white"  }}
                    >
                        <div className="flex items-center space-x-2">
                            <FaStar color="#87CEEB" /> {/* Platinum IV-VI Icon (Sky Blue) */}
                            <Typography>Platinum IV - VI</Typography>
                        </div>
                    </AccordionSummary>
                    <hr className= 'border-gray-500 border'></hr>

                    <AccordionDetails sx={{ backgroundColor: "#1a2c38", color: "#b1bad3" }}>
                        {PlatinumII.map((benefit, index) => ( 
                            <Typography key={index} className="text-sm mb-2 list-disc">
                                <ul className='list-disc m-2 font-thin'>
                                <li> {benefit}</li>
                               </ul>
                            </Typography>
                        ))}
                    </AccordionDetails>
                </Accordion>
            </div>

            {/* Diamond */}
            <div className="w-full px-2 p-2 ">
                <Accordion sx={{backgroundColor: "#213743"}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                        sx={{ padding: "0 16px",color: "white"  }}
                    >
                        <div className="flex items-center space-x-2">
                            <TbDiamondFilled color="#FFFFFF" /> 
                            <Typography>Diamond</Typography>
                           
                        </div>
                       
                    </AccordionSummary>
                    <hr className= 'border-gray-500 border'></hr>
                    <AccordionDetails sx={{ backgroundColor: "#213743", color: "#b1bad3"}} className='list-disc'>
                        {Diamond.map((benefit, index) => (
                            <Typography key={index} className="text-sm mb-2">
                               <ul className='list-disc m-2 font-thin'>
                                <li> {benefit}</li>
                               </ul>
                            </Typography>
                        ))}
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
}

export default Benifit;
