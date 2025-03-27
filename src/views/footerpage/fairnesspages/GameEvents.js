import React from 'react'

const GameEvents = () => {
    return (
        <div className="w-full text-white bg-[#0f212e] rounded-lg p-[1.5rem] font-semibold shadow-lg">
            <p className="text-[#B1BAD3] text-base font-normal cursor-default">
                Game events are translation of the randomly generated floats into
                a relatable outcome that is game specific. This includes anything
                from the outcome of a dice roll to the order of the cards in a
                deck, or even the location of every bomb in a game of mines.
            </p>
            <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                Below is a detailed explanation as to how we translate floats into
                events for each particular different game on our platform.
            </p>
            <div className="mt-8">
                <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                    Blackjack, Hilo & Baccarat
                </h2>
                <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                    In a standard deck of cards, there are 52 unique possible
                    outcomes. When it comes to playing Blackjack, Hilo & Baccarat on
                    our platform, we utilise an unlimited amount of decks when
                    generating the game event, and therefore each turn of a card
                    always has the same probability. To calculate this, we multiply
                    each randomly generated float by 52, and then translate that
                    result into a particular card, based on the following index:
                </p>
            </div>
            <div className="bg-[#213743] p-4 rounded mt-4 cursor-default xl:w-full lg:w-[40.7rem] md:w-[38.3rem] font-normal overflow-y-auto scrollbar-thin">
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
                The only differentiating factor involved with these games is that
                with Hilo and Blackjack there is a curser of 13 to generate 52
                possible game events for cases where a large amount of cards are
                required to be dealt to the player, whereas when it comes to
                Baccarat we only ever need 6 game events generated to cover the
                most amount of playable cards possible.
            </p>
            <div className="mt-4">
                <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                    Cases
                </h2>
            </div>
            <p className="mt-4 text-[#B1BAD3] font-normal cursor-default">
                In a Cases bet, a single random float between 0.0 and 1.0 is
                generated, which is used as the probability to select the winning
                case from a predefined payout table. This payout table can be
                found at the footer of the Cases game and in the provable fairness
                verification calculation page.
            </p>
            <div className="mt-8">
                <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                    Diamond Poker
                </h2>
                <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                    When playing Diamond Poker, there is 7 possible outcomes in the
                    form of gems. To achieve this, we multiply each float generated
                    by 7 before it is translated into a corresponding gem using the
                    following index:
                </p>
                <div className="bg-[#213743] p-4 rounded mt-4 cursor-default xl:w-full lg:w-[40.7rem] md:w-[38.3rem] font-normal overflow-y-auto scrollbar-thin">
                    <pre>
                        {`// Index of 0 to 6 : green to blue
const GEMS = [ green, purple, yellow, red, cyan, orange, blue ];

// Game event translation
const gem = GEMS[Math.floor(float * 7)];`}
                    </pre>
                </div>
                <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                    Both the dealer and the player are dealt 5 gems each, which
                    means that a complete game of Diamond Poker requires the
                    generation of 10 game events. The first 5 are assigned to the
                    dealer and the second 5 are assigned to the player.
                </p>
            </div>
            <div className="mt-8">
                <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                    Diamonds
                </h2>
                <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                    When playing Diamonds, there is 7 possible outcomes in the form
                    of gems. To achieve this, we multiply each float generated by 7
                    before it is translated into a corresponding gem using the
                    following index:
                </p>
                <div className="bg-[#213743] p-4 rounded mt-4 cursor-default xl:w-full lg:w-[40.7rem] md:w-[38.3rem] font-normal overflow-y-auto scrollbar-thin">
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
                    In our version of dice, we cover a possible roll spread of 00.00
                    to 100.00, which has a range of 10,001 possible outcomes. The
                    game event translation is done by multiplying the float by
                    number of possible outcomes and then dividing by 100 so that the
                    resulting number fits the constraints of our stated dice range.
                </p>
                <div className="bg-[#213743] p-4 rounded mt-4 cursor-default xl:w-full lg:w-[40.7rem] md:w-[38.3rem] font-normal overflow-y-auto scrollbar-thin">
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
                    When it comes to Limbo, we use a two-step process. Firstly, we
                    take the float and multiply it by both the maximum possible
                    multiplier and the house edge. Then, in order to generate a game
                    event that has
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
                        , we divide the maximum possible multiplier by the result of
                        the first step to create the game event in the form of a crash
                        point.
                    </span>
                </p>
                <div className="bg-[#213743] p-4 rounded mt-4 cursor-default xl:w-full lg:w-[40.7rem] md:w-[38.3rem] font-normal overflow-y-auto scrollbar-thin">
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
                    For any game of Plinko, the generated outcome is based on the
                    path of the falling ball. The game event determines the
                    direction of the falling ball for each level in the falling
                    process. Players can choose between 8 and 16 pins of play, which
                    determines the number of game events required to generate a
                    complete path from top to bottom. Since there are only two
                    possible directions (left or right) the translation is done by
                    multiplying each float by 2, which maps to the following index:
                </p>
                <div className="bg-[#213743] p-4 rounded mt-4 cursor-default xl:w-full lg:w-[40.7rem] md:w-[38.3rem] font-normal overflow-y-auto scrollbar-thin">
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
                    Our Roulette is derived from the European version of the game
                    where the wheel consists of 37 possible different pockets,
                    ranging from 0 to 36. The game event is calculated by
                    multiplying the float by 37 and then translated into a
                    corresponding pocket using the following index:
                </p>
                <div className="bg-[#213743] p-4 rounded mt-4 cursor-default xl:w-full lg:w-[40.7rem] md:w-[38.3rem] font-normal overflow-y-auto scrollbar-thin">
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
                    Traditional Keno games require the selection of 10 possible game
                    events in the form of hits on a board. To achieve this, we
                    multiply each float by the number of possible unique squares
                    that exist. Once a hit has been placed, it cannot be chosen
                    again, which changes the pool size of the possible outcomes.
                    This is done by subtracting the size of possible maximum
                    outcomes by 1 for each iteration of game event result generated
                    using the corresponding float provided, using the following
                    index:
                </p>
                <div className="bg-[#213743] p-4 rounded mt-4 cursor-default xl:w-full lg:w-[40.7rem] md:w-[38.3rem] font-normal overflow-y-auto scrollbar-thin">
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
                    The fisher-yates shuffle implementation is utilised to prevent
                    duplicate possible hits being generated.
                </p>
            </div>
            <div className="mt-8">
                <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                    Mines
                </h2>
                <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                    A mine game is generated with 24 separate game events, in the
                    form of mines on the board. Each float is multiplied by the
                    number of possible unique tiles still remaining on the board.
                    This is done by subtracting the number of tiles remaining by 1
                    for each iteration of game event result generated using the
                    corresponding float provided. The location of the mine is
                    plotted using a grid position from left to right, top to bottom.
                </p>
                <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                    The fisher-yates shuffle implementation is utilised to prevent
                    duplicate possible hits being generated. Between 1 and 24 game
                    event results are used, based on the settings chosen.
                </p>
            </div>
            <div className="mt-8">
                <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                    Pump
                </h2>
                <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                    A Pump game is generated with 24 separate game events, in the
                    form of pops at each round. Each float is multiplied by the
                    number of rounds remaining. This is done by subtracting the
                    number of rounds remaining by 1 for each pump.{" "}
                </p>
                <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                    The fisher-yates shuffle implementation is utilised to prevent
                    duplicate possible hits being generated. Between 1 and 24 game
                    event results are used, based on the settings chosen.
                </p>
            </div>
            <div className="mt-8">
                <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                    Video Poker
                </h2>
                <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                    A video poker game involves 52 separate game events, in the form
                    of cards in a deck. Each float is multiplied by the number of
                    possible cards still remaining in the deck. This is done by
                    subtracting the number of cards remaining by 1 for each
                    iteration of game event result generated using the corresponding
                    float provided. This is done by selecting a card from the
                    following index:
                </p>
                <div className="bg-[#213743] p-4 rounded mt-4 cursor-default xl:w-full lg:w-[40.7rem] md:w-[38.3rem] font-normal overflow-y-auto scrollbar-thin">
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
                    The fisher-yates shuffle implementation is utilised to prevent
                    duplicate cards being generated.
                </p>
            </div>
            <div className="mt-8">
                <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                    Wheel
                </h2>
                <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                    The game event number is calculated by multiplying the float by
                    the possible outcomes in the segment. It is then used to
                    determine the game event result as a multiplier, using the
                    following index:
                </p>
                <div className="bg-[#213743] h-80 overflow-auto scroll-m-3.5 p-4 rounded mt-4 cursor-default xl:w-full lg:w-[40.7rem] md:w-[38.3rem] font-normal overflow-y-auto scrollbar-thin">
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
            <div className="mt-8">
                <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                    Crash
                </h2>
                <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                    See the
                    <a
                        href="#"
                        className="items-center inline-flex ml-1 font-semibold text-white cursor-pointer"
                    >
                        BitcoinTalk seeding thread
                        <svg
                            className="ml-2 h-4 w-4 text-[#B1BAD3]"
                            viewBox="0 0 64 64"
                            fill="currentColor"
                        >
                            <path d="M10.823 53.176h42.353V39.941h7.059v20.294H3.765V3.765h20.293v7.058H10.823v42.353Zm28.236-42.353V3.765h21.176V24.94h-7.059v-9.123L27.88 41.115l-4.994-4.995 25.297-25.296H39.06Z" />
                        </svg>
                    </a>
                    <span className="ml-2 cursor-default">
                        to learn about how we utilise the salt hash based provable
                        fairness modal for this particular game.
                    </span>
                </p>
            </div>
            <div className="mt-8">
                <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                    Slide
                </h2>
                <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                    See the
                    <a
                        href="#"
                        className="items-center inline-flex ml-1 font-semibold text-white cursor-pointer"
                    >
                        BitcoinTalk seeding thread
                        <svg
                            className="ml-2 h-4 w-4 text-[#B1BAD3]"
                            viewBox="0 0 64 64"
                            fill="currentColor"
                        >
                            <path d="M10.823 53.176h42.353V39.941h7.059v20.294H3.765V3.765h20.293v7.058H10.823v42.353Zm28.236-42.353V3.765h21.176V24.94h-7.059v-9.123L27.88 41.115l-4.994-4.995 25.297-25.296H39.06Z" />
                        </svg>
                    </a>
                    <span className="ml-2 cursor-default">
                        to learn about how we utilise the salt hash based provable
                        fairness modal for this particular game.
                    </span>
                </p>
            </div>
            <div className="mt-8">
                <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                    Scarab Spin / Tome of Life
                </h2>
                <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                    The game event number is calculated by multiplying the float by
                    the possible outcomes in the reel. The first 4 reels have a
                    length of 30 possible outcomes, whilst the last reel has 41. The
                    game event determines the central stop position for each reel.
                    This game consists of 5 game event numbers, until the case of a
                    bonus round, where more are generated.
                </p>
            </div>
            <div className="mt-8">
                <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                    Blue Samurai
                </h2>
                <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                    Blue Samurai slots has 3 different types of spins. Regular,
                    bonus and special.
                </p>
                <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                    For regular and bonus spins, 18 floats from 0 to 1 are generated
                    from your hash. Unlike Scarab Spin slots, which has fixed reels,
                    Samurai slots has dynamic reels, meaning each symbol is
                    generated from the corresponding float that was assigned to it.
                </p>
                <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                    We use weighted random sampling to assign each float to its
                    corresponding tile, in the same order, moving down the reels,
                    from left to right. Each symbol has its own fixed probability /
                    chance of appearing in any one tile, with the outer 2 reels
                    having a different set of probabilities to the inner 3 reels.
                    For a bit more information on how symbols are selected, see
                    <a
                        href="#"
                        className="items-center inline-flex ml-1 font-semibold text-white cursor-pointer"
                    >
                        fitness proportionate selection algorithm
                        <svg
                            className="ml-2 h-4 w-4 text-[#B1BAD3]"
                            viewBox="0 0 64 64"
                            fill="currentColor"
                        >
                            <path d="M10.823 53.176h42.353V39.941h7.059v20.294H3.765V3.765h20.293v7.058H10.823v42.353Zm28.236-42.353V3.765h21.176V24.94h-7.059v-9.123L27.88 41.115l-4.994-4.995 25.297-25.296H39.06Z" />
                        </svg>
                    </a>
                    <span className="ml-2 cursor-default">to learn more.</span>
                </p>
                <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                    Special spins are slightly different. For a start only 12 floats
                    are taken from your hash, as the outer reels are disabled.
                    Between each special spin, any samurai symbols stay in place for
                    the remainder of the game, with the result being the final count
                    of samurais. This means that if you were to have for example 1
                    samurai stick in the first spin - we'd technically only need 11
                    floats for the subsequent spin. For the sake of simplicity in
                    the probably fair model, we just generate 12 floats every time,
                    and if the float that was allocated for a tile has a stuck
                    samurai from a previous spin, then that float is not used at
                    all.
                </p>
            </div>
            <div className="mt-8">
                <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                    Dragon Tower
                </h2>
                <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                    A Dragon Tower game is generated with 9 separate game events, in
                    the form of the levels up the tower. We generate a number of
                    eggs depending on the difficulty for each level, and have a
                    range of tiles the egg can be on also represented by an integer.
                </p>
                <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                    Each float generated is then converted to integers to determine
                    the egg location on each row. For example: A level on difficulty
                    easy would be represented like this: [0, 1, 3] - eggs would be
                    present at tile 1 and 2 and 4.
                </p>
                <div className="bg-[#213743] p-4 rounded mt-4 cursor-default xl:w-full lg:w-[40.7rem] md:w-[38.3rem] font-normal overflow-y-auto scrollbar-thin">
                    <pre>
                        {`// count represents the number of eggs
// size represents the number of possible squares

const LEVEL_MAP = {
easy: { count: 3, size: 4 },
medium: { count: 2, size: 3 },
hard: { count: 1, size: 2 },
expert: { count1, size: 3 },
master: { count: 1, size: 4 },
}`}
                    </pre>
                </div>
                <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                    The fisher-yates shuffle implementation is utilised to prevent
                    duplicate eggs on a row.
                </p>
            </div>
        </div>
    )
}

export default GameEvents