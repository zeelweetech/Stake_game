import React, { useState } from "react";
import cryptogambling from "../../assets/img/cryptogambling.png";

const Fairness = () => {
  const [activeLink, setActiveLink] = useState("Overview");

  const links = [
    { label: "Overview" },
    { label: "Implementation" },
    { label: "Conversions" },
    { label: "Game Events" },
    { label: "Unhash Server Seed" },
    { label: "Calculation" },
  ];

  const renderContent = () => {
    switch (activeLink) {
      case "Overview":
        return (
          <div className="w-full text-white bg-[#0f212e] rounded-lg p-[1.5rem] font-semibold shadow-lg">
            <h2 className="text-2xl font-semibold cursor-default">
              Solving the Trust Issue with Online Gambling
            </h2>

            <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
              The underlying concept of provable fairness is that players have
              the ability to prove and verify that their results are fair and
              unmanipulated. This is achieved through the use of a
              <a
                href="#"
                className=" items-center inline-flex ml-1 font-semibold text-white cursor-default"
              >
                commitment scheme
                <svg
                  className="ml-2 h-4 w-4 text-[#B1BAD3]"
                  viewBox="0 0 64 64"
                  fill="currentColor"
                >
                  <path d="M10.823 53.176h42.353V39.941h7.059v20.294H3.765V3.765h20.293v7.058H10.823v42.353Zm28.236-42.353V3.765h21.176V24.94h-7.059v-9.123L27.88 41.115l-4.994-4.995 25.297-25.296H39.06Z" />
                </svg>
              </a>
              <span className="ml-2 cursor-default">
                , along with cryptographic hashing.
              </span>
            </p>

            <p className="mt-4 text-[#B1BAD3] font-normal cursor-default">
              The commitment scheme is used to ensure that the player has an
              influence on all results generated. Cryptographic hashing is used
              to ensure that the casino also remains honest to this commitment
              scheme. Both concepts combined create a trust-less environment
              when gambling online.
            </p>
            <p className="mt-4 text-[#B1BAD3] font-normal cursor-default">
              This is simplified in the following representation:
            </p>
            <div className="bg-[#213743] p-4 rounded mt-4 cursor-default">
              <p className="block font-medium tracking-widest">
                fair result = operators input (hashed) + customers input
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mt-4 cursor-default">
                3rd Party Verification
              </h2>
              <p className="mt-4 text-[#B1BAD3] font-normal cursor-default">
                All Listor Originals played on Lister can be verified both here
                and via 3rd party websites who have also open-sourced the
                verification procedure. You can find them via a Google search,
                or simply check out some of these that have been put together by
                our community:
              </p>

              <ul
                className="mt-4 space-y-2 ml-4"
                style={{ liststyletype: "disc" }}
              >
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                  <a
                    // href="https://provablyfair.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold cursor-pointer"
                  >
                    https://provablyfair.me
                  </a>
                  <svg
                    className="ml-2 h-4 w-4 text-[#B1BAD3] cursor-pointer"
                    viewBox="0 0 64 64"
                    fill="currentColor"
                  >
                    <path d="M10.823 53.176h42.353V39.941h7.059v20.294H3.765V3.765h20.293v7.058H10.823v42.353Zm28.236-42.353V3.765h21.176V24.94h-7.059v-9.123L27.88 41.115l-4.994-4.995 25.297-25.296H39.06Z" />
                  </svg>
                </li>

                <li className="flex items-center space-x-2">
                  <span class="w-2 h-2 bg-gray-300 rounded-full"></span>
                  <a
                    // href="https://Listorstats.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold cursor-pointer"
                  >
                    https://Listorstats.net
                  </a>
                  <svg
                    className="ml-2 h-4 w-4 text-[#B1BAD3] cursor-pointer"
                    viewBox="0 0 64 64"
                    fill="currentColor"
                  >
                    <path d="M10.823 53.176h42.353V39.941h7.059v20.294H3.765V3.765h20.293v7.058H10.823v42.353Zm28.236-42.353V3.765h21.176V24.94h-7.059v-9.123L27.88 41.115l-4.994-4.995 25.297-25.296H39.06Z" />
                  </svg>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl mt-6 font-semibold cursor-default">
                Crypto Gambling Foundation
              </h2>
              <p className="mt-4 text-[#B1BAD3] font-normal cursor-default">
                Listor is a verified operator on the Crypto Gambling Foundation
                network. This foundation aims to uphold the highest standard of
                provably fair gambling, and we are proud to be a part of their
                network. You can find further information and insights about
                provable fairness and the power it has in this industry. Check
                out the Crypto Gambling Foundation via their website:
                <a
                  // href="https://cryptogambling.org"
                  target="_blank"
                  className="text-white font-semibold cursor-pointer ml-2 inline-flex items-center"
                >
                  cryptogambling.org
                  <svg
                    className="ml-2 h-4 w-4 text-[#B1BAD3] cursor-pointer"
                    viewBox="0 0 64 64"
                    fill="currentColor"
                  >
                    <path d="M10.823 53.176h42.353V39.941h7.059v20.294H3.765V3.765h20.293v7.058H10.823v42.353Zm28.236-42.353V3.765h21.176V24.94h-7.059v-9.123L27.88 41.115l-4.994-4.995 25.297-25.296H39.06Z" />
                  </svg>
                </a>
              </p>
              <div className="rounded mt-4 flex flex-col items-start c">
                <img
                  src={cryptogambling}
                  alt="cryptogambling"
                  className="w-[7.5rem] h-[3rem] rounded cursor-pointer"
                />
                <span className="text-[0.7rem] px-2 cursor-pointer">
                  VERIFIED OPERATOR
                </span>
              </div>
            </div>
          </div>
        );
      case "Implementation":
        return (
          <div className="w-full text-white bg-[#0f212e] rounded-lg p-[1.5rem] font-semibold shadow-lg">
            <h2 className="text-2xl font-semibold cursor-default">
              Random Number Generation
            </h2>

            <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
              For each verifiable bet, a client seed, a server seed, a nonce and
              a cursor are used as the input parameters for the
              <a
                href="#"
                className="items-center inline-flex ml-1 font-semibold text-white cursor-pointer"
              >
                random number generation
                <svg
                  className="ml-2 h-4 w-4 text-[#B1BAD3]"
                  viewBox="0 0 64 64"
                  fill="currentColor"
                >
                  <path d="M10.823 53.176h42.353V39.941h7.059v20.294H3.765V3.765h20.293v7.058H10.823v42.353Zm28.236-42.353V3.765h21.176V24.94h-7.059v-9.123L27.88 41.115l-4.994-4.995 25.297-25.296H39.06Z" />
                </svg>
              </a>
              <span className="ml-2 cursor-default">
                function. This function utilises the cryptographic hash function
              </span>
              <span className="items-center inline-flex ml-1 font-semibold text-white cursor-pointer">
                HMAC_SHA256
                <svg
                  className="ml-2 h-4 w-4 font-normal text-[#B1BAD3]"
                  viewBox="0 0 64 64"
                  fill="currentColor"
                >
                  <path d="M10.823 53.176h42.353V39.941h7.059v20.294H3.765V3.765h20.293v7.058H10.823v42.353Zm28.236-42.353V3.765h21.176V24.94h-7.059v-9.123L27.88 41.115l-4.994-4.995 25.297-25.296H39.06Z" />
                </svg>
              </span>
              <span className="ml-3">
                to generate bytes which are then used as the foundation for how
                we generate provably fair random outcomes on our platform.
              </span>
            </p>

            <div className="bg-[#213743] p-4 rounded mt-4 cursor-default font-normal">
              <pre>
                {`// Random number generation based on following inputs: serverSeed, clientSeed, nonce and cursor
  function byteGenerator({serverSeed, clientSeed, nonce, cursor}) {
    // Setup curser variables
    let currentRound = Math.floor(cursor / 32);
    let currentRoundCursor = cursor;
    currentRoundCursor -= currentRound * 32;

    // Generate outputs until cursor requirement fullfilled
    while (true) {
        // HMAC function used to output provided inputs into bytes
        const hmac = createHmac('sha256', serverSeed);
        hmac.update(\`\${clientSeed}:\${nonce}:\${currentRound}\`);
        const buffer = hmac.digest();

        // Update curser for next iteration of loop
        while (currentRoundCursor < 32) {
            yield Number(buffer[currentRoundCursor]);
            currentRoundCursor += 1;
        }
        currentRoundCursor = 0;
        currentRound += 1;
    }
};`}

              </pre>
            </div>
            <div className="mt-4">
              <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                Server Seed
              </h2>
            </div>
            <p className="mt-4 text-[#B1BAD3] font-normal cursor-default">
              The server seed is generated by our system as a random 64-character hex string. You are then provided with an encrypted hash of that generated server seed before you place any bets. The reason we provide you with the encrypted form of the server seed is to ensure that the un-hashed server seed cannot be changed by the casino operator, and that the player cannot calculate the results beforehand.
            </p>

            <p className="mt-4 text-[#B1BAD3] font-normal cursor-default">
              To reveal the server seed from its hashed version, the seed must be rotated by the player, which triggers the replacement with a newly generated one.
            </p>

            <p className="mt-4 text-[#B1BAD3] font-normal cursor-default">
              From this point you are able to verify that the hashed server seed matches that of the un-hashed server seed. This process can be verified via our un-hashed server seed function found in the menu above.
            </p>
            <div className="mt-8">
              <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                Client Seed
              </h2>
              <p className="mt-4 text-[#B1BAD3] font-normal cursor-default">
                The client seed belongs to the player and is used to ensure they have influence on the randomness of the outcomes generated. Without this component of the algorithm, the server seed alone would have complete leverage over the outcome of each bet.
              </p>

              <p className="mt-4 text-[#B1BAD3] font-normal cursor-default">
                All players are free to edit and change their client seed regularly to create a new chain of random upcoming outcomes. This ensures the player has absolute control over the generation of the result, similar to cutting the deck at a brick and mortar casino.
              </p>

              <p className="mt-4 text-[#B1BAD3] font-normal cursor-default">
                During registration, a client seed is created for you by your browser, to ensure your initial experience with the site goes uninterrupted. Whilst this randomly generated client seed is considered suitable, we highly recommend that you choose your own, so that your influence is included in the randomness.
              </p>

              <p className="mt-4 text-[#B1BAD3] font-normal cursor-default">
                You can do this via the fairness modal.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                Nonce
              </h2>
              <p className="mt-4 text-[#B1BAD3] font-normal cursor-default">
                The nonce is simply a number that increments as every new bet is made. Due to the nature of the SHA256 cryptographic function, this creates a completely new result each time, without having to generate a new client seed and server seed.
              </p>

              <p className="mt-4 text-[#B1BAD3] font-normal cursor-default">
                The implementation of nonce, ensures we remain committed to your client seed and server seed pair, whilst generating new results for each bet placed.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                Cursor (Incremental Number)
              </h2>
              <p className="mt-4 text-[#B1BAD3] font-normal cursor-default">
                We use 4 bytes of data to generate a single game result, and because SHA256 is limited to 32 bytes, we utilise this implementation of a cursor to give us the ability to create more game events without having to modify our provable fair algorithm.
              </p>

              <p className="mt-4 text-[#B1BAD3] font-normal cursor-default">
                The cursor is only iterated over when the game being played requires the generation of more than 8 (32 bytes / 4 bytes) possible outcomes. For example: when we need to use more than 8 cards in a game of blackjack.
              </p>

              <p className="mt-4 text-[#B1BAD3] font-normal cursor-default">
                The cursor starts as 0 and gets increased by 1 every time the 32 bytes are returned by the HMAC_SHA256 function. If we don’t require more than 8 random numbers to be generated for the game events, then the curser does not increment as there is no need to generate any additional possible game outcomes.
              </p>
            </div>
            <div className="mt-4">
              <p className="font-semibold leading-[1.5] text-left text-base sm:text-base md:text-lg lg:text-xlflex items-center space-x-2">
                Games with more than 1 incremental number:
              </p>
              <li className="text-[#B1BAD3] mt-4 mb-2">
                Hilo (Unlimited to cover required amount of cards)
              </li>

              <li className="text-[#B1BAD3] mb-2">
                Keno (2 increments for every game due to 10 possible outcomes)
              </li>

              <li className="text-[#B1BAD3] mb-2">
                Mines (3 increments per game for 24 possible bomb locations)
              </li>

              <li className="text-[#B1BAD3] mb-2">
                Pump (3 increments per game for 24 possible pop chances)
              </li>

              <li className="text-[#B1BAD3] mb-2">
                Plinko (2 increments per game to cover possible 16 decisions)
              </li>

              <li className="text-[#B1BAD3] mb-2">
                Blackjack (Unlimited to cover required amount of cards)
              </li>

              <li className="text-[#B1BAD3] mb-2">
                Video Poker (7 increments to generate 52 possible cards in a full deck)
              </li>

              <li className="text-[#B1BAD3] mb-2">
                Diamond Poker (2 increments to cover 10 diamonds: 5 per player/dealer)
              </li>

              <li className="text-[#B1BAD3] mb-2">
                Slots (The incremental number is only utilised for bonus rounds)
              </li>
            </div>
            <div className="mt-4">
              <p className="font-semibold leading-[1.5] text-left text-base sm:text-base md:text-lg lg:text-xlflex items-center space-x-2 mb-3">
                Games with only 1 incremental number (represented as default value 0):
              </p>

              <li className="text-[#B1BAD3] mb-2">
                Dice
              </li>

              <li className="text-[#B1BAD3] mb-2">
                Limbo
              </li>

              <li className="text-[#B1BAD3] mb-2">
                Wheel
              </li>

              <li className="text-[#B1BAD3] mb-2">
                Baccarat
              </li>

              <li className="text-[#B1BAD3] mb-2">
                Roulette
              </li>

              <li className="text-[#B1BAD3] mb-2">
                Diamonds
              </li>

              <li className="text-[#B1BAD3] mb-2">
                Cases
              </li>
            </div>
          </div>
        );
      case "Conversions":
        return (
          <div className="w-full text-white bg-[#0f212e] rounded-lg p-[1.5rem] font-semibold shadow-lg">
            <h2 className="text-2xl font-semibold cursor-default">
              Bytes to Floats
            </h2>
            <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
              The output of the Random Number Generator (byteGenerator) function is a hexadecimal 32-byte hash. As explained under the cursor implementation, we use 4 bytes of data to generate a single game result. Each set of 4 bytes are used to generate floats between 0 and 1 (4 bytes are used instead of one to ensure a higher level of precision when generating the float.) It is with these generated floats that we derive the formal output of the provable fair algorithm before it is translated into game events.
            </p>
            <div className="bg-[#213743] p-4 rounded mt-4 cursor-default font-normal">
              <pre>
                {`// Convert the hash output from the rng byteGenerator to floats
function generateFloats ({ serverSeed, clientSeed, nonce, cursor, count }) {
  // Random number generator function
  const rng = byteGenerator({ serverSeed, clientSeed, nonce, cursor });
  // Declare bytes as empty array
  const bytes = [];

  // Populate bytes array with sets of 4 from RNG output
  while (bytes.length < count * 4) {
    bytes.push(rng.next().value);
  }

  // Return bytes as floats using lodash reduce function
  return _.chunk(bytes, 4).map(bytesChunk =>
    bytesChunk.reduce((result, value, i) => {
      const divider = 256 ** (i + 1);
      const partialResult = value / divider;
      return result + partialResult;
    }, 0)
  );
};`}

              </pre>
            </div>
            <div className="mt-4">
              <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                Floats to Game Events
              </h2>
            </div>
            <p className="mt-4 text-[#B1BAD3] font-normal cursor-default">
              Where the process of generating random outputs is universal for all our games, it's at this point in the game outcome generation where a unique procedure is implemented to determine the translation from floats to game events.
            </p>
            <p className="mt-4 text-[#B1BAD3] font-normal cursor-default">
              The randomly float generated is multiplied by the possible remaining outcomes of the particular game being played. For example: In a game that uses a 52 card deck, this would simply be done by multiplying the float by 52. The result of this equation is then translated into a corresponding game event. For games where multiple game events are required, this process continues through each corresponding 4 bytes in the result chain that was generated using the described byteGenerator function.
            </p>
            <div className="mt-8">
              <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                Shuffle of Game Events
              </h2>
              <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                For games such as Keno, Mines, Pump and Video Poker, where outcomes cannot be duplicated, we then utilise the
                <a
                  href="#" className="items-center inline-flex font-semibold text-white cursor-pointer">
                  Fisher-Yates shuffle
                  <svg
                    className="ml-2 h-4 w-4 text-[#B1BAD3]"
                    viewBox="0 0 64 64"
                    fill="currentColor">
                    <path d="M10.823 53.176h42.353V39.941h7.059v20.294H3.765V3.765h20.293v7.058H10.823v42.353Zm28.236-42.353V3.765h21.176V24.94h-7.059v-9.123L27.88 41.115l-4.994-4.995 25.297-25.296H39.06Z" />
                  </svg>
                </a>
                <span >{" "}
                  algorithm. This procedure influences the conversion process from floats to game events because each time a game event is translated, the amount of possible remaining game event possibilities has been reduced for any remaining steps in the result chain.
                </span>
              </p>
              <p className="mt-4 text-[#B1BAD3] font-normal cursor-default">
                As an example, in video poker, there is at first 52 cards available in the complete deck, and therefore the first game event is translated by multiplying the float by 52. Once this card has been dealt, there is only 51 remaining cards in the deck, and therefore the second card translation is done by multiplying the second float generated by 51. This continues in the same fashion until all the game events required have been generated.
              </p>
              <p className="mt-4 text-[#B1BAD3] font-normal cursor-default">
                With regards to Mines, Pump and Keno, this is simply a matter of implementing the same process as explained with video poker but changing that to tiles or locations on the board or grid, ensuring that each game event generated, hasn’t already been done so beforehand in the chain of results.
              </p>
            </div>
          </div>
        );
      case "Game Events":
        return (
          <div className="w-full text-white bg-[#0f212e] rounded-lg p-[1.5rem] font-semibold shadow-lg">
            <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
              Game events are translation of the randomly generated floats into a relatable outcome that is game specific. This includes anything from the outcome of a dice roll to the order of the cards in a deck, or even the location of every bomb in a game of mines.
            </p>
            <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
              Below is a detailed explanation as to how we translate floats into events for each particular different game on our platform.
            </p>
            <div className="mt-8">
              <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                Blackjack, Hilo & Baccarat
              </h2>
              <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                In a standard deck of cards, there are 52 unique possible outcomes. When it comes to playing Blackjack, Hilo & Baccarat on our platform, we utilise an unlimited amount of decks when generating the game event, and therefore each turn of a card always has the same probability. To calculate this, we multiply each randomly generated float by 52, and then translate that result into a particular card, based on the following index:
              </p>
            </div>
            <div className="bg-[#213743] p-4 rounded mt-4 cursor-default font-normal">
              <pre>
                {`// Index of 0 to 51 : ♦2 to ♣A
const CARDS = [ 
  ♦2, ♥2, ♠2, ♣2, ♦3, ♥3, ♠3, ♣3, ♦4, ♥4,  
  ♠4, ♣4, ♦5, ♥5, ♠5, ♣5, ♦6, ♥6, ♠6, ♣6, 
  ♦7, ♥7, ♠7, ♣7, ♦8, ♥8, ♠8, ♣8, ♦9, ♥9, 
  ♠9, ♣9, ♦10, ♥10, ♠10, ♣10, ♦J, ♥J, ♠J, 
  ♣J, ♦Q, ♥Q, ♠Q, ♣Q, ♦K, ♥K, ♠K, ♣K, ♦A, 
  ♥A, ♠A, ♣A 
]; 

// Game event translation
const card = CARDS[Math.floor(float * 52)];`}

              </pre>

            </div>
            <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
              The only differentiating factor involved with these games is that with Hilo and Blackjack there is a curser of 13 to generate 52 possible game events for cases where a large amount of cards are required to be dealt to the player, whereas when it comes to Baccarat we only ever need 6 game events generated to cover the most amount of playable cards possible.
            </p>
            <div className="mt-4">
              <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                Cases
              </h2>
            </div>
            <p className="mt-4 text-[#B1BAD3] font-normal cursor-default">
              In a Cases bet, a single random float between 0.0 and 1.0 is generated, which is used as the probability to select the winning case from a predefined payout table. This payout table can be found at the footer of the Cases game and in the provable fairness verification calculation page.
            </p>
            <div className="mt-8">
              <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                Diamond Poker
              </h2>
              <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                When playing Diamond Poker, there is 7 possible outcomes in the form of gems. To achieve this, we multiply each float generated by 7 before it is translated into a corresponding gem using the following index:
              </p>
              <div className="bg-[#213743] p-4 rounded mt-4 cursor-default font-normal">
                <pre>
                  {`// Index of 0 to 6 : green to blue
const GEMS = [ green, purple, yellow, red, cyan, orange, blue ];

// Game event translation
const gem = GEMS[Math.floor(float * 7)];`}

                </pre>
              </div>
              <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                Both the dealer and the player are dealt 5 gems each, which means that a complete game of Diamond Poker requires the generation of 10 game events. The first 5 are assigned to the dealer and the second 5 are assigned to the player.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                Diamonds
              </h2>
              <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                When playing Diamonds, there is 7 possible outcomes in the form of gems. To achieve this, we multiply each float generated by 7 before it is translated into a corresponding gem using the following index:
              </p>
              <div className="bg-[#213743] p-4 rounded mt-4 cursor-default font-normal">
                <pre>
                  {`// Index of 0 to 6 : green to blue
const GEMS = [ green, purple, yellow, red, cyan, orange, blue ];

// Game event translation
const gem = GEMS[Math.floor(float * 7)];`}

                </pre>
              </div>
              <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                The player is then dealt 5 gems.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                Dice Roll
              </h2>
              <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                In our version of dice, we cover a possible roll spread of 00.00 to 100.00, which has a range of 10,001 possible outcomes. The game event translation is done by multiplying the float by number of possible outcomes and then dividing by 100 so that the resulting number fits the constraints of our stated dice range.
              </p>
              <div className="bg-[#213743] p-4 rounded mt-4 cursor-default font-normal">
                <pre>
                  {`// Game event translation
const roll = (float * 10001) / 100;`}

                </pre>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                Limbo
              </h2>
              <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                When it comes to Limbo, we use a two-step process. Firstly, we take the float and multiply it by both the maximum possible multiplier and the house edge. Then, in order to generate a game event that has
                <a
                  href="#"
                  className="items-center inline-flex ml-1 font-semibold text-white cursor-pointer"
                >
                  probability distribution
                  <svg
                    className="ml-2 h-4 w-4 text-[#B1BAD3]"
                    viewBox="0 0 64 64"
                    fill="currentColor"
                  >
                    <path d="M10.823 53.176h42.353V39.941h7.059v20.294H3.765V3.765h20.293v7.058H10.823v42.353Zm28.236-42.353V3.765h21.176V24.94h-7.059v-9.123L27.88 41.115l-4.994-4.995 25.297-25.296H39.06Z" />
                  </svg>
                </a>
                <span className="ml-2 cursor-default">
                  , we divide the maximum possible multiplier by the result of the first step to create the game event in the form of a crash point.
                </span>
              </p>
              <div className="bg-[#213743] p-4 rounded mt-4 cursor-default font-normal">
                <pre>
                  {`// Game event translation with houseEdge of 0.99 (1%)
const floatPoint = 1e8 / (float * 1e8) * houseEdge;

// Crash point rounded down to required denominator
const crashPoint = Math.floor(floatPoint * 100) / 100;

// Consolidate all crash points below 1
const result = Math.max(crashPoint, 1);`}

                </pre>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                Plinko
              </h2>
              <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                For any game of Plinko, the generated outcome is based on the path of the falling ball. The game event determines the direction of the falling ball for each level in the falling process. Players can choose between 8 and 16 pins of play, which determines the number of game events required to generate a complete path from top to bottom. Since there are only two possible directions (left or right) the translation is done by multiplying each float by 2, which maps to the following index:
              </p>
              <div className="bg-[#213743] p-4 rounded mt-4 cursor-default font-normal">
                <pre>
                  {`// Index of 0 to 1 : left to right
const DIRECTIONS = [ left, right ];

// Game event translation
const direction = CARDS[Math.floor(float * 2)];`}

                </pre>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                Roulette Roll
              </h2>
              <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                Our Roulette is derived from the European version of the game where the wheel consists of 37 possible different pockets, ranging from 0 to 36. The game event is calculated by multiplying the float by 37 and then translated into a corresponding pocket using the following index:
              </p>
              <div className="bg-[#213743] p-4 rounded mt-4 cursor-default font-normal">
                <pre>
                  {`// Index of 0 to 36
const POCKETS = [ 
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
  10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 
  20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 
  30, 31, 32, 33, 34, 35, 36
];
  
// Game event translation
const pocket = POCKETS[Math.floor(float * 37)];`}

                </pre>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                Keno
              </h2>
              <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                Traditional Keno games require the selection of 10 possible game events in the form of hits on a board. To achieve this, we multiply each float by the number of possible unique squares that exist. Once a hit has been placed, it cannot be chosen again, which changes the pool size of the possible outcomes. This is done by subtracting the size of possible maximum outcomes by 1 for each iteration of game event result generated using the corresponding float provided, using the following index:
              </p>
              <div className="bg-[#213743] p-4 rounded mt-4 cursor-default font-normal">
                <pre>
                  {`// Index of 0 to 39 : 1 to 40
const SQUARES = [ 
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40
];
  
const hit = SQUARES[Math.floor(float * 40)];`}

                </pre>
              </div>
              <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                The fisher-yates shuffle implementation is utilised to prevent duplicate possible hits being generated.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                Mines
              </h2>
              <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                A mine game is generated with 24 separate game events, in the form of mines on the board. Each float is multiplied by the number of possible unique tiles still remaining on the board. This is done by subtracting the number of tiles remaining by 1 for each iteration of game event result generated using the corresponding float provided. The location of the mine is plotted using a grid position from left to right, top to bottom.
              </p>
              <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                The fisher-yates shuffle implementation is utilised to prevent duplicate possible hits being generated. Between 1 and 24 game event results are used, based on the settings chosen.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                Pump
              </h2>
              <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                A Pump game is generated with 24 separate game events, in the form of pops at each round. Each float is multiplied by the number of rounds remaining. This is done by subtracting the number of rounds remaining by 1 for each pump.              </p>
              <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                The fisher-yates shuffle implementation is utilised to prevent duplicate possible hits being generated. Between 1 and 24 game event results are used, based on the settings chosen.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                Video Poker
              </h2>
              <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                A video poker game involves 52 separate game events, in the form of cards in a deck. Each float is multiplied by the number of possible cards still remaining in the deck. This is done by subtracting the number of cards remaining by 1 for each iteration of game event result generated using the corresponding float provided. This is done by selecting a card from the following index:
              </p>
              <div className="bg-[#213743] p-4 rounded mt-4 cursor-default font-normal">
                <pre>
                  {`// Index of 0 to 51 : ♦2 to ♣A
const CARDS = [ 
  ♦2, ♥2, ♠2, ♣2, ♦3, ♥3, ♠3, ♣3, ♦4, ♥4,  
  ♠4, ♣4, ♦5, ♥5, ♠5, ♣5, ♦6, ♥6, ♠6, ♣6, 
  ♦7, ♥7, ♠7, ♣7, ♦8, ♥8, ♠8, ♣8, ♦9, ♥9, 
  ♠9, ♣9, ♦10, ♥10, ♠10, ♣10, ♦J, ♥J, ♠J, 
  ♣J, ♦Q, ♥Q, ♠Q, ♣Q, ♦K, ♥K, ♠K, ♣K, ♦A, 
  ♥A, ♠A, ♣A 
]; 

// Game event translation
const card = CARDS[Math.floor(float * 52)];`}

                </pre>
              </div>
              <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                The fisher-yates shuffle implementation is utilised to prevent duplicate cards being generated.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                Wheel
              </h2>
              <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                The game event number is calculated by multiplying the float by the possible outcomes in the segment. It is then used to determine the game event result as a multiplier, using the following index:
              </p>
              <div className="bg-[#213743] h-80 overflow-auto scroll-m-3.5 p-4 rounded mt-4 cursor-default font-normal">
                <pre>
                  {`// Index per payout configuration
const PAYOUTS = {
  '10': {
    low: [ 1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0 ],
    medium: [ 0, 1.9, 0, 1.5, 0, 2, 0, 1.5, 0, 3 ],
    high: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 9.9 ]
  },
  '20': {
    low: [
      1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0, 
      1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0
    ],
    medium: [ 
      1.5, 0, 2, 0, 2, 0, 2, 0, 1.5, 0, 
      3, 0, 1.8, 0, 2, 0, 2, 0, 2, 0 
    ],
    high: [ 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 19.8 
    ]
  },
  '30': {
    low: [ 
      1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0, 
      1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0, 
      1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0
    ],
    medium: [
      1.5, 0, 1.5, 0, 2, 0, 1.5, 0, 2, 0, 
      2, 0, 1.5, 0, 3, 0, 1.5, 0, 2, 0,
      2, 0, 1.7, 0, 4, 0, 1.5, 0, 2, 0
    ],
    high: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 29.7
    ]
  },
  '40': {
    low: [
      1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0,
      1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0,
      1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0,
      1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0
    ],
    medium: [
      2, 0, 3, 0, 2, 0, 1.5, 0, 3, 0,
      1.5, 0, 1.5, 0, 2, 0, 1.5, 0, 3, 0,
      1.5, 0, 2, 0, 2, 0, 1.6, 0, 2, 0,
      1.5, 0, 3, 0, 1.5, 0, 2, 0, 1.5, 0
    ],
    high: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 39.6
    ]
  },
  '50': {
    low: [
      1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0,
      1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0,
      1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0,
      1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0,
      1.5, 1.2, 1.2, 1.2, 0, 1.2, 1.2, 1.2, 1.2, 0
    ],
    medium: [
      2, 0, 1.5, 0, 2, 0, 1.5, 0, 3, 0,
      1.5, 0, 1.5, 0, 2, 0, 1.5, 0, 3, 0,
      1.5, 0, 2, 0, 1.5, 0, 2, 0, 2, 0,
      1.5, 0, 3, 0, 1.5, 0, 2, 0, 1.5, 0,
      1.5, 0, 5, 0, 1.5, 0, 2, 0, 1.5, 0
    ],
    high: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 49.5
    ]
  }
};

// Game event translation
const spin = PAYOUTS[segments][risk][float * segments];`}

                </pre>
              </div>
            </div>
          </div>
        );
      case "Unhash Server Seed":
        return (
          <div className="w-full mx-auto text-white bg-[#0f212e] rounded-lg p-4  font-semibold shadow-lg">
            Unhash server seed
          </div>
        );
      case "Calculation":
        return (
          <div className="w-full mx-auto text-white bg-[#0f212e] rounded-lg p-4  font-semibold shadow-lg">
            General Content
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <>
      <div className="flex flex-col gap-y-6 px-4 xl:px-[2.5294rem] lg:px-[30.72px] md:px-[23.04px]">
        <div className="text-white flex justify-between  pt-6 2xl:mx-36">
          <h1 className="text-xl font-semibold flex items-center gap-5">
            <svg viewBox="0 0 64 64" fill="currentColor" className="w-5 h-5 text-[#b1bad3]">
              <path d="M54.727 15.006h3.12V8.37H34.654V2.61H27.99v5.758H4.746v6.637h4.505L0 37.452c0 7.037 5.704 12.741 12.741 12.741 7.038 0 12.741-5.704 12.741-12.741l-9.25-22.446h11.73v39.745h-9.303v6.638h25.165V54.75h-9.171V15.006h13.115l-9.25 22.446c0 7.037 5.703 12.741 12.74 12.741C58.297 50.193 64 44.489 64 37.452l-9.273-22.446ZM5.334 37.452l7.411-17.887 7.357 17.887H5.334Zm38.492 0 7.357-17.887 7.463 17.887h-14.82Z" />
            </svg>
            Provably Fair
          </h1>
        </div>

        <div className="2xl:mx-32  h-full">
          <div className="flex flex-col md:flex-row justify-center gap-y-4">
            <div className="bg-[#0f212e] md:w-44 h-full flex-shrink-0 py-2 rounded-md">
              <div className="bg-[#0f212e]">
                {links.map((link, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveLink(link.label)}
                    className={`w-full text-sm p-2 md:px-[1.25rem] md:py-[0.9375rem] cursor-pointer ${activeLink === link.label
                      ? "bg-[#071824] text-white font-bold border-l-[0.1875rem] border-[#1475e1] "
                      : "bg-[#0f212e] text-white font-bold hover:bg-[#071824] "
                      }`}
                  >
                    {link.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center mt-4 md:mt-0 md:ml-6">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Fairness;
