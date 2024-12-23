import React from "react";
import LimboGame from "../../../../assets/img/limboGame.avif";

const LimboDiscription = () => {
  return (
    <>
      <div className="py-3 xl:max-w-[52rem] md:w-full text-[#b1bad3]">
        <div className="flex gap-7">
          <div>
            <img className="rounded-lg w-52" src={LimboGame} alt="crashGame" />
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
              When it comes to minimalistic gameplay with exciting outcomes, you
              can’t find a better social casino game than our very own odd-based
              game, Limbo!
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pt-7 ">What is Limbo?</h1>
          <p className="text-[15px] py-3">
            Limbo is an online casino game that offers unrivalled gameplay and
            big wins. This is a Listor original game with a high maximum
            potential win of 1,000,000x your played amount up for grabs.
          </p>
          <p className="text-[15px] pb-3">
            Fundamentally, the game is based on dice but is set up slightly
            differently to ensure there are no upward limits and you can
            experience the gameplay from a linear playing field.
          </p>
          <p className="text-[15px] pb-3">
            Play your way to victory against the house and play Limbo for fun
            and free at Listor social casino !
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pb-3">
            How to Play Limbo Casino Game
          </h1>
          <p className="text-[15px] pb-3">
            Limbo is one of the easiest games you can play at Listor.us , and
            it’s perfect for beginners and high rollers alike. To play, you need
            to be aware of two things:
          </p>
          <ul className="list-disc pl-8">
            <li className="text-[15px] pb-2">The amount played</li>
            <li className="text-[15px] pb-2">The target winning amount</li>
          </ul>
          <p className="text-[15px] pb-2">
            Now, if the outcome of the round is higher than the target winning
            amount set, you will instantly win the amount that you played,
            multiplied by the target.
          </p>
          <p className="text-[15px] py-3">
            This Limbo game is so popular because there are hardly any other
            games that come close to offering this type of win at any online
            social casino, making it the ideal game for anyone looking for big
            wins.
          </p>
          <p className="text-[15px] py-3">
            Learn more about how to play Limbo to help you on your gaming
            journey!
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pb-3">
            How Does Limbo Casino Game Work?
          </h1>
          <p className="text-[15px] pb-3">
            The outcomes in all Limbo rounds are completely randomized and are
            part of a two-step process. The first step is known as the float
            point, which is converted from generating random bytes using Listor’s
            RNG multiplied by the max win (1,000,000x) and the game’s house edge
            (1%).
          </p>
          <p className="text-[15px] pb-3">
            Next, to generate a game event with probability distribution, the
            maximum possible multiplier is divided by the result of the first
            calculation to create a game event in the form of a crash point. So,
            although a maximum win is given (1,000,000), theoretically, the sky
            is the limit when playing for free on our social casino.
          </p>
          <p className="text-[15px] pb-3">
            Probability distribution is key to delivering the various game
            outcomes in Limbo in a fair and completely randomized manner. At
            Listor.us, we ensure that this fair game has a high amount of
            variance from round to round and that randomized outcomes occur at
            all times.
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pb-3">
            Limbo Strategies & Tips
          </h1>
          <p className="text-[15px] pb-3">
            Fundamentally, our Limbo game is a game of luck, and all outcomes
            are randomly generated, as explained above. However, the game is
            unique as you get to set your odds and potential wins, so this is
            something that you should consider when playing.
          </p>
          <p className="text-[15px] pb-3">
            If you want higher odds and lower potential wins, you should dial
            down the multipliers. However, if you want the biggest wins
            possible, you need to crank up the multipliers.
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold pb-3">
            Other Popular Listor Original Casino Games & Bonuses
          </h1>
          <p className="text-[15px] pb-3">
            If you love playing our social casino games online at Listor.us,
            we've got a wide range of exciting games with immersive gameplay
            experiences!
          </p>
          <p className="text-[15px] pb-3">
            In addition to Limbo, be sure to check out our wide range of newest
            releases and more exclusive Listor original games, including Plinko ,
            Mines , Crash , Hilo , Keno , Dragon Tower , Tome of Life , Scarab
            Spin , and more desktop and mobile games.
          </p>
          <p className="text-[15px] pb-3">
            While you're having fun on our platform, remember to take advantage
            of our amazing social casino promotions and bonuses, or you can gain
            access to more exclusive benefits by becoming a Listor VIP Club
            member .
          </p>
        </div>
      </div>
    </>
  );
};

export default LimboDiscription;
