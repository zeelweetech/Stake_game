import React from 'react'

const Sportsbook = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 text-gray-300">
            <h1 className="text-3xl font-bold mb-6 text-white">Sportsbook Rules and Policies</h1>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                    <ul className='list-disc'>
                        <li>General</li>
                        <li>Soccer</li>
                        <li>Tennis</li>
                        <li>Basketball</li>
                        <li>American Football</li>
                        <li>Ice Hockey</li>
                        <li>Baseball</li>
                        <li>Mixed Martial Arts (MMA)</li>
                        <li>Boxing</li>
                        <li>Golf</li>
                        <li>Handball</li>
                        <li>Volleyball</li>
                        <li>Motor Sports</li>
                        <li>Formula 1</li>
                        <li>NASCAR</li>
                        <li>Futsal</li>
                        <li>Badminton</li>
                        <li>Rugby</li>
                        <li>Rugby Sevens</li>
                        <li>Darts</li>
                        <li>Snooker</li>
                        <li>Table Tennis</li>
                        <li>Bowls</li>
                        <li>Squash</li>
                        <li>Special Rules</li>
                        <li>Field Hockey</li>
                        <li>Alpine Skiing</li>
                        <li>Ski Jumping</li>
                        <li>Athletics</li>
                        <li>Cricket</li>
                        <li>All Other Sports</li>
                        <li>Esports - General</li>
                        <li>Counter Strike: Global Offensive</li>
                        <li>Valorant</li>
                        <li>Dota 2</li>
                        <li>League of Legends</li>
                        <li>King of Glory</li>
                        <li>FIFA</li>
                        <li>NBA2K</li>
                        <li>Counter Strike: Global Offensive - Wingman</li>
                        <li>Other Esports Titles</li>
                    </ul>
                </div>
            </div>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">General</h2>
                <h3 className="text-xl font-semibold mb-3 text-white">Matches not played as listed</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        In situations where the event is played at a venue different to that listed, all bets on the event will stand provided the match is not switched to the opponent's ground and home and away team for a listed match are not reversed, in which we reserve the right to void betting.
                    </li>
                    <li>
                        In the event of a change of opponent from the one listed, all bets for that match are void.
                    </li>
                    <li>
                        If a team field their reserve team or an underage team instead of their first team, we reserve the right to void betting.
                    </li>
                    <li>
                        If a match does not adhere to the generally accepted format (e.g., unusual period length, counting procedure, format of a match etc.), we reserve the right to void betting.
                    </li>
                    <li>
                        If the rules or format of a match differ from our accepted norm, we reserve the right to void betting.
                    </li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Markets including overtime</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        All match markets DO NOT include overtime unless otherwise stated.
                    </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Odds/Time Changes</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        We reserve the right to change the odds-on offer at any time as well as suspend or close betting on events before the scheduled start time.
                    </li>
                    <li>
                        In the case of any obviously incorrectly displayed or calculated prices, we reserve the right to void betting. This includes a deviation of more than 100% in the pay-out compared to the market average.
                    </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Technical Errors</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        We reserve the right to suspend odds during an event due to failed transmission or other technical related issues or if fraud is suspected.
                    </li>
                    <li>
                        We reserve the right to void bets even subsequently if any such bet was won by the customer because of a technical fault or error, inclusive of but not limited to an error or fault in transmission.
                    </li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Abandonments, cancellations & postponements</h3>
                <p className="mb-4">Unless otherwise stated in the Specific Rules for the specific sport:</p>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        If a match is postponed or abandoned and is completed within 48 hours of the previous scheduled start time, then all open bets will be settled with the final result.
                    </li>
                    <li>
                        If the match is not completed within 48 hours, then all undecided bets are considered void.
                    </li>
                    <li>
                        Please note that games which have their start date changed to show on alternative live TV, or to ease fixture congestion will not be classed as postponed.
                    </li>
                    <li>
                        An abandonment is where a match is halted before the completion of the allocated match time and not played out to conclusion on the same day. If a market has already been determined at the time of abandonment (i.e., the outcome has already been decided) such as 'First Team to Score', 'First goalscorer', etc. will stand. The market must be fully determined for bets to stand.
                    </li>
                    <li>
                        If live coverage must be halted and the match finishes regularly, all markets will be settled according to the result.
                    </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Push Rule (2-way Markets)</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        In the event of a Winner market (with just home and away team as outcomes) being offered and the event results in a draw we will settle the market as void.
                    </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Total</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        When an exact number is quoted as the line for an over/ under market, if the result will be the quoted line, then bets will be made void.
                    </li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Handicap</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        When an exact number is quoted as the line for an home/ away market, if the result will be the quoted line, then bets will be made void.
                    </li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Race to X (incl. overtime)</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        If a match ends before the Xth is reached, this market is considered void.
                    </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Half/Quarter/Period Markets</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        Unless otherwise stated, only goals/points/corners etc. scored in the respective period will count towards settlement of the market.
                    </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Odd/Even Markets</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        Unless otherwise stated, total counts of zero will be settled as Even.
                    </li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Results</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        If the outcome of a market cannot be verified, we reserve the right to delay the settlement until official confirmation. If the outcome of a market cannot be verified officially, we reserve the right to void them.
                    </li>
                    <li>
                        If markets were offered when the outcome was already known, we reserve the right to void any betting.
                    </li>
                    <li>
                        In the case of an incorrect settlement of markets, we reserve the right to correct them anytime.
                    </li>
                    <li>
                        Voided bets are not counted toward the customer's wagered amount or VIP progress.
                    </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Head to Head</h3>
                <p className="mb-4">Unless otherwise stated in the Special Rules for the specific sport:</p>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        At least one competitor must finish the event, or all bets are considered void
                    </li>
                    <li>
                        If one or more competitor(s) fail to start all bets are considered void
                    </li>
                    <li>
                        If all competitors are disqualified or otherwise excluded all bets are considered void
                    </li>
                    <li>
                        If both competitors in a head-to-head achieve the same result and no draw odds are offered, then all bets are considered void.
                    </li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Outright Markets</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        Outright markets are considered All In Run Or Not and therefore will be settled as a loss if the selection does not take part in the event.
                    </li>
                    <li>
                        In cases where the event is cancelled then all bets will be declared void
                    </li>
                    <li>
                        In cases where the venue for an event is changed, we reserve the right to void any betting.
                    </li>
                    <li>
                        Unless stated otherwise, whenever the organising association deems it fit to include any necessary rounds, matches, or series of matches (e.g. Play-offs, Pre-outs, Postseason) following the end of the so-called Regular Season in order to determine the classification, league winners, promotion/relegation, etc., Sportrade will take into account the results and outcomes deriving from these matches for settlement purposes of tickets referring to the final league classification, promotion, relegation, etc. For example, seasonal bets on the team winning the NHL will refer to the Stanley Cup Winners.
                    </li>
                    <li>
                        All events are settled based on the award ceremony or the competition's official scoresheet, without taking into consideration the results of any subsequent investigations or disqualifications.
                    </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Dead Heat Rule</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        Dead Heat rules apply for Outright markets. A dead heat is when two or more competitors tie for a position in an event. In these cases, we will send a dead heat void factor based on the number of positions tied for divided by number of competitors tied in that position.
                    </li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Player Markets PMOS</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        All bets created prior to the venue change shall be Auto Voided.
                    </li>
                    <li>
                        If the match starts but is abandoned or suspended at any time before the match reaches a natural end and the match does not resume within 5 hours, then all bets on that player shall be Auto Voided.
                    </li>
                    <li>
                        If any player selected for any bet type does not participate in game, then all bets on that player shall be Auto Voided.
                    </li>
                    <li>
                        For Soccer only, if any player selected for any bet type does not start the game, then all bets on that player shall be Auto Voided.
                    </li>
                    <li>
                        All Player Markets include overtime for bet resulting. Penalty shootouts are not included.
                    </li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Cashout</h3>
                <p className="mb-4">
                    Cashout is a feature that offers the customer the opportunity to take a return on a bet placed before the bet has reached its conclusion. Cashout is available on selected events and markets both Pre-Match and Live for Singles and Multi bets. If you believe Cashout if available if need to click on the Cashout button next to your bet in the 'My Bets' section of the site. The Cashout amount will then be credited to your account. Please note that the final result will then have no impact on the outcome of your bet.
                </p>
                <p className="mb-4">The following also applies to the Cashout feature:</p>
                <ul className="list-disc pl-8 space-y-3">
                    <li>Cashout may not be available on certain markets and events.</li>
                    <li>A time delay is applied on every Cashout.</li>
                    <li>Cashout will not be available if the event and/or market you have placed a bet on is suspended.</li>
                    <li>
                        A Cashout attempt may not be successful if a market or event is suspended or odds change at the point in which the time delay is applied after Cashout is attempted.
                    </li>
                    <li>
                        Where Cashout is available on a Pre-Match market, if the odds provider do not cover the event Live then Cashout will be unavailable once the event starts.
                    </li>
                    <li>
                        Your Cashout value will differ depending on how your selection is performing and may be higher or lower than your original stake, allowing you to guarantee a profit or minimise a loss.
                    </li>
                    <li>
                        Stake reserves the right to reverse the settlement of a cashout on any bet that has been settled in error.
                    </li>
                    <li>
                        Stake will not be responsible in the event that Cashout is unavailable due to technical issues. Any bets will be settled as normal based on the final result.
                    </li>
                    <li>
                        Stake reserves the right to remove the Cashout feature for any customer who misuses it by regularly taking advantage of Pre-Match price movements to close their bets before events have started.
                    </li>
                    <li>
                        Stake reserves the right to remove the cashout feature for any customer who misuses it by taking advantage of latency to guarantee profit when placing bets then immediately cashing out.
                    </li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Third Party Content</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        The Stake sportsbook contains content provided by Third Party Providers. This includes the information related to sports scores and analytics. Stake is not responsible for, do not endorse and make no representation either expressly or implicitly concerning the Third Party Content provided on our platform. You rely on Third Party Content completely at your own risk.
                    </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Player Props</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        Specific terminology used for player prop bets:
                    </li>
                    <li>
                        PLAYER MUST PLAY: applies to all Prematch Player Props markets across NBA, NHL, NFL, CBB, and CFB and all In-Play Player Prop markets across MLB, NBA and NFL.
                    </li>
                    <h3 className="text-xl font -semibold mb-3 mt-6 text-white">Soccer</h3>


                </ul>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        All markets (except halftime, first half markets, overtime and penalty shoot- out) are considered for regular time only unless otherwise stated.
                    </li>
                    <li>
                        If a match is interrupted and continued within 48h after initial kickoff, all open bets will be settled with the final result. Otherwise all undecided bets are considered void.
                    </li>
                    <li>
                        Regular 90 Minutes: Markets are based on the result at the end of a scheduled 90 minutes play unless otherwise stated. This includes any added injury or stoppage time but does not include extra-time, time allocated for a penalty shootout or golden goal.
                    </li>
                    <li>
                        Prematch bets on friendly matches that last between 45 and 120 minutes will be settled per the final result (2x25, 2x40, 2x60, 3x30).
                    </li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Market description</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>Winning Method: In the case of multiple matches, all of them are considered for this market</li>
                    <li>To qualify: In the case of multiple legs, all matches are considered for this market</li>
                    <li>1st Goalscorer & 1x2: Any player who doesn't score will be settled as "other"</li>
                    <li>Anytime goalscorer & 1x2: Any player who doesn't score will be settled as "other"</li>
                    <li>1st Goalscorer & correct score: Any player who doesn't score will be settled as "other", as well as if any team scores more than 4 goals.</li>
                    <li>Anytime goalscorer & correct score: Any player who doesn't score will be settled as "other", as well as if any team scores more than 4 goals.</li>
                    <li>Who will advance to next round: In the case of multiple legs, all matches are considered for this market</li>
                    <li>Who will win the final: In the case of multiple legs, all matches are considered for this market</li>
                    <li>Who will win the 3rd place final: In the case of multiple legs, all matches are considered for this market</li>
                    <li>Which team wins the rest of the match: betting on the outcome of the remaining minutes of the match (for the purpose of the market goals scored prior to the bet being placed are not counted)</li>
                    <li>Player to score (incl. overtime): If no overtime is played, the market will be settled according to the result at the end of the regular time.</li>
                    <li>Next goalscorer: Own goals are considered for settlement purposes as a dedicated outcome is provided. Players which are not listed as well as goal keepers and players on the bench are reflected within the outcome "other", which will be used for settlement purposes accordingly.</li>
                    <li>Next goalscorer & 1x2: Any player who doesn't score will be settled as "other"</li>
                    <li>
                        Next goalscorer & correct score: Any player who doesn't score will be settled as "other", as well as if any team scores more than 4 goals.
                    </li>
                    <li>
                        When will the next goal be scored? If a goal is scored in added injury or stoppage time, it will be accounted for outcomes Min 31-45/Min 76-90.
                    </li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Time Frame Betting</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        Time frames are defined as follows: 1-10 minutes is 0:00-9:59, 11-20 minutes is 10:00-19:59, etc. 1-15 minutes is 00:00-14:59, 16-30 minutes is 15:00-29:59, etc.
                    </li>
                    <li>
                        Time periods 31-45 and 76-90 include any added time
                    </li>
                    <li>
                        1st/2nd Half Markets apply to the statutory 45 minutes play, including injury time and added time
                    </li>
                    <li>
                        In case of unusual time periods (e.g., 3 periods of 30 minutes each), 1st half markets will be settled based on goals scored between start of the game and 44:59 min, and 2nd half markets - between 45:00 min and the end of the game (including added time and injury time, excluding extra-time and/or penalties)
                    </li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Interval Markets</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        Markets will be settled based on the goal time announced by TV. If this is not available, the time according to the match clock is considered.
                    </li>
                    <li>
                        Goal markets are settled based on the time the ball crosses the line, and not the time the kick is made.
                    </li>
                    <li>
                        Corner interval markets are settled based on the time the corner kick is taken and not the time the corner is conceded or awarded.
                    </li>
                    <li>
                        Booking interval markets are settled based on the time the card is shown and not the time the infringement is made
                    </li>
                    <li>
                        Offsides will be settled based on the time when the referee gives the decision. This rule will be applied on any video assistant referee (VAR) situation.
                    </li>
                    <li>
                        Penalty markets will be settled based on the time when the referee gives the decision. This rule will be applied on any video assistant referee (VAR) situation.
                    </li>
                    <li>
                        Penalties awarded but not taken are not considered
                    </li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Booking markets</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        Yellow card counts as 1 card and red or yellow-red card as 2. The 2nd yellow for one player which leads to a yellow-red card is not considered. Consequently, one player cannot cause more than 3 cards.
                    </li>
                    <li>
                        Settlement will be made according to all available evidence of cards shown during the regular 90 minutes play.
                    </li>
                    <li>
                        Cards shown after the match are not considered.
                    </li>
                    <li>
                        Cards issued during half-time contribute towards 2nd half market/totals.
                    </li>
                    <li>
                        Cards for non-players (already substituted players, managers, players on bench) are not considered.
                    </li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Booking points markets</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        Yellow card counts as 10 points and red or yellow-red cards as 25. The 2nd yellow for one player which leads to a yellow-red card is not considered. Consequently, one player cannot cause more than 35 booking points.
                    </li>
                    <li>
                        Settlement will be made according to all available evidence for cards shown during the regular 90 minutes play. Cards shown after the match are not considered.
                    </li>
                    <li>
                        Cards for non-players (already substituted players, managers, players on bench) are not considered.
                    </li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Goalscorer Markets</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        Own goals do not count in the settlement of bets
                    </li>
                    <li>
                        If for any reason an unlisted player scores a goal all bets on listed players stand
                    </li>
                    <li>
                        All players who took part in the match since kick off or previous goal are considered as runners
                    </li>
                    <li>
                        All players who are currently taking part are listed
                    </li>
                    <li>
                        Market will be settled based on TV insert and statistics provided by Press Association unless there is clear evidence that these statistics are not correct.
                    </li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Corner Markets</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        Corners awarded but not taken are not considered.
                    </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Player Markets</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        If a player was not in the starting lineup the bet will be voided
                    </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Anytime Goalscorer and Player to score X or more</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        Own goals will not be considered for Anytime Goalscorer or Player to score X or more settlement purposes and are ignored
                    </li>
                    <li>
                        All players who took part in the match since kick off or previous goal are considered as runners
                    </li>
                    <li>
                        All players who are currently taking part are listed
                    </li>
                    <li>
                        If for any reason an unlisted player scores a goal all bets on listed players stand
                    </li>
                    <li>
                        Market will be settled based on TV insert and statistics provided by Press Association unless there is clear evidence that these statistics are not correct.
                    </li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Next scoring type</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        Freekick: The goal has to be scored directly from the freekick or corner to qualify as a goal by freekick. Deflected shots count as long as the freekick or corner taker is awarded the goal
                    </li>
                    <li>
                        Penalty: Goal must be scored directly from the penalty. Goals after a rebound of a missed penalty do not count
                    </li>
                    <li>
                        Own Goal: If goal is declared as an own goal
                    </li>
                    <li>
                        Header: The scorer's last touch has to be with the head
                    </li>
                    <li>
                        Shot: Goal has to be with any other part of the body than the head and the other types do not apply
                    </li>
                    <li>
                        No Goal
                    </li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Settlement and Cancellation Rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        All markets (except halftime, first half markets, overtime and penalty shoot-out) are considered for regular time only unless otherwise stated.
                    </li>
                    <li>
                        If a match is interrupted and continued within 48h after initial kick-off time, all open bets will be settled with the final result. Otherwise all undecided bets are considered void.
                    </li>
                    <li>
                        Regular 90 Minutes: Markets are based on the result at the end of a scheduled 90 minutes play unless otherwise stated. This includes any added injury or stoppage time but does not include extra-time, time allocated for a penalty shootout or golden goal.
                    </li>
                    <li>
                        If the market remains open when the following events have already taken place: goals, red or yellow-red cards and penalties, we reserve the right to void betting.
                    </li>
                    <li>
                        If the market was opened with a missing or incorrect red card, we reserve the right to void betting.
                    </li>
                    <li>
                        If odds were offered with an incorrect match time (more than 5 minutes), we reserve the right to void betting.
                    </li>
                    <li>
                        If a wrong score is entered, all markets will be cancelled for the time when the incorrect score was displayed.
                    </li>
                    <li>
                        If a match is interrupted or postponed and is not continued within 48h after initial kick-off date, betting will be void.
                    </li>
                    <li>
                        If the team names or category are displayed incorrectly, we reserve the right to void betting.
                    </li>
                    <li>
                        In case of any score or card/corner/penalty related changes, we reserve the right to void betting on any video assistant referee (VAR) situation.
                    </li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Same Game Multi</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        If any selection as part of a Same game multi is void, the whole bet is considered as a void
                    </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Player Props</h3>

                <h4 className="text-lg font-semibold mb-2 mt-4 text-white">Goals</h4>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        The number of goals scored by a player in the opposition net
                    </li>
                    <li>
                        A goal may not be counted if the attempt is off target and deflected into the net by an opposition player (own goal)
                    </li>
                </ul>

                <h4 className="text-lg font-semibold mb-2 mt-4 text-white">Assists</h4>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        A final contribution (pass, shot or any other touch of the ball) made by a player leading to the receiving teammate scoring a goal
                    </li>
                    <li>
                        An assist may not be counted if the attempt is deflected via an opposition player and the recipient was unlikely to have received the ball without the deflection.
                    </li>
                    <li>
                        Assists are not given for own goals, penalties, goals scored directly from corners or goals scored directly from direct free kicks.
                    </li>
                </ul>
                <h4 className="text-lg font-semibold mb-2 mt-4 text-white">Shots on Goal / Shots on Target</h4>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        An attempt by a player which directly results in a goal (regardless of clear intent to score a goal), or a clear attempt by a player to score a goal that clearly would have went into the net if not for a goalkeeper save or a stop made by the last-man (with the goalkeeper clearly unable to save).
                    </li>
                    <li>
                        Shots that hit the frame and directly go into the net resulting in a goal are included.
                    </li>
                    <li>
                        Shots that hit the frame and do not directly go into the net are not included.
                    </li>
                    <li>
                        Set-piece attempts (corners or free-kicks) that have no clear intent to score a goal and do not directly result in a goal are not included.
                    </li>
                    <li>
                        A shot can be made with any part of the body as long as it is legal according to the rules of the game.
                    </li>
                </ul>

                <h4 className="text-lg font-semibold mb-2 mt-4 text-white">Passes</h4>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        Attempted pass (successful or unsuccessful) with the clear intention of one player to find a teammate.
                    </li>
                    <li>
                        Open-play passes are included. Goal kicks, free-kicks, or corners that are played as an attempted pass (played short) are included.
                    </li>
                    <li>
                        Crosses, throw-ins and keeper throws are not included.
                    </li>
                    <li>
                        A pass can be made with any part of the body as long as it is legal according to the rules of the game.
                    </li>
                </ul>
                <h4 className="text-lg font-semibold mb-2 mt-4 text-white">Tackles</h4>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        When a player connects with the ball in a ground challenge, successfully taking the ball away from the player in possession.
                    </li>
                    <li>
                        All outcomes of a successful tackle are included (player/teammate takes possession, the ball goes out of play or the ball goes to an opposition player).
                    </li>
                    <li>
                        Missed tackles (failed attempts), aerial duels, fouls and pass interceptions are not included.
                    </li>
                    <li>
                        The tackled player must clearly be in possession of the ball before the tackle is made.
                    </li>
                </ul>
                <h4 className="text-lg font-semibold mb-2 mt-4 text-white">Cards</h4>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        Player carded: 0 = No, 1 = Yes. (Not the total number of cards received)
                    </li>
                </ul>

                <h4 className="text-lg font-semibold mb-2 mt-4 text-white">Settlement Process</h4>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        If a player does not participate, the market will be voided.
                    </li>
                    <li>
                        If a player was not in the starting line-up, the market will be voided.
                    </li>
                    <li>
                        If a player is a substitute, the market will be voided.
                    </li>
                    <li>
                        All markets are settled including overtime but does not include penalty shootouts.
                    </li>
                    <li>
                        At the conclusion of each game, we receive the final box score from the statistics provider (soccerstats.info) which is then used to settle all markets
                    </li>
                    <li>
                        In the event of discrepancies between statistics presented by external sources for a match, the prevailing statistics shall be those used by the Website for settlement, which may include data from service providers not explicitly listed on the Website.
                    </li>
                </ul>
                <h2 className="text-xll font-semibold mb-3 mt-6 text-white">Tennis</h2>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Settlement and cancellation rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        A tennis match is deemed to have started with the first serve of the match
                    </li>
                    <li>
                        In the event of a retirement or disqualification in a match, all markets that have not already had their result determined will be settled as void.
                    </li>
                    <li>
                        Markets must be actually decided in order to have settlements. For example, if the match ends via retirement in the first set with the score at 4-4 we would void the first set total 9.5 line as the actual number of total games at the time of retirement was only eight.
                    </li>
                    <li>
                        In case of a retirement and walkover of any player, all undecided bets are considered void.
                    </li>
                    <li>
                        In case of any delay (rain, darkness...) all markets remain unsettled and the trading will be continued as soon as the match continues.
                    </li>
                    <li>
                        If penalty point(s) are awarded by the umpire, all bets on that game will stand.
                    </li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Tennis Additional Rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>In case of a match being finished before certain points/games were finished, all affected point/game related markets are considered void.</li>
                    <li>If markets remain open with an incorrect score which has a significant impact on the prices, we reserve the right to void betting.</li>
                    <li>If the players/teams are displayed incorrectly, we reserve the right to void betting.</li>
                    <li>If a player retires or is disqualified, all undecided markets are considered void.</li>
                    <li>If a match tie-break is played as a deciding set in Best0f3 format, it will be considered as the 3rd set.</li>
                    <li>For all bets referring to the number of games played, a tie-break and super tie-break are counted as one game.</li>
                    <li>In the event of a Walkover all markets will be settled as void.</li>
                    <li>In the event of any of the following circumstances, all bets will stand:
                        <ul className="list-disc pl-8 mt-2">
                            <li>Change of schedule and/or day of match</li>
                            <li>Change of venue</li>
                            <li>Change from indoor court to outdoor court or vice versa</li>
                            <li>Change of surface (either before or during match)</li>
                            <li>If the players/teams are displayed incorrectly, we reserve the right to void betting.</li>
                        </ul>
                    </li>
                </ul>
                <h2 className="text-2xl font-semibold mb-4 mt-8 text-white">Basketball</h2>

                <h3 className="text-xl font-semibold mb-3 text-white">Market Description</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>Will there be overtime: Market will be settled as yes if at the end of regular time the match finishes in a draw, regardless of whether overtime is played.</li>
                    <li>Who scores Xth point? (incl. ot): If a match ends before the Xth is reached, this market is considered void (cancelled).</li>
                    <li>Which team will win race to x points? (incl. ot): If a match ends before the Xth is reached, this market is considered void (cancelled).</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Settlement and Cancellation Rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>Markets do not consider overtime unless otherwise stated.</li>
                    <li>If a match is interrupted or postponed and is not continued within 48h after initial tip-off date, all undecided bets will be voided.</li>
                    <li>If odds were offered with an incorrect match time (more than 2 minutes), we reserve the right to void betting.</li>
                    <li>If markets remain open with an incorrect score which has a significant impact on the prices, we reserve the right to void betting.</li>
                    <li>In the event that a match does not finish in a tie, but overtime is played for qualification purposes, the markets will be settled according to the result at the end of regular time.</li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Player Props</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>If any selection as part of a Same Game Multi is void, the whole bet is considered as a void</li>
                    <li>If the stated player logs court-time according to NBA.com, all bets will stand</li>
                    <li>Player props and team/match markets include overtime</li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Basketball Player Props Definitions</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li><strong>3pt Field Goals (FG) Made:</strong> The number of 3-point field goals that a player or team has made</li>
                    <li><strong>Points:</strong> The number of points scored</li>
                    <li><strong>FG Made:</strong> The number of field goals that a player has made. This includes both 2 pointers and 3 pointers</li>
                    <li><strong>Assists:</strong> The number of assists - passes that lead directly to a made basket by a player</li>
                    <li><strong>Blocks:</strong> A block occurs when an offensive player attempts a shot, and the defense player tips the ball, blocking their chance to score</li>
                    <li><strong>Total Rebounds:</strong> A rebound occurs when a player recovers the ball after a missed shot. This statistic is the number of total rebounds a player has collected on either offense or defense</li>
                    <li><strong>Steals:</strong> Number of times a defensive player takes the ball from a player on offense, causing a turnover</li>
                    <li><strong>Points + Rebounds + Assists:</strong> SUM of the player's Points + Rebounds + Assists individual scores for the game</li>
                    <li><strong>Rebounds + Assists:</strong> SUM of the player's Rebounds + Assists individual scores for the game</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-4 mt-8 text-white">American Football</h2>

                <h3 className="text-xl font-semibold mb-3 text-white">Market Descriptions</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li><strong>Total home team:</strong> Includes overtime</li>
                    <li><strong>Total away team:</strong> Includes overtime</li>
                    <li><strong>Xth drive play n – play type:</strong> A sack will be considered as a pass play. Only a forward pass will be taken into consideration for a pass play by definition.</li>
                    <li><strong>Xth drive play n – pass completion:</strong> Only a forward pass will be taken into consideration for a pass play by definition.</li>
                    <li><strong>Xth drive - result:</strong> Only offensive plays will be considered for settlement purposes. A drive ending by Interception return Touchdown by the defense, end of half or end of game, will be settled with "other".</li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Settlement and Cancellation Rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>In case of abandoned or postponed matches all undecided markets are considered void unless the match continues in the same weekly schedule (Thursday - Wednesday local stadium time).</li>
                    <li>In case of any delay (rain, darkness etc) all markets remain unsettled and the trading will be continued as soon as the match continues.</li>
                    <li>Markets do not consider overtime unless otherwise stated.</li>
                    <li>If markets remain open with an incorrect score which has a significant impact on the prices, we reserve the right to void betting.</li>
                    <li>If odds were offered with an incorrect match time (more than 89 seconds), we reserve the right to void betting.</li>
                    <li>If a wrong score is displayed, we reserve the right to void betting for this timeframe.</li>
                    <li>In case of abandoned or postponed matches, all markets are considered void unless the match continues in the same NFL weekly schedule (Thursday - Wednesday local stadium time).</li>
                    <li>If the teams are displayed incorrectly, we reserve the right to void betting.</li>
                    <li>All offered players are considered as runners.</li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Additional American Football Rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>Players which are not listed are considered as "Competitor1 other player" or "Competitor2 other player" for settlement purposes. Note: this does not include players which are listed without an active price.</li>
                    <li>Players of the Defense - or Special team are considered as "Competitor1 first player" or "Competitor2 first player" for settlement purposes, even if the player is listed as dedicated outcome.</li>
                    <li>Market will be settled based on TV insert and statistics provided by official associations unless there is clear evidence that statistics are not correct.</li>
                    <li>In case of no plays, all markets will be settled with the next play or voided if the drive ends before reaching the respective play.</li>
                    <li>In case of the drive ended before the respective play number was reached, all markets for the respective play will be considered void. This includes punts and field goals.</li>
                    <li>Field goal yardage will not be considered for total yards gained in a play.</li>
                    <li>Any references to First Half refer to Quarters 1 & 2, any to Second Half refer to Quarters 3 & 4.</li>
                    <li>Market outcome is determined only based on the score in the respective period (e.g., 1st Quarter, 2nd Half etc.) excluding points scored in other periods both in regular time and overtime.</li>
                    <ul className="list-disc pl-8 mt-2">
                        <li>The quarter must have been completed for bets to stand.</li>
                        <li>The half must have been completed for bets to stand.</li>
                    </ul>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Player Props</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>For "Anytime Touchdown" markets, only receiving and rushing touchdowns will count; a player passing a touchdown will not count for this market</li>
                    <li>NFL Defensive Tackles, Assists, and Tackles+Assists markets only include Tackles and Assists made on defensive plays. Special Teams plays do not count.</li>
                    <li>If any selection as part of a Same Game Multi is void, the whole bet is considered as a void</li>
                    <li>All players who participate in the match (all who play at least one snap) will be settled based on final statistics, regardless of whether they are injured, ejected or leave the game early.</li>
                    <li>Player props and team/match market include overtime</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 mt-8 text-white">Ice Hockey</h2>

                <h3 className="text-xl font-semibold mb-3 text-white">Settlement and Cancellation Rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>All markets (except period, overtime and penalty shootout markets) are considered for regular time only unless it is mentioned in the market.</li>
                    <li>If a match is interrupted and continued within 48h after initial start-time, all open bets will be settled with the final result. Otherwise all undecided bets are considered void.</li>
                    <li>In the event of a game being decided by a penalty shootout, then one goal will be added to the winning team's score and the game total for settlement purposes. This applies to all markets including overtime and penalty shootout.</li>
                    <li>If the market remains open when the following events have already taken place: goals and penalties, we reserve the right to void betting.</li>
                    <li>If odds were offered with an incorrect match time (more than 2 minutes), we reserve the right to void betting.</li>
                    <li>If a wrong score is entered all markets will be cancelled for the time when incorrect score was displayed.</li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Ice Hockey Additional Rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>Market outcome is determined only based on the score in the respective period (e.g., 1st Period, 2nd Period, 3rd Period). Only the goals scored within the nominated period count. Unless otherwise stated, overtime does not count for the result of the 3rd period. The period must have been completed for tickets all that period to stand.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Player Props</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>Pre-match only</li>
                    <li>Goalie Win (the rule is the Goalie on ice when the winning, go-ahead goal is score receives the win)</li>
                    <li>For settlement purposes, Overtime is included; penalties are excluded</li>
                    <li>If any selection as part of a Same Game Multi is void, the whole bet is considered as a void</li>
                    <li>If the stated player logs playing time according to NHL.com, all bets will stand</li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Anytime Goalscorer and Player to score a point</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>Live/Inplay Only</li>
                    <li>All offered players are considered as runners.</li>
                    <li>If an unlisted player scores a goal or earns a point, all bets on listed players stand.</li>
                    <li>For settlement purposes, only goals and assists scored during regular time are considered.</li>
                    <li>All bets on players that were listed but left the game before the match ended (such as injuries or expulsions) will stand.</li>
                    <li>Markets will be settled based on TV inserts and data provided by official associations unless there is clear evidence these statistics are not correct.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Next scoring type</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>Even strength: Goals are considered even strength when every team has the same number of players on the ice.</li>
                    <li>Power-play: A goal is considered to be a power-play goal if the team with numerical advantage scores.</li>
                    <li>Short-handed: A goal is considered to be a short-handed goal if the team with numerical disadvantage scores.</li>
                    <li>Penalty shot: A penalty shot is considered to be a goal if converted.</li>
                    <li>Empty net: A goal is considered to be an empty net goal, if the trailing team pulls the goalkeeper for an extra attacker and the leading team scores. In power-play/short-handed and empty net situations, a goal will always be considered as empty net goal for settlement purposes.</li>
                    <li>No goal</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-4 mt-8 text-white">Baseball</h2>

                <p className="mb-4">A baseball match is usually scheduled for 9 innings but, in some instances, can be scheduled for anywhere between 5 to 8. Matches don't need to play for the full number of scheduled innings for the result to be considered official.</p>

                <h3 className="text-xl font-semibold mb-3 text-white">Market descriptions</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li><strong>1x2:</strong> The match must go the full number of scheduled innings, otherwise the market will be voided. If the match ends early due to a Mercy rule all bets on the Winner and 1x2 markets will stand.</li>
                    <li><strong>Winner (incl. Extra Innings):</strong> The Winner market will be settled for pre-match betting if the match goes at least 5 innings (4.5 if the home team is leading) and is considered official.</li>
                    <li><strong>Winning Margin (incl. Extra Innings):</strong> The match must go the full number of scheduled innings otherwise the market will be voided.</li>
                    <li><strong>Handicap:</strong> The match must go the full number of scheduled innings otherwise the market will be voided.</li>

                    <li><strong>Total (incl. Extra Innings):</strong> The match must go the full number of scheduled innings otherwise the market will be voided.</li>

                    <li><strong>Odd/Even (incl. Extra Innings):</strong> The match must go the full number of scheduled innings otherwise the market will be voided.</li>

                    <li><strong>Race to x runs (incl. Extra Innings):</strong> Will be voided if neither team reaches the x value.</li>

                    <li><strong>Will there be an extra inning:</strong> The match must go the full number of scheduled innings otherwise the market will be voided.</li>

                    <li><strong>Team x to bat in the 9th Inning:</strong> The match must go the full number of scheduled innings otherwise the market will be voided.</li>

                    <li><strong>Team to win more innings:</strong> The match must go the full number of scheduled innings otherwise the market will be voided.</li>

                    <li><strong>Team with highest scoring inning:</strong> The match must go the full number of scheduled innings otherwise the market will be voided.</li>

                    <li><strong>Highest scoring inning:</strong> The match must go the full number of scheduled innings otherwise the market will be voided.</li>

                    <li><strong>Innings 1 to 5 (all markets):</strong> The match must have completed 5 innings (4.5 if home team is leading).</li>

                    <li><strong>Innings 1 to 5 (Totals, all markets):</strong> The match must have completed 5 innings (4.5 if home team is leading) unless the over has already won.</li>

                    <li><strong>Xth Inning 1x2:</strong> The inning must be completed.</li>

                    <li><strong>Xth Inning Total:</strong> The inning must be completed unless the over has already won.</li>
                    <li><strong>Maximum consecutive runs by either team:</strong> The match must go the full number of scheduled innings unless 5+ has already won.</li>

                    <li><strong>When will the match be decided:</strong> The match must go the full number of scheduled innings. This market will be settled as "Any extra inning" if at the end of regular time (after full 9 innings) the match finishes in a draw, regardless of whether or not extra innings are played.</li>

                    <li><strong>When will the Xth run be scored (incl. extra innings):</strong> The match must go the full number of scheduled innings. If a match ends before the Xth run is reached this market is considered void.</li>

                    <li><strong>Xth Inning (Home Team to Score):</strong> The inning must be completed unless the home team have already scored.</li>

                    <li><strong>Xth Inning (Away Team to Score):</strong> The inning must be completed unless the away team have already scored.</li>

                    <li><strong>Total Hits (incl. Extra Innings) (All markets):</strong> The match must go the full number of scheduled innings unless the over has already won at the time the match ends.</li>

                    <li><strong>1st Innings Total Hits (All markets):</strong> The 1st Inning must be completed unless the over has already won.</li>

                    <li><strong>Innings 1 to 5 (Total Hits) (All Markets):</strong> The match must have completed 5 innings (4.5 if home team is leading).</li>

                    <li><strong>Winner & Total (incl. Extra Innings):</strong> The match must go the full number of scheduled innings.</li>

                    <li><strong>Total Home Runs (incl. Extra Innings) (All Markets):</strong> The match must go the scheduled number of innings unless the over has already won at the time the match ends.</li>

                    <li><strong>1st Inning Winner:</strong> The 1st inning must be completed.</li>

                    <li><strong>Race to x runs (incl. Extra Innings):</strong> If a match ends before the Xth run is reached, this market is considered void.</li>

                    <li><strong>Will there be an extra inning:</strong> Market will be settled as "Yes" if at the end of regular time (after the full 9 innings) the match finishes in a draw, regardless of whether or not extra innings are played.</li>
                    <li><strong>Result of player xth time at bat:</strong> If an intentional walk is signaled, it will count as plate appearance and market is considered void (cancelled).</li>

                    <li><strong>Player to strike out xth time at bat:</strong> If an intentional walk is signaled, it will count as plate appearance and market is considered void (cancelled).</li>

                    <li><strong>Same Game Multi (Bet Builder):</strong> Bets are voided on postponed, canceled or abandoned games. The game must be played on the originally scheduled date (if the game is rescheduled to a new date then it is considered postponed) and considered final for bets to be settled per the final outcome.</li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Settlement and cancellation rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>Possible extra innings are not considered in any market unless otherwise stated.</li>
                    <li>In the case of a postponed match, all markets will be voided unless the match starts within 48 hours of the official start time.</li>
                    <li>In the case of an abandoned match, all undecided markets will be voided unless the match continues within 48 hours of the official start time. All fully decided markets will be settled.</li>
                    <li>All bets stand irrespective of starting pitchers or starting pitcher changes.</li>
                    <li>All markets will be cleared according the final result after 9 innings (8 ½ innings if home team is leading at this point).</li>
                    <li>If markets remain open with an incorrect score or incorrect match status which has a significant impact on the prices, we reserve the right to void betting.</li>
                    <li>All bets placed on double headers will be resulted as normal.</li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Player Markets</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>All bets created prior to a venue change shall be voided.</li>
                    <li>If the match starts but is abandoned or suspended at any time before the match reaches a natural end and the match does not resume within 5 hours, then all bets on that player shall be voided.</li>
                    <li>If any player selected for any bet type does not participate in game, then all bets on that player shall be voided.</li>
                    <li>All Player Markets include extra innings for bet resulting.</li>
                    <li>If a player was not in the starting lineup the bet will be voided</li>
                    <li>If a game ends early due to weather with an official result before 5 innings have been completed (Match is settled as 'FINAL' on MLB.com), all player props bets will stand.</li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Batter</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li><strong>Hits (H):</strong> Reaching base because of a batted, fair ball without error by the defence.</li>

                    <li><strong>Home Runs (HR):</strong> Hits on which the batter successfully touched all four bases, without the contribution of a fielding error</li>

                    <li><strong>Total Bases (TB):</strong> One for each single, two for each double, three for each triple, and four for each home run [H + 2B + (2 × 3B) + (3 × HR)] (walks are not counted for settlement purposes)</li>

                    <li><strong>Runs + RBI's:</strong> SUM of Runs And RBI's (Run batted in: number of runners who score due to a batter's action, except when the batter grounded into a double play or reached on an error)</li>

                    <li><strong>Hits + Runs + RBIs:</strong> SUM of Hits, Runs And RBI's (Run batted in: number of runners who score due to a batter's action, except when the batter grounded into a double play or reached on an error)</li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Pitcher</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li><strong>Strikeouts (SO):</strong> Number of batters who received strike three</li>
                    <li><strong>Earned Runs:</strong> Number of runs that did not occur as a result of errors or passed balls</li>
                    <li><strong>Win Probability:</strong> pitcher has to be pitching for at least 5 full innings and the team needs to be in the lead at the moment he is subbed and never relinquish that lead for him to be awarded with a win</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">At-Bat Markets</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li><strong>Hit:</strong> Batter reaches base because of a batted, fair ball without error by the defense including Singles, Doubles, Triples or Home Runs.</li>

                    <li><strong>Strikeout:</strong> Batter receives strike three. Also includes when a batter is thrown out at 1st or reaches base safely due to a wild pitch/passed ball.</li>

                    <li><strong>Walk:</strong> Batter is awarded first base after receiving four pitches called ball by the umpire. This includes intentional walks when at least one pitch is thrown. No action if no pitches are thrown.</li>

                    <li><strong>In-Play Out:</strong> Includes tag out, fielder's choice, force out, fly out, line out, pop out, ground out or sacrifice bunt/fly.</li>

                    <li><strong>Any Other:</strong> Includes fielding error, catcher interference or when batter is hit by pitch.</li>

                    <li><strong>No Action:</strong> Bets are void if the inning ends before the at-bat is completed or if there is a pitching change.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Rapid markets</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>If a player does not show up at the plate again but related player markets have been offered, undecided markets are considered void.</li>
                    <li>A foul ball will always be considered as a strike for settlement purposes.</li>
                    <li>Pitcher Win (the "No" side includes Losses and No Decisions)</li>
                    <li>If any selection as part of a Bet Builder is void, the whole bet is considered as a void</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 mt-8 text-white">Mixed Martial Arts (MMA)</h2>

                <h3 className="text-xl font-semibold mb-3 text-white">Market descriptions</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li><strong>Winner (To Win the Fight):</strong> Predict which competitor will win the bout. No draw selection is offered. For the Winner market where no draw selection is offered all bets will be void in the event of a draw (this includes a fight which ends in a Majority Draw or a Technical Draw).</li>

                    <li><strong>1x2 (Fight Result):</strong> Predict the result of the bout. If the fight ends in a Majority Draw or a Technical Draw then Draw will be the winning selection.</li>

                    <li><strong>Total (Over/Under):</strong> Betting on the round in which the fight result will be determined.</li>

                    <li>For settlement purposes where a half round is stated e.g. 2.5 rounds, 2 minutes 30 seconds of the respective round will define the half to determine under or over. Thus, 2.5 rounds would be two minutes and thirty seconds of the 3rd round. If the fight ends at exactly 2 minutes 30 seconds of the 3rd round then the result would be over 2.5 rounds.</li>

                    <li><strong>Winning Method:</strong> Predict the method by which the result of the fight will be decided.</li>

                    <li>All bets will be settled on the official result declared. A win by disqualification is counted as Knockout/Technical Knockout.</li>
                    <li>For the purposes of the Winning Method market, a KO includes the following:
                        <ul className="list-disc pl-8 mt-2">
                            <li>referee stoppage due to strikes while either fighter is, or both fighters are, standing;</li>
                            <li>referee stoppage due to strikes while either fighter is, or both fighters are, on the canvas;</li>
                            <li>stoppage by doctor;</li>
                            <li>stoppage by a fighter's corner/team</li>
                            <li>a fighter retires due to injury</li>
                            <li>a win by disqualification</li>
                        </ul>
                    </li>
                    <li>For the purposes of the Winning Method market, a submission includes the following:
                        <ul className="list-disc pl-8 mt-2">
                            <li>referee stoppage due to tap-out;</li>
                            <li>referee stoppage due to technical submission</li>
                            <li>a fighter's verbal submission (including a verbal submission which is made due to strikes).</li>
                        </ul>
                    </li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Additional MMA Rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li><strong>Winner & exact rounds:</strong> Predict the round in which your selection will win the fight. Betting on winner and exact round is e.g. Fighter to win by KO, disqualification, submission or technical submission during that round or to win by decision. Where a fighter fails to answer the bell for the next round, his opponent shall be deemed to have won the contest in the previous round. In the event of a Technical Decision before the end of the fight all bets will be settled as a win by Decision and non-matching bets will be deemed losers.</li>

                    <li><strong>Will the fight go the distance:</strong> Predict if the fight will be decided before the scheduled number of rounds. In the event of a technical decision, for settlement purposes, the fight will be deemed to have gone the distance.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Match Abandonments/Postponements</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>All markets are settled according to the result available immediately after the end of the fight. Any subsequent appeals or amendments to the result are not taken into consideration for settlement purposes.</li>
                    <li>If the fight does not take place for any reason on the scheduled date then all bets will be void.</li>
                    <li>If either fighter fails to answer the bell for the next round then his opponent will be deemed to have won in the previous round.</li>
                    <li>Should there be a withdrawal or a substitution of one of the fighters concerned, bets will be void.</li>
                    <li>In the event of a fight being declared a No Contest all bets will be void.</li>
                    <li>Should the scheduled number of rounds be changed before the fight then all "Total Rounds", "Winner and exact rounds" and "Winning Method" bets will be made void.</li>
                    <li>Half of round must pass to be counted for settlements</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-4 mt-8 text-white">Boxing</h2>

                <h3 className="text-xl font-semibold mb-3 text-white">Settlement Rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>All markets are settled according to the result available immediately after the end of the fight.</li>
                    <li>Any subsequent appeals or amendments to the result are not be taken into consideration for settlement purposes.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Market descriptions</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li><strong>1x2 (Fight Result):</strong> Predict the result of the bout. If the fight ends in a Majority Draw or a Technical Draw then Draw will be the winning selection.</li>

                    <li><strong>Total Rounds (Over/Under):</strong> Betting on the round in which the fight result will be determined. For settlement purposes where a half round is stated then 90 seconds of the respective round will define the half to determine under or over. Thus, 9.5 rounds would be one minute and thirty seconds of the 10th round. If the fight ends at exactly 1 minute 30 seconds of the 10th round then the result would be over 9.5 rounds</li>

                    <li><strong>Winner & exact round:</strong> Predict the round in which your selection will win the fight. Betting on winner and exact round is for a fighter to win by KO, TKO or disqualification during that round. Where a boxer fails to answer the bell for the next round, his opponent shall be deemed to have won the contest in the previous round. In the event of a Technical Decision before the end of the fight all bets will be settled as a win by Decision and non-matching bets will be deemed losers.</li>

                    <li><strong>Winning Method:</strong> Predict the method by which the result of the fight will be decided. All bets will be settled on the official result declared. A win by disqualification is counted as Knockout/Technical Knockout.</li>

                    <li><strong>Any fighter to win inside the distance:</strong> Predict if the fight will be decided before the scheduled number of rounds. In the event of a technical decision, for settlement purposes, the fight will have been deemed NOT to have gone the distance.</li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Match Abandonments/Postponements</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>The odds provider reserves the right to void bets if a fight does not take place for any reason on the scheduled date.</li>
                    <li>If either fighter fails to answer the bell for the next round then his opponent will be deemed to have won in the previous round.</li>
                    <li>Should there be a withdrawal or a substitution of one of the boxers concerned, bets will be void.</li>
                    <li>In the event of a fight being declared a No Contest all bets will be void and stakes returned.</li>
                    <li>Should the scheduled number of rounds be changed before the fight then all Total Rounds, Round Betting and Method of Victory bets will be made void.</li>
                    <li>Half of round must pass to be counted for settlements</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 mt-8 text-white">Golf</h2>

                <h3 className="text-xl font-semibold mb-3 text-white">Market descriptions</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li><strong>Balls:</strong> Predict which player will shoot the lowest score in the listed round.If both players retire at the same hole, the market will be void. Market will be void if both competitors achieve the same score for the affected round. A player can be considered as runner if he tees off on his first scheduled hole.</li>

                    <li><strong>3 Balls:</strong> Predict which player will shoot the lowest score in the listed round. Dead heat rules apply.</li>

                    <li><strong>Outright Winner:</strong> All outright bets are settled on the player awarded the trophy. The result of playoffs is taken into account. Where a tournament is reduced from the scheduled number of holes for any reason (e.g., bad weather conditions) outright bets (except "First round leader" bets) placed prior to the final completed round will be settled on the player awarded the trophy.</li>
                    <li><strong>Group Betting (Top X/Y):</strong> The winner will be the player achieving the highest placing at the end of the tournament. Dead-heat rules apply except where the winner is determined by a playoff. Special case: If we offer a group betting and only one competitor starts bets will be void.</li>

                    <li><strong>Finishing Position of a Named Player:</strong> In the event of a tie for a finishing position the tied position will count. For example, a tie with 4 other players for 7th place will count as a finishing position of 7th</li>

                    <li><strong>End of Round Leader (e.g., First round – Winner):</strong> Settlement is based on the tournament score at the end of the specified round. Dead-heat rules apply.</li>

                    <li><strong>Tournament Top 4/Top 5/Top 6/Top 10/Top 20 Finish:</strong> Dead-heat rules apply.</li>

                    <li><strong>To Win/Not to Win a Major:</strong> The 4 majors are US Open, US Masters, USPGA and the British Open.</li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Settlement and cancellation rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>Dead heat rule applies for 3 ball markets.</li>
                    <li>If players are displayed incorrectly, we reserve the right to void betting.</li>
                    <li>A player is deemed to have played in a tournament once they have teed off. If a player withdraws, retires, or is disqualified after having teed off, bets will stand.</li>
                    <li>In tournaments affected by bad weather or other similar reasons, bets will be resulted on the official result regardless of the number of rounds played. If the tournament is abandoned, any bets placed after the last completed round will be void.</li>
                    <li>If the tournament is abandoned, any bets placed after the last completed round will be void.</li>
                    <li>Official tour site results at the time of trophy presentation are used for settlement purposes (subsequent disqualification after this time does not count).</li>
                    <li>Group Markets: If a player withdraws from the tournament or is disqualified, we reserve the right to void betting on affected group markets</li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Specific Market Rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li><strong>Round markets:</strong> If a golf round is abandoned, all undecided markets will be void.</li>

                    <li><strong>2 ball markets:</strong> If both players retire at the same hole, the market will be void. A player can be considered as runner, if he tees off on his first scheduled hole.</li>

                    <li><strong>3 ball markets:</strong> If all 3 players retire at the same hole, the market will be void. A player can be considered as runner, if he tees off on his first scheduled hole.</li>

                    <li><strong>Competitor markets:</strong> If the affected competitor retires, all undecided competitor markets will be void.</li>

                    <li><strong>Total markets:</strong> If a player which is listed in the group retires, all undecided total markets will be void.</li>

                    <li><strong>"Hole" & "Hole a to b" markets:</strong> If a player which is listed in the group retires, all related and undecided "hole" and "hole a to b" markets will be void</li>

                    <li><strong>Tournament/Event markets:</strong> In tournaments affected by bad weather or other similar reasons, bets will be resulte on the official result regardless of th number of rounds played.</li>
                    <li>or other similar reasons, bets will be resulte on the official result regardless of th number of rounds played.</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-4 mt-8 text-white">Handball</h2>

                <h3 className="text-xl font-semibold mb-3 text-white">Market descriptions</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li><strong>Who scores Xth point? (incl. ot):</strong> If a match ends before the Xth is reached, this market is considered void (cancelled).</li>

                    <li><strong>Which team will win race to x points (incl. ot)?:</strong> If a match ends before the Xth is reached, this market is considered void (cancelled).</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Settlement and cancellation rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>All markets (except who scores the Xth point and Which team will win race to X points) are considered for regular time only.</li>

                    <li>If the match goes to a 7-meter shootout, the markets "Who scores Xth point?" and "Which team will win race to X points?" will be voided.</li>

                    <li>"Who scores Xth point?" and "Which team will win race to X points?" will be voided.</li>

                    <li>If a match is interrupted or postponed and is not continued within 48h after the initial start date/time, betting will be void.</li>

                    <li>If odds were offered with an incorrect match time (more than 3 minutes), we reserve the right to void betting.</li>

                    <li>If markets remain open with an incorrect score which has a significant impact on the prices, we reserve the right to void betting.</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-4 mt-8 text-white">Volleyball + Beach Volleyball</h2>

                <h3 className="text-xl font-semibold mb-3 text-white">Market descriptions</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li><strong>Will there be a 4th set:</strong> If the 4th set has started, then the outcome will be yes</li>

                    <li><strong>Will there be a 5th set:</strong> If the 5th set has started, then the outcome will be yes</li>

                    <li><strong>Who scores [Xth] point in set [y]:</strong> If a set ends before the Xth point is reached, this market is considered void (cancelled)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Settlement and cancellation rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>In the case of a match not being finished, all undecided markets are considered void.</li>

                    <li>Golden set is not considered in any of the mentioned markets.</li>

                    <li>If a match is interrupted or postponed and is not continued within 48h after the initial start date/time, betting will be void.</li>

                    <li>If markets remain open with an incorrect score that has a significant impact on the prices, we reserve the right to void betting.</li>

                    <li>Official points deductions will be taken into account for all undetermined markets. Markets that have already been determined will not take deductions into account.</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-4 mt-8 text-white">Motor Sports</h2>

                <ul className="list-disc pl-8 space-y-3">
                    <li>If a specific event is postponed or abandoned, then bets remain valid provided that the event is completed within 72 hours.</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-4 mt-8 text-white">Formula 1</h2>

                <h3 className="text-xl font-semibold mb-3 text-white">General Rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>Unless otherwise stated in the market rules, the result at the time of the podium presentation is considered valid for settlement purposes.</li>

                    <li>For a Driver to be classified they have to complete at least 90% of the total laps.</li>

                    <li>Events being shortened due to weather conditions or other circumstances, but are deemed official by the governing association, will be settled accordingly.</li>

                    <li>If a race is postponed to another day (to be determined within UTC time zone) all markets are considered void.</li>

                    <li>Unless otherwise stated in the market rules, the dead heat rule will be applied if the number of winners exceeds the expected amount of winning selections for a specific market.</li>

                    <li>If one or more drivers have to start the race from the pit-lane, he/they will be ranked at the end of the starting grid for settlement purposes.</li>

                    <li>If competitors (which are reflected as dedicated selections) retire in different laps, the number of finished laps is considered for settlement purposes.</li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Markets for fastest lap</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>The driver who achieved the fastest lap in the specified lap, cluster of laps or race is considered as the winner.</li>
                    <li>The lap time in milliseconds is valid for settlement purposes.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Head2head markets & Winner of group</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>If all competitors (which are reflected as dedicated selections) retire in the same lap, the market will be voided.</li>
                    <li>Markets will be considered void if one of the drivers retires in or before the formation lap.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Markets for overtakings</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>An overtaking needs to be maintained until the end of the lap in order to be considered for settlement purposes.</li>
                    <li>Overtakings during the first lap are not considered for settlement purposes.</li>
                    <li>Overtakings of a specific driver in the same lap when he enters or exits the pit are not considered for settlement purposes.</li>
                    <li>Overtakings of a car in the lap of its retirement are not considered for settlement purposes.</li>
                    <li>Lapping and unlapping is not considered as overtaking</li>
                </ul>
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Markets for retirements</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>A car is considered as retired for settlement purposes if it doesn't pass the finish line when the session is considered as completed, unless he is disqualified.</li>
                    <li>If more than 1 competitor retires in the same lap where the first retirement happened, the dead heat rule will be applied.</li>
                    <li>If a car retires in the pit or pit lane, the last started lap is considered for settlement purposes.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Markets for pit stops</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>The car which enters the pit-lane first will be considered as winner of this market.</li>
                    <li>If a car enters the pit lane and retires it will still be considered as a pit stop for settlement purposes.</li>
                </ul>
                // ... existing tennis rules ...
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        In case of a match being finished before certain points/games were finished, all affected point/game related markets are considered void.
                    </li>
                    <li>
                        If markets remain open with an incorrect score which has a significant impact on the prices, we reserve the right to void betting.
                    </li>
                    <li>
                        If the players/teams are displayed incorrectly, we reserve the right to void betting.
                    </li>
                    <li>
                        If a player retires or is disqualified, all undecided markets are considered void.
                    </li>
                    <li>
                        If a match tie-break is played as a deciding set in Best0f3 format, it will be considered as the 3rd set.
                    </li>
                    <li>
                        For all bets referring to the number of games played, a tie-break and super tie-break are counted as one game.
                    </li>
                    <li>
                        In the event of a Walkover all markets will be settled as void.
                    </li>
                    <li>In the event of any of the following circumstances, all bets will stand:
                        <ul className="list-disc pl-8 mt-2">
                            <li>Change of schedule and/or day of match</li>
                            <li>Change of venue</li>
                            <li>Change from indoor court to outdoor court or vice versa</li>
                            <li>Change of surface (either before or during match)</li>
                            <li>If the players/teams are displayed incorrectly, we reserve the right to void betting.</li>
                        </ul>
                    </li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 mt-8 text-white">Basketball</h2>

                <h3 className="text-xl font-semibold mb-3 text-white">Market description</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        Will there be overtime: Market will be settled as yes if at the end of regular time the match finishes in a draw, regardless of whether overtime is played.
                    </li>
                    <li>
                        Who scores Xth point? (incl. ot): If a match ends before the Xth is reached, this market is considered void (cancelled).
                    </li>
                    <li>
                        Which team will win race to x points? (incl. ot): If a match ends before the Xth is reached, this market is considered void (cancelled).
                    </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Settlement and cancellation rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        Markets do not consider overtime unless otherwise stated.
                    </li>
                    <li>
                        If a match is interrupted or postponed and is not continued within 48h after initial tip-off date, all undecided bets will be voided.
                    </li>
                    <li>
                        If odds were offered with an incorrect match time (more than 2 minutes), we reserve the right to void betting.
                    </li>
                    <li>
                        If markets remain open with an incorrect score which has a significant impact on the prices, we reserve the right to void betting.
                    </li>
                    <li>
                        In the event that a match does not finish in a tie, but overtime is played for qualification purposes, the markets will be settled according to the result at the end of regular time.
                    </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Player Props</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        If any selection as part of a Same Game Multi is void, the whole bet is considered as a void
                    </li>
                    <li>
                        If the stated player logs court-time according to NBA.com, all bets will stand
                    </li>
                    <li>
                        Player props and team/match markets include overtime
                    </li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 mt-8 text-white">Total finishers market rules</h2>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        Winner (team), Top x (team) and Head2head (team) are settled with the team which has the best ranked car in the final result.
                    </li>
                    <li>
                        1st to retire (teams) is settled with the team which retired one car first.
                    </li>
                    <li>
                        1st pit stop (teams) is settled with the team whose car entered the pit-lane first.
                    </li>
                    <li>
                        Team total overtakings is settled based on the accumulated number of overtakings of both cars in the specified team.
                    </li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 mt-8 text-white">MotoGP</h2>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        Unless otherwise stated in the market rules, the result at the time of the podium presentation is considered valid for settlement purposes.
                    </li>
                    <li>
                        Event being shortened due to weather conditions or other circumstances, but are deemed official by the governing association, will be settled accordingly as long as full points are awarded.
                    </li>
                    <li>
                        If a race is postponed to another day (to be determined within UTC time zone) all markets are considered void.
                    </li>
                    <li>
                        If competitors (which are reflected as dedicated selections) retire in different laps, the number of finished laps is considered for settlement purposes.
                    </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Head2head markets</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        If all competitors (which are reflected as dedicated selections) retire in the same lap, the market will be voided.
                    </li>
                    <li>
                        Markets will be considered void if one of the drivers retires in or before the warm-up lap.
                    </li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 mt-8 text-white">NASCAR</h2>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        All markets include a possible overtime.
                    </li>
                    <li>
                        Unless otherwise stated in the market rules, the result at the time of the podium presentation is considered valid for settlement purposes.
                    </li>
                    <li>
                        Event being shortened due to weather conditions or other circumstances, but are deemed official by the governing association, will be settled accordingly as long as full points are awarded.
                    </li>
                    <li>
                        If a race is postponed to another day (to be determined within UTC time zone) all markets are considered void.
                    </li>
                    <li>
                        If competitors (which are reflected as dedicated selections) retire in different laps, the number of finished laps is considered for settlement purposes
                    </li>
                    <li>
                        If a competitor does not participate in the race at all (no start), all bets on this competitor should be voided.
                    </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Head2head markets</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        Markets will be considered void if one of the drivers retires in or before the warm- up lap.
                    </li>
                    <li>
                        If all competitors (which are reflected as dedicated selections) retire in the same lap, the market will be voided.
                    </li>
                    <li>
                        If all competitors (which are reflected as dedicated selections) retire in the same lap, the market will be voided.
                    </li>
                </ul>
                // ... existing code ...
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Top 3 market</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        If the number of finishers is lower than 3, then the competitor who retired the latest will be settled as won. This applies until 3 competitors are settled as won
                    </li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 mt-8 text-white">Futsal</h2>

                <h3 className="text-xl font-semibold mb-3 text-white">Settlement and cancellation rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        All markets (except halftime, first half markets, overtime and penalty shoot out) are considered for regular time only.
                    </li>
                    <li>
                        If a match is interrupted and continued within 48h after initial kick-off date, all open bets will be settled with the final result. Otherwise all undecided bets are considered void.
                    </li>
                    <li>
                        If the market remains open when the following events have already taken place: goals, red or yellow-red cards and penalties, we reserve the right to void betting.
                    </li>
                    <li>
                        If the market was opened with a missing or incorrect red card, we reserve the right to void betting.
                    </li>
                    <li>
                        If odds were offered with an incorrect match time (more than 2 minutes), we reserve the right to void betting.
                    </li>
                    <li>
                        If a wrong score is entered, all markets will be cancelled for the time when the incorrect score was displayed.
                    </li>
                    <li>
                        If a match is interrupted or postponed and is not continued within 48 h after initial kick-off date betting will be void.
                    </li>
                    <li>
                        If the team names or category are displayed incorrectly, we reserve the right to void betting.
                    </li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 mt-8 text-white">Badminton</h2>

                <h3 className="text-xl font-semibold mb-3 text-white">Settlement and cancellation rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        In the case of a match not being finished, all undecided markets are considered void.
                    </li>
                    <li>
                        If a match is interrupted or postponed and is not continued within 48h after initial start date, betting will be void.
                    </li>
                    <li>
                        If markets remain open with an incorrect score which has a significant impact on the prices, we reserve the right to void betting.
                    </li>
                    <li>
                        If a team retires, all undecided markets are considered void.
                    </li>
                    <li>
                        If the players/teams are displayed incorrectly, we reserve the right to void betting.
                    </li>
                    <li>
                        Official points deductions will be taken into account for all undetermined markets. Markets that have already been determined will not take deductions into account.
                    </li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 mt-8 text-white">Rugby Union + League</h2>

                <h3 className="text-xl font-semibold mb-3 text-white">Settlement and cancellation rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        All markets (except halftime, first half markets, overtime and penalty shoot out) are considered for regular time only.
                    </li>
                    <li>
                        If a match is interrupted and continued within 48h after initial kick-off date, all open bets will be settled with the final result. Otherwise all undecided bets are considered void.
                    </li>
                </ul>
        // ... existing Rugby Union rules ...
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        Regular 80 Minutes: Markets are based on the result at the end of a scheduled 80 minutes play unless otherwise stated. This includes any added injury or stoppage time but does not include extra-time, time allocated for a penalty shootout or sudden death.
                    </li>
                    <li>
                        If the market remains open when the following events have already taken place: score changes or red cards, we reserve the right to void betting.
                    </li>
                    <li>
                        If the market was opened with a missing or incorrect red card, we reserve the right to void betting.
                    </li>
                    <li>
                        If odds were offered with an incorrect match time (more than 2 minutes), we reserve the right to void betting.
                    </li>
                    <li>
                        If a match is interrupted or postponed and is not continued within 48h after initial kick-off date, betting will be void.
                    </li>
                    <li>
                        If the team names or category are displayed incorrectly, we reserve the right to void betting.
                    </li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 mt-8 text-white">Rugby Sevens</h2>

                <h3 className="text-xl font-semibold mb-3 text-white">Settlement and cancellation rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        All markets (except halftime, first half markets, overtime and penalty shoot out) are considered for regular time only.
                    </li>
                    <li>
                        If a match is interrupted and continued within 48h after initial kick-off, all open bets will be settled with the final result. Otherwise, all undecided bets are considered void.
                    </li>
                    <li>
                        Regular 14 / 20 Minutes: Markets are based on the result at the end of a scheduled 14 / 20 minutes play unless otherwise stated. This includes any added injury or stoppage time but does not include extra-time, time allocated for a penalty shootout or sudden death.
                    </li>
                    <li>
                        If the market remains open when the following events have already taken place: score changes or red cards, we reserve the right to void betting.
                    </li>
                    <li>
                        If the market was opened with a missing or incorrect red card, we reserve the right to void betting.
                    </li>
                    <li>
                        If odds were offered with an incorrect match time (more than 1 minute), we reserve the right to void betting.
                    </li>
                    <li>
                        If a match is interrupted or postponed and is not continued within 48h after initial kick-off date betting will be void.
                    </li>
                    <li>
                        If the team names or categories are displayed incorrectly, we reserve the right to void betting.
                    </li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 mt-8 text-white">Darts</h2>

                <h3 className="text-xl font-semibold mb-3 text-white">Settlement and cancellation rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        In the case of a match not being finished, all undecided markets are considered void.
                    </li>
                    <li>
                        If markets remain open with an incorrect score which has a significant impact on the prices, we reserve the right to void betting.
                    </li>
                    <li>
                        If the players/teams are displayed incorrectly, we reserve the right to void betting.
                    </li>
                    <li>
                        If a match is not completed all undecided markets are considered void.
                    </li>
                    <li>
                        Bullseye counts as red check out colour.
                    </li>
                </ul>
        // ... existing code ...
                <h2 className="text-2xl font-bold mb-4 mt-8 text-white">Snooker</h2>

                <h3 className="text-xl font-semibold mb-3 text-white">Settlement and cancellation rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        In the case of a retirement of a player or disqualification all undecided markets are considered void.
                    </li>
                    <li>
                        In case of a re-rack, settlement stays if the outcome was determined before the re-rack.
                    </li>
                    <li>
                        No fouls or free balls are considered for settlement of any Potted-Colour market.
                    </li>
                    <li>
                        In case of a frame starting but not being completed, all frame related markets will be voided unless the outcome has already been determined.
                    </li>
                    <li>
                        If markets remain open with an incorrect score which has a significant impact on the prices, we reserve the right to void betting.
                    </li>
                    <li>
                        If the players/teams are displayed incorrectly, we reserve the right to void betting.
                    </li>
                    <li>
                        If a match is not completed all undecided markets are considered void.
                    </li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 mt-8 text-white">Table Tennis</h2>

                <h3 className="text-xl font-semibold mb-3 text-white">Settlement and cancellation rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        In the case of a match not being finished all undecided markets are considered void.
                    </li>
                    <li>
                        If a match is interrupted or postponed and is not continued within 48h after initial kick-off date, betting will be void.
                    </li>
                    <li>
                        If markets remain open with an incorrect score which has a significant impact on the prices, we reserve the right to void betting.
                    </li>
                    <li>
                        If the players/teams are displayed incorrectly, we reserve the right to void betting.
                    </li>
                    <li>
                        If a player retires, all undecided markets are considered void.
                    </li>
                    <li>
                        Official points deductions will be taken into account for all undetermined markets. Markets which have already been determined will not take deductions into account.
                    </li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 mt-8 text-white">Bowls</h2>

                <h3 className="text-xl font-semibold mb-3 text-white">Settlement and cancellation rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        In case of a retirement and walkover of any player, all undecided bets are considered void.
                    </li>
                    <li>
                        If a match is interrupted and continued within 48h after initial start time, all open bets will be settled with the final result. Otherwise all undecided bets are considered void.
                    </li>
                    <li>
                        If markets remain open with an incorrect score which has a significant impact on the prices, we reserve the right to void betting.
                    </li>
                    <li>
                        If the players/teams are displayed incorrectly, we reserve the right to void betting.
                    </li>
                    <li>
                        If a player retires all undecided markets are considered void.
                    </li>
                </ul>
        // ... existing code ...
                <h2 className="text-2xl font-bold mb-4 mt-8 text-white">Squash</h2>

                <h3 className="text-xl font-semibold mb-3 text-white">Settlement and cancellation rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        In the case of a match not being finished, all undecided markets are considered void.
                    </li>
                    <li>
                        If a match is interrupted or postponed and is not continued within 48h after initial kick-off date, betting will be void.
                    </li>
                    <li>
                        If markets remain open with an incorrect score which has a significant impact on the prices, we reserve the right to void betting.
                    </li>
                    <li>
                        If the players/teams are displayed incorrectly, we reserve the right to void betting.
                    </li>
                    <li>
                        If a player retires, forfeits the match or is disqualified all undecided markets are considered void.
                    </li>
                    <li>
                        Official points deductions will be taken into account for all undetermined markets. Markets which have already been determined will not take deductions into account.
                    </li>
                    <li>
                        If penalty point(s) are awarded by the umpire, all bets on that game will stand.
                    </li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 mt-8 text-white">Aussie Rules</h2>

                <h3 className="text-xl font-semibold mb-3 text-white">Settlement and cancellation rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        All markets exclude overtime unless otherwise stated.
                    </li>
                    <li>
                        If a match is interrupted and continued within 48h after initial start time, all open bets will be settled with the final result. Otherwise all undecided bets are considered void.
                    </li>
                    <li>
                        Regular 80 Minutes: Markets are based on the result at the end of a scheduled 80 minutes play unless otherwise stated. This includes any added injury or stoppage time but does not include extra-time.
                    </li>
                    <li>
                        If odds were offered with an incorrect match time (more than 2 minutes), we reserve the right to void betting.
                    </li>
                    <li>
                        Regular game time: Markets are based on the result at the end of the four quarters unless otherwise stated. This does not include extra time.
                    </li>
                    <li>
                        If a match is interrupted or postponed and is not continued within 48h after initial kick-off date betting will be void.
                    </li>
                    <li>
                        If the team names or category are displayed incorrectly, we reserve the right to void betting.
                    </li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 mt-8 text-white">Field Hockey</h2>

                <h3 className="text-xl font-semibold mb-3 text-white">Settlement and cancellation rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        All markets are considered for regular time only unless otherwise mentioned.
                    </li>
                    <li>
                        If a match is interrupted or postponed and is not continued within 48h after initial kick-off date, betting will be void.
                    </li>
                    <li>
                        If markets remain open with an incorrect score which has a significant impact on prices, we reserve the right to void betting.
                    </li>
                </ul>
                // ... existing code ...
                <h2 className="text-2xl font-bold mb-4 mt-8 text-white">Winter Sports</h2>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        If a specific event is postponed or abandoned, then bets remain valid provided that the event is completed within 72 hours.
                    </li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 mt-8 text-white">Alpine Skiing</h2>

                <h3 className="text-xl font-semibold mb-3 text-white">Settlement and cancellation rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        Unless otherwise stated in the market rules, the result at the time of the podium presentation will be considered valid for settlement purposes.
                    </li>
                    <li>
                        Winner and Top 3 market will be settled accordingly as long as world cup points are awarded to the competitors. If there are no world cup points awarded, Winner and Top 3 market will be voided.
                    </li>
                    <li>
                        If a race is postponed to another day (to be determined within UTC time zone) all markets will be voided unless takes place within 48 hours of its initial starting time at the same venue. If there is a venue change for a postponed race, all markets will always be voided. If a race is postponed only by a few minutes or hours but still takes place on the same day, all markets will be settled accordingly.
                    </li>
                    <li>
                        If more than 1 competitor wins the race, there will be dead heat settlement. The number of competitors who finish first will determine the dead heat factor e.g., if 3 competitors finish first with the exact same time, the dead head factor will be 0.33.
                    </li>
                    <li>
                        If a competitor does not participate in the race at all (no start), all bets on this competitor will be voided.
                    </li>
                    <li>
                        In races with 2 runs, Winner and Top 3 markets will always be voided if the 1st run takes place but the 2nd run gets cancelled.
                    </li>
                    <li>
                        Bets on "Others" competitor will never be refunded unless the entire market gets voided.
                    </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Head2head markets</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        Markets will be voided if at least one of the two competitors does not participate at all in the race.
                    </li>
                    <li>
                        If both competitors retire in the same run, the market will be voided.
                    </li>
                    <li>
                        If both competitors finish with the exact same time after the entire race, the market will be voided.
                    </li>
                    <li>
                        In races with 2 runs, if one competitor does not participate in the 2nd run while the other one does not finish the 2nd run, the competitor who participated in the 2nd run will be declared the winner of the market.
                    </li>
                    <li>
                        In races with 2 runs, if both competitors finish the 1st run, but do not qualify for the 2nd run, the competitor who finishes further ahead, will be the declared winner of the market, even if the 2nd run gets cancelled.
                    </li>
                    <li>
                        In races with 2 runs, markets that are decided after the 1st run will be settled accordingly even if the 2nd run gets cancelled. This applies in the following cases:
                        <ul className="list-disc pl-8 mt-2">
                            <li>One competitor does not finish the 1st run while the other one does</li>
                            <li>One competitor does not qualify for the 2nd run while the other one does</li>
                        </ul>
                    </li>
                    <li>
                        In races with 2 runs, if both competitors qualify for the 2nd run but do not participate in the 2nd run, due to injury, for example, markets will be voided.
                    </li>
                    <li>
                        If one of them only participates in the 2nd run, he or she will be declared the winner of the market.
                    </li>
                </ul>
        // ... existing code ...
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Top 3 market</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        If there are more than 3 competitors on the first 3 places, dead heat settlement will be applied between the competitors on the list of the Top 3 ranks.
                    </li>
                    <li>
                        For example, if there is one winner, one second place and two with the same time on the third place, the winner and the 2nd place finisher will be settled as winner and the other two will be settled with a dead heat factor of 0.5.
                    </li>
                    <li>
                        If there is one winner and three second place finishers, the winner will be settled as winner and the other three will be settled with a dead heat factor of 0.66.
                    </li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 mt-8 text-white">Ski Jumping</h2>

                <h3 className="text-xl font-semibold mb-3 text-white">Settlement and cancellation rules</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        Unless otherwise stated in the market rules, the result at the time of the podium presentation will be considered valid for settlement purposes.
                    </li>
                    <li>
                        Winner and Top 3 market will be settled accordingly as long as world cup points are awarded to the competitors. If there are no world cup points awarded, Winner and Top 3 market will be voided. In Ski Jumping competitions points are awarded if the 1st jump has been completed and the 2nd jump gets cancelled.
                    </li>
                    <li>
                        If a competition is postponed to another day (to be determined within UTC time zone) all markets will be voided unless it takes place within 48 hours of its initial starting time at the same venue. If there is a venue change for a postponed competition, all markets will always be voided.
                    </li>
                    <li>
                        If a competition is postponed only by a few minutes or hours but still takes place on the same day, all markets will be settled accordingly.
                    </li>
                    <li>
                        If more than 1 competitor wins the competition, there will be dead heat settlement. The number of competitors who finish first will determine the dead heat factor e.g., if 3 competitors finish first with the exact points, the dead head factor will be 0.33.
                    </li>
                    <li>
                        If a competitor does not participate in the competition at all (no jump), all bets on this competitor will be voided.
                    </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Head2head markets</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        Markets will be voided if at least one of the two competitors does not participate at all in the competition.
                    </li>
                    <li>
                        If both competitors finish with the exact same points after the competition, the market will be voided.
                    </li>
                    <li>
                        If both competitors do not qualify for the 2nd jump, the competitor who finishes further ahead, will be the declared winner of the market, even if the 2nd jump gets cancelled.
                    </li>
                    <li>
                        If the 2nd jump gets cancelled, the competitor that finished further ahead after the 1st jump, will be declared winner of the market.
                    </li>
                    <li>
                        If both competitors qualify for the 2nd jump but do not participate in the 2nd jump, due to injury for example, markets will be voided. If one of them only participates in the 2nd jump, he will be declared the winner of the market.
                    </li>
                    <li>
                        If one competitor is already outside of the Top 30 and the other one is inside the Top 30 and the competition gets cancelled during the 1st jump, the competitor inside the Top 30 will be declared the winner of the market.
                    </li>
                    <li>
                        If both competitors are inside the Top 30 and the competition gets cancelled during the 1st jump, the market will be voided.
                    </li>
                </ul>
        // ... existing code ...
                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Top 3 market</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        If there are more than 3 competitors on the first 3 places, dead heat settlement will be applied between the competitors on the list of the Top 3 ranks.
                    </li>
                    <li>
                        For example, if there is one winner, one second place and two with the same time on the third place, the winner and the 2nd place finisher will be settled as winner and the other two will be settled with a dead heat factor of 0.5.
                    </li>
                    <li>
                        If there is one winner and three second place finishers, the winner will be settled as winner and the other three will be settled with a dead heat factor of 0.66.
                    </li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 mt-8 text-white">Athletics</h2>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        If a specific event is postponed or abandoned, then bets remain valid provided that the event is completed within 72 hours.
                    </li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 mt-8 text-white">Cricket T20 + ODI</h2>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        All match betting will be settled in accordance with official competition rules. If a team declares, that innings will be considered complete for settlement purposes
                    </li>
                    <li>
                        If there is no official result, all bets will be void. An official result includes match results declared official by the governing body, determined using calculation methods (V/D, DLS, etc.) for matches interrupted by weather or external factors.
                    </li>
                    <li>
                        All markets do not consider super overs unless otherwise mentioned.
                    </li>
                    <li>
                        In limited overs matches, bets will be void if it has not been possible to complete at least 80% of the scheduled overs in either innings due to external factors, including bad weather, unless settlement of the bet has already been determined before the reduction. In drawn First Class matches, bets will be void if fewer than 200 overs have been bowled, unless settlement of the bet has already been determined.
                    </li>
                    <li>
                        If a match is declared a 'no-ball' bets will be void and staked money returned to the customer. If a match/market is cancelled before a ball being bowled, and it is not rescheduled within 48 hours, bets on the match will be classified as void.
                    </li>
                    <li>
                        For the Hundred, an over will consist of 5 legal deliveries, so a full innings will be made up of 20 overs. All other rules remain the same as other limited overs formats.
                    </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Market description</h3>
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        Match betting - Who will win the match? All match betting will be settled in accordance with official competition rules. In matches affected by adverse weather, bets will be settled according to the official result. If there is no official result, all bets will be void. In the case of a tie, if the official rules do not determine a winner then dead-heat rules will apply. In competitions where a bowl off or super over determines a winner, bets will be settled on the official result. In First Class matches, if the official result is a tie, bets will be settled as a dead-heat between both teams. Bets on the draw will be settled as losers. If a match is abandoned due to external factors, then bets will be void unless a winner is declared based on the official competition rules. If a match is cancelled then all bets will be void if it is not restarted within 48 hours of its advertised start time.
                    </li>

                    <li>
                        Match Betting: Draw No Bet - Who will win the match given that all bets will be void if the match is a draw? A tie will be settled as a dead heat. All match betting will be settled in accordance with official competition rules. If there is no official result, all bets will be void.
                    </li>
                    <li>
                        Toss Winner - Who will win the toss? If no toss takes place, all bets will be void. Other equivalents are considered a toss e.g. bat flip.
                    </li>
                    <li>
                        Toss/Match winner - Who will win the toss, and then who will win the game? Toss Winner rules as above. Match betting rules as above.
                    </li>
                    <li>
                        Tied match - Will the match be tied? All bets will be settled according to the official result. If the match is abandoned or there is no official result, all bets will be void. For First Class matches a tie is when the side batting second is bowled out for the second time with scores level.
                    </li>
                    <li>
                        Most Fours - Which team will hit the most fours? Only fours scored from the bat (off any delivery – legal or not) will count towards the total fours. Overthrows, all run fours and extras do not count. Fours scored in a super over do not count. In First Class games, only first innings fours will count.
                    </li>
                    <li>
                        Most Sixes - Which team will hit the most sixes? Only sixes scored from the bat (off any delivery – legal or not) will count towards the total sixes. Overthrows and extras do not count. Sixes scored in a super over do not count. In First Class games, only first innings sixes will count.
                    </li>
                    <li>
                        Most Extras - Which team will have the most extras added to their batting score? All wide deliveries, no balls, byes, leg byes and penalty runs in the match count towards the final result. If there are runs off the bat as well as extras from the same delivery, the runs off the bat do not count towards the final total. Extras in a super over do not count. In First Class games, only first innings extras will count.
                    </li>
                    <li>
                        Most Run Outs Conceded - Which team will concede the most run outs in the match? A run out 'conceded' means that a team member will be run out while batting. Run Outs in a super over do not count. In First Class games, only first innings run outs will count.
                    </li>
                    <li>
                        Highest First Over - Which team will score the most runs in the first over of their innings? The first over must be completed for bets to stand unless settlement has already been determined. If during the first over the innings is ended due to external factors, including bad weather, bets will be void, unless settlement has already been determined before the reduction. In First Class matches the market refers only to each team's first innings. Extras and penalty runs in the particular over count towards settlement. For the Hundred, an over will consist of 5 legal deliveries, so a full innings will be made up of 20 overs. All other rules remain the same as other formats.
                    </li>
                    <li>
                        Most Runs in Groups of Overs - Which team will score the most runs after the first specified number overs of their innings? If the specified number of overs are not complete the bet will be void, unless the team is all out, declares, reaches their target or settlement of the bet has already been determined. In limited overs matches, bets will be void if it has not been possible to complete at least 80% of the specified overs have been bowled at the time the bet was placed due to external factors, including bad weather, unless settlement of the bet has already been determined before the reduction. In First Class matches the market refers only to each team's first innings. For the Hundred, an over will consist of 5 legal deliveries, so a full innings will be made up of 20 overs. All other rules remain the same as other limited overs formats.
                    </li>
                    <li>
                        Highest first partnership - Which team will score the most runs before losing their first wicket? If the batting team reaches the end of their allotted overs, reaches their target or declares before the first wicket falls, the result will be the total amassed. For settlement purposes, a batsman retiring hurt does not count as a wicket. In limited overs matches, bets will be void if the innings has been reduced due to external factors, including bad weather, unless settlement has already been determined before the reduction. In drawn First Class matches, bets will be void if fewer than 200 overs have been bowled, unless settlement of the bet has already been determined. In First Class matches the market refers only to each team's first innings.
                    </li>


                    <li>
                        Match Fours - How many fours will be hit in the match? Only fours scored from the bat (off any delivery – legal or not) will count towards the total fours. Overthrows, all run fours and extras do not count. Fours scored in a super over do not count.
                    </li>
                    <li>
                        Match Sixes - How many sixes will be hit in the match? Only sixes scored from the bat (off any delivery – legal or not) will count towards the total fours. Overthrows and extras do not count. Sixes scored in a super over do not count.
                    </li>
                    <li>
                        Match Extras - How many extras will be scored in the match? All wide deliveries, no balls, byes, leg byes and penalty runs in the match count towards the final result. If there are runs off the bat as well as extras from the same delivery, the runs off the bat do not count towards the final total. Extras in a super over do not count.
                    </li>
                    <li>
                        Match Wides - How many wides will be scored in total in the match? Any runs resulting from a wide delivery, except penalty runs, count towards the final total. Wides in a super over do not count.
                    </li>
                    <li>
                        Match Run Outs - How many run outs will there be in the match? Run outs in a super over do not count.
                    </li>
                    <li>
                        Match Wickets - How many wickets will fall in the match? Retired hurt does not count as a dismissal. Wickets in a super over do not count.
                    </li>
                    <li>
                        Match Ducks - How many ducks will be scored in total in the match? A duck is classed as someone being dismissed for zero runs. Retired hurt does not count as a dismissal. Ducks in a super over do not count.
                    </li>
                    <li>
                        Match Milestones - How many of the specified milestone (50/100) will be scored in total in the match? This is determined by how many individual innings of 50+ or 100+ are scored in the match. A score of over 100 would count as both a 50 and a 100.
                    </li>
                    <li>
                        Maximum Over in Match - How many runs will be scored in the highest scoring over of the match? All runs, including extras, count towards settlement. Super overs do not count.
                    </li>
                    <li>
                        Match Top Batter - Which batter will score the most runs in the match? The result of this market is determined on the batter with the highest individual score in the match.
                    </li>
                    <li>
                        In limited overs matches, bets will be void if it has not been possible to complete at least 50% of the overs scheduled to be bowled in either innings at the time the bet was placed due to external factors, including bad weather.
                    </li>
                    <li>
                        Top batters bets for First Class matches apply only to the first innings of each team, and will be void if fewer than 200 overs have been bowled, unless settlement of the bet has already been determined. If a player was named at the toss, but later is removed as a concussion sub, that player will still be counted, as will the replacement player.
                    </li>
                    <li>
                        If a batter does not bat but was named in the starting XI, bets on that batter will stand.
                    </li>
                    <li>
                        If a batter is substituted in after the in-play market has been offered, the original market will be removed and settled as normal even if the substitute scores the highest individual score. A new market with updated selections may be offered.
                    </li>
                    <li>
                        When two or more players score the same number of runs, dead-heat rules will apply. Runs scored in a super over do not count.
                    </li>
                    <li>
                        Match Top Bowler - Which bowler will take the most wickets in the match? The result of this market is determined on the bowler with the most wickets in the match.
                    </li>
                    <li>
                        In limited overs matches, bets will be void if it has not been possible to complete at least 50% of the overs scheduled to be bowled in either innings at the time the bet was placed due to external factors, including bad weather.
                    </li>
                    <li>
                        Top bowler bets for First Class matches apply only to the first innings of each team, and will be void if fewer than 200 overs have been bowled, unless settlement of the bet has already been determined. If a player was named at the toss, but later is removed as a concussion sub, that player will still be counted, as will the replacement player.
                    </li>
                    <li>
                        If a bowler does not bowl, but was named in the starting XI, bets on that bowler will stand. If a bowler is substituted in after the in-play market has been offered, the original market will be removed and settled as normal even if the substitute takes the most wickets. A new market with updated selections may be offered.
                    </li>

                    <li>
                        If two or more bowlers have taken the same number of wickets, the bowler who has conceded the fewest runs will be the winner. If there are two or more bowlers with the same wickets taken and runs conceded, dead heat rules will apply. Wickets taken in a super over don't count.
                    </li>
                    <li>
                        If no bowlers take a wicket in an innings then all bets will be void.
                    </li>
                    <li>
                        Team of Top Batter - Which team will contain the top batter in the match? Same rules apply as Match Top Batter, with dead heat rules applying if the runs scored by the top batter on both teams is the same. If settlement is already determined at the time a match is curtailed, bets will stand.
                    </li>
                    <li>
                        Team of Top Bowler - Which team will contain the top bowler in the match? Same rules apply as Match Top Bowler, with dead heat rules applying if the wickets taken by the top bowler on both teams is the same. If settlement is already determined at the time a match is curtailed, bets will stand.
                    </li>
                    <li>
                        Player of the Match - Who will be named player of the match? Bets will be settled on the officially declared player of the match. Dead-heat rules apply. If no player of the match is officially declared then all bets will be void. All players who played in the match will be settled, including substitutes. If a player does not play, bets will be void.
                    </li>
                    <li>
                        First Innings Lead - What will be the run deficit between first innings in a First Class match? Both first innings must be completed. Dead heat rules apply in the case of a tie. In drawn First Class matches, bets will be void if fewer than 200 overs have been bowled, unless settlement has already been determined.
                    </li>
                    <li>
                        Fifty/Hundred in Match - Will there be a fifty/hundred scored in the match? Any score of 50 and above counts as a fifty. Similar for hundred.
                    </li>
                    <li>
                        Fifty/Hundred in First Innings - Will there be a fifty/hundred scored in the first innings of the match? Any score of 50 and above counts as a fifty. Similar for hundred. In First Class matches, this market refers to just the first innings of the match, not both teams' first innings.
                    </li>
                    <li>
                        Highest Individual Score - What will be the highest score by a batter in the match? Dead heat rules apply.
                    </li>
                    <li>
                        Runs off Delivery - How many runs will be scored off the specified delivery? The result will be determined by the number of runs added to the team total, off the specified delivery.
                    </li>
                    <li>
                        For settlement purposes, all illegal balls count as deliveries. For example, if an over starts with a wide, then the first delivery will be settled as 1 and, although there has not been a legal ball bowled, the next ball will be deemed as delivery 2 for that over.
                    </li>
                    <li>
                        If a delivery leads to a free hit or a free hit is to be re-bowled because of an illegal delivery, the runs scored off the additional delivery do not count.
                    </li>
                    <li>
                        All runs, whether off the bat or not are included. For example, a wide with three extra runs taken equates to 4 runs in total off that delivery.
                    </li>
                    <li>
                        For the Hundred, an over will consist of 5 legal deliveries, so a full innings will be made up of 20 overs. For example, if there are no illegal deliveries, the 5th ball bowled in the innings will be displayed as "X runs off 5th delivery, 1st over" and the 6th ball bowled in the innings will be displayed as "X runs off 1st delivery, 2nd over". If there is an illegal delivery in the first five balls bowled, the 6th ball bowled in the innings will be displayed as "X runs off 6th delivery, 1st over". All other rules remain the same as other formats.
                    </li>
                    <li>
                        Runs in Over - How many runs will be scored in the specified over? The specified over must be completed for bets to stand unless settlement has already been determined. If an innings ends during an over then that over will be deemed to be complete unless the innings is ended due to external factors, including bad weather, in which case all bets will be void, unless settlement has already been determined. If the over does not commence for any reason, all bets will be void.
                    </li>

                    <li>
                        Extras and penalty runs in the particular over count towards settlement unless penalty runs cause the innings or match end before a ball is bowled in the over, in which case that over will be void. If a run out occurs in the bowler's run up to end the game, and no deliveries have been completed in that over, bets will be void. For the Hundred, an over will consist of 5 legal deliveries, so a full innings will be made up of 20 overs. All other rules remain the same as other formats.
                    </li>
                    <li>
                        Boundary in Over - Will there be a boundary scored in the specified over? As "Runs in Over". Only boundaries scored from the bat (off any delivery – legal or not) will count as a boundary. Overthrows, all run fours and extras do not count as boundaries.
                    </li>
                    <li>
                        Wickets in Over - Will a wicket fall in the specified over? For settlement purposes, any wicket will count, including run outs. A batsman retiring hurt does not count as a wicket. If a batter is timed out or retired out then the wicket is deemed to have taken place on the previous ball. Retired hurt does not count as a dismissal.
                    </li>
                    <li>
                        Over Odd/Even - Will the number of runs scored in the specified over be odd or even? Zero will be deemed as an even number.
                    </li>
                    <li>
                        Runs in Groups of Overs - How many runs will be scored in the specified number of overs? If the specified number of overs are not complete the bet will be void, unless the team is all out, declares, reaches their target or settlement of the bet has already been determined. Extras and penalty runs in the particular group of overs count towards settlement of that group. In limited overs matches, bets will be void if the total innings is reduced at any stage to less than 80% of the stated maximum overs at the time the bet was placed, unless settlement of the bet was already determined before the reduction. For the Hundred, an over will consist of 5 legal deliveries, so a full innings will be made up of 20 overs. All other rules remain the same as other limited overs formats.
                    </li>
                    <li>
                        Wickets in Groups of Overs - How many wickets will fall in the specified number of overs? If the specified number of overs are not complete the bet will be void, unless the team is all out, declares, reaches their target or settlement of the bet has already been determined. In limited overs matches, bets will be void if the total innings is reduced at any stage to less than 80% of the stated maximum overs at the time the bet was placed, unless settlement of the bet was already determined. For settlement purposes, if a batter is timed out or retired out then the wicket is deemed to have taken place on the previous ball. Retired hurt does not count as a dismissal. For the Hundred, an over will consist of 5 legal deliveries, so a full innings will be made up of 20 overs. All other rules remain the same as other limited overs formats.
                    </li>
                    <li>
                        Runs in Session - How many runs will be scored in the specified session? The result is determined by the total number of runs scored in the specified session, regardless of which team has scored them. If fewer than 20 overs are bowled in a session, bets will be void unless settlement has already been determined.
                    </li>
                    <li>
                        Innings Runs - How many runs will a team score in a specified innings? The number of runs scored in specific innings. In limited overs matches, bets will be void if it has not been possible to complete at least 80% of the overs scheduled to have been bowled at the time the bet was placed due to external factors, including bad weather, unless settlement of the bet has already been determined before the reduction. Bets placed on a future innings will remain valid regardless of the runs scored in any current or previous innings. In drawn First Class matches, will be void if fewer than 200 overs have been bowled, unless settlement of the bet has already been determined. Bets will also be void in drawn first class matches, if less than 60 overs have been bowled in an incomplete innings, unless settlement of the bet has already been determined. If a team declares, that innings will be considered complete for the purposes of settlement.
                    </li>
                    <li>
                        Innings Wickets - How many wickets will the batting team lose in the current innings? Retired hurt does not count as a dismissal. In limited overs matches, bets will be void if it has not been possible to complete at least 50% of the overs scheduled to have been bowled at the time the bet was placed due to external factors, including bad weather, unless settlement of the bet has already been determined before the reduction. In drawn First Class matches, bets will be void if fewer than 200 overs have been bowled, unless settlement of the bet has already been determined.
                    </li>

                    <li>
                        Innings Sixes - How many sixes will the batting team hit in their specified innings? Specific innings sixes. Same rules as "Most Sixes".
                    </li>
                    <li>
                        Innings Extras - How many extras will be added to the named team's batting innings? Specific innings extras. Same rules as "Most Extras".
                    </li>
                    <li>
                        Innings Wides Conceded - How many wides will be bowled by the named bowling team? Specific innings wides. Same rules as "Match Wides".
                    </li>
                    <li>
                        Innings Ducks - How many ducks will be scored in the named team's batting innings? Same rules as "Match Ducks".
                    </li>
                    <li>
                        Innings Team Run Outs - How many run outs will a team concede in their specified innings? Same rules as "Most Run Outs".
                    </li>
                    <li>
                        Maximum Over in Innings - How many runs will be scored off the highest scoring over of the current innings? Same rules as "Maximum Over in Match".
                    </li>
                    <li>
                        Innings Runs - Odd or Even - Will the total innings runs be odd or even? If the innings is abandoned, forfeited or there is no official result, all bets will be void. Zero counts as an Even number.
                    </li>
                    <li>
                        Innings to finish with a Boundary - Will the last ball of the innings be a boundary? Only boundaries scored from the bat (off any delivery – legal or not) will count as a boundary. Overthrows, all run fours and extras do not count as boundaries. In limited overs matches, bets will be void if there is any reduction in the number of overs scheduled to have been bowled at the time the bet was placed due to external factors, including bad weather. If the match is abandoned or there is no official result, all bets will be void.
                    </li>
                    <li>
                        Top Batter in Innings - Which batter will score the most runs for the named team? The result of this market is determined on the batter with the highest individual score in a team's innings.
                    </li>
                    <li>
                        In limited overs matches, bets will be void if it has not been possible to complete at least 50% of the overs scheduled to have been bowled at the time the bet was placed due to external factors, including bad weather.
                    </li>
                    <li>
                        Pre-match top batter bets for First Class matches apply only to the first innings of each team, and will be void if fewer than 200 overs have been bowled, unless settlement of the bet has already been determined. If a player was named at the toss, but later is removed as a concussion sub, that player will still be counted, as will the replacement player.
                    </li>
                    <li>
                        If a batter does not bat, but was named in the starting XI, bets on that batter will stand. If a batter is substituted in after the in-play market has been offered, the original market will be removed and settled as normal even if the substitute scores the highest individual score. A new market with updated selections may be offered.
                    </li>
                    <li>
                        When two or more players score the same number of runs, in the innings dead-heat rules will apply. Runs scored in a super over do not count.
                    </li>
                    <li>
                        Top Bowler in Innings - Which bowler will take the most wickets for the named team? The result of this market is determined on the bowler with the highest number of wickets in an innings.
                    </li>
                    <li>
                        In limited overs matches, bets will be void if it has not been possible to complete at least 50% of the overs scheduled to have been bowled at the time the bet was placed due to external factors, including bad weather.
                    </li>
                    <li>
                        Pre-match bets for First Class matches apply only to the first innings of each team, and will be void if fewer than 200 overs have been bowled, unless settlement of the bet has already been determined. If a player was named at the toss, but later is removed as a concussion sub, that player will still be counted, as will the replacement player.
                    </li>
                    <li>
                        If a bowler does not bowl, but was named in the starting XI, bets on that bowler will stand. If a bowler is substituted in after the in-play market has been offered, the original market will be removed and settled as normal even if the substitute takes the most wickets. A new market with updated selections may be offered.
                    </li>
                    <li>
                        If two or more bowlers have taken the same number of wickets, the bowler who has conceded the fewest runs will be the winner. If there are two or more bowlers with the same wickets taken and runs conceded, dead heat rules will apply. Wickets taken in a super over don't count.
                    </li>

                    <li>
                        If no bowlers take a wicket in an innings then all bets will be void.
                    </li>
                    <li>
                        Last Player Standing - Which batter will be not out upon completion of the innings? If there are two or more batters who are not out upon completion of the innings, the winner for the purpose of settlement will be the last batter to face a delivery (legal or not). Players will not be deemed to have been not out if they were no longer at the crease having retired hurt or did not bat. If more than 11 players bat, the market will be void.
                    </li>
                    <li>
                        In limited overs matches, bets will be void if, subsequent to placing the bet, the innings has been reduced in any way due to external factors, including bad weather.
                    </li>
                    <li>
                        All players who played in the innings will be settled, including substitutes.
                    </li>
                    <li>
                        Most Economical Bowler - Which bowler will concede the fewest runs per over in the innings? The result of this market is determined on the bowler with the lowest number of runs conceded per over while bowling in an individual innings. To match the scorecard, so in this case wide balls, no balls do not count towards the total. Only byes, leg byes and penalty runs do not.
                    </li>
                    <li>
                        If a bowler does not bowl, but was named in the starting XI, bets on that bowler will stand.
                    </li>
                    <li>
                        Pre-match bets for First Class matches apply only to the first innings of each team, and will be void if fewer than 200 overs have been bowled, unless settlement of the bet has already been determined. If a player was named at the toss, but later is removed as a concussion sub, that player will still be counted, as will the replacement player.
                    </li>
                    <li>
                        If a bowler does not bowl, but was named in the starting XI, bets on that bowler will stand. If two or more bowlers have exactly the same runs per over, dead heat rules will apply.
                    </li>
                    <li>
                        Runs conceded in a super over don't count.
                    </li>
                    <li>
                        Batter Runs - How many runs will the named batter score? If the batter finishes the innings not out at the end of an innings their score will be the final result. If a batter does not bat, the bet will be void. If a batter retires hurt, but returns later, the total runs scored by that batter in the innings will count. If the batter does not return later, the final result will be as it stood when the batter retired. For pre-match bets, only the batter's first innings will count. Runs scored in a super over do not count.
                    </li>
                    <li>
                        Combined Batter Runs - How many total runs will the named batters score? As "Batter Runs", and if any of the named batters do not bat, the bet will be void, unless settlement of the bet has already been determined or goes on to be determined.
                    </li>
                    <li>
                        Batter Fours - How many fours will the named batter hit? If the batter finishes the innings not out at the end of an innings their number of fours will be the final result. If a batter does not bat, the bet will be void. If a batter retires hurt, but returns later, the total fours hit by that batter in the innings will count. If the batter does not return later, the final result will be as it stood when the batter retired.
                    </li>
                    <li>
                        In limited overs matches, bets will be void if it has not been possible to complete at least 80% of the scheduled overs in either innings due to external factors, including bad weather, unless settlement has been determined, or goes on to be determined. Result will be considered determined at the line at which the bet was placed in respect of the batter is dismissed. In drawn First Class matches, bets will be void if fewer than 200 overs have been bowled, unless settlement of the bet has already been determined.
                    </li>
                    <li>
                        Only fours scored from the bat (off any delivery – legal or not) will count towards the total fours. Overthrows, all run fours and extras do not count. For pre-match bets, only the batter's first innings will count. Fours scored in a super over do not count.
                    </li>
                    <li>
                        Batter Sixes - How many sixes will the named batter hit? If the batter finishes the innings not out at the end of an innings their number of sixes will be the final result. If a batter does not bat, the bet will be void. If a batter retires hurt, but returns later, the total sixes hit by that batter in the innings will count. If the batter does not return later, the final result will be as it stood when the batter retired.
                    </li>

                    <li>
                        In limited overs matches, bets will be void if it has not been possible to complete at least 80% of the scheduled overs in either innings due to external factors, including bad weather, unless settlement has been determined, or goes on to be determined. Result will be considered determined at the line at which the bet was placed is passed, or the batter is dismissed.
                    </li>
                    <li>
                        Only sixes scored from the bat (off any delivery – legal or not) will count towards the total fours. Overthrows and extras do not count. For pre-match bets, only the batter's first innings will count. Sixes scored in a super over do not count.
                    </li>
                    <li>
                        Batter Milestones - Will the named batter reach the specified milestone? Same rules as "Batter Runs".
                    </li>
                    <li>
                        Batter Deliveries Faced - How many deliveries will the named batter face? To match the scorecard, so in this case wides do not count, but no-balls do. If a batter retires hurt, but returns later, the total deliveries faced by that batter in the innings will count. If the batter does not return later, the final result will be as it stood when the batter retired.
                    </li>
                    <li>
                        In limited overs matches, bets will be void if it has not been possible to complete at least 80% of the scheduled overs in either innings due to external factors, including bad weather, unless settlement has been determined, or goes on to be determined. Result will be considered determined if the line at which the bet was placed is passed, or the batter is dismissed. In drawn First Class matches, bets will be void if fewer than 200 overs are bowled, unless settlement of the bet has already been determined.
                    </li>
                    <li>
                        For pre-match bets, only the batter's first innings will count. Deliveries faced in a super over do not count.
                    </li>
                    <li>
                        Batter Method of Dismissal - How will the named batter be out? If the specified batter is not out, all bets will be void. If the specified batter retires, and does not return to bat later, all bets will be void. If that batter does return to bat later and is out, bets will stand. Caught and bowled is included in fielder catch. "Other" specified method in cricket include: hit wicket, timed out, obstructing the field and hit the ball twice.
                    </li>
                    <li>
                        Bowler Wickets - How many wickets will the named bowler take? If a bowler does not bowl, bets will be void.
                    </li>
                    <li>
                        In limited overs matches, bets will be void if it has not been possible to complete at least 80% of the scheduled overs in the relevant innings due to external factors, including bad weather, unless settlement has been determined. Result will be considered determined if the line at which the bet was placed is passed. In drawn First Class matches, bets will be void if fewer than 200 overs have been bowled, unless the player's bowling innings is complete.
                    </li>
                    <li>
                        For pre-match bets, only the bowler's first innings will count. Wickets scored in a super over do not count.
                    </li>
                    <li>
                        Bowler Runs Conceded - How many runs will the named bowler concede? To match the scorecard, so in this case wides and no-balls do count, though byes, leg byes and penalty runs do not. If a bowler does not bowl, bets will be void.
                    </li>
                    <li>
                        In limited overs matches, bets will be void if it has not been possible to complete at least 80% of the scheduled overs in either innings due to external factors, including bad weather, unless settlement has been determined, or goes on to be determined. Result will be considered determined if the line at which the bet was placed is passed, or the batter is dismissed. In drawn First Class matches, bets will be void if fewer than 200 overs are bowled, unless settlement of the bet has already been determined.
                    </li>
                    <li>
                        For pre-match bets, only the bowler's first innings will count. Runs conceded in a super over do not count.
                    </li>
                    <li>
                        Named Player Performance - How many points will the named player score in the player performance system? Points are scored as follows: 1 point per run scored, 20 points per wicket taken, 10 points per catch taken, 25 points per stumping taken. If the player does not bat or bowl, but is in the starting eleven, all bets will be settled. If the player is not in the starting eleven bets will be void.
                    </li>
                </ul>



            </section>
        </div>
    )
}

export default Sportsbook
