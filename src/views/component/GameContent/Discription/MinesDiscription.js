import React from "react";
import MinesGame from "../../../../assets/img/minesGame.avif";
// import plinkoGame from "../../../../assets/img/plinkoGame.jpeg";
import { Link } from "react-router-dom";

const MinesDiscription = () => {
  return (
    <>
      <div className="py-3 xl:max-w-[52rem] md:w-full text-[#b1bad3]">
        <div className="md:flex block gap-5 space-y-2 md:space-y-0">
          <div className="flex justify-center items-center">
            <img
              className="rounded-md xl:max-w-36 lg:max-w-40 md:max-w-44 w-48 flex justify-center items-center"
              src={MinesGame}
              alt="minesGame"
            />
          </div>
          <div>
            <button className="text-[12px] text-white bg-[#4d718768] px-2 py-0.5 rounded-2xl cursor-default font-bold">
              <span className="text-[12px] font-bold text-[#B2BAD3]">
                Edge:
              </span>{" "}
              1.00%
            </button>
            <div>
              <div className="flex items-center space-x-2">
                <button className="text-[12px] mt-2 font-bold bg-[#4d718768] px-2 py-0.5 rounded-2xl hover:text-white">
                  Mines
                </button>
                <button className="text-[12px] mt-2 font-bold bg-[#4d718768] px-2 py-0.5 rounded-2xl hover:text-white">
                  <Link to={"/StackOriginals"}>Listor Originals</Link>
                </button>
                <button className="text-[12px] mt-2 font-bold bg-[#4d718768] px-2 py-0.5 rounded-2xl hover:text-white">
                  Volatility Switch
                </button>
              </div>
            </div>
            <p className="text-[15px] py-4 cursor-default">
              Join in on the Mines fever with one of our most popular and
              beloved games! Inspired by the classic Minesweeper, Mines will
              simply reveal the gems and avoid the bombs to increase your payout
              multiplier.
            </p>
            <p className="text-[15px] pb-3 cursor-default">
              <span className="font-semibold"> Mines</span> is a grid-based
              gambling game of chance developed by Listor where players navigate
              the grid to reveal gems while avoiding bombs! This Mines betting
              game is played on a 5x5 grid in which players can flip the tiles
              over to show either a gem or bomb.
            </p>
          </div>
        </div>
        <div>
          <p className="text-[15px] py-3 cursor-default">
            Revealing gems increases payout multipliers and allows players to
            continue playing - choosing to pick additional tiles, a random tile
            or cash out. Revealing a bomb ends the round with the wager lost.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            With the freedom to adjust the number of mines, autobet and cash out
            at any point of the game, the gambling experience offered by Mines
            is second to none at any{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              online casino
            </span>{" "}
            !
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pb-3 cursor-default">
            Mines Gameplay
          </h1>
          <p className="text-[15px] pb-3 cursor-default">
            Players set their bet amount to play with during a round of Mines as
            well as the number of mines that exists in the field of play,
            ranging between 1-24. There are 25 tiles where gems and mines can be
            distributed.
          </p>
          <p className="text-[15px] pb-2 cursor-default">
            The gameplay resembles the beloved Minesweeper game, with the
            placement of mines and gems being random and betting mechanics
            included for any fiat, Bitcoin and other cryptocurrencies.
          </p>
          <h5 className="text-white font-bold pb-3 cursor-default">
            Modifying the Number of Mines
          </h5>
          <p className="text-[15px] pb-3 cursor-default">
            The number of mines set affects to multiplier paid out to players
            and controls the volatility of the gameplay. More mines in play lead
            to more opportunities for a round to end, but also leads to exciting
            gameplay and higher payouts.
          </p>
          <p className="text-[15px] pb-2 cursor-default">
            The choice of setting the mines amount reflects the player's
            appetite for risk and the level of risk they are willing to burden
            in pursuit of profit and big payouts.
          </p>
          <p className="text-[15px] py-3 cursor-default">
            Once the bet amount and number of mines have been set, players can
            click any number of tiles during the betting round to reveal their
            contents. Hitting a mine will end the round. However, if a player
            continues to collect gems they can continue to play.
          </p>
          <h5 className="text-white font-bold pb-3 cursor-default">
            Cashout or Keep Mining
          </h5>
          <p className="text-[15px] pb-3 cursor-default">
            During the phase where players have collected gems and have not
            tripped any mines yet, the interface is modified and they are
            informed of the 'Profit on Next Tile' and 'Total Profit' in the
            current round.
          </p>
          <p className="text-[15px] pb-2 cursor-default">
            This helps players evaluate risk and best decide what is the best
            course of action - collect winnings or keep going!
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pb-3 cursor-default">
            Bet Local Currency & Crypto on Mines
          </h1>
          <p className="text-[15px] pb-3 cursor-default">
            Players can bet{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Bitcoin
            </span>{" "}
            on Mines or use their{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              choice of other available cryptocurrencies
            </span>{" "}
            for placing wagers on the Listor casino.
          </p>
          <p className="text-[15px] pb-3 cursor-default ">
            You can also play at Listor.com with the following local currencies{" "}
            <span className="font-semibold cursor-default">
              – ARS, CLP, BRL, JPY, INR, and PEN.
            </span>{" "}
            Depending on your preferences, you can also view your balance in
            numerous other currencies too. Find more information about our
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
              local currency payment guide.
            </span>{" "}
            .
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            During a betting round of Mines, players can set their desired bet
            amount for the individual round.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            Auto betting options are available which include the bet amount per
            round, number of mines, number of bets and options to stop on
            profit, stop on loss and adjust bet amount based on a win or a loss.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            As Mines is a game of random chance, with an element of human
            control in picking the tile and the ability to cash out, it is a
            popular option for advanced betting strategies which is
            <a className="items-center inline-flex ml-1 font-semibold cursor-pointer hover:text-white group">
              shared within the Listor community
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
            With a 99% Return to Player (RTP) and a 1% House Edge, Mines is one
            of the fairest gambling games online. As with all other Listor
            Originals, Mines is a '
            <span className="font-semibold hover:text-white cursor-pointer">
              Provably Fair Game
            </span>{" "}
            ' and provides one of the safest, secure and trustworthy betting
            experiences available online.
          </p>
          <h5 className="text-white font-bold pb-3 cursor-default">
            Cashout or Keep Mining
          </h5>
          <p className="text-[15px] pb-3 cursor-default">
            To deposit funds to your{" "}
            <Link
              to={"/"}
              className=" ml-1 text-white font-bold cursor-pointer "
            >
              Listor.com{" "}
            </Link>{" "}
            account to play Mines on our platform, please follow the steps
            listed below:
          </p>
          <ol class="ps-8 space-y-2 cursor-default">
            <li>
              <span class="font-semibold "> Step 1 –</span> Retrieve your
              deposit address, located in Wallet &#62; Deposit.
            </li>
            <li>
              <span class="font-semibold list-outside">Step 2 –</span> Choose
              the method which suits your needs. We offer many supported
              currencies including local currencies, Bitcoin (BTC), Ethereum
              (ETH), Dogecoin (Doge), Litecoin (LTC) and more.
            </li>
            <li>
              <span class="font-semibold">Step 3 –</span> Use your deposit
              address as the 'Send to' location for your wallet or exchange.
            </li>
            <li>
              <span class="font-semibold">Step 4 (Optional) –</span> If
              you need to make a deposit via fiat currency, you can buy crypto
              for Listor via Moonpay.
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
          <p className="text-[15px] mt-3 cursor-default">
            Listor provides live support and assistance from our customer
            support staff - whether it has to do with account deposits or
            accessing your favourite casino games, we will help you out!
          </p>
          <p className="text-[15px] mt-3 cursor-default">
            Moonpay has{" "}
            <a className="items-center inline-flex ml-0.5 font-semibold cursor-pointer hover:text-white group">
              many supported payment options
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
              ncluding Visa, MasterCard, Apple Pay, Google Pay and more to
              deposit cryptocurrency for online casino games and more. For a
              full list of supported payment options in your market, please
              refer to the Moonpay documentation.
            </span>
          </p>
          <p className="text-[15px] mt-3 cursor-default">
            Be sure to check out other popular Listor Original casino games like
            <span className="font-bold hover:text-white cursor-pointer">
              {" "}
              Plinko
            </span>{" "}
            ,{" "}
            <span className="font-bold hover:text-white cursor-pointer">
              {" "}
              Dragon Tower
            </span>{" "}
            ,{" "}
            <span className="font-bold hover:text-white cursor-pointer">
              Keno
            </span>{" "}
            , Video Poker and many more!
          </p>
          <p className="text-[15px] mt-3 cursor-default">
            It's important to remember to only bet within your means and stay{" "}
            <span className="font-bold hover:text-white cursor-pointer">
              Listor Smart
            </span>
            . Use our{" "}
            <span className="font-bold hover:text-white cursor-pointer">
              monthly budget calculator{" "}
            </span>
            to help monitor your spending habits and learn more tips about
            betting online with our{" "}
            <span className="font-bold hover:text-white cursor-pointer">
              responsible gambling guide.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default MinesDiscription;
