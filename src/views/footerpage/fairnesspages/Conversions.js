import React from 'react'

const Conversions = () => {
    return (
        <div className="w-full text-white bg-[#0f212e] rounded-lg p-[1.5rem] font-semibold shadow-lg">
            <h2 className="text-2xl font-semibold cursor-default">
                Bytes to Floats
            </h2>
            <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                The output of the Random Number Generator (byteGenerator) function
                is a hexadecimal 32-byte hash. As explained under the cursor
                implementation, we use 4 bytes of data to generate a single game
                result. Each set of 4 bytes are used to generate floats between 0
                and 1 (4 bytes are used instead of one to ensure a higher level of
                precision when generating the float.) It is with these generated
                floats that we derive the formal output of the provable fair
                algorithm before it is translated into game events.
            </p>
            <div className="bg-[#213743] p-4 rounded mt-4 cursor-default xl:w-full lg:w-[40.7rem] md:w-[38.3rem] font-normal overflow-y-auto scrollbar-thin">
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
                Where the process of generating random outputs is universal for
                all our games, it's at this point in the game outcome generation
                where a unique procedure is implemented to determine the
                translation from floats to game events.
            </p>
            <p className="mt-4 text-[#B1BAD3] font-normal cursor-default">
                The randomly float generated is multiplied by the possible
                remaining outcomes of the particular game being played. For
                example: In a game that uses a 52 card deck, this would simply be
                done by multiplying the float by 52. The result of this equation
                is then translated into a corresponding game event. For games
                where multiple game events are required, this process continues
                through each corresponding 4 bytes in the result chain that was
                generated using the described byteGenerator function.
            </p>
            <div className="mt-8">
                <h2 className="font-bold leading-relaxed sm:leading-normal md:leading-loose text-left text-xl sm:text-lg md:text-xl lg:text-2xl flex items-center space-x-2">
                    Shuffle of Game Events
                </h2>
                <p className="text-[#B1BAD3] text-base mt-4 font-normal cursor-default">
                    For games such as Keno, Mines, Pump and Video Poker, where
                    outcomes cannot be duplicated, we then utilise the
                    <a
                        href="#"
                        className="items-center inline-flex font-semibold text-white cursor-pointer"
                    >
                        Fisher-Yates shuffle
                        <svg
                            className="ml-2 h-4 w-4 text-[#B1BAD3]"
                            viewBox="0 0 64 64"
                            fill="currentColor"
                        >
                            <path d="M10.823 53.176h42.353V39.941h7.059v20.294H3.765V3.765h20.293v7.058H10.823v42.353Zm28.236-42.353V3.765h21.176V24.94h-7.059v-9.123L27.88 41.115l-4.994-4.995 25.297-25.296H39.06Z" />
                        </svg>
                    </a>
                    <span>
                        {" "}
                        algorithm. This procedure influences the conversion process
                        from floats to game events because each time a game event is
                        translated, the amount of possible remaining game event
                        possibilities has been reduced for any remaining steps in the
                        result chain.
                    </span>
                </p>
                <p className="mt-4 text-[#B1BAD3] font-normal cursor-default">
                    As an example, in video poker, there is at first 52 cards
                    available in the complete deck, and therefore the first game
                    event is translated by multiplying the float by 52. Once this
                    card has been dealt, there is only 51 remaining cards in the
                    deck, and therefore the second card translation is done by
                    multiplying the second float generated by 51. This continues in
                    the same fashion until all the game events required have been
                    generated.
                </p>
                <p className="mt-4 text-[#B1BAD3] font-normal cursor-default">
                    With regards to Mines, Pump and Keno, this is simply a matter of
                    implementing the same process as explained with video poker but
                    changing that to tiles or locations on the board or grid,
                    ensuring that each game event generated, hasn't already been
                    done so beforehand in the chain of results.
                </p>
            </div>
        </div>
    )
}

export default Conversions