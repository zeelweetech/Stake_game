import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


const SportsDrower = ({ openSports, onCloseSports }) => {
    return (
        <div className={`fixed left-0 right-0 bg-[#0f212e] shadow-lg transition-all duration-300 ease-in-out ${openSports ? 'bottom-[3.65rem] z-[1000] top-[3.5rem]' : ''} flex flex-col`} >
            <div className="flex justify-between px-3 items-center bg-[#0f212e] shadow-lg h-12">
                <div className="text-lg flex">
                    Sports
                </div>
                <IconButton
                    onClick={onCloseSports}
                    sx={{ color: "white" }}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
            </div>
            <div className="flex justify-center items-center h-full">
                <div className="text-3xl">
                    Sports Is Coming Soon...
                </div>
            </div>

        </div>
    )
}
export default SportsDrower;