import React from 'react'

const HelpCenter = () => {
	return (
		<>

			{/* <div className="container mx-auto px-4 py-8 max-w-6xl">
				<div className="min-h-screen bg-[#1a1b26] p-8">
				
				</div>
			</div> */}
			<div className="min-h-screen p-8">
			<div className="max-w-3xl mx-auto">
				<h1 className="text-4xl font-light text-gray-200 mb-8 text-center">
					How can we help?
				</h1>
				<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
					{/* Sales Card */}
					<div className="bg-white p-8 rounded-lg shadow-lg text-center">
						<div className="flex justify-center mb-6">
							<svg className="w-12 h-12 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20 4v16H4V4h16m2-2H2v20h20V2zM6 16h12v2H6v-2z" />
							</svg>
						</div>
						<h2 className="text-2xl font-bold text-gray-800 mb-4">Talk to Sales</h2>
						<p className="text-gray-600 mb-6">
							Interested in HubSpot's software? Just pick up the phone to chat with a member of our sales team.
						</p>
						<a href="tel:000800-050-3669" className="text-blue-600 font-semibold text-lg block mb-4">
							000800 050 3669
						</a>
						<button className="text-blue-600 hover:text-blue-700 font-medium">
							View all global numbers
						</button>
					</div>

					{/* Support Card */}
					<div className="bg-white p-8 rounded-lg shadow-lg text-center">
						<div className="flex justify-center mb-6">
							<svg className="w-12 h-12 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
							</svg>
						</div>
						<h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Customer Support</h2>
						<p className="text-gray-600 mb-6">
							Sometimes you need a little help from your friends. Or a HubSpot support rep. Don't worry... we're here for you.
						</p>
						<button className="bg-[#ff5c35] text-white px-6 py-3 rounded-md hover:bg-[#ff4518] transition-colors">
							Contact Support
						</button>
					</div>
				</div>
			</div>

			</div>
			</div>
			{/* </div> */}
		

		</>
	)
}

export default HelpCenter
