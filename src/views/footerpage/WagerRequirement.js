import React from 'react'
import { Link } from 'react-router-dom'

const wagerRequirement = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-900 text-gray-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Main content container */}
          <div className="space-y-6">
            {/* Introduction paragraphs */}
            <p className="text-base sm:text-lg leading-relaxed">
              A wager requirement defines the multiplier in which the sum of your deposit and bonus will need to be turned over.
              Since the majority of our games have between a 3.5% to 4.5% house edge, we've set our wager requirement at a 4% edge.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              This means that if users play a 1% edged game, it will complete at a 4x slower rate. Thus, the wager requirement would
              be accumulating at a ratio of $0.25 for every $1 wagered. Conversely, the higher the house edge of the game being
              played, the less wager required to complete the wager requirement.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              While having a wager requirement active, the user's account will be locked until they meet the wager requirement set,
              or alternatively they use up their entire balance (in their relative bonus currency) and have no remaining active bets.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              Users can check the progress of their wager requirement{' '}
              <Link to="/wager-progress" className="text-white-400 hover:text-blue-300 underline">
                here
              </Link>.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              While having an active wager requirement, users are not allowed to wager on certain games. The list of games are as follows:
            </p>


          </div>
          {/* bg-[#0F1720] */}
          <div className="min-h-screen text-white p-6">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div>
                  <h2 class="text-2xl font-bold mb-4">3 Oaks Gaming</h2>
                  <ul class="space-y-2 pl-4">
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300 hover:text-white">All games</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="text-2xl font-bold mb-4">AvatarUX</h2>
                  <ul class="space-y-2 pl-4">
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300 hover:text-white">Majestic Meow</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="text-2xl font-bold mb-4">Belatra</h2>
                  <ul class="space-y-2 pl-4">
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300 hover:text-white">7 Days The Spanish Armada</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300 hover:text-white">Full Moon Magic</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300 hover:text-white">Richy Hog</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300 hover:text-white">Zombie Town</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="text-2xl font-bold mb-4">AvatarUX</h2>
                  <ul class="space-y-2 pl-4">
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300 hover:text-white">Majestic Meow</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="text-2xl font-bold mb-4">Belatra</h2>
                  <ul class="space-y-2 pl-4">
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300 hover:text-white">7 Days The Spanish Armada</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300 hover:text-white">Full Moon Magic</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300 hover:text-white">Richy Hog</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300 hover:text-white">Zombie Town</span>
                    </li>
                  </ul>
                </div>
                {/* Belatra Section */}
                <div>
                  <h2 className="text-xl font-bold mb-4 text-white-400">Belatra</h2>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span className="text-white">Candy Bonanza</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span className="text-white">Candy Madness</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span className="text-white">Cats Go Wild Hold And Win</span>
                    </li>
                  </ul>
                </div>

                {/* iGaming Section */}
                <div>
                  <h2 className="text-xl font-bold mb-4 text-white-400">iGaming</h2>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span className="text-white">Candy Bonanza</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span className="text-white">Candy Madness</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span className="text-white">Cats Go Wild Hold And Win</span>
                    </li>
                  </ul>
                </div>

                {/* Big Time Gaming Section */}
                <div>
                  <h2 className="text-xl font-bold mb-4 text-white-400">Big Time Gaming</h2>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span className="text-white">King Prize Megaways</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span className="text-white">Lil Devil</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span className="text-white">Royal Mint</span>
                    </li>
                  </ul>
                </div>

                {/* Blueprint Section */}
                <div>
                  <h2 className="text-xl font-bold mb-4 text-white-400">Blueprint</h2>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span className="text-white">Bounty Hunter Unlimited</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span className="text-white">Coin Strike</span>
                    </li>
                  </ul>
                </div>

                {/* Bombay Live Section */}
                <div>
                  <h2 className="text-xl font-bold mb-4 text-white-400">Bombay Live</h2>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span className="text-white">Royal Roulette Available</span>
                    </li>
                  </ul>
                </div>

                {/* Booming Games Section */}
                <div>
                  <h2 className="text-xl font-bold mb-4 text-white-400">Booming Games</h2>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span className="text-white">Bang Bang Unlimited</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span className="text-white">Big Heist Series</span>
                    </li>
                  </ul>
                </div>

                {/* ELK Studios Section */}
                <div>
                  <h2 className="text-xl font-bold mb-4 text-white-400">ELK Studios</h2>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span className="text-white">Bompers</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span className="text-white">Dreamzone</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="text-2xl font-bold mb-4">ELK Studios</h2>
                  <ul class="space-y-2 pl-4">
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Birthday!</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Bloopers</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Ecuador Gold</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Electric Sam</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Kaiju</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Lake's Five</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Miss Wildfire</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Poltava</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Sam on the Beach</span>
                    </li>
                  </ul>
                </div>


                <div>
                  <h2 class="text-2xl font-bold mb-4">Endorphina</h2>
                  <ul class="space-y-2 pl-4">
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Crown Coins</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Football Superstar</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Golden Brew</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Golden Ox</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Jade Coins</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Joker Ra: Sunrise</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Lord of the Seas</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Lucky Streak X</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Moon Tiger</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Ninja</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Oriental Dragon</span>
                    </li>
                  </ul>
                </div>


                <div>
                  <h2 class="text-2xl font-bold mb-4">Evolution</h2>
                  <ul class="space-y-2 pl-4">
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Auto-Roulette</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Bac Bo</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Stock Market</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">VIP Roulette</span>
                    </li>
                  </ul>
                </div>


                <div>
                  <h2 class="text-2xl font-bold mb-4">Fantasma Games</h2>
                  <ul class="space-y-2 pl-4">
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">24 Star Dream</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Aphrodite's Fortune</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Circle of Sylvan</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Fortune Llama</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Fortune Llama Hyper Heist</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Gold Pigger</span>
                    </li>
                  </ul>
                </div>



              </div>
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default wagerRequirement
