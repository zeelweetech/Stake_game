import React from "react";
import WheelGame from "../../../../assets/img/wheelGame.avif";
import { Link } from "react-router-dom";

const WheelDiscription = () => {
  return (
    <>
      <div className="pt-3 xl:max-w-[52rem] md:w-full text-[#b1bad3]">
        <div className="md:flex block gap-5 space-y-2 md:space-y-0">
          <div className="flex justify-center items-center">
            <img
              className="rounded-md xl:max-w-36 lg:max-w-40 md:max-w-44 w-48 flex justify-center items-center"
              src={WheelGame}
              alt="wheelGame"
            />
          </div>
          <div>
            <button className="text-[12px] text-white bg-[#4d718768] px-2 py-0.5 rounded-2xl cursor-default font-bold">
              <span className="text-[12px] font-bold text-[#B2BAD3]">
                Edge:
              </span>{" "}
              1.00%
            </button>
            <div className="flex items-center space-x-2">
              <button className="text-[12px] mt-2 font-bold bg-[#4d718768] px-2 py-0.5 rounded-2xl hover:text-white">
                <Link to={"/StackOriginals"}>Listor Originals</Link>
              </button>
              <button className="text-[12px] mt-2 font-bold bg-[#4d718768] px-2 py-0.5 rounded-2xl hover:text-white">
                Volatility Switch
              </button>
            </div>
            <p className="text-[15px] py-4 cursor-default">
              Set your risk level, choose the number of segments, and spin the
              wheel for your chance to land big multiplier wins.
            </p>
            <p className="text-[15px] pb-3 cursor-default">
              Wheelis a brilliant Listor Original casino game with simple
              gameplay based on the spin of a big wheel. If the wheel spins in
              your favour, you could land the maximum payout of 49.50x the bet.
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pt-6 cursor-default">
            How to Play Wheel & Gameplay
          </h1>
          <p className="text-[15px] py-3 cursor-default">
            To play Wheel at Listor Casino , you must first create an account.
            This takes just a few minutes, and you can then deposit funds to get
            started.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            The game has 2 main components: the risk setting and the number of
            segments. Before placing a bet, you need to decide on the risk,
            choosing low, medium, or high. You also need to select the number of
            segments to be active in the game, choosing from 10, 20, 30, 40, or
            50.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            Finally, after selecting, type in your Listor amount and place the
            green “Bet” button to spin the wheel.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            At the bottom of the screen, you will notice the multipliers tied to
            each segment of the wheel. These indicate how much you can
            potentially win if the wheel spins in your favour.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            Check out our{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              guide on how to play Wheel
            </span>{" "}
            , or for more helpful information regarding Listor Original gameplay
            and to find out more about how our online casino games work, read
            through our comprehensive{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              online casino guide
            </span>{" "}
            .
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pb-3 cursor-default">
            Theme & Graphics
          </h1>
          <p className="text-[15px] pb-3 cursor-default">
            Wheel is a{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Listor Original
            </span>{" "}
            game with a simple user interface and clear graphics. When you open
            the game, you will see 2 sides of the screen. On the left is space
            to place your bet, adjust your risk, and select the number of
            segments.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            On the right is the wheel itself, which has different coloured
            segments. The multipliers at the bottom of the right side of the
            screen indicate how much you can win if those segments come up.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            Check out our other titles that are{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              exclusive to Listor
            </span>{" "}
            .
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pb-3 cursor-default">
            Symbols & Pay Table
          </h1>
          <p className="text-[15px] pb-3 cursor-default">
            Wheel has no symbols, as it is not a conventional{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              slot game
            </span>{" "}
            . Rather, the wheel serves as the game’s main grid, and when it
            stops spinning, it can land on any of the coloured segments.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            Here’s an overview of the max wins based on the risk and segments
            selected:
          </p>
          <table className="cursor-default">
            <tr>
              <th>Risk</th>
              <th>Number of Segments</th>
              <th>Max Win</th>
            </tr>
            <tr>
              <td>Low</td>
              <td>10-50</td>
              <td>1.50</td>
            </tr>
            <tr>
              <td>Medium</td>
              <td>10-20</td>
              <td>3.00</td>
            </tr>
            <tr>
              <td>Medium</td>
              <td>30</td>
              <td>4.00</td>
            </tr>
            <tr>
              <td>Medium</td>
              <td>40</td>
              <td>3.00</td>
            </tr>
            <tr>
              <td>Medium</td>
              <td>50</td>
              <td>5.00</td>
            </tr>
            <tr>
              <td>High</td>
              <td>10</td>
              <td>9.90</td>
            </tr>
            <tr>
              <td>High</td>
              <td>20</td>
              <td>19.80</td>
            </tr>
            <tr>
              <td>High</td>
              <td>30</td>
              <td>29.70</td>
            </tr>
            <tr>
              <td>High</td>
              <td>40</td>
              <td>39.60</td>
            </tr>
            <tr>
              <td>High</td>
              <td>50</td>
              <td>49.50</td>
            </tr>
          </table>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold py-3 cursor-default">
            Wheel Features & Bonuses
          </h1>
          <p className="text-[15px] pb-3 cursor-default">
            One of the best things about Listor Original games is that they’re
            straightforward to play and light on complex mechanics and bonus
            features.
          </p>

          <p className="text-[15px] py-3 cursor-default">
            But to make it even easier to play Wheel, navigate to the “Auto” tab
            in the game’s interface and automate the bets you place.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            You can direct the game to stop after a specific number of rounds,
            depending on how much you win or lose as the game plays out.
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pb-3 cursor-default">
            Max Win & Return to Player (RTP)
          </h1>
          <p className="text-[15px] pb-3 cursor-default">
            Wheel features a theoretical return to player percentage of 99%,
            meaning this game has a house edge of just 1%.
          </p>
          <p className="text-[15px] py-3 cursor-default">
            In terms of the max win, if you set the risk too high and the
            segments to 50, the maximum win available is 49.50x the bet.
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pb-3 cursor-default">
            How to Deposit Funds to Play Games Online & Bet Responsibly
          </h1>
          <p className="text-[15px] pb-3 cursor-default">
            You can play Wheel at Listor online casino by depositing in a local
            fiat currency or via cryptocurrencies.
          </p>
          <p className="text-[15px] pb-3 cursor-default ">
            Right now, you can play at Listor.com with the following local
            currencies{" "}
            <span className="font-semibold cursor-default">
              – ARS, CLP, BRL, JPY, INR, and PEN
            </span>{" "}
            . Depending on your preferences, you can also view your balance in
            numerous other currencies too. You can find more information about
            our
            <a className="items-center inline-flex ml-0.5 font-semibold cursor-pointer hover:text-white group">
              local currency options
              <svg
                className="ml-2 h-4 w-4 text-[#B1BAD3] group-hover:text-white mb-1.5"
                viewBox="0 0 64 64"
                fill="currentColor"
              >
                <path d="M10.823 53.176h42.353V39.941h7.059v20.294H3.765V3.765h20.293v7.058H10.823v42.353Zm28.236-42.353V3.765h21.176V24.94h-7.059v-9.123L27.88 41.115l-4.994-4.995 25.297-25.296H39.06Z" />
              </svg>
            </a>
            <span className="ml-0.5 cursor-default">
              {" "}
              on our community forum, as well as our
            </span>
            <span className="font-semibold ml-1 hover:text-white cursor-pointer">
              local currency payment guide
            </span>{" "}
            .
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            To play Wheel with crypto, you can easily deposit crypto units into
            your account using coins like BTC, ETH, Doge, and LTC. You can find
            the full{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              list of available cryptocurrencies
            </span>{" "}
            on our blog, as well as our recommendations and{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              guide for choosing the right coin
            </span>{" "}
            for you.
          </p>
          <p className="text-[15px] py-3 cursor-default">
            Listor offers live support to players via our{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              customer support staff
            </span>{" "}
            for help with issues like{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              depositing and withdrawing units
            </span>{" "}
            and more.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            Moonpay supports multiple payment options, including Visa,
            Mastercard, Apple Pay, Google Pay, and others, to buy cryptocurrency
            to enjoy Wheel. For a full list of supported payment options, please
            refer to the
            <a className="items-center inline-flex ml-1 font-semibold cursor-pointer hover:text-white group">
              Moonpay documentation
              <svg
                className="ml-1 h-4 w-4 text-[#B1BAD3] group-hover:text-white mb-1"
                viewBox="0 0 64 64"
                fill="currentColor"
              >
                <path d="M10.823 53.176h42.353V39.941h7.059v20.294H3.765V3.765h20.293v7.058H10.823v42.353Zm28.236-42.353V3.765h21.176V24.94h-7.059v-9.123L27.88 41.115l-4.994-4.995 25.297-25.296H39.06Z" />
              </svg>{" "}
            </a>
            <span className="ml-1 cursor-default">.</span>
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            Learn how to use the{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Listor Vault
            </span>{" "}
            to securely store your funds online for all future gameplay at
            Listor Casino. You can also read our{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              crypto security guide
            </span>{" "}
            to learn more about keeping your funds safe and secure at
            Listor.com.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            Please always remember to bet within your means and{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              gamble responsibly{" "}
            </span>
            . You can find out how to stay in control with our{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Listor Smart guidelines
            </span>{" "}
            . You can also use our{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              monthly budget calculator
            </span>{" "}
            to determine how much of your disposable income you can afford to
            allocate to gambling.
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pb-3 cursor-default">
            Popular Listor Original Games on Listor
          </h1>
          <p className="text-[15px] pb-3 cursor-default">
            Listor Original games rank among the most popular titles at Listor
            Casino, as they are exclusive games that you can’t play anywhere
            else.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            These games are also extremely easy to play, with high potential
            payouts and awesome RTPs, offering great value gaming.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            If you like Wheel and want to experience similar Listor Original
            games, check out the following:
          </p>
          <ul className="pl-8 text-[15px] ">
            <li className="font-semibold relative">
              <span className="hover:text-white w-5 cursor-pointer">Mines</span>
            </li>
            <li className="font-semibold relative">
              <span className="hover:text-white w-24 cursor-pointer">
                Plinko
              </span>
            </li>
            <li className="font-semibold relative">
              <span className="hover:text-white w-5 cursor-pointer">Limbo</span>
            </li>
            <li className="font-semibold relative">
              <span className="hover:text-white w-5 cursor-pointer">Crash</span>
            </li>
            <li className="font-semibold relative">
              <span className="hover:text-white w-5 cursor-pointer">Keno</span>
            </li>
          </ul>
          <style>{`
            ul {
              list-style-type: disc;
            }

            li::marker {
              color: white;
              font-size: 18px;
            }
          `}</style>
          <p className="text-[15px] pb-3 cursor-default">
            Browse through the{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              newest games
            </span>{" "}
            to arrive at{" "}
            <Link to={"/"} className="text-white font-bold cursor-pointer">
              Listor.com{" "}
            </Link>{" "}
            so you can play the latest Listor Original titles as soon as they
            arrive, alongside other brilliant games from leading{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              studios
            </span>{" "}
            .
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            For a bankroll boost, access the current promotions available and
            learn more about the{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              exclusive rewards
            </span>{" "}
            available to you via the{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Listor VIP Club
            </span>{" "}
            .
          </p>
          <div className="text-white rounded-lg cursor-default">
            <h2 className="text-xl font-bold mb-4">Game Information</h2>
            <table className="w-full text-[#B1BAD3]">
              <thead>
                <tr>
                  <th className="p-4 text-left rounded-l">Title</th>
                  <th className="p-4 text-end rounded-r">Slide</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-normal p-4 rounded-l bg-[#213743]">
                    Provider
                  </td>
                  <td className="text-end p-4 rounded-r bg-[#213743]">
                    Listor Originals
                  </td>
                </tr>
                <tr>
                  <td className="font-normal p-4 bg-[#0f212e]">Game Type</td>
                  <td className="text-end p-4 bg-[#0f212e]">Original</td>
                </tr>
                <tr>
                  <td className="font-normal p-4 rounded-l bg-[#213743]">
                    RTP
                  </td>
                  <td className="text-end p-4 rounded-r bg-[#213743]">99%</td>
                </tr>
                <tr>
                  <td className="font-normal p-4 bg-[#0f212e]">House Edge</td>
                  <td className="text-end p-4 bg-[#0f212e]">1%</td>
                </tr>
                <tr>
                  <td className="font-normal p-4 rounded-l bg-[#213743]">
                    Max Win
                  </td>
                  <td className="text-end p-4 rounded-r bg-[#213743]">
                    49.50%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default WheelDiscription;
