import React from "react";
import crashGame from "../../../../assets/img/crashGame.avif";
import { Link } from "react-router-dom";

const CrashDiscription = () => {
  return (
    <>
      <div className="py-3 xl:max-w-[58rem] md:w-full min-h-screen text-[#B1BAD3]">
        <div className="md:flex block gap-5 space-y-2 md:space-y-0">
          <div className="flex justify-center items-center">
            <img
              className="rounded-md md:max-w-96 w-48 flex justify-center items-center"
              src={crashGame}
              alt="crashGame"
            />
          </div>
          <div>
            <button className="text-[12px] text-white bg-[#4d718768] px-2 py-0.5 rounded-2xl cursor-default font-bold">
              <span className="text-[12px] font-bold text-[#B2BAD3]">
                Edge:
              </span>{" "}
              2.00%
            </button>
            <div className="flex items-center space-x-2">
              <button className="text-[12px] mt-2 font-bold bg-[#4d718768] px-2 py-0.5 rounded-2xl hover:text-white">
                Multiplayer
              </button>
              <button className="text-[12px] mt-2 font-bold bg-[#4d718768] px-2 py-0.5 rounded-2xl hover:text-white">
                <Link to={"/StackOriginals"}>Listor Originals</Link>
              </button>
            </div>
            <p className="text-[15px] py-2 cursor-default">
              Predict the multiplier in this quick and simplistic odds-based
              game, Crash! Take on the house with a variety of different
              strategies to defeat the house and take home huge winnings against
              the house!
            </p>
            <p className="text-[15px] py-1 cursor-default">
              <span className="font-bold">Crash</span> is a simple game of
              chance where the player picks the cashout amount for a betting
              round as an icon representing a rocket flies through a grid. The
              cashout amount climbs until the rocket 'crashes' and as long as
              the player's cashout amount is lower than the crash value, the
              player can win a payout.
            </p>
          </div>
        </div>
        <div>
          <p className="text-[15px] mt-3 cursor-default">
            This version of Crash is a proud{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Listor Original
            </span>{" "}
            and one of the most popular games on our{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              online casino
            </span>{" "}
            .
          </p>
          <h1 className="text-white text-2xl font-semibold pt-4 cursor-default">
            How to Play Crash
          </h1>
          <p className="text-[15px] py-3 cursor-default">
            Crash is a classic luck-based type of game that is easy to get
            started with, even for new players not familiar with casino games.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            As this is purely a game of chance, winning strategies involve how a
            player bets. Players betting on low cashout values aim are for more
            consistent payouts whilst betting high cashout values aim for a
            higher return in a single round with more{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              volatile gameplay.
            </span>
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            The concept is simple: every 5 seconds after a round of Crash is
            played, players can make their bets on what their cashout value will
            be for the upcoming round.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            This is the amount that that player will cashout before the rocket
            'crashes'. If the player hits the cashout value during a round, they
            receive a payout based on that cashout amount. However, if the
            rocket crashes at a value lower than their cashout bet, the player
            loses the bet for that round.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            One of the exciting aspects of Crash is that it is a real-time{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              multiplayer
            </span>{" "}
            game and is considered a favourite amongst the Listor Community.
            Every round is the same for all active players playing Crash at that
            specific time - with a live leader board showcasing each player's
            bets for that round.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            With the live community playing this game of chance, provably fair
            gameplay and a maximum cashout value of 1,000,000x, Crash will sure
            to be a casino game to try out for new players!
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            Check out our ultimate{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              how to play Crash guide
            </span>{" "}
            on the{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Listor Blog.
            </span>
          </p>
        </div>
        <div>
          <h1 className="text-white text-2xl font-semibold pb-3 cursor-default">
            Betting Options for Crash
          </h1>
          <p className="text-[15px] pb-3 cursor-default">
            There are two types of betting for our Crash casino game:{" "}
            <span className="font-semibold">Manual Bet</span>and
            <span className="font-semibold"> Auto Bet.</span>
          </p>
          <p className="text-[15px] pb-2 cursor-default">
            <span className="font-semibold">Manual Bet</span> allows the player
            set the <span className="font-semibold">bet amount</span> for a
            round of crash, as well as the{" "}
            <span className="font-semibold">Cashout At</span> value for when the
            player would like to cashout during the next round.{" "}
            <span className="font-semibold">Profit on Win</span> displays the
            estimated profit a player would get if they were able to place a
            winning bet.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            Hotkeys are also available which are best utilised to control your
            betting during the 5 seconds interval. Hotkeys for Crash include 's'
            to double bet amount, 'a' to halve a bet, 'd' to zero a bet,
            'spacebar' to make a bet and 'q' to Cancel/cashout.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            <span className="font-semibold">Auto Bet</span> is available for
            players interested in using sophisticated betting strategies and who
            have a strong understanding of bankroll management. If enabled, this
            allows betting behaviour based on profit and loss performance for
            future rounds of Crash which can be set via Auto Bet options.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            Beyond setting the <span className="font-semibold">bet amount</span>{" "}
            and <span className="font-semibold">Cashout At</span> values like a
            manual bet, Auto Bet provides advanced betting options such as the{" "}
            <span className="font-semibold">Number of Bets</span> during Auto
            Bet, whether to <span className="font-semibold">Increase</span> or{" "}
            <span className="font-semibold">Reset</span> bet on Win or Loss, as
            well as the ability to <span className="font-semibold">Stop</span>{" "}
            on Profit or Loss after hitting a certain win amount overall.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            These betting options provide a variety of ways players can win big
            and grow their bankroll playing a fun game of chance like Crash on
            our casino platform.
          </p>
        </div>
        <div>
          <h1 className="text-white text-2xl font-semibold pb-3 cursor-default">
            How to Deposit for Crash on Listor.com
          </h1>
          <p className="text-[15px] pb-3 cursor-default">
            To deposit funds to your Listor.com account to play Crash or other
            crypto casino games available on our platform, please follow the
            steps listed below:
          </p>
          <ol class="ps-8 space-y-2 cursor-default">
            <li>
              <span class="font-semibold "> Step 1 –</span> Retrieve your
              deposit address, located in Wallet &#62; Deposit
            </li>
            <li>
              <span class="font-semibold list-outside">Step 2 –</span> Choose
              the method that suits your needs. Listor.com supports multiple
              currencies. Find the full list of{" "}
              <span className="font-semibold hover:text-white cursor-pointer">
                available local currencies
              </span>{" "}
              and{" "}
              <span className="font-semibold hover:text-white cursor-pointer">
                available cryptocurrencies
              </span>{" "}
              on Listor.com.
            </li>
            <li>
              <span class="font-semibold">Step 3 –</span> Use your deposit
              address as the ‘send to’ location for your wallet or exchange.
            </li>
            <li>
              <span class="font-semibold">Step 4 (Optional) –</span> If you wish
              to make a deposit via fiat currency, you can buy crypto for Listor
              via Moonpay.
            </li>
          </ol>
          <style jsx>{`
            ol {
              list-style-type: decimal;
            }

            li::marker {
              color: [#B1BAD3];
              font-weight: 600;
            }
          `}</style>
          <p className="text-[15px] pt-3 cursor-default">
            Listor.com offers live support to players via our{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              customer support staff
            </span>{" "}
            for help with issues regarding sports betting, online casino gaming
            and{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              depositing and withdrawing units
            </span>{" "}
            .
          </p>
          <p className="text-[15px] mt-3 cursor-default">
            If you're purchasing cryptocurrency, Moonpay supports multiple
            payment options, including Visa, Mastercard, Apple Pay, Google Pay,
            and others, to play casino games and place sports bets. For a full
            list of supported payment options, please refer to the
            <a className="items-center inline-flex font-semibold cursor-pointer hover:text-white group">
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
          <p className="text-[15px] mt-3 cursor-default">
            It's important to remember to only bet within your means and stay{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Listor Smart.
            </span>
          </p>
          <p className="text-[15px] mt-3 cursor-default">
            Use our{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              monthly budget calculator
            </span>{" "}
            to help monitor your spending habits and learn more tips about
            betting online with our{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              responsible gambling guide.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default CrashDiscription;
