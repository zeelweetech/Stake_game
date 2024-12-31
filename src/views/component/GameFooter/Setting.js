import React, { useState } from "react";

function Setting() {
  const [clickedIndex, setClickedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGameInfoOpen, setIsGameInfoOpen] = useState(false);
  const [isHotkeysVisible, setIsHotkeysVisible] = useState(false);

  const menuItems = [
    {
      id: 1,
      label: "Instant Bet",
      iconPath: "M31.986 0v23.28H52.12L31.986 64V37.814H11.88L31.986 0Z",
    },
    {
      id: 2,
      label: "Animations",
      iconPath:
        "M29.176 20.932c-1.778 3.154-2.824 6.922-2.824 10.936s1.048 7.784 2.882 11.05l-.058-.114c-.844.23-1.816.366-2.818.376h-.006c-6.238 0-11.294-5.056-11.294-11.294s5.056-11.294 11.294-11.294h.04c.988 0 1.948.124 2.864.356l-.08-.018v.002ZM9.036 24.47c-.958 2.182-1.514 4.724-1.514 7.398 0 2.674.558 5.216 1.562 7.518l-.048-.122a10.297 10.297 0 0 1-1.54-.002l.034.002a7.53 7.53 0 0 1 0-15.06c.566.056 1.078.15 1.576.28l-.07-.016v.002Zm39.906 22.588c-8.316 0-15.058-6.742-15.058-15.058 0-8.316 6.742-15.058 15.058-15.058C57.258 16.942 64 23.684 64 32c-.064 8.216-6.696 14.862-14.9 14.946h-.008l-.15.112Z",
    },
  ];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenGameInfo = () => {
    setIsGameInfoOpen(true);
  };
  const handleCloseGameInfo = () => {
    setIsGameInfoOpen(false);
  };
  const handleOpenHotkeys = () => {
    setIsHotkeysVisible(true);
  };
  const handleCloseHotkeys = () => {
    setIsHotkeysVisible(false);
  };

  return (
    <div className="relative">
      <div className=" w-3 h-3 bg-white rotate-45 absolute bottom-[-11px] left-[2rem] transform -translate-x-1/2"></div>
      <div className="absolute mt-1 z-10 xl:-left-7 lg:-left-4  md:-left-10 -left-[0.2rem] py-1 bg-white rounded shadow-lg ring-1 ring-black ring-opacity-5 w-32 md:w-32 lg:w-32 ">
        <div className="px-2 py-2 flex items-center space-x-3">
          <svg
            className="w-5 h-5 text-blue-500"
            fill="currentColor"
            viewBox="0 0 64 64"
          >
            <path d="M0 20.8v22.4h16L35.2 56V8L16 20.8H0ZM41.6 9.6v8C49.552 17.6 56 24.048 56 32s-6.448 14.4-14.4 14.4v8C53.972 54.4 64 44.372 64 32 64 19.628 53.972 9.6 41.6 9.6ZM41.574 24a8 8 0 0 1 0 16V24Z" />
          </svg>
          <input
            type="range"
            min="0"
            max="100"
            className="w-full focus:outline-none"
          />
        </div>

        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li
              key={item.id}
              className={`flex items-center px-2 py-2 cursor-pointer ${
                clickedIndex === index ? "" : "hover:bg-gray-400"
              }`}
              onClick={() =>
                setClickedIndex(clickedIndex === index ? null : index)
              }
            >
              <svg
                className={`w-4 h-4 ${
                  clickedIndex === index ? "text-[#1475E1]" : "text-[#2F4553]"
                }`}
                fill="currentColor"
                viewBox="0 0 64 64"
              >
                <path d={item.iconPath} />
              </svg>
              <span
                className={`ml-3 text-base font-semibold ${
                  clickedIndex === index
                    ? "text-[#1475E1]"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                {item.label}
              </span>
            </li>
          ))}

          <li
            className="flex items-center px-2 py-2 hover:bg-gray-400 cursor-pointer  "
            onClick={handleOpenModal}
          >
            <svg
              className="w-4 h-4 text-[#2F4553]"
              fill="currentColor"
              viewBox="0 0 64 64"
            >
              <path d="M7.36 42.39c1-12.78 14.728-25.29 17.926-29.976 2.778-4.206 1.719-9.203.83-11.4a.78.78 0 0 1 .893-1h-.004c13.889 2.918 14.588 13.48 14.168 18.206-.42 4.726.42 7.913 3.478 7.224 3.057-.69 2.028-8.443 2.028-8.443s14.039 16.676 8.893 33.073c-2.588 8.574-9.033 12.19-14.449 13.89-.28.14-.56-.14-.56-.55.7-2.638 2.509-4.726 3.058-7.644 1.12-4.796-3.327-9.213-6.624-11.71-2.063-1.538-3.386-3.97-3.386-6.712 0-.127.002-.255.008-.381v.018c0-.28-.42-.42-.55-.28a90.106 90.106 0 0 1-6.652 7.202l-.022.022c-5.136 5.696-7.784 12.09-3.197 19.175.14.28-.14.69-.41.56C11.387 60.596 6.67 51.973 7.36 42.39Z" />
            </svg>
            <span className="ml-3 text-gray-700 hover:text-black text-base font-semibold">
              Max Bet
            </span>
          </li>
          {isModalOpen && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  handleCloseModal();
                }
              }}
            >
              <div className="bg-[#1a2c38] text-white rounded-lg shadow-lg w-[90%] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl xl:max-w-xl p-4 relative">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold flex items-center">
                    <span className="mr-2">
                      <svg
                        className="w-4 h-4 text-[#b1bad3]"
                        fill="currentColor"
                        viewBox="0 0 64 64"
                      >
                        <path d="M57.89 0H6.11A6.12 6.12 0 0 0 0 6.11v51.78A6.12 6.12 0 0 0 6.11 64h51.78A6.12 6.12 0 0 0 64 57.89V6.11A6.12 6.12 0 0 0 57.89 0ZM25 50.09H11.13a2.79 2.79 0 0 1-.008-5.568H25a2.791 2.791 0 1 1 .166 5.574c-.058 0-.118-.002-.174-.006H25ZM23.65 25a8.346 8.346 0 0 1-7.842-5.502l-.018-.058h-4.66a2.791 2.791 0 0 1-.008-5.57h4.668c1.182-3.262 4.254-5.55 7.86-5.55a8.34 8.34 0 0 1 0 16.68Zm29.22 25.09h-4.66c-1.182 3.27-4.258 5.564-7.872 5.564a8.35 8.35 0 0 1-8.35-8.35 8.35 8.35 0 0 1 8.35-8.35 8.356 8.356 0 0 1 7.854 5.506l.018.058h4.66a2.79 2.79 0 0 1 .008 5.568h-.008v.004Zm0-30.61H39c-.05.004-.108.004-.166.004a2.791 2.791 0 0 1 0-5.58c.058 0 .118.002.174.006H39h13.87a2.79 2.79 0 0 1 .008 5.568h-.008v.002Z" />
                      </svg>
                    </span>
                    Max Bet
                  </h2>
                  <button
                    className="text-gray-400 hover:text-white"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  >
                    ✖
                  </button>
                </div>

                <p className="text-sm text-gray-300 mb-6">
                  Are you sure you want to enable the max bet button?
                </p>

                <div className="text-center">
                  <button
                    className="bg-[#00e701] hover:bg-[#1fff20] text-black font-semibold py-2 px-4 rounded focus:outline-none"
                    onClick={handleCloseModal}
                  >
                    Enable
                  </button>
                </div>
              </div>
            </div>
          )}
          <li
            className="flex items-center px-2 py-2 hover:bg-gray-400 cursor-pointer"
            onClick={handleOpenGameInfo}
          >
            <svg
              className="w-4 h-4 text-[#2F4553]"
              fill="currentColor"
              viewBox="0 0 64 64"
            >
              <path d="M22.8 8.547h36.774c0 .028.026.054.026.054h-.016a6.75 6.75 0 0 0-6.384 6.586v33.04l-.002-.02a6.8 6.8 0 0 1-6.786 7.246 6.8 6.8 0 0 1-6.786-7.226v-3.094H16V15.347a6.8 6.8 0 0 1 6.8-6.8Zm-.828 27.894h15.494V31.8H21.972v4.64Zm.002-12.4h24.8V19.4h-24.8v4.64Zm38.052-13.574h-.052A3.974 3.974 0 0 0 56 14.44v6.426h8V14.44a3.974 3.974 0 0 0-3.974-3.974ZM36.8 48.256H0a6.8 6.8 0 0 0 6.8 6.8h34.026c-2.694 0-4.026-3.04-4.026-6.8Z" />
            </svg>
            <span className="ml-3 text-gray-700 hover:text-black text-base font-semibold">
              Game Info
            </span>
          </li>
          {isGameInfoOpen && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
              onClick={handleCloseGameInfo}
            >
              <div
                className="bg-[#1a2c38] text-white rounded-lg shadow-lg w-[90%] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl xl:max-w-lg p-4 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold flex items-center">
                    <span className="mr-2">
                      <svg
                        className="w-4 h-4 text-[#b1bad3]"
                        fill="currentColor"
                        viewBox="0 0 64 64"
                      >
                        <path d="M22.8 8.547h36.774c0 .028.026.054.026.054h-.016a6.75 6.75 0 0 0-6.384 6.586v33.04l-.002-.02a6.8 6.8 0 0 1-6.786 7.246 6.8 6.8 0 0 1-6.786-7.226v-3.094H16V15.347a6.8 6.8 0 0 1 6.8-6.8Zm-.828 27.894h15.494V31.8H21.972v4.64Zm.002-12.4h24.8V19.4h-24.8v4.64Zm38.052-13.574h-.052A3.974 3.974 0 0 0 56 14.44v6.426h8V14.44a3.974 3.974 0 0 0-3.974-3.974ZM36.8 48.256H0a6.8 6.8 0 0 0 6.8 6.8h34.026c-2.694 0-4.026-3.04-4.026-6.8Z" />
                      </svg>
                    </span>
                    Game Info
                  </h2>
                  <button
                    className="text-gray-400 hover:text-white w-5 h-5"
                    aria-label="Close"
                    onClick={handleCloseGameInfo}
                  >
                    ✖
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <div className="bg-[#0f212e] flex rounded-full p-[5px] mt-3">
                    <button className="py-2.5 w-[5rem] rounded-full bg-[#4d718768] transition active:scale-[0.98] focus:outline-none">
                      Rules
                    </button>
                  </div>
                </div>
                <ul className="mt-4 text-base text-[#b1bad3] cursor-default list-decimal list-inside">
                  <li>
                    The more number combinations selected, the higher potential
                    payout.
                  </li>
                  <li>
                    The more selections that successfully hit, the higher your
                    payout multiplier.
                  </li>
                  <li>
                    Maximum possible selection and maximum possible successful
                    hits is 10.
                  </li>
                </ul>
              </div>
            </div>
          )}
          <li
            className="flex items-center px-2 py-2 hover:bg-gray-400 cursor-pointer"
            onClick={handleOpenHotkeys}
          >
            <svg
              className="w-4 h-4 text-[#2F4553]"
              fill="currentColor"
              viewBox="0 0 64 64"
            >
              <path d="M61.14 10.668H2.852A2.85 2.85 0 0 0 0 13.518v37.146a2.667 2.667 0 0 0 2.668 2.668h58.664A2.667 2.667 0 0 0 64 50.665V13.519a2.85 2.85 0 0 0-2.852-2.851h-.008ZM35.086 17.81h6.187v5.332h-6.187V17.81Zm0 11.495h6.187v5.332h-6.187v-5.332ZM22.715 17.811h6.187v5.332h-6.187V17.81Zm0 11.495h6.187v5.332h-6.187v-5.332ZM10.367 17.811h6.188v5.332h-6.188V17.81Zm0 11.495h6.188v5.332h-6.188v-5.332Zm43.254 16.88H10.37v-5.332h43.25v5.331Zm0-11.496h-6.188v-5.36h6.188v5.36Zm0-11.463h-6.188v-5.332h6.188v5.332Z" />
            </svg>
            <span className="ml-3 text-gray-700 hover:text-black text-base font-semibold">
              Hotkeys
            </span>
          </li>
          {isHotkeysVisible && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
              onClick={(e) => {
                // Check if the clicked area is outside the modal
                if (e.target === e.currentTarget) {
                  handleCloseHotkeys();
                }
              }}
            >
              <div className="bg-[#1a2c38] text-white rounded-xl  w-[90%] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl xl:max-w-lg relative  overflow-y-auto max-h-[80vh]">
                <div className="flex justify-between items-center p-4">
                  <h2 className="text-base font-semibold flex items-center">
                    <span className="mr-2">
                      <svg
                        className="w-4 h-4 text-[#b1bad3]"
                        fill="currentColor"
                        viewBox="0 0 96 96"
                      >
                        <path d="M56.8 47.08a49.761 49.761 0 0 0-5.6 22.8v5H32.32a55.56 55.56 0 0 1 5-22.76A86.916 86.916 0 0 1 50.8 31h-28V16.36H72v7.76a133.838 133.838 0 0 0-15.2 22.96Zm26.4 16.24a30.56 30.56 0 0 0-6 13.04l-.6 3L60 76.32a38.12 38.12 0 0 1 13.36-22.28l-12-2.36 5.04-10.64L96 46.88l-.92 4.64a85.487 85.487 0 0 0-11.88 11.8Zm-58.52 9.32a30.08 30.08 0 0 1 0-14.36 79.675 79.675 0 0 1 5.8-15.84l-1.12-4.6L0 44.88v11.68l12-2.84a37.88 37.88 0 0 0-2.88 25.92l16.28-4-.72-3Z" />
                      </svg>
                    </span>
                    Hotkeys
                  </h2>
                  <button
                    className="text-gray-400 hover:text-white w-5 h-5"
                    aria-label="Close"
                    onClick={handleCloseHotkeys}
                  >
                    ✖
                  </button>
                </div>
                <div className="flex items-center justify-center ">
                  <div className="w-full text-[#d5dceb] font-semibold rounded-lg space-y-4">
                    <div className="space-y-3 p-4 ">
                      <div className="flex justify-between text-[#b1bad3]">
                        <span>Pick tile number 1 in current row</span>
                        <span className="bg-[#2F4553]  text-sm px-3.5 py-1.5 rounded">
                          1
                        </span>
                      </div>
                      <div className="flex justify-between text-[#b1bad3]">
                        <span>Pick tile number 2 in current row</span>
                        <span className="bg-[#2F4553] text-sm font-medium px-3.5 py-1.5 rounded">
                          2
                        </span>
                      </div>
                      <div className="flex justify-between text-[#b1bad3]">
                        <span>Pick tile number 3 in current row</span>
                        <span className="bg-[#2F4553] text-sm font-medium px-3.5 py-1.5 rounded">
                          3
                        </span>
                      </div>
                      <div className="flex justify-between text-[#b1bad3]">
                        <span>Pick tile number 4 in current row</span>
                        <span className="bg-[#2F4553] text-sm font-medium px-3.5 py-1.5 rounded">
                          4
                        </span>
                      </div>
                      <div className="flex justify-between text-[#b1bad3]">
                        <span>Make a bet</span>
                        <span className="bg-[#2F4553] text-sm font-medium px-3.5 py-1.5 rounded">
                          Space
                        </span>
                      </div>
                      <div className="flex justify-between text-[#b1bad3]">
                        <span>Double bet amount</span>
                        <span className="bg-[#2F4553] text-sm font-medium px-3.5 py-1.5 rounded">
                          s
                        </span>
                      </div>
                      <div className="flex justify-between text-[#b1bad3]">
                        <span>Halve bet amount</span>
                        <span className="bg-[#2F4553] text-sm font-medium px-3.5 py-1.5 rounded">
                          a
                        </span>
                      </div>
                      <div className="flex justify-between text-[#b1bad3]">
                        <span>Zero bet amount</span>
                        <span className="bg-[#2F4553] text-sm font-medium px-3.5 py-1.5 rounded">
                          d
                        </span>
                      </div>
                      <div className="flex justify-between text-[#b1bad3]">
                        <span>Pick Random Tile</span>
                        <span className="bg-[#2F4553] text-sm font-medium px-3.5 py-1.5 rounded">
                          q
                        </span>
                      </div>
                      <div className="flex justify-between text-[#b1bad3]">
                        <span>Cashout</span>
                        <span className="bg-[#2F4553] text-sm font-medium px-3 py-1.5 rounded">
                          w
                        </span>
                      </div>
                      <div className="flex justify-between text-[#b1bad3]">
                        <span>
                          Undo tile selection the current round (autobetting
                          only)
                        </span>
                        <span className="bg-[#2F4553] text-sm font-medium px-3.5 py-1.5 rounded">
                          r
                        </span>
                      </div>
                      <div
                        className="border border-dashed p-4 border-[#b1bad3] bg-[#0F212E] rounded-md"
                        style={{ border: "2px dashed" }}
                      >
                        <p className="flex items-start space-x-2 text-sm text-[#b1bad3]">
                          <svg
                            className="h-4 w-4 text-[#b1bad3] flex-shrink-0"
                            viewBox="0 0 64 64"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M32 0C14.326 0 0 14.326 0 32s14.326 32 32 32 32-14.326 32-32S49.674 0 32 0Zm5.24 51.68H26.76v-21h10.48v21ZM32 24.56a6.12 6.12 0 1 1 6.12-6.12v.04a6.08 6.08 0 0 1-6.08 6.08h-.042H32Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span>
                            When the hotkeys are enabled, they will remain on
                            for all games until disabled. Despite some games
                            sharing similar key binds, it's always advised to
                            confirm what key interactions are set for each game.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" bg-[#0F212E] h-16 space-y-2 flex justify-center items-center text-[#b1bad3] px-4 py-4 rounded">
                  <input
                    type="checkbox"
                    className="form-checkbox h-6 w-6 flex justify-center items-center mr-2 mt-2 "
                  />
                  <span className="font-semibold">Hotkeys Enabled</span>
                </div>
              </div>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Setting;
