import React from "react";

const Session = () => {
  return (
    <>
      <div>
        <div className="bg-[#0f212e] text-white rounded-lg p-7">
          <div>
            <div>Session Filter</div>
            <div>
              <select className="bg-[#0f212e] text-white border w-32 py-1 mt-1">
                <option>All</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>
          <div className="p-6">
            <table>
              <tr>
                <th className="py-4">Browser</th>
                <th>Near</th>
                <th>IP Address</th>
                <th>Last Used</th>
                <th>Action</th>
              </tr>
              <tr>
                <td className="py-4">Chrome(Unknown)</td>
                <td>FR,Paris</td>
                <td>46.250.226.163</td>
                <td>1 hour ago</td>
                <td>Current</td>
              </tr>
            </table>
          </div>
          <div className="flex justify-center items-center text-center space-x-14">
            <div>Previous</div>
            <div>Next</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Session;
