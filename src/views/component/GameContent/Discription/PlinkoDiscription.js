import React from "react";
import plinkoGame from "../../../../assets/img/plinkoGame.jpeg";

const PlinkoDiscription = () => {
  return (
    <>
      <div className="py-3 xl:max-w-[52rem] md:w-full text-[#b1bad3]">
        <div className="flex gap-7">
          <div>
            <img className="rounded-lg w-72" src={plinkoGame} alt="crashGame" />
          </div>
          <div>
            <button className="text-[11px] bg-[#4d718768] px-1 py-0.5 rounded-2xl">
              Edge: 1.00%
            </button>
            <div>
              <button className="text-[12px] mt-2 font-bold bg-[#4d718768] px-1 py-0.5 rounded-2xl">
                Stake Originals
              </button>
            </div>
            <p className="text-[15px] py-4">
              Inspired by the Japanese mechanical game known as Pachinko, Plinko
              lets players drop a ball from the top of our triangular pin
              pyramid to find the winning route down to a corresponding
              multiplier.
            </p>
            <p className="text-[15px] pb-3">
              With the ability to customize your risk factor and multipliers
              rest assured that this version of Plinko is a Stake Original
              online game suited for everyone to play for fun and free at our
              social casino !
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pb-3">What is Plinko?</h1>
          <p className="text-[15px] pb-3">
            Plinko is a classic game of chance where the player drops a ball in
            a multi-row pin pyramid, with the ball bouncing between pins in a
            random route until it reaches a destination at the bottom of the
            pyramid.
          </p>
          <p className="text-[15px] pb-3">
            The location of where the ball lands determine the win, with larger
            win towards the edges of the pin pyramid.
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pb-3">
            How to Play Plinko
          </h1>
          <p className="text-[15px] pb-3">
            The strategy to play Plinko is all about control and surviving the
            lows until variance turns in your favor. As a volatility switch
            game, Plinko is designed to provide the player gameplay options to
            control the risk of the game. These Plinko gameplay options are:
          </p>
          <ul className="list-disc pl-8">
            <li className="text-[15px] pb-2">
              Risk Level: Control the volatility and risk - available in 3 risk
              levels: Low, Medium & High.
            </li>
            <li className="text-[15px] pb-2">
              Rows: Players can select between 8 to 16 rows for the pin pyramid,
              fundamentally altering the mechanics of the game itself. More rows
              mean more pins that can change the trajectory of the ball.
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pb-3">Playing Options</h1>
          <p className="text-[15px] pb-3">
            In addition to the verifiable fairness of results, Stake also offers
            advanced playing features for games like Plinko. These include:
          </p>
          <ul className="list-disc pl-8">
            <li className="text-[15px] pb-2">
              Autoplay: To ease the use of mouse clicks for gameplay, Plinko
              allows users to autoplay - setting the 'number of games', which
              allows the number of balls played in Plinko to target specific
              wins for an amount.
            </li>
            <li className="text-[15px] pb-2">
              Hotkeys: Speeds up manual playing and reduce mouse usage by using
              hotkeys available in-game. For example, Spacebar allows you to
              drop balls as fast as possible and maximizes the number of plays
              over time.
            </li>
            <li className="text-[15px] pb-2">
              Instant Play: Speeds up gameplay for faster action - with
              animations on the game is faster whilst with animations off makes
              gameplay truly instantaneous.
            </li>
          </ul>
          <p>
            During each round of Plinko gameplay, the ball is dropped into the
            gameplay area, bouncing on pins until it hits the destination
            (pocket) with the win. Changing the risk level increases the
            volatility, whilst changing the number of rows increases the number
            of winning destinations.
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pb-3">
            Low-Risk Options
          </h1>
          <p className="text-[15px] pb-3">
            For players looking to minimize volatility while playing Plinko, the
            table below provides a comprehensive overview of low-risk playing
            options. These options help manage your bankroll while offering a
            more consistent gaming experience:
          </p>
          <table>
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
          <p className="text-[15px] py-3">
            By choosing from the low-risk options above, players can still enjoy
            the excitement of Plinko while minimizing the impact of losing
            rounds.
          </p>
          <p className="text-[15px] pb-3">
            This can be an appealing strategy for those who prefer a more
            conservative approach to their gameplay or are just starting out
            playing Plinko online for the first time.
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pb-3">
            Medium-Risk Options
          </h1>
          <p className="text-[15px] pb-3">
            The medium-risk playing options offer a suitable choice for players
            seeking a balance between risk and gaming excitement. These options
            provide an opportunity for greater wins while still maintaining a
            manageable level of risk:
          </p>
          <table>
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
          <p className="text-[15px] py-3">
            By opting for medium-risk options, players can enjoy the thrill of
            Plinko with the potential for higher wins compared to low-risk
            options, while still keeping an acceptable level of risk. This
            strategy can be enticing for those who are comfortable taking on
            slightly more risk for the chance of bigger wins.
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pb-3">
            High-Risk Options
          </h1>
          <p className="text-[15px] pb-3">
            For players who enjoy taking on more risk for the chance of higher
            wins, the high-risk playing options are a perfect choice. These
            options come with increased risk, but the potential for substantial
            wins is also greater:
          </p>
          <table>
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
          <p className="text-[15px] py-3">
            Choosing high risk options in Plinko can be exhilarating for players
            who are willing to accept the increased risk for the chance to win.
            This strategy is ideal for those who prefer high-stakes gameplay and
            are prepared to face the challenges that come with it.
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pb-3">
            Origins of Plinko: From Pachinko Parlors to Bob Barker to Stake.us
          </h1>
          <p className="text-[15px] pb-3">
            Plinko traces its origins back to a traditional Japanese game called
            "Pachinko," a mechanical arcade game popular since the 1920s. With
            its captivating gameplay, Pachinko has long been a favorite pastime
            in Japan, later inspiring the creation of Plinko for American
            television audiences.
          </p>
          <p className="text-[15px] pb-3">
            The Price is Right, a long-running TV show, adapted the concept of
            Pachinko into its iconic pricing game, Plinko, which first aired on
            January 3, 1983. The TV version focuses on contestants guessing the
            prices of small items to earn chips. They then release the chips at
            the top of the Plinko board, hoping for them to land in high-winning
            slots at the bottom.
          </p>
          <p className="text-[15px] pb-3">
            While the basic concept of Plinko has remained the same, the Stake
            version offers players a more customizable experience. Players can
            control the risk level and number of rows in the pin pyramid,
            allowing them to create a game that suits their preferences and
            playing style.
          </p>
          <p className="text-[15px] pb-3">
            The Price is Right version focuses more on the contestant's ability
            to guess prices accurately to earn additional chips, whereas the
            Stake version emphasizes bankroll management and strategy.
          </p>
          <p className="text-[15px] pb-3">
            Plinko's roots can be traced back to Japan's traditional Pachinko
            game and while The Price is Right version share a captivating
            simplicity, Stake's adaptation adds unique features tailored to
            online players. The enduring appeal of Plinko makes it a timeless
            favorite among game enthusiasts worldwide.
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pb-3">
            Other Popular Stake Original Casino Games
          </h1>
          <p className="text-[15px] pb-3">
            If you loved the thrilling gameplay of Plinko, be sure to check out
            our range of exciting games, all available to play for fun and free
            on our social casino platform.
          </p>
          <p className="text-[15px] pb-3">
            Popular games include Crash , Mines , Keno , Limbo , Hilo , Dragon
            Tower , Tome of Life , Scarab Spin , Blue Samurai , and many more.
            From slot games and scratch cards to live dealer games, our variety
            of games offer the revolutionary features, bonus games, and the
            opportunity to win.
          </p>
          <p className="text-[15px] pb-3">
            Be sure to take advantage of our casino promotions and bonuses , or
            take things to the next level by becoming a Stake VIP Club member
            today!.
          </p>
        </div>
      </div>
    </>
  );
};

export default PlinkoDiscription;
