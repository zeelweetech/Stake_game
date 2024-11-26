import React from 'react'

const antiMoneyLaundering = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-8 text-gray-300">
        Anti-Money Laundering, Anti-Terrorist Financing statement
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">1. Company Business Model</h2>
        <p className="mb-4 text-gray-300">
          Medium Rare N.V. ("Stake" or the "Company") is a company incorporated under Curaçao Law that was established in 2017 and operates the online casino www.stake.com under the Certificate of Operation (Application no. OGL/2024/1451/0918) issued by the Curaçao Gaming Control Board. Stake presently supports users in more than 169 countries globally.
        </p>
        <p className="mb-4 text-gray-300">
          As part of its global operations, Stake has established compliance measures commensurate with its services and products that are reasonably designed to deter and detect illicit activity on its platform. Such measures include onboarding and compliance screenings of its customers and transaction action-based controls.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">2. Company Policy Statement</h2>
        <p className="mb-4 text-gray-300">
          Stake is not a financial institution within the meaning of applicable law of Curaçao and is accordingly not directly subject to the statutes and regulations applicable to certain financial institutions, money transfer, or virtual asset service providers. However, in accordance with the 2016 Regulations for Anti-Money Laundering and Combating the Financing of Terrorism ("AML/CFT") applicable for the Curaçao jurisdiction as provided by the Curaçao Gaming Control Board, Stake expressly prohibits and rejects the use of Stake products for any form of illicit activity, including money laundering, terrorist financing or trade sanctions violations, consistent with various national anti-money laundering ("AML") laws, regulations and norms. Stake continues to monitor norm setting parameters promulgated by the Financial Action Task Force ("FATF") and certain gaming trade groups in addition to the Curaçao Gaming Control Board and will take necessary action as it deems appropriate to reflect changes in law.
        </p>
        <p className="mb-4 text-gray-300">
          Stake's intention is to follow global best practices in guarding against Stake products being used to facilitate such activities. Those best practices include:
        </p>
        <ul className="list-disc pl-8">
          <li className="mb-2 text-gray-300">
            Adoption of a written policy, and procedures and controls, reasonably designed to guard against money laundering, terrorist financing and trade sanctions violations;
          </li>
          <li className="mb-2 text-gray-300">
            Where appropriate, designation of a compliance officer to oversee the implementation of the policy, procedures and controls;
          </li>
        </ul>
      </section>
    </div>
  )
}

export default antiMoneyLaundering
