import React from "react";
import plinkoGame from "../../../../assets/img/plinkoGame.jpeg";
import { Link } from "react-router-dom";

const PlinkoDiscription = () => {
  return (
    <>
      <div className="py-3 xl:max-w-[58rem] md:w-full min-h-screen text-[#B1BAD3]">
        <div className="md:flex block gap-5 space-y-2 md:space-y-0">
          <div className="flex justify-center items-center">
            <img
              className="rounded-md xl:max-w-36 lg:max-w-40 md:max-w-44 w-48 flex justify-center items-center"
              src={plinkoGame}
              alt="plinkogame"
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
                  Pachinko
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
              Plinko lets players drop a ball from the top of our triangular pin
              pyramid to find the winning route down to a corresponding
              multiplier.
            </p>
            <p className="text-[15px] pb-3 cursor-default">
              Inspired by the Japanese mechanical game known as Pachinko, Plinko
              provides players with the ability to customise your risk factor
              and multipliers ensuring this Listor Original game is suited for
              everyone at our{" "}
              <span className="font-semibold text-white cursor-pointer">
                online casino
              </span>{" "}
              !
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pt-7 cursor-default">
            How to Play Plinko
          </h1>
          <p className="text-[15px] py-3 cursor-default">
            Plinko is a classic game of chance where the player drops a ball in
            a multi-row pin pyramid, with the ball bouncing between pins in a
            random route until it reaches a destination at the bottom of the
            pyramid.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            The location of where the ball lands determine the payout, with
            large payouts towards the edges of the pin pyramid whilst the centre
            of the pyramid provides lower payouts and losses.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            The strategy to succeed in Plinko is all about bankroll control and
            surviving the lows until variance turns in your favour. As a
            <span className="font-semibold hover:text-white cursor-pointer">
              {" "}
              volatility switch
            </span>{" "}
            game, Plinko is designed to provide the player gameplay options to
            control the risk and payouts of the game. These Plinko gameplay
            options are:
          </p>
          <ul className="list-disc pl-8 cursor-default">
            <li className="text-[15px] pb-2">
              <span className="font-semibold"> Risk Level:</span> Control the
              volatility and risk - available in 3 risk levels: Low, Medium &
              High.
            </li>
            <li className="text-[15px] pb-2">
              <span className="font-semibold"> Rows:</span> Players can select
              between 8 to 16 rows for the pin pyramid, fundamentally altering
              the mechanics of the game itself. More rows mean more pins that
              can change the trajectory of the ball.
            </li>
          </ul>
          <p className="text-[15px] pb-3 cursor-default">
            Further reading into{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              how to play Plinko on Listor
            </span>{" "}
            is available on our blog.
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold py-3 cursor-default">
            Why Betting Plinko Online is Safe and Fair on Listor.com
          </h1>
          <p className="text-[15px] pb-3 cursor-default">
            As a{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              {" "}
              Listor Original
            </span>{" "}
            game, Plinko is a provably fair game in which results are generated
            <span className="font-semibold hover:text-white cursor-pointer">
              {" "}
              using a provably fair system{" "}
            </span>
            . Having provably fair outcomes which are verifiable helps allow
            players to confidently bet on games of Plinko online to ensure the
            outcome of games is truly random and based on chance.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            Plinko on Listor has a House Edge of 1%, ensuring a strong Return to
            Player (RTP) for a strong bankroll management game of chance like
            Plinko.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            In addition to the verifiable fairness of results, Listor also
            offers advanced betting features to allow players to manage the
            scale of betting for games like Plinko. These include:
          </p>
          <ul className="list-disc pl-8 cursor-default">
            <li className="text-[15px] pb-2">
              <span className="font-semibold">Autoplay:</span> To ease the use
              of mouse clicks for gameplay, Plinko allows users to autoplay -
              setting the 'number of games', which allows the number of balls
              played in Plinko to target specific wins for an amount.
            </li>
            <li className="text-[15px] pb-2">
              <span className="font-semibold"> Hotkeys:</span> Speeds up manual
              playing and reduce mouse usage by using hotkeys available in-game.
              For example, Spacebar allows you to drop balls as fast as possible
              and maximizes the number of plays over time.
            </li>
            <li className="text-[15px] pb-2">
              <span className="font-semibold">Instant Play:</span> Speeds up
              gameplay for faster action - with animations on the game is faster
              whilst with animations off makes gameplay truly instantaneous.
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold py-3 cursor-default">
            Betting Sizes
          </h1>
          <p className="text-[15px] pb-3 cursor-default">
            During each round of Plinko betting, the ball is dropped into the
            gameplay area, bouncing on pins until it hits the destination
            (pocket) with the payout. Changing the risk level increases the
            volatility of payouts, whilst changing the number of rows increases
            the number of payout destinations.
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold py-3 cursor-default">
            Low-Risk Betting Options
          </h1>
          <p className="text-[15px] pb-3 cursor-default">
            For players looking to minimise volatility while playing Plinko, the
            table below provides a comprehensive overview of low-risk betting
            options. These options help manage your bankroll while offering a
            more consistent gaming experience:
          </p>
          <table className="cursor-default">
            <tr>
              <th>Risk/Pins</th>
              <th># of Destinations</th>
              <th>Min Win</th>
              <th>Max Win</th>
            </tr>
            <tr>
              <td>Low/8</td>
              <td>9</td>
              <td>0.5</td>
              <td>5.6</td>
            </tr>
            <tr>
              <td>Low/9</td>
              <td>10</td>
              <td>0.7</td>
              <td>5.6</td>
            </tr>
            <tr>
              <td>Low/10</td>
              <td>11</td>
              <td>0.5</td>
              <td>8.9</td>
            </tr>
            <tr>
              <td>Low/11</td>
              <td>12</td>
              <td>0.7</td>
              <td>8.4</td>
            </tr>
            <tr>
              <td>Low/12</td>
              <td>13</td>
              <td>0.5</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Low/13</td>
              <td>14</td>
              <td>0.7</td>
              <td>8.1</td>
            </tr>
            <tr>
              <td>Low/14</td>
              <td>15</td>
              <td>0.5</td>
              <td>7.1</td>
            </tr>
            <tr>
              <td>Low/15</td>
              <td>16</td>
              <td>0.7</td>
              <td>15</td>
            </tr>
            <tr>
              <td>Low/16</td>
              <td>17</td>
              <td>0.5</td>
              <td>16</td>
            </tr>
          </table>
          <p className="text-[15px] py-3 cursor-default">
            By choosing from the low-risk betting options above, players can
            still enjoy the excitement of Plinko while minimizing the impact of
            losing rounds.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            This can be an appealing strategy for those who prefer a more
            conservative approach to their gameplay or are just starting out
            playing Plinko online for the first time.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            The maximum payout of low-risk Plinko is 16x the wager, with two
            payout destinations for the ball to land one with a 0.0015% to land
            for each!
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold py-3 cursor-default">
            Medium-Risk Betting Options
          </h1>
          <p className="text-[15px] pb-3 cursor-default">
            The medium-risk betting options offer a suitable choice for players
            seeking a balance between risk and reward. These options provide an
            opportunity for greater payouts while still maintaining a manageable
            level of risk:
          </p>
          <table className="cursor-default">
            <tr>
              <th>Risk/Pins</th>
              <th># of Destinations</th>
              <th>Min Win</th>
              <th>Max Win</th>
            </tr>
            <tr>
              <td>Low/8</td>
              <td>9</td>
              <td>0.4</td>
              <td>13</td>
            </tr>
            <tr>
              <td>Low/9</td>
              <td>10</td>
              <td>0.5</td>
              <td>18</td>
            </tr>
            <tr>
              <td>Low/10</td>
              <td>11</td>
              <td>0.4</td>
              <td>22</td>
            </tr>
            <tr>
              <td>Low/11</td>
              <td>12</td>
              <td>0.5</td>
              <td>24</td>
            </tr>
            <tr>
              <td>Low/12</td>
              <td>13</td>
              <td>0.3</td>
              <td>33</td>
            </tr>
            <tr>
              <td>Low/13</td>
              <td>14</td>
              <td>0.4</td>
              <td>43</td>
            </tr>
            <tr>
              <td>Low/14</td>
              <td>15</td>
              <td>0.2</td>
              <td>58</td>
            </tr>
            <tr>
              <td>Low/15</td>
              <td>16</td>
              <td>0.3</td>
              <td>88</td>
            </tr>
            <tr>
              <td>Low/16</td>
              <td>17</td>
              <td>0.3</td>
              <td>110</td>
            </tr>
          </table>
          <p className="text-[15px] py-3 cursor-default">
            By opting for medium risk betting options, players can enjoy the
            thrill of Plinko with the potential for higher payouts compared to
            low risk options, while still keeping an acceptable level of risk.
            This strategy can be enticing for those who are comfortable taking
            on slightly more risk for the chance of bigger wins.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            The maximum payout of medium-risk Plinko is 110x the wager, with two
            payout destinations for the ball to land one with a 0.0015% to land
            for each! The added risk means a lower payout for losing rounds and
            more sub 1.0 payout destinations on boards with more pins.
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold py-3 cursor-default">
            High-Risk Betting Options
          </h1>
          <p className="text-[15px] pb-3 cursor-default">
            For players who enjoy taking on more risk for the chance of higher
            payouts, the high-risk betting options are a perfect choice. With a
            maximum win of 1000x your wager, this gameplay option is for players
            who want to win big. These options come with increased risk, but the
            potential for substantial rewards is also greater:
          </p>
          <table className="cursor-default">
            <tr>
              <th>Risk/Pins</th>
              <th># of Destinations</th>
              <th>Min Win</th>
              <th>Max Win</th>
            </tr>
            <tr>
              <td>Low/8</td>
              <td>9</td>
              <td>0.2</td>
              <td>29</td>
            </tr>
            <tr>
              <td>Low/9</td>
              <td>10</td>
              <td>0.2</td>
              <td>43</td>
            </tr>
            <tr>
              <td>Low/10</td>
              <td>11</td>
              <td>0.2</td>
              <td>76</td>
            </tr>
            <tr>
              <td>Low/11</td>
              <td>12</td>
              <td>0.2</td>
              <td>120</td>
            </tr>
            <tr>
              <td>Low/12</td>
              <td>13</td>
              <td>0.2</td>
              <td>170</td>
            </tr>
            <tr>
              <td>Low/13</td>
              <td>14</td>
              <td>0.2</td>
              <td>260</td>
            </tr>
            <tr>
              <td>Low/14</td>
              <td>15</td>
              <td>0.2</td>
              <td>420</td>
            </tr>
            <tr>
              <td>Low/15</td>
              <td>16</td>
              <td>0.2</td>
              <td>620</td>
            </tr>
            <tr>
              <td>Low/16</td>
              <td>17</td>
              <td>0.2</td>
              <td>1000</td>
            </tr>
          </table>
          <p className="text-[15px] py-3 cursor-default">
            Choosing high risk options in Plinko can be exhilarating for players
            who are willing to accept the increased risk for the chance to win.
            This strategy is ideal for those who prefer high-Listors gameplay
            and are prepared to face the challenges that come with it.
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pb-3 cursor-default">
            Payout Distribution
          </h1>
          <p className="text-[15px] pb-3 cursor-default">
            The payout destinations for each round of Plinko are distributed
            based on the number of rows and the payout amount is determined by
            the risk level.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            The number of payout destinations is determined by the row number,
            being one more than the total row number. This means Even Numbered
            Row boards will have only one destination for the minimum payout
            whilst Odd Numbered Row boards have two.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            From the middle of the board, payouts are distributed with
            increasing amounts until the edge of the board, with each payout
            mirrored between the left and right from the centre. The middle
            destinations have a greater chance of the ball landing whilst the
            edges have the lowest chance and highest payout.
          </p>
          <p className="text-[15px] pb-3  cursor-default">
            Hovering over the payout destination will provide the player with
            the percentage chance of landing on the destination as well as the
            profit on win based on the bet amount.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            This provides players with the tools they need to make bets that
            suit their playing style and adjust the rows as well as risk level
            to fit their needs.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            Plinko is a favourite of the Listor community due to its simple
            gameplay and expandable betting options. Plinko is a game where the
            player sets the risk and the payouts and is beloved by players who
            have strong strategies around bankroll management and aiming for big
            wins with high payouts.
          </p>
          <p className="text-[15px] pb-3 cursor-default">
            Plinko is a favourite of the Listor community due to its simple
            gameplay and expandable betting options. Plinko is a game where the
            player sets the risk and the payouts and is beloved by players who
            have strong strategies around bankroll management and aiming for big
            wins with high payouts.
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pb-3 cursor-default">
            How to Deposit for Plinko on Listor.com
          </h1>
          <p className="text-[15px] pb-3 cursor-default">
            Playing Plinko on our Online Casino with{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              local fiat currencies
            </span>{" "}
            ,{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Bitcoin
            </span>{" "}
            or{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              other available cryptocurrencies
            </span>{" "}
            is easy and widely available. For depositing funds into your
            Listor.com account to play Plinko online and more, please follow the
            steps listed below:
          </p>
          <ol class="ps-8 space-y-2 cursor-default">
            <li>
              <span class="font-semibold "> Step 1 –</span> Retrieve your
              deposit address, located in Wallet &#62; Deposit.
            </li>
            <li>
              <span class="font-semibold list-outside">Step 2 –</span> Choose
              the method which suits your needs. We offer many supported
              currencies including Bitcoin (BTC), Ethereum (ETH), Dogecoin
              (Doge), Litecoin (LTC) and more.
            </li>
            <li>
              <span class="font-semibold">Step 3 –</span> Use your deposit
              address as the 'Send to' location for your wallet or exchange.
            </li>
            <li>
              <span class="font-semibold">Step 4 (Optional) –</span>If you need
              to make a deposit via fiat currency, you can buy crypto for Listor
              via Moonpay.
            </li>
          </ol>
          <style jsx>{`
            ol {
              list-style-type: disc;
            }

            li::marker {
              color: [#B1BAD3];
              font-weight: 600;
            }
          `}</style>
          <p className="text-[15px] pt-3 cursor-default">
            Listor provides live support and assistance from our support staff -
            whether it has to do with account deposits or accessing your
            favourite casino games, we will help you out!
          </p>
          <p className="text-[15px] pt-3 cursor-default">
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
            <span className="ml-1">
              including Visa, MasterCard, Apple Pay, Google Pay and more to
              deposit cryptocurrency for online casino games and more. For a
              full list of supported payment options in your market, please
              refer to the Moonpay documentation.
            </span>{" "}
          </p>
          <p className="text-[15px] pt-3 cursor-default">
            It's important to remember to only bet within your means and stay{" "}
            <span className="font-semibold hover:text-white cursor-pointer">
              Listor Smart.
            </span>{" "}
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
        <div>
          <h1 className="text-white text-xl font-bold pt-3 cursor-default">
            Origins of Plinko: From Pachinko Parlours to Bob Barker to Listor
          </h1>
          <p className="text-[15px] pt-3 cursor-default">
            Plinko traces its origins back to a traditional Japanese game called
            "Pachinko," a mechanical arcade game popular since the 1920s. With
            its captivating gameplay, Pachinko has long been a favourite pastime
            in Japan, later inspiring the creation of Plinko for American
            television audiences.
          </p>
          <p className="text-[15px] pt-3 cursor-default">
            The Price is Right, a long-running TV game show, adapted the concept
            of Pachinko into its iconic pricing game, Plinko, which first aired
            on January 3, 1983. The TV version of Plinko is famous in the USA
            and Canada with the game focusing on contestants guessing the prices
            of small items to earn chips. They then release the chips at the top
            of the Plinko board, hoping for them to land in high-value slots at
            the bottom. The game offers a cash prize of up to $50,000 along with
            smaller prizes.
          </p>
          <p className="text-[15px] pt-3 cursor-default">
            While the basic concept of Plinko has remained the same, the Listor
            version offers players a more customisable experience. Players can
            control the risk level and number of rows in the pin pyramid,
            allowing them to create a game that suits their preferences and
            playing style.
          </p>
          <p className="text-[15px] pt-3 cursor-default">
            The Price is Right version focuses more on the contestant's ability
            to guess prices accurately to earn additional chips, whereas the
            Listor version emphasises bankroll management and strategy.
          </p>
          <p className="text-[15px] pt-3 cursor-default">
            Moreover, Plinko on Listor is a provably fair game with a house edge
            of 1%, ensuring that players can confidently bet on games knowing
            that the outcome is truly random and based on chance. The online
            version also offers advanced betting features, such as auto betting
            and hotkeys, making it more convenient for players to manage their
            bets and enjoy faster-paced gameplay.
          </p>
          <p className="text-[15px] pt-3 cursor-default">
            Plinko's roots can be traced back to Japan's traditional Pachinko
            game and while The Price is Right version share a captivating
            simplicity, Listor's adaptation adds unique features tailored to
            online players.
          </p>
          <p className="text-[15px] pt-3 cursor-default">
            The enduring appeal of Plinko makes it a timeless favourite among
            game enthusiasts worldwide.
          </p>
        </div>
      </div>
    </>
  );
};

export default PlinkoDiscription;
