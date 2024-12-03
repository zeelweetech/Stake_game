import sportsTable from "../../../assets/img/sportsTable.png"
function Sports() {
    return(
        <div className="flex justify-center">
        <div>
            <div className="flex justify-center">
                <img src={sportsTable} alt="Sports"/>
            </div>
            <p>No Sports Data available.</p>
        </div>
    </div>
    )
}
export default Sports