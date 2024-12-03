import LegendToggleIcon from "@mui/icons-material/LegendToggle";

const Trophies = () => {
    return (
        <div className="flex justify-center">
        <div>
            <div className="flex justify-center">
                <LegendToggleIcon sx={{ fontSize: "120px", color: "#b1bad3" }} />
            </div>
            <p>No Trophies Data available.</p>
        </div>
    </div>
    )
}
export default Trophies