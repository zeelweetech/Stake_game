import { useState } from "react";
import races from "../../../../src/assets/img/races.png";

const Races = () => {
    const [racesData, setracesData] = useState()
    return (
        <div className="flex justify-center">
            <div>
                <div className="flex justify-center">
                    <img src={races} alt="Races"/>
                </div>
                <p>No Races Data available.</p>
            </div>
        </div>
    );
};

export default Races;
