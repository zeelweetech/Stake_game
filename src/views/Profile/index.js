import Setting from "./Setting";
import { useState } from "react";
import Loader from "../../views/component/Loader";


export default function Profile() {
    const [loading, setLoading] = useState(false);

    return (
        <div className="bg-[#1a2c38] py-2 h-screen">
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <div> 
                        <Setting/>       
                    </div>
                </div>
            )
            }

        </div>
    )
}