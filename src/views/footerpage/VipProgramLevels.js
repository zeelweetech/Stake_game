const VipProgramLevels = () => {
    return (
        <div className="bg-[#1A2C38] text-gray-300">
            {/* Header Section */}
            <div className="container mx-auto px-4 py-12">
                {/* Title and Date */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Stake VIP Program Explained - Levels & Rewards
                    </h1>

                    <div className="flex items-center justify-center gap-4 text-gray-400 mb-6">
                        <span>Stake</span>
                        <span>-</span>
                        <span>April 17, 2023</span>
                    </div>

                    {/* Social Share Buttons */}
                    <div className="flex justify-center gap-4">
                        <button className="p-2 bg-[#1877F2] rounded-full hover:bg-[#1865D3] transition-colors">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                            </svg>
                        </button>
                        <button className="p-2 bg-[#1DA1F2] rounded-full hover:bg-[#1A91DA] transition-colors">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Main Image */}
                <div className="max-w-4xl mx-auto mb-12">
                    <img
                        src="https://cdn.sanity.io/images/tdrhge4k/production/99ea15e10a1bbbfa176498adf74dbdd9c9a54aca-1200x630.jpg?q=80&auto=format"
                        alt="Stake VIP Program Ring"
                        className="w-full rounded-lg shadow-xl"
                    />
                </div>

                {/* Introduction Text */}
                <div className="max-w-4xl mx-auto space-y-6">
                    <p className="leading-relaxed">
                        Over 300,000 customers are part of the Stake VIP program, earning exclusive rewards and promotions to enhance their online betting experience. Keen to join them? Find out everything you need to know about the Stake.com VIP club and how to join to take advantage of the best loyalty scheme in the casino and sportsbook industry.
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">
                        What is the VIP Program on Stake?
                    </h2>

                    <p className="leading-relaxed">
                        The VIP program at Stake.com is open to regular players who want to earn exclusive bonuses and rewards while playing at our online casino and sportsbook.
                    </p>
                </div>
            </div>
            <div className="max-w-4xl mx-auto px-4 text-gray-300">
                {/* VIP Enrollment Section */}
                <div className="mb-12">
                    <p className="leading-relaxed mb-6">
                        You can enrol by creating a free account at Stake and by placing bets and playing online casino games. The more you bet, the more points you acquire. Each VIP level has its own wagering requirements. Sports betting is calculated 3x faster than casino betting. Below shows the requirements for casino betting.
                    </p>

                    {/* VIP Levels List */}
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-center space-x-2">
                            <span className="text-yellow-700 font-semibold">Bronze:</span>
                            <span>10,000</span>
                        </li>

                        <li className="flex items-center space-x-2">
                            <span className="text-gray-400 font-semibold">Silver & Gold:</span>
                            <span>50,000 / 100,000</span>
                        </li>

                        <li className="flex items-center space-x-2">
                            <span className="text-purple-400 font-semibold">Platinum I, II, & III:</span>
                            <span>250,000 / 500,000 / 1,000,000</span>
                        </li>

                        <li className="flex items-center space-x-2">
                            <span className="text-purple-400 font-semibold">Platinum IV, V & VI:</span>
                            <span>2,500,000 / 5,000,000 / 10,000,000</span>
                        </li>

                        <li className="flex items-center space-x-2">
                            <span className="text-blue-300 font-semibold">Diamond I, II, III & IV:</span>
                            <span>25,000,000 / 50,000,000 / 100,000,000 / 250,000,000</span>
                        </li>

                        <li className="flex items-center space-x-2">
                            <span className="text-blue-300 font-semibold">Diamond V:</span>
                            <span>500,000,000</span>
                        </li>

                        <li className="flex items-center space-x-2">
                            <span className="text-purple-900 font-semibold">Obsidian:</span>
                            <span>1,000,000,000</span>
                        </li>
                    </ul>
                </div>

                {/* How to Become VIP Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        How Do You Become a VIP?
                    </h2>

                    <p className="leading-relaxed">
                        Qualifying for Stake's online casino VIP program is straightforward. All you need to do to access a wide range of VIP benefits is create a free account at Stake.com and meet the wagering requirements. As you pass each threshold, you will move to the next level on the loyalty ladder and have the opportunity to unlock more and better betting rewards and casino bonuses.
                    </p>
                </div>

                {/* Who Can Be VIP Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Who Can Be a VIP?
                    </h2>

                    <p className="leading-relaxed">
                        Anyone can become a VIP at Stake.com. However, to qualify for the program, you must meet the initial wagering requirements of 10,000 to be invited into the bronze loyalty program. From there, you can move through the levels and unlock the best VIP rewards we offer our loyal customers.
                    </p>
                </div>

                {/* What Does VIP Do Section */}
                <h2 className="text-3xl font-bold text-white mb-6">
                    What Does a VIP Do on Stake?
                </h2>

            </div>
            <div className="max-w-4xl mx-auto px-4 text-gray-300">
                {/* VIP Benefits Section */}
                <div className="mb-12">
                    <p className="leading-relaxed mb-6">
                        When granted VIP status at Stake.com, you can benefit from a range of exclusive promotions (sports and casino), reload bonuses, and bonus codes to use on casino bets and those you bet on the Stake sportsbook.
                    </p>

                    <p className="leading-relaxed mb-6">
                        You also benefit from enhanced support from a dedicated VIP host (from Platinum IV) and can experience the very best that Stake.com has to offer.
                    </p>
                </div>

                {/* Benefits & Rewards Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        What Benefits & Rewards Do Stake VIPs Get?
                    </h2>

                    <p className="leading-relaxed">
                        The Stake VIP program is one of the very best in the business, with VIP players able to access a broad spectrum of features, including weekly boosts, rakeback, and
                        <span className=" hover:underline cursor-pointer"> monthly bonuses</span>, all of which you can use to improve your odds and place a range of bets at the casino and sportsbook.
                    </p>
                </div>

                {/* Rakeback Section */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        What is Rakeback?
                    </h3>

                    <p className="leading-relaxed">
                        As soon as you make it to the bronze level of the Stake.com VIP program, you receive rakeback. This is basically units back every time you place a bet on any casino game, whether you win or lose. The rakeback is calculated for each game you play and is returned to you as a percentage of the original wager. Check out our
                        <span className=" hover:underline cursor-pointer"> rakeback guide</span> to find out more about this tailored bonus.
                    </p>
                </div>

                {/* Reload Section */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        What is a Reload?
                    </h3>

                    <p className="leading-relaxed">
                        You can access the Stake.com reload bonus as a Platinum-level VIP member. This is a daily bonus and is calculated based on the amount that you have wagered over the course of the past 7-42 days. This range will depend on the VIP level. For example, Platinum III members can receive a reload period of 42 days.
                    </p>

                    <p className="leading-relaxed">
                        Your profit over the same period is also calculated, and if it’s negative, you receive additional funds as part of your daily reload bonus.
                    </p>

                    <p className="leading-relaxed">
                        You can read our blog on
                        <span> reload bonuses</span> to discover the mechanics of this epic promo.
                    </p>
                </div>

                {/* Weekly Bonuses Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        What Are The Weekly Bonuses & How Do You Enter Them?
                    </h2>

                    <p className="leading-relaxed mb-6">
                        At the bronze level, you can access a weekly bonus (boosts) to use at the Stake sportsbook or online casino. Again, this is calculated based on your expenditure over the past seven days, as well as your VIP level. The boost is issued each week at 12:30 pm GMT on Saturday. It is posted in the
                        <span className=" hover:underline cursor-pointer"> Stake Telegram VIP group</span>, so you must ensure you're in the channel to access your weekly boost.
                    </p>

                    <p className="leading-relaxed">
                        Stake.com also offers a weekly giveaway of 75,000, and you can secure your entry by wagering at least 1,000 on casino games or sportsbook wagers. You can find out more about the
                        <span className=" hover:underline cursor-pointer"> weekly giveaway here</span>.
                    </p>
                </div>

                {/* Welcome Bonus Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Does Stake Have a Welcome Bonus?
                    </h2>

                    <p className="leading-relaxed">
                        Yes, Stake.com does have a welcome bonus via a redemption code system. You can enter the affiliate referral code of the most recent offer in your account within 24 hours of signing up to take advantage of the terms and conditions of the welcome bonus.
                    </p>
                </div>

                {/* VIP Progress Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        How to Make VIP Progress?
                    </h2>

                    <p className="leading-relaxed mb-6">
                        One of the reasons that the Stake.com VIP program is so popular is that it's really straightforward to understand, and moving up through the levels is related directly to how much you bet.
                    </p>

                    <p className="leading-relaxed mb-6">
                        To level up, you can enjoy
                        <span className=" hover:underline cursor-pointer">live casino games</span>,
                        <span className=" hover:underline cursor-pointer">table games</span>,
                        <span className=" hover:underline cursor-pointer">slots</span>,
                        <span className=" hover:underline cursor-pointer">dice</span>,
                        <span className=" hover:underline cursor-pointer">cards</span>, and every other game at Stake's online casino. Also, the more bets you place on sports, the quicker you progress.
                    </p>

                    <p className="leading-relaxed">
                        Be sure to check out our
                        <span className=" hover:underline cursor-pointer">best games</span> and read our
                        <span className=" hover:underline cursor-pointer">how-to guides</span> to get the most out of your online casino and sportsbook VIP experience.
                    </p>
                </div>

                {/* VIP Progress Calculator Section */}
                <h2 className="text-3xl font-bold text-white mb-6">
                    How to Calculate Your VIP Progress?
                </h2>
         
                    {/* VIP Progress Calculator Content */}
                    <div className="mb-12">
                        <p className="leading-relaxed mb-6">
                            If you're keen to find out when you will move to the next level of the Stake.com VIP program, there's a simple calculation that you can make.
                        </p>

                        <div className=" p-6 rounded-lg mb-6">
                            <p className="leading-relaxed mb-4">
                                Assuming you're 30% of the way to silver, subtract the requirement for bronze (10,000) from silver (50,000) to get 40,000. Then, multiply the percentage by the new wager and divide it by 100 (30% x 40,000/100) to determine how much you've already wagered. In this case, 12,000.
                            </p>

                            <p className="leading-relaxed">
                                Finally, subtract the amount you've already wagered from the new wager required to level up (40,000 – 12,000 = 28,000).
                            </p>
                        </div>

                        <p className="leading-relaxed text-gray-400 italic">
                            Note that the example above is based on casino wagers only. If you have placed sports wagers, or a mix of casino and sports bets, the sportsbook wagers count for 3x the amount.
                        </p>
                    </div>

                    {/* Level Up Rewards Section */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            What Rewards Do You Get When You Level Up?
                        </h2>

                        <p className="leading-relaxed">
                            The awards and promotions offered when you level up vary and depend on the new level that you have reached. You can contact customer support or contact your VIP host to discuss the level-up bonuses, promotions and rewards with the Stake.com VIP program.
                        </p>
                    </div>

                    {/* How to Claim VIP Bonus Section */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            How to Claim Your VIP Bonus on Stake?
                        </h2>

                        <p className="leading-relaxed">
                            Claiming your VIP bonus couldn't be easier at Stake.com. Most offers will be automatically added to your account, and others will be shared in the VIP Telegram group with all the relevant codes and T's and C's. We've made our VIP program as simple as possible to understand to help you make the most out of betting at Stake.
                        </p>
                    </div>

                    {/* VIP Host Section */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            What is a Stake VIP Host & What do they do?
                        </h2>
                    </div>
                        {/* VIP Host Description Section */}
                        <div className="mb-12">
                            <p className="leading-relaxed">
                                When you reach a higher level of the Stake VIP program, you may be assigned a dedicated VIP host available to serve your every need while you bet online. Not only does your host help resolve any issues you face, they are there to help you maximise bonuses and promotions to ensure that you're getting the absolute most out of your online experience.
                            </p>
                        </div>

                        {/* Why Become VIP Section */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-white mb-6">
                                Why Become a VIP on Stake?
                            </h2>

                            <p className="leading-relaxed mb-6">
                                There are so many reasons why you should join the VIP loyalty program at Stake.com. The ability to access exclusive rewards and amazing benefits is perhaps the most significant advantage, offering you units back every time you make a bet at our sportsbook or casino.
                            </p>

                            <p className="leading-relaxed mb-6">
                                To get started, refer to our
                                <span className=" hover:underline cursor-pointer">casino</span> and
                                <span className=" hover:underline cursor-pointer">sports betting</span> guides, as they provide the steps you need to follow to place wagers in the first instance.
                            </p>

                            <p className="leading-relaxed mb-6">
                                You can then refer to the
                                <span className=" hover:underline cursor-pointer">Moonpay documentation</span> to discover the best way to buy cryptocurrency for Stake.com, discover
                                <span className=" hover:underline cursor-pointer">available currencies local to you</span> and check out how to
                                <span className=" hover:underline cursor-pointer">deposit and process withdrawals</span>.
                            </p>
                            <p className="leading-relaxed text-gray-300">
                                No matter how you play, always remember to
                                <span className=" hover:underline cursor-pointer">Gamble Responsibly</span> and follow our
                                <span className=" hover:underline cursor-pointer">Stake Smart Guidelines</span> and
                                <span className=" hover:underline cursor-pointer">monthly budget calculator</span> to stay in control!
                            </p>
                        </div>

                       
                    </div>

      
        </div>
    )
}

export default VipProgramLevels