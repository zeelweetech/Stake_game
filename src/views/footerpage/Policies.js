import { Link, Outlet } from "react-router-dom";

const Policies = () => {
  const links = [
    { name: "Privacy Policy", link: "privacy" }, // Relative path
    { name: "Terms of Service", link: "terms" }, // Relative path
    { name: 'WagerRequirements', link: '/wager-requirements' },
    { name: 'Privacy', link: '/Terms' },
    { name: 'Coin Mixing', link: '/coin-mixing' },
    { name: 'Providers', link: '/providers' },
    { name: 'Sportsbook', link: '/sportsbook' },
    { name: 'Cookies Policy', link: '/cookies-policy' },
    { name: 'Self-Exclusion', link: '/self-exclusion' },
    { name: 'Racing Rules', link: '/racing-rules' },
    { name: 'Poker Card Room Rules', link: '/poker-card-room-rules' },
    { name: 'Poker Refund Policy', link: '/poker-refund-policy' },
  ];

  return (
    <div className="min-h-screen bg-[#0f1923] text-gray-300">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h1 className="text-xl font-semibold text-white">Policies</h1>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-[#1a2730] min-h-screen p-4">
          <nav className="space-y-2">
            {links.map((item) => (
              <Link
                key={item.name}
                to={item.link} // Use relative path for links
                className="block px-4 py-2 text-gray-300 hover:bg-[#2a3947] hover:text-white rounded-md transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </div>
    </div>

  )
}

export default Policies