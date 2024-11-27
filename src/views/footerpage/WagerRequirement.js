import React from 'react'
import { Link } from 'react-router-dom'

const wagerRequirement = () => {
  const gamesList = {
    gameArt: [
      "Angry Dragons",
      "Fate's Fury",
      "Great Buffalo Megaways",
      "Lucky Loser",
      "Pirate's Pearl Megaways",
      "Safari Gems",
      "Wild Marmalade"
    ],
    gamesGlobal: [
      "11 Enchanting Relics",
      "1st Of The Irish",
      "3 Lucky Rainbows",
      "9 Skulls of Gold",
      "Africa X UP",
      "African Legends",
      "Age of Conquest",
      "Agnes Mission: Wild Lab",
      "Akiva: Claws of Power",
      "Amazing Link Apollo",
      "Amazing Link Bounty",
      "Amazing Link Hades",
      "Amazon Kingdom",
      "Amazon: Lost Gold",
      "Amber Sterling's Mystic Shrine",
      "Ark of Ra",
      "Augustus",
      "Avalon",
      "Bling Bling Penguin",
      "Bolt X Up",
      "Book of Oz",
      "Buffalo on Fire!",
      "Bust The Mansion",
      "Captain Wild",
      "Chronicles of Olympus X UP",
      "Crazy Digginz: It's All Mine!",
      "Diamond King Gold",
      "Diamond King Jackpots",
      "Diamond Sands",
      "Dr. Wildshock: Mad Loot Lab",
      "Fiona's Christmas Fortune",
      "Fire and Roses Joker",
      "Fish 'Em Up",
      "Fishin' Christmas Pots Of Gold",
      "Fishin' Pots of Gold: Gold Blitz",
      "Fishing Floats of Cash",
      "Gallo Gold Bruno's Megaways",
      "God of Fire",
      "Gustav Minebuster",
      "Immortal Romance",
      "Immortal Romance Mega Moolah",
      "Lucky Clucks",
      "Lucky Leprechaun Clusters",
      "Lucky Twins Link&Win",
      "Mustang Riches",
      "Oink Farm",
      "Outlaw Saloon",
      "Peaky Pigs",
      "Pile 'Em Up",
      "Piles of Presents",
      "Pirates Quest",
      "Retro Reels - Extreme Heat",
      "Scarab Kingdom",
      "Sisters of Oz WOWPOT",
      "Squealin' Riches",
      "Starlite Fruits Mega Moolah",
      "Super 30 Stars",
      "The Fine Reels of Life",
      "Thunderstruck",
      "Thunderstruck II",
      "Thunderstruck Stormchaser",
      "Ticket to Riches",
      "Treasures Of Kilauea",
      "Triple Irish",
      "Trojan Kingdom",
      "Unusual Suspects",
      "Viking Queen",
      "Vikings Journey",
      "Wild Catch",
      "Wild Link Frenzy",
      "Wild Orient",
      "Witch Feature"
    ],
    goldenHero: [
      "Mimi and Magic Staff",
      "Monster Domination"
    ],
    hacksawGaming: [
      "SlickEm"
    ],
    jadeRabbit: [
      "Ace Race",
      "Angler's Paradise",
      "Steam Spin",
      "Red Hot Reels"
    ],
    netEnt: [
      "Babylon Riches",
      "Buckshot Wilds",
      "Codex of Fortune",
      "Cursed Treasure",
      "Dead or Alive",
      "Gladiator Clash",
      "Dragons Playground",
      "Mermaids",
      "Let It Burn",
      "Lost Relics 2",
      "Jack Hammer 3",
      "Jingle Bells Bonanza",
      "Mummy Megaways",
      "Rabid Randy",
      "Rainforest Gold",
      "Rome: The Golden Age",
      "Pirate's Party",
      "Serengeti Kings",
      "Street Fighter 2",
      "The Wish Master Megaways",
      "Ticket To Wild"
    ],
    novomatic: [
      "Jackass Gold Hold & Win"
    ],
    octoplay: [
      "Buffalo Blaze: Wild Wealth"
    ],
    oneTouch: [
      "Flexing Dragons",
      "Reel Fruitz Frenzy",
      "Steam Vault",
      "Tiki Terror",
      "Wacky Wildlife",
      "Wealthy Sharks"
    ],
    pgSoft: [
      "Dragon Hatch",
      "Dragon Hatch 2",
      "Fortune Dragon",
      "Fortune Rabbit",
      "Fortune Tiger",
      "Fortune Mouse",
      "Fortune Ox",
      "Futebol Fever"
    ],
    playnGo: [
      "3 Clown Monty 2",
      "15 Crystal Roses: A Tale of Love",
      "Baker's Treat",
      "Cat Wilde and The Incan Quest",
      "Chambers of Ancients",
      "Eye of the Kraken",
      "Fu/ong 88",
      "GEMIX",
      "Gerard's Gambit",
      "Golden Legend",
      "Happy Halloween",
      "Helloween",
      "Hugo 2",
      "Love is in the Fair",
      "Mahjong 88",
      "Moon Princess",
      "Moon Princess 100",
      "Moon Princess Power of Love",
      "Multifruit 81",
      "Pearls of India",
      "Piggy Blitz Disco Gold",
      "Pimped",
      "Rage to Riches",
      "Rich Wilde and the Pearls of Vishnu",
      "Royal Masquerade",
      "Sea Hunter",
      "Tower Quest",
      "Viking Runecraft"
    ],
    popiPlay: [
      "Guns and Dragons",
      "Mythos",
      "Slotham City",
      "Wild Wild Bank"
    ],
    pragmaticPlay: [
      "3 Kingdoms - Battle of Red Cliffs",
      "5 Lions Gold",
      "7 Clovers of Fortune",
      "Asgard",
      "Candy Jar Clusters",
      "Cash Elevator",
      "Chests of Cai Shen",
      "Ding Dong Christmas Bells",
      "Dragon Kingdom",
      "Gold Train",
      "Jade Butterfly",
      "Jungle Gorilla",
      "Lobster Bob's Sea Food and Win It",
      "Pinup Girls",
      "Snakes and Ladders Megadice",
      "Spaceman",
      "The Champions",
      "Tigre Studio",
      "Wheel O'Gold",
      "Wild Depths"
    ],
    printStudios: [
      "Honey Hunters"
    ],
    pushGaming: [
      "Blaze of Ra",
      "Hearts Highway",
      "Jammin Jars 2",
      "Mad Cars",
      "Shamrock Saints",
      "Tiki Tumble",
      "Wild Swarm",
      "Wild Swarm 2"
    ],
    quickspin: [
      "Brawlers Bar Cash Collect",
      "Crown of Valor",
      "Skulls Up!",
      "Shields of Lambda"
    ],
    redRakeGaming: [
      "Boomerang Jack's Lost Mines",
      "Captain Wild",
      "Gustav Minebuster",
      "Million 777 Bells",
      "Million 777 Wheel",
      "Million Christmas",
      "Super 30 Stars",
      "Triple Irish",
      "Vikings Journey"
    ],
    redTiger: [
      "10,001 Nights Megaways",
      "Bounty Raid 2",
      "Buffalo Collector",
      "Diamond Blitz 2",
      "Diamond Doggies",
      "Dont Hit Plz",
      "Dragon's Clusterbuster",
      "Dragon's Fire Infinireels",
      "Dragon's Luck Megaways",
      "Dragon's Mirror",
      "Dynamite Riches",
      "Dynamite Riches Megaways",
      "Egypt Clusterbuster",
      "Fa Fa Babies 2",
      "Get the Gold Infinireels",
      "Gold Mine Mistress",
      "Gonzo's Quest Megaways",
      "London Tube",
      "Midnight Thirst",
      "Monster Unchained",
      "Play with the Devil",
      "Primate King Megaways",
      "Reptizillions Power Reels",
      "Roman Emperors",
      "Sea Boat Adventure Megaways",
      "Sword Stomp",
      "Siren's Riches",
      "Spin Town",
      "Spooky Carnival",
      "The Wild Kiss",
      "Turtle Paradise",
      "Ultra Rich",
      "Zaida's Fortune",
      "Zeus Lightning Power Reels",
      "Zillard King"
    ],
    relaxGaming: [
      "5 Monsters",
      "Book of 99",
      "Christmas Santa",
      "Deep Descent",
      "Feather Fury",
      "Frequent Flyer",
      "Golden Calaveras",
      "Great Pigsby Megaways",
      "Hellcatraz",
      "Money Sleigh",
      "Not Now Norman",
      "Orca's Wild Bonanza Extenda Edition",
      "Phoenix Up Cash",
      "The Wild Drifter",
      "Tiki Bonanza",
      "Titan Strike",
      "Towering Pays Egypt",
      "Treasure Pirates",
      "Valkyrie Wild Storm",
      "Wild Donuts"
    ],
    slotmill: [
      "Cash Pandas",
      "Sands of Eternity"
    ],
    spinomenal: [
      "1 Red Baba Yaga",
      "1 Reel Beauty",
      "1 Reel Buffalo",
      "1 Reel - Caribbean Treasure",
      "1 Reel: Cash Vault",
      "1 Reel Demi Gods II",
      "1 Reel Demi Gods III",
      "1 Reel Demi Gods IV",
      "1 Reel Egypt",
      "1 Reel Elves",
      "1 Reel Fruits",
      "1 Real Golden Piggy",
      "1 Reel Halloween",
      "1 Reel Hawaiian Bliss",
      "1 Reel Joker",
      "1 Reel Majestic King",
      "1 Reel Mammoth",
      "1 Reel Monkey",
      "1 Reel Panther",
      "1 Reel Patrick",
      "1 Reel Reef",
      "1 Reel Shamrock",
      "1 Reel Thanksgiving",
      "1 Reel Wolf Fang",
      "1 Reel Xmas",
      "Aztec Spell",
      "Aztec Spell - 10 Lines",
      "Beer Collection - 20 Lines",
      "Beer Collection - 30 Lines",
      "Book of Alice",
      "Book Of Demi Gods III",
      "Book Of Rebirth",
      "Book of The Divine",
      "Colossus Fruits",
      "Comic Craze",
      "Dwarfs Gone Wild",
      "Demi Gods III",
      "Egyptian Rebirth II",
      "Egyptian Rebirth II 10 Line",
      "Fruits Collection – 10 Lines",
      "Gangster's Gold",
      "Goddess Of Lotus",
      "Goddess Of Lotus- 10 Lines",
      "Magical Amazon",
      "Penny Fruits Xtreme",
      "Queen Of Fire",
      "Spinning Bears",
      "Story of the Samurai",
      "Story of the Samurai – 10 Lines"

    ],
    stakeOriginals: [
      "Dice",
      "Crash",
      "Dragon Tower",
      "Keno",
      "Limbo",
      "Hilo",
      "Slide",
      "Mines",
      "Blackjack",
      "Plinko"
    ],
    stakePoker: [
      "Listor Poker"
    ],
    thunderkick: [
      "12 Bolts of Thunder",
      "1429 Uncharted Seas",
      "Beat the Beast: Quetzalcoatl's Trial",
      "Not Enough Kittens",
      "Raven's Eye",
      "Rocket Fellas Inc",
      "The Rift"
    ],
    truelab: [
      "Aztec Legend",
      "Crypts of Fortune",
      "Day and Night",
      "Mooving Wilds",
      "Victoria Wild",
      "Victoria Wild Deluxe"
    ],
    wazdan: [
      "All games"
    ]
  };

  return (
    <div>
      <div className="bg-[#0F212E] rounded-lg">
        <div className="container mx-auto px-4 py-8 text-white">
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
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Hades River of Souls</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Miss Rainbow</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Prometheus: Titan Of Fire</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Serpent Gold Coins</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Shadow Summoner Egypt</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Shadow Summoner Elementals</span>
                    </li>
                    <li class="flex items-center space-x-2">
                      <div class="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span class="text-gray-300">Vulcan's Gold</span>
                    </li>

                  </ul>
                </div>
                <div className="mb-8">
                  <h2 className="text-white text-2xl font-bold mb-4">GameArt</h2>
                  <ul className="space-y-2">
                    {gamesList.gameArt?.map((game) => (
                      <li key={game} className="flex items-center text-gray-300">
                        <span className="mr-2">•</span>
                        <span className="hover:text-blue-400 cursor-pointer">{game}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-white text-2xl font-bold mb-4">Games Global</h2>
                  <ul className="space-y-2">
                    {gamesList.gamesGlobal?.map((game) => (
                      <li key={game} className="flex items-center text-gray-300">
                        <span className="mr-2">•</span>
                        <span className="hover:text-blue-400 cursor-pointer">{game}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-8">
                  <ul className="space-y-2">
                    {gamesList.mainGames?.map((game) => (
                      <li key={game} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="hover:text-blue-400 cursor-pointer">{game}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4 text-white">Golden Hero</h2>
                  <ul className="space-y-2">
                    {gamesList.goldenHero?.map((game) => (
                      <li key={game} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="hover:text-blue-400 cursor-pointer">{game}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4 text-white">Hacksaw Gaming</h2>
                  <ul className="space-y-2">
                    {gamesList.hacksawGaming?.map((game) => (
                      <li key={game} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="hover:text-blue-400 cursor-pointer">{game}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4 text-white">Jade Rabbit</h2>
                  <ul className="space-y-2">
                    {gamesList.jadeRabbit?.map((game) => (
                      <li key={game} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="hover:text-blue-400 cursor-pointer">{game}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-4 text-white">NetEnt</h2>
                  <ul className="space-y-2">
                    {gamesList.netEnt?.map((game) => (
                      <li key={game} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="hover:text-blue-400 cursor-pointer">{game}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4 text-white">Novomatic</h2>
                  <ul className="space-y-2">
                    {gamesList.novomatic?.map((game) => (
                      <li key={game} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="hover:text-blue-400 cursor-pointer">{game}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Octoplay */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4 text-white">Octoplay</h2>
                  <ul className="space-y-2">
                    {gamesList.octoplay?.map((game) => (
                      <li key={game} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="hover:text-blue-400 cursor-pointer">{game}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4 text-white">OneTouch</h2>
                  <ul className="space-y-2">
                    {gamesList.oneTouch?.map((game) => (
                      <li key={game} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="hover:text-blue-400 cursor-pointer">{game}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4 text-white">PG Soft</h2>
                  <ul className="space-y-2">
                    {gamesList.pgSoft?.map((game) => (
                      <li key={game} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="hover:text-blue-400 cursor-pointer">{game}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-4 text-white">PlaynGo</h2>
                  <ul className="space-y-2">
                    {gamesList.playnGo?.map((game) => (
                      <li key={game} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="hover:text-blue-400 cursor-pointer">{game}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4 text-white">PopiPlay</h2>
                  <ul className="space-y-2">
                    {gamesList.popiPlay?.map((game) => (
                      <li key={game} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="hover:text-blue-400 cursor-pointer">{game}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-4 text-white">Pragmatic Play</h2>
                  <ul className="space-y-2">
                    {gamesList.pragmaticPlay?.map((game) => (
                      <li key={game} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="hover:text-blue-400 cursor-pointer">{game}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4 text-white">Print Studios</h2>
                  <ul className="space-y-2">
                    {gamesList.printStudios?.map((game) => (
                      <li key={game} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="hover:text-blue-400 cursor-pointer">{game}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4 text-white">Push Gaming</h2>
                  <ul className="space-y-2">
                    {gamesList.pushGaming?.map((game) => (
                      <li key={game} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="hover:text-blue-400 cursor-pointer">{game}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4 text-white">Quickspin</h2>
                  <ul className="space-y-2">
                    {gamesList.quickspin?.map((game) => (
                      <li key={game} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="hover:text-blue-400 cursor-pointer">{game}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Red Rake Gaming */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4 text-white">Red Rake Gaming</h2>
                  <ul className="space-y-2">
                    {gamesList.redRakeGaming?.map((game) => (
                      <li key={game} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="hover:text-blue-400 cursor-pointer">{game}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-4 text-white">Red Tiger</h2>
                  <ul className="space-y-2">
                    {gamesList.redTiger?.map((game) => (
                      <li key={game} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="hover:text-blue-400 cursor-pointer">{game}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-4 text-white">Relax Gaming</h2>
                  <ul className="space-y-2">
                    {gamesList.relaxGaming?.map((game) => (
                      <li key={game} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="hover:text-blue-400 cursor-pointer transition-colors duration-200">
                          {game}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4 text-white">Slotmill</h2>
                  <ul className="space-y-2">
                    {gamesList.slotmill?.map((game) => (
                      <li key={game} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="hover:text-blue-400 cursor-pointer transition-colors duration-200">
                          {game}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-4 text-white">Spinomenal</h2>
                  <ul className="space-y-2">
                    {gamesList.spinomenal?.map((game) => (
                      <li key={game} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="hover:text-blue-400 cursor-pointer transition-colors duration-200">
                          {game}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4 text-white">Listor Originals</h2>
                  <ul className="space-y-2">
                    {gamesList.stakeOriginals?.map((game) => (
                      <li key={game} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="hover:text-blue-400 cursor-pointer transition-colors duration-200">
                          {game}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Listor Poker */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4 text-white">Listor Poker</h2>
                  <ul className="space-y-2">
                    {gamesList.stakePoker?.map((game) => (
                      <li key={game} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="hover:text-blue-400 cursor-pointer transition-colors duration-200">
                          {game}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-4 text-white">Thunderkick</h2>
                  <ul className="space-y-2">
                    {gamesList.thunderkick?.map((game) => (
                      <li key={game} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="hover:text-blue-400 cursor-pointer transition-colors duration-200">
                          {game}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4 text-white">Truelab</h2>
                  <ul className="space-y-2">
                    {gamesList.truelab?.map((game) => (
                      <li key={game} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="hover:text-blue-400 cursor-pointer transition-colors duration-200">
                          {game}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Wazdan */}
                <div>
                  <h2 className="text-xl font-bold mb-4 text-white">Wazdan</h2>
                  <ul className="space-y-2">
                    {gamesList.wazdan?.map((game) => (
                      <li key={game} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="hover:text-blue-400 cursor-pointer transition-colors duration-200">
                          {game}
                        </span>
                      </li>
                    ))}
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
