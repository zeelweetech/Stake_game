import React from "react";
import DragonTowerGame from "../../../../assets/img/dragonGame.avif";
import { Link } from "react-router-dom";

const DragonTowerDiscription = () => {
  return (
    <>
      <div className="pt-3 xl:max-w-[52rem] md:w-full text-[#b1bad3]">
        <div className="md:flex block gap-5 space-y-2 md:space-y-0">
          <div className="flex justify-center items-center">
            <img
              className="rounded-md xl:max-w-36 lg:max-w-40 md:max-w-44 w-48 flex justify-center items-center"
              src={DragonTowerGame}
              alt="dragontowergame"
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
                Cascading
              </button>
              <button className="text-[12px] mt-2 font-bold bg-[#4d718768] px-2 py-0.5 rounded-2xl hover:text-white">
                Dragons
              </button>
              <button className="text-[12px] mt-2 font-bold bg-[#4d718768] px-2 py-0.5 rounded-2xl hover:text-white">
                Oriental
              </button>
              <button className="text-[12px] mt-2 font-bold bg-[#4d718768] px-2 py-0.5 rounded-2xl hover:text-white">
                <Link to={"/StackOriginals"}>Listor Originals</Link>
              </button>
            </div>
            <p className="text-[15px] py-4 cursor-default">
              Work your way up the Dragon Tower levels and reveal eggs along the
              way to earn some seriously big wins, in our exciting Listor
              Original online casino game!
            </p>
            <p className="text-[15px] pb-3 cursor-default">
              Find out how to play this{" "}
              <span className="font-semibold hover:text-white cursor-pointer">
                dragon-themed game
              </span>{" "}
              at the{" "}
              <Link
                to={"/casino/home"}
                className="hover:text-white font-semibold cursor-pointer"
              >
                Listor Casino{" "}
              </Link>{" "}
              today!
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pt-7 cursor-default">
            What is Dragon Tower?
          </h1>
          <p className="text-[15px] py-3 cursor-default">
            Dragon Tower is our very own{" "}
            <Link
              to={"/StackOriginals"}
              className="hover:text-white font-semibold cursor-pointer"
            >
              Listor Original{" "}
            </Link>{" "}
            casino game with an{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              oriental theme.
            </span>
            It’s an exciting game offering a super straightforward gameplay
            experience, giving you a chance to progress through the game while
            unlocking some big{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              multipliers
            </span>{" "}
            along the way.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            It’s one of a number of popular games by Listor, alongside the likes
            of{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Limbo
            </span>{" "}
            ,{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Mines
            </span>{" "}
            ,{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Crash
            </span>{" "}
            ,{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Keno
            </span>{" "}
            , and{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Wheel
            </span>{" "}
            , all of which are available to play at{" "}
            <Link to={"/"} className="text-white font-bold cursor-pointer">
              Listor.com.{" "}
            </Link>{" "}
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pb-3 cursor-default">
            How to Play Dragon Tower Online at Listor
          </h1>
          <p className="text-[15px] pb-3">
            The first thing to decide before playing Dragon Tower is how much
            you would like to bet per game, considering the permitted{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              betting limits.
            </span>
          </p>
          <p className="text-[15px] pb-2 cursor-default">
            The game is unique in many respects, and you can even set the level
            of difficulty for the gameplay, choosing easy, medium, hard, expert,
            or master.
          </p>
          <p className="text-[15px] py-3 cursor-default">
            The aim of the game is to guess which tiles in each row the dragon
            eggs will appear. If you guess correctly, you can earn an instant
            payout or move up to the next level, unlocking multipliers as you
            go.
          </p>
          <p className="text-[15px] py-3 cursor-default">
            You can pick the boxes yourself or activate the auto-pick feature to
            do it for you. This is a{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              provably fair game
            </span>{" "}
            with a unique gameplay experience.
          </p>
          <p className="text-[15px] py-3 cursor-default">
            Check out our ultimate{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              how to play Dragon Tower guide{" "}
            </span>{" "}
            on the{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Listor Blog
            </span>{" "}
            for a detailed guide of our best tips to play.
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pb-3 cursor-default">
            What are the Basic Rules of Dragon Tower?
          </h1>
          <p className="text-[15px] pb-3 cursor-default">
            Dragon Tower takes place across a grid with individual tiles. The
            size of the grid (linked to the game’s difficulty level) determines
            how many tiles are in play at any given time.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            As well as fewer boxes, the more advanced levels come with bigger
            multipliers that are added to your wins as you progress up the tower
            towards the dragon.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            Each time you click on a segment to reveal a dragon egg, you move up
            a level and unlock a higher multiplier. You are then given a chance
            to end the game.
          </p>
          <p className="text-[15px] py-3 cursor-default">
            If you proceed and fail to reveal a dragon egg with your next
            selection, you will lose the multiplier and return to zero.
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pb-3 cursor-default">
            Dragon Tower Playing Options, RTP & House Edge
          </h1>
          <p className="text-[15px] pb-3 cursor-default">
            Dragon Tower is a provably fair game with a unique gameplay
            experience. You can decide which difficulty level to play this game
            on – easy, medium, hard, expert, or master. After setting the
            difficulty level, you can choose how much to play each time you
            select a segment.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            Dragon Tower offers multipliers that increase each time you move up
            a line on the game grid. As mentioned, the higher the difficulty,
            the higher the multipliers offered.
          </p>
          <p className="text-[15px] py-3 cursor-default">
            This game has a theoretical return to player percentage of 98%,
            meaning that the Dragon Tower house edge is just 2%.
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pb-3">
            Dragon Tower Strategies & Tips
          </h1>
          <p className="text-[15px] pb-3 cursor-default">
            Dragon Tower is a social casino game that offers you the chance to
            set the difficulty level, giving you more control as you play.
            Before getting started, here are some tips and tricks to consider:
          </p>
          <ul className="list-disc pl-8 cursor-default">
            <li className="text-[15px] pb-2">
              Dragon Tower is a provably fair game of luck, and strategy will
              only take you so far. Be mindful that you can win and lose in this
              game in equal measure.
            </li>
            <li className="text-[15px] pb-2 cursor-default">
              Study the game rules and understand the difficulty levels before
              placing your bets.
            </li>
            <li className="text-[15px] pb-2 cursor-default">
              The cash-out option is the most important feature in Dragon Tower
              – deciding when to cash out and when to go for the next multiplier
              is hugely important and can make or break your strategy.
            </li>
            <li className="text-[15px] pb-2 cursor-default">
              Read through our{" "}
              <span className="font-semibold hover:text-white cursor-pointer">
                online casino betting guide
              </span>{" "}
              if you’re new to Listor Original, as it provides some useful
              information to inform your betting strategy.
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pb-3 cursor-default">
            How to Deposit Funds to Play Slots Online & Bet Responsibly
          </h1>
          <p className="text-[15px] pb-3 cursor-default">
            You can play Dragon Tower at Listor online casino by depositing in a
            local fiat currency or via cryptocurrencies.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            You can also browse through our extensive game library and keep up
            to date with our wide range of newest releases for more exciting
            online games to add to your favorites
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            Right now, you can play at Listor.com with the following local
            currencies{" "}
            <span className="font-semibold cursor-default">
              – ARS, CLP, BRL, JPY, INR, and PEN.
            </span>{" "}
            Depending on your preferences, you can also view your balance in
            numerous other currencies too. You can find more information about
            our
            <a className="items-center inline-flex font-semibold cursor-pointer hover:text-white group">
              local currency options{" "}
              <svg
                className="h-4 w-4 text-[#B1BAD3] group-hover:text-white mb-1.5"
                viewBox="0 0 64 64"
                fill="currentColor"
              >
                <path d="M10.823 53.176h42.353V39.941h7.059v20.294H3.765V3.765h20.293v7.058H10.823v42.353Zm28.236-42.353V3.765h21.176V24.94h-7.059v-9.123L27.88 41.115l-4.994-4.995 25.297-25.296H39.06Z" />
              </svg>
            </a>
            <span className="cursor-default">
              {" "}
              on our community forum, as well as our
            </span>
            <span className="font-semibold hover:text-white cursor-pointer">
              local currency payment guide.
            </span>
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            To play Dragon Tower with crypto, you can easily deposit crypto
            units into your account using coins like BTC, ETH, Doge, and LTC.
            You can find the full{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              list of available cryptocurrencies
            </span>{" "}
            on our blog, as well as our recommendations and{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              guide for choosing the right
            </span>{" "}
            coin for you.
          </p>
          <p className="text-[15px] pb-3 cursor-default ">
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
            to enjoy Dragon Tower. For a full list of supported payment options,
            please refer to the
            <a className="items-center inline-flex ml-0.5 font-semibold cursor-pointer hover:text-white group">
              Moonpay documentation
              <svg
                className="ml-2 h-4 w-4 text-[#B1BAD3] group-hover:text-white mb-1.5"
                viewBox="0 0 64 64"
                fill="currentColor"
              >
                <path d="M10.823 53.176h42.353V39.941h7.059v20.294H3.765V3.765h20.293v7.058H10.823v42.353Zm28.236-42.353V3.765h21.176V24.94h-7.059v-9.123L27.88 41.115l-4.994-4.995 25.297-25.296H39.06Z" />
              </svg>
            </a>{" "}
            .
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            Learn how to use the{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Listor Vault
            </span>{" "}
            to securely store your funds online for all future gameplay at Listor
            Casino. You can also read our{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              crypto security guide
            </span>{" "}
            to learn more about keeping your funds safe and secure at Listor.com.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            Please always remember to bet within your means and{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              gamble responsibly
            </span>{" "}
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
            Other Popular Casino Games & Listor Originals
          </h1>
          <p className="text-[15px] pb-3 cursor-default">
            If you have enjoyed the gameplay in Dragon Tower, you can check out
            other popular Listor Original games that are loved by online casino
            players worldwide, including{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Slide
            </span>{" "}
            ,{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Plinko
            </span>{" "}
            ,{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Limbo
            </span>{" "}
            ,{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Mines
            </span>{" "}
            ,{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Crash
            </span>{" "}
            ,{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Keno
            </span>{" "}
            !
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            You can also browse through our extensive game library that includes
            our{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              best slots
            </span>{" "}
            ,{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              cards
            </span>{" "}
            , and{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              table games
            </span>{" "}
            for more unrivalled casino gaming online.
          </p>
          <p className="text-[15px] py-3 cursor-default">
            Don’t forget to check out our{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              promos page
            </span>{" "}
            for added win potential. Enter{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Listor’s Weekly Raffle
            </span>{" "}
            for random mega wins, or,{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Conquer the Casino
            </span>{" "}
            and play to win a share of $50,000!
          </p>
          <p className="text-[15px] pt-3 cursor-default">
            If you haven’t already joined the{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Listor VIP Club
            </span>{" "}
            , read up on how to join this exclusive club on our blog, our{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              FAQs
            </span>
            page and discover how you could earn{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              members-only rewards
            </span>{" "}
            such as having your very own{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              dedicated VIP Host
            </span>{" "}
            and bonuses like{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              rakeback
            </span>{" "}
            and{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              reloads.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default DragonTowerDiscription;
