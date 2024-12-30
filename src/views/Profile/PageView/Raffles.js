import Statistic from "../../../../src/assets/svg/Statistic.svg";


const Raffles = () => {
    return (
        <div className="flex justify-center">
            <div>
                <div className="flex justify-center">
                    <img src={Statistic} alt="Statistic" sx={{ fontSize: "120px", color: "#b1bad3" }} />
                </div>
                <p>No Trophies Data available.</p>
            </div>
        </div>

    )
}
export default Raffles