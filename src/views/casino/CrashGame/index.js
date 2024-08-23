import React from "react";
import CrashGameSidebar from "./CrashGameSidebar";
import CrashGameContent from "./CrashGameContent";
import CrashGameFooter from "./CrashGameFooter";

function CrashGame() {
  return (
    <div className="bg-[#1a2c38] h-screen text-white">
      <div className="w-full flex flex-col item-center px-12 py-0">
        <div className="w-full">
          <div className="mt-10">
            <div className="relative">
              <div className="w-full min-w-0 flex flex-col item-center select-none relative rounded-md">
                <div className="flex-row bg-center bg-gray-700 text-white flex grow w-full min-w-80 border-b-3 border-gray-500">
                  <div>
                    <CrashGameSidebar />
                  </div>
                  <div>
                    <CrashGameContent />
                  </div>
                </div>
                <div className="h-[63px] p-2 flex items-center justify-between w-full bg-gray-700">
                  <CrashGameFooter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrashGame;
