import React from "react";
import crashGame from "../../../../assets/img/crashGame.avif";

const CrashDiscription = () => {
  return (
    <>
      <div className="py-3 xl:max-w-[52rem] md:w-full text-[#b1bad3]">
        <div className="flex gap-7">
          <div>
            <img className="rounded-lg w-96" src={crashGame} alt="crashGame" />
          </div>
          <div>
            <button className="text-[11px] bg-[#4d718768] px-1 py-0.5 rounded-2xl">
              Edge: 1.00%
            </button>
            <div>
              <button className="text-[12px] mt-2 font-bold bg-[#4d718768] px-1 py-0.5 rounded-2xl">
                Listor Originals
              </button>
            </div>
            <p className="text-[15px] py-4">
              Predict the multiplier in this quick and simplistic odds-based fun
              social casino game, Crash! Take on the house with a variety of
              different strategies to defeat the house and win!
            </p>
            <p className="text-[15px] pb-3">
              Crash is a simple game of chance where the player picks the amount
              for a playing round as an icon representing a rocket flies through
              a grid. The amount climbs until the rocket 'crashes' and as long
              as the player's amount is lower than the crash amount, the player
              can win!
            </p>
          </div>
        </div>
        <div>
          <p className="text-[15px] pb-5">
            This version of Crash is a proud Listor Original and one of the most
            popular games on our online social casino .
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pb-3">
            How to Play Crash
          </h1>
          <p className="text-[15px] pb-3">
            Crash is a classic luck-based type of game that is easy to get
            started with, even for new players not familiar with casino games.
          </p>
          <p className="text-[15px] pb-3">
            As this is purely a game of chance, strategies involve how a one
            plays. Players playing on low amounts aim for more consistent wins
            whilst higher amounts aim for a higher win in a single round with
            more volatile gameplay.
          </p>
          <p className="text-[15px] pb-3">
            The concept is simple: every 5 seconds after a round of Crash is
            played, players can make their decision to what the amount will be
            for the upcoming round.
          </p>
          <p className="text-[15px] pb-3">
            This is the amount that the player will get before the rocket
            'crashes'. If the player hits this amount during a round, they
            receive a win based on that amount. However, if the rocket crashes
            at an amount lower than their win, the player loses for that round.
          </p>
          <p className="text-[15px] pb-3">
            One of the exciting aspects of Crash is that it is a real-time game
            and is considered a favorite amongst the Listor Community. Every
            round is the same for all active players playing Crash at that
            specific time - with a live leader board showcasing each player's
            gameplay for that round.
          </p>
          <p className="text-[15px] pb-3">
            With the live community playing this game of chance,
            edge-of-your-seat gameplay, and the opportunity to win, Crash is a
            social casino game loved by advanced and new players alike!
          </p>
          <p className="text-[15px] pb-3">
            For more information, check out our guide on how to play Crash right
            here on Listor.us!
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pb-3">
            Playing Options for Crash Social Casino Game
          </h1>
          <p className="text-[15px] pb-3">
            There are two types of playing options for our Crash game: Manual
            and Auto.
          </p>
          <ul className="list-disc pl-8">
            <li className="text-[15px] pb-2">
              Manual: Allows the player to set the playing amount for a round of
              crash, as well as the amount the player would like to get during
              the next round.
            </li>
            <li className="text-[15px] pb-2">
              Auto: Available for players interested in using sophisticated
              strategies. If enabled, this allows playing behavior based on win
              and loss performance for future rounds. The Auto setting provides
              advanced options such as the number of plays, whether to increase
              or reset on Win or Loss, as well as the ability to stop on win or
              loss after hitting a certain win amount overall.
            </li>
          </ul>
          <p className="text-[15px] pb-2">
            Hotkeys are also available which are best utilized to control your
            gameplay during the 5 seconds interval. Hotkeys for Crash include:
          </p>
          <ul className="list-disc pl-7">
            <li>'s' to double the amount</li>
            <li>'a' to halve the amount</li>
            <li>'d' to zero amount played</li>
            <li>'spacebar' to make a play</li>
            <li>'q' to Cancel.</li>
          </ul>
          <p className="text-[15px] py-3">
            With a wide range of flexible playing options, as well as the
            fast-paced gameplay and exciting social aspect, Crash is a fun and
            popular game on our social casino platform, where players can win!
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pb-3">
            Other Popular Listor Original Casino Games
          </h1>
          <p className="text-[15px] pb-3">
            Love the Listor Original Crash game? Then be sure to check out more
            of our amazing online games, available to play at your fingertips
            for fun and free on our platform!
          </p>
          <p className="text-[15px] pb-3">
            Some of our most popular games include Plinko , Mines , Keno , Limbo
            , Hilo , Dragon Tower , Tome of Life , Scarab Spin , Blue Samurai ,
            and many more. From slot games and scratch cards to live dealer
            games , our variety of games offer the revolutionary features, bonus
            games, and the opportunity to win.
          </p>
          <p className="text-[15px] pb-3">
            Remember, we've got a sweet sweep of amazing casino promotions and
            bonuses to take advantage of, or you can gain access to more
            exclusive benefits by becoming a Listor VIP Club member !
          </p>
        </div>
      </div>
    </>
  );
};

export default CrashDiscription;
