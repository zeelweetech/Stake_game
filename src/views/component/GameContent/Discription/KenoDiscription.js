import React from "react";
import KenoGame from "../../../../assets/img/KenoGame.avif";
import { Link } from "react-router-dom";

const KenoDiscription = () => {
  return (
    <>
      <div className="pt-3 xl:max-w-[52rem] md:w-full min-h-screen text-[#b1bad3]">
        <div className="md:flex block gap-5 space-y-2 md:space-y-0">
          <div className="flex justify-center items-center">
            <img
              className="rounded-md xl:max-w-36 lg:max-w-40 md:max-w-44 w-48 flex justify-center items-center"
              src={KenoGame}
              alt="kenoGame"
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
                Video Bingo
              </button>
            </div>
            <p className="text-[15px] py-2 cursor-default">
              Enjoy the best fast-paced online keno game at{" "}
              <span className="font-semibold hover:text-white cursor-pointer">
                Listor Casino
              </span>{" "}
              , that's easy to play and fun to win!
            </p>
            <p className="text-[15px] py-1 cursor-default">
              Keno is a game of chance, similar to the lottery and{" "}
              <span className="font-semibold hover:text-white cursor-pointer">
                bingo
              </span>{" "}
              , and extremely popular amongst modern casinos. In traditional
              keno, you can choose 10-20 numbers ranging from 1-80. After making
              your selection and placing your bets, 20 numbers are randomly
              drawn, and if you’ve picked correctly, you will receive your
              winnings based on the associated pay table.
            </p>
          </div>
        </div>
        <div>
          <p className="text-[15px] pt-2 cursor-default">
            The game has its roots in ancient China but has become one of the
            most popular games today at online and brick-and-mortar casinos.
            Although traditional keno is still extremely popular, many keno
            variations, such as our Listor Original, is additional fun for
            players!
          </p>
          <p className="text-[15px] py-3 cursor-default">
            You can play keno online at Listor Casino, and thanks to our
            effortless deposit process, you can start playing in no time.
          </p>
          <p className="text-[15px] cursor-default">
            So, if you’re keen to enjoy a straightforward yet super engaging
            online game, read on to find out what you need to get started. Delve
            even deeper with our comprehensive guide on{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              how to play keno
            </span>{" "}
            .
          </p>
          <h1 className="text-white text-2xl font-semibold pt-4 cursor-default">
            History of Keno Casino Games
          </h1>
          <p className="text-[15px] py-3 cursor-default">
            It’s thought that the game of keno that we know and love today
            originated in China, even though the word “keno” has Latin roots. In
            China, the game has a legendary origin story.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            It’s said that the invention of keno saved an ancient Chinese city
            from destruction at a time of war, and the game's popularity in the
            years that followed helped to fund the Great Wall of China.
          </p>
          <p className="text-[15px] pb-3">
            However, it wasn’t until the nineteenth century that keno, in the
            form of a lottery, became widely accepted throughout Chinese
            society.
          </p>
          <p className="text-[15px] pb-3">
            In 1847, the Portuguese government of Macau granted a license to
            lottery operators for the first time. Throughout the rest of the
            century, keno became an important part of Chinese culture and
            tradition.
          </p>
          <p className="text-[15px] pb-3">
            In rural China, results of keno draws were sent to villages via
            carrier pigeons, resulting in the game becoming known as “white dove
            tickets” and “pigeon tickets” in certain Chinese regions.
          </p>
          <p className="text-[15px] pb-3">
            Toward the end of the 19th century, the Chinese established a
            sophisticated keno system. The game used printed sheets of Chinese
            characters, typically the first eighty of the Thousand Character
            Classic.
          </p>
          <p className="text-[15px] pb-3">
            The first known introduction of keno outside of China was thought to
            be in Houston, Texas. The game was taken by Chinese immigrants -
            commissioned to work on constructing the first transcontinental
            railroad - to the state of Texas. It was initially known as “boc hop
            bu” in the United States, which was a westernisation of the
            Cantonese name of the game, translated to pigeon tickets.
          </p>
          <p className="text-[15px] pb-3">
            However, by 1870, the Chinese lottery game had a new American name –
            keno. It quickly spread to other states and cities in the United
            States, and the rest, as they say, is history.
          </p>
        </div>
        <div>
          <h1 className="text-white text-2xl font-bold pb-3">
            Traditional Keno Games
          </h1>
          <p className="text-[15px] pb-3 cursor-default">
            In many respects, keno is one of the simplest games you can play at{" "}
            <Link to={"/"} className="text-white font-bold cursor-pointer">
              Listor.com{" "}
            </Link>
            .In traditional games, your job is to select the number of
            consecutive draws (10-20 numbers) on a sheet of paper, ranging from
            1-80. In this regard, it’s similar to bingo and lottery games.
          </p>
          <p className="text-[15px] pb-2 cursor-default">
            When the balls are drawn, you receive a payout depending on how many
            numbers you select accurately. Traditionally, keno is played with a
            ball machine with imprinted with numbers, which are entered into a
            transparent container, where they are spun and drawn.
          </p>
          <p className="text-[15px] py-3 cursor-default">
            Ultimately, the more consecutive numbers you match on your keno
            card, the bigger your payout. One thing to note about keno is that
            the payouts in a single game will differ from platform to platform,
            so it’s important to check the paytable before placing a bet, so you
            know what you can win by making accurate selections.
          </p>
          <p className="text-[15px] py-3 cursor-default">
            Traditional keno games are extremely straightforward and have been
            popular for generations. But thanks to technological advancements
            and the prominence of online gaming, keno games today have many
            attractive features, as explained below.
          </p>
        </div>
        <div>
          <h1 className="text-white text-2xl font-semibold pb-3 cursor-default">
            How to Play Keno Game Online
          </h1>
          <p className="text-[15px] pb-3 cursor-default">
            As is the case with online slots and table games , online keno is
            extremely popular today. In online keno, the structure and
            objectives of the game remain the same.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            The main difference is that online keno games rely on a
            <span className="font-semibold hover:text-white cursor-pointer">
              {" "}
              random number generator (RNG)
            </span>{" "}
            to reveal the winning numbers instead of a draw, which is the case
            in traditional keno.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            Another significant benefit of online keno games is that they
            typically comprise excellent graphics and are sometimes themed,
            making things more aesthetically pleasing and engaging for players.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            One of the best things about online keno is that you can play
            wherever you are, and you don’t need to wait for carrier pigeons to
            bring you the results! Instead, you can easily make your selections
            at the Listor Casino and learn how much you stand to win within
            seconds, with keno bonus offers and casino promotions available at
            Listor.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            Before playing keno online, remember that it’s a game of luck. It’s
            not like certain card games that incorporate an element of skill and
            strategy, as the result of keno is based on a random number
            generator. However, there are still tips and tricks that can be
            incorporated, especially when playing the free demo game !
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            Once you've had a go at our exciting keno game, play around with
            more Listor Original casino games online, including{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Limbo
            </span>{" "}
            ,{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Plinko
            </span>{" "}
            ,{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Mines
            </span>{" "}
            , and{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Crash
            </span>{" "}
            !
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            Also check out our range of{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              video bingo games
            </span>{" "}
            , and learn more with our{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              guide to playing casino bingo
            </span>{" "}
            .
          </p>
        </div>
        <div>
          <h1 className="text-white text-2xl font-semibold pb-3 cursor-default">
            Variations of Keno Games
          </h1>
          <p className="text-[15px] pb-3 cursor-default">
            You might come across several variations of keno online, so it’s
            important to be aware of them. Some of the variations include:
          </p>
          <ul className="list-disc pl-8 cursor-default">
            <li className="text-[15px] pb-2">
              Power keno: The main feature of power keno is that you win a 4x
              multiplier if the last ball drawn in the game is one of your
              picks.
            </li>
            <li className="text-[15px] pb-2">
              Mini keno: Most mini keno games draw ten balls from 40 as opposed
              to 20 from 80, as is usually the case in keno.
            </li>
            <li className="text-[15px] pb-2">
              Way ticket keno: This game version allows you to play multiple
              keno games on a single ticket, similar to buying additional lines
              on a real-life lottery ticket.
            </li>
            <li className="text-[15px] pb-2">
              Progressive jackpot keno: To qualify for a progressive jackpot in
              keno, you typically have to place a side bet – but this will be
              more than worth it if you can land the six or seven-figure
              jackpot!
            </li>
            <li className="text-[15px] pb-2">
              Bonus spot keno: In bonus spot keno, the most important ball is
              the first that is drawn, awarding a multiplier of between 4x and
              10x if it’s a ball that you have selected.
            </li>
            <li className="text-[15px] pb-2">
              Live dealer keno: As with live casino games, you can find live
              dealer keno at some online casinos, a game with balls drawn by a
              real-life dealer, as opposed to RNG.
            </li>
          </ul>
          <p className="text-[15px] pb-3 cursor-default">
            You can discover similar lottery-style and chance games in our{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              guide to the best online lottery games on Listor!
            </span>
          </p>
        </div>
        <div>
          <h1 className="text-white text-2xl font-bold pb-3 cursor-default">
            Tips for Playing Keno Games Online
          </h1>
          <p className="text-[15px] pb-3">
            So, now that you know about the history of keno and the available
            games, how should you play this legendary game? Here are some keno
            tips to help you get started:
          </p>
          <ul className="list-disc pl-8">
            <li className="text-[15px] pb-2">
              Always check the pay table: Before playing keno online, you should
              always check the pay table, as different games offer different
              payouts and potential winnings.
            </li>
            <li className="text-[15px] pb-2">
              Know your limits: Due to the pace of keno, it can be easy to get
              carried away when playing online. Make sure you know your limits,
              stay Listor Smart and call it a time when you’ve played with your
              set amount. We've developed a budget calculato r and responsible
              gaming resources to help you stay in control.
            </li>
            <li className="text-[15px] pb-2">
              Play at a trusted online casino: When playing online keno, be sure
              to play at a trusted online casino like Listor.com to ensure a
              seamless online gaming experience. Check out our online casino
              guide to learn what to look out for.
            </li>
            <li className="text-[15px] pb-2">
              Remember that the game is random: It can be tempting to try and
              strategise keno, but the outcomes are entirely unexpected as it is
              a game of chance. So, have fun and don’t worry too much about
              trying to find an edge.
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-white text-2xl font-semibold pb-3 cursor-default">
            How to Make a Deposit to Play Keno Online
          </h1>
          <p className="text-[15px] pb-3 cursor-default">
            Playing keno online for local currencies,{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Bitcoin
            </span>{" "}
            or{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              other available cryptocurrencies
            </span>{" "}
            is easy on the Listor casino. You can deposit funds into your
            Listor.com account by following these simple steps listed below:
          </p>
          <ol class="ps-8 space-y-2 cursor-default">
            <li>
              <span className="font-semibold "> Step 1 –</span> Retrieve your
              deposit address, located in Wallet {">"} Deposit.
            </li>
            <li>
              <span className="font-semibold "> Step 2 –</span> You can also
              Choose the method which suits your needs. We offer many supported
              currencies including Bitcoin (BTC), Ethereum (ETH), Dogecoin
              (Doge) and many more. You can find more information about our
              <a className="items-center inline-flex ml-0.5 font-semibold cursor-pointer hover:text-white group">
                local currency options
                <svg
                  className="h-4 w-4 ml-1 text-[#B1BAD3] group-hover:text-white"
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
            </li>
            <li>
              <span class="font-semibold">Step 3 –</span> Use your deposit
              address as the 'Send to' location for your wallet or exchange.
            </li>
            <li>
              <span class="font-semibold">Step 4 (Optional) –</span> If you need
              to deposit fiat currency, you can buy crypto for Listor via
              <a className="items-center inline-flex ml-0.5 font-semibold cursor-pointer hover:text-white group">
                Moonpay{" "}
                <svg
                  className="ml-1 h-4 w-4 text-[#B1BAD3] group-hover:text-white"
                  viewBox="0 0 64 64"
                  fill="currentColor"
                >
                  <path d="M10.823 53.176h42.353V39.941h7.059v20.294H3.765V3.765h20.293v7.058H10.823v42.353Zm28.236-42.353V3.765h21.176V24.94h-7.059v-9.123L27.88 41.115l-4.994-4.995 25.297-25.296H39.06Z" />
                </svg>
              </a>{" "}
              .
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
            The best way to enjoy Listor Original games is with a bankroll boost.
            You can access thecurrent promotions to play these games including{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              daily races{" "}
            </span>{" "}
            ,
            <span className="font-semibold hover:text-white cursor-pointer">
              weekly raffles{" "}
            </span>
            , and{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Drops and Wins
            </span>{" "}
            to keep your bankroll full.
          </p>
          <p className="text-[15px] pt-3 cursor-default">
            We also invite you to learn more about the{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              exclusive rewards{" "}
            </span>
            available via the{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Listor VIP Club{" "}
            </span>
            to access great value promotions and offers as you play. Check out
            our{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Listor VIP Club FAQs
            </span>{" "}
            for more information and discover how you could earn members-only
            rewards such as a{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              dedicated VIP Host
            </span>{" "}
            ,{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              rakeback
            </span>{" "}
            and{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              reload bonuses!
            </span>
          </p>
          <p className="text-[15px] pt-3 cursor-default">
            Listor provides information on our{" "}
            <a className="items-center inline-flex ml-0.5 font-semibold cursor-pointer hover:text-white group">
              help center
              <svg
                className="ml-1 h-4 w-4 text-[#B1BAD3] group-hover:text-white mb-1.5"
                viewBox="0 0 64 64"
                fill="currentColor"
              >
                <path d="M10.823 53.176h42.353V39.941h7.059v20.294H3.765V3.765h20.293v7.058H10.823v42.353Zm28.236-42.353V3.765h21.176V24.94h-7.059v-9.123L27.88 41.115l-4.994-4.995 25.297-25.296H39.06Z" />
              </svg>
            </a>
            <span className="ml-1">
              as well as{" "}
              <span className="font-semibold hover:text-white cursor-pointer">
                live support and assistance
              </span>{" "}
              from our support staff - whether it has to do with account
              deposits or slots game access, we are here to help!
            </span>{" "}
          </p>
          <p className="text-[15px] pt-3 cursor-default">
            The customer support team at Listor are available to troubleshoot
            issues with game providers, online deposits, withdrawals, bonuses,
            gambling safety, self-exclusion and provide quality customer service
            for casino players.
          </p>
        </div>
      </div>
    </>
  );
};

export default KenoDiscription;
