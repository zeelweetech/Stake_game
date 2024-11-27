import React from 'react'

const PokerTournamentCancellations = () => {
  return (
    <>
    <div className="bg-[#0F212E] rounded-lg p-8">
        <h1 className="text-4xl font-bold text-white mb-6">
            Listor POKER TOURNAMENT CANCELLATION AND REFUND POLICY
        </h1>

        <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">1. GENERAL</h2>
            <div className="space-y-4 text-slate-300">
                <p className="flex gap-2">
                    <span className="min-w-[24px]">a.</span>
                    <span>This Listor Poker tournament cancellation and refund policy ("Policy") must be read alongside the Listor Poker Terms & Conditions and Card Room Rules.</span>
                </p>

                <p className="flex gap-2">
                    <span className="min-w-[24px]">b.</span>
                    <span>In case of any inconsistency between this Policy, the Terms and Conditions, the Card Room Rules, or any other applicable rules provided by Listor Poker, the resolution will follow this order of precedence: the Listor Poker Terms and Conditions; the Card Room Rules; this Policy; any other applicable rules provided by Listor Poker.</span>
                </p>

                <p className="flex gap-2">
                    <span className="min-w-[24px]">c.</span>
                    <span>Capitalized terms used but not defined in this Policy are as defined in the Card Room Rules.</span>
                </p>
            </div>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">2. CANCELLATION AND REFUNDS</h2>

            <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">2.1. Where Cancellation Occurs before a Tournament Commences</h3>
                <p className="text-slate-300 mb-4">If a tournament is cancelled before the tournament commences, registered players will be refunded:</p>

                <div className="space-y-2 text-slate-300 ml-6">
                    <p className="flex gap-2">
                        <span className="min-w-[24px]">a.</span>
                        <span>Their buy-in amount;</span>
                    </p>
                    <p className="flex gap-2">
                        <span className="min-w-[24px]">b.</span>
                        <span>Their 'Entry Fee,' consisting of their tournament fee;</span>
                    </p>
                    <p className="flex gap-2">
                        <span className="min-w-[24px]">c.</span>
                        <span>In the case of Bounty Tournaments, their own Bounty.</span>
                    </p>
                    <p className="flex gap-2">
                        <span className="min-w-[24px]">d.</span>
                        <span>If a registered player uses a voucher or tournament ticket, the voucher or ticket will be credited to the account.</span>
                    </p>
                    <p className="flex gap-2">
                        <span className="min-w-[24px]">e.</span>
                        <span>If the tournament is a freeroll then no refunded will be provided due to 'Entry Fee' having no value</span>
                    </p>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-3">2.2 Where Cancellation Occurs after a Tournament has Commenced</h3>

                <div className="space-y-4 text-slate-300">
                    <p className="flex gap-2">
                        <span className="min-w-[24px]">a.</span>
                        <span>Subject to subsection (b) below, if a tournament is cancelled after the tournament has commenced but before the Prize Stage, all remaining players will be refunded their Entry Fee, and the total of all buy-ins, re-buys and add-ons for that tournament (excluding Bounties) The remaining "Prize Pool" collected from all eliminated players all will be allocated according to the following formula:</span>
                    </p>

                    <div className="ml-8 space-y-2">
                        <p>(i). 50% of the Prize Pool will be allocated equally between all remaining players; and</p>
                        <p>(ii). 50% of the Prize Pool will be allocated proportionally between all remaining players based on their chip count at the time of cancellation.</p>
                    </div>

                    <p className="flex gap-2">
                        <span className="min-w-[24px]">b.</span>
                        <span>Where a tournament is cancelled after the tournament has commenced but no players have been eliminated, players will be refunded in accordance with section 2.1 above.</span>
                    </p>

                    <p className="flex gap-2">
                        <span className="min-w-[24px]">c.</span>
                        <span>If a tournament is cancelled after the Prize Stage the Prize Pool will be allocated between all remaining players according to the following formula:</span>
                    </p>

                    <div className="ml-8 space-y-2">
                        <p>(i). each remaining player will receive from the Prize Pool the minimum prize that has not yet been awarded in the tournament at the time of cancellation; and</p>
                        <p>(ii). the balance of the Prize Pool will be allocated proportionally between all remaining players based on their chip count at the time of cancellation.</p>
                    </div>

                    <p className="flex gap-2">
                        <span className="min-w-[24px]">d.</span>
                        <span>If a tournament with a guaranteed prize is cancelled after the tournament commences, the Prize Pool, and not the guaranteed amount, will be allocated between all remaining players in accordance with:</span>
                    </p>
                </div>


                <div className="space-y-4 text-slate-300">
                    <div className="ml-8 space-y-2">
                        <p>(i). subsection (a) if the tournament is cancelled before the Prize Stage, and</p>
                        <p>(ii). subsection (c) if the tournament is cancelled after the Prize Stage.</p>
                    </div>

                    <p className="flex gap-2">
                        <span className="min-w-[24px]">e.</span>
                        <span>If a Bounty Tournament is cancelled after it has commenced:</span>
                    </p>

                    <div className="ml-8 space-y-2">
                        <p>(i). refunds will be processed in accordance with sections 2.2(a) to 2.2(d) above; and</p>
                        <p>(ii). each remaining player will:</p>
                        <div className="ml-4 space-y-2">
                            <p>(i). receive any Bounties won by that remaining player in that tournament; and</p>
                            <p>(ii). have their own Bounty for that tournament returned to them.</p>
                        </div>
                    </div>

                    <p className="flex gap-2">
                        <span className="min-w-[24px]">f.</span>
                        <span>Under no circumstances is an eliminated player entitled to any refund.</span>
                    </p>
                </div>
            </div>
        </section>
    </div>
</>
  )
}

export default PokerTournamentCancellations