import React from 'react'

const CoinMixing = () => {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-gray-300">
        <h1 className="text-3xl font-bold mb-6 text-white">Coin Mixing Policy</h1>
        
        <p className="mb-6">
          Stake has a strict anti coin mixing policy. This is in accordance with our AML procedures outlined in our terms of service.
        </p>
  
        <p className="mb-6">
          If deposits & withdrawals are suspected of being attempts to mix coins we reserve the right to hold withdrawals until completion of one of the following procedures:
        </p>
  
        <ul className="list-disc pl-8 mb-6">
          <li className="mb-2">
            Withdrawal is refunded to the users balance, allowing them to send the funds back to the same address from which their deposit originated from.
          </li>
          <li className="mb-2">
            Withdrawal is sent after full completion of account verification & KYC
          </li>
          <li className="mb-2">
            Withdrawal refunded & sufficient gameplay is reached
          </li>
        </ul>
  
        <p className="mb-4">
          Stake will always try to ensure every matter is resolved & the above can be modified to suit specific situations.
        </p>
      </div>
    )
  }
  
  export default CoinMixing
