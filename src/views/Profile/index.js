import { useState } from "react";
import Setting from "./Setting";
import Loader from "../../views/component/Loader";

export default function Profile() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="bg-[#1a2c38] py-2 h-full">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div>
            <Setting />
          </div>
        </div>
      )}
    </div>
  );
}
