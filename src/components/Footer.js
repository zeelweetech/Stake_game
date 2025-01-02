import React, { useState } from "react";
import Bitcoin from "../assets/img/bitcoin.DpHO7atL.svg";
import Ethereum from "../assets/img/ethereum.svg.svg";
import Dogecoin from "../assets/img/dogecoin.k8OeA1SN.svg";
import betblocker from "../assets/img/betblocker.-t2TDIRS.svg";
import Litecoin from "../assets/img/litecoin.RPQ1704t.svg";
import Tron from "../assets/img/tron.BYiII1T_.svg";
import BitcoinCash from "../assets/img/bitcoin-cash.DUaEsStO.svg";
import Ufc from "../assets/img/ufc-partner.C8Oj708g.svg";
import l2 from "../assets/img/l2.png";
import Hub88 from "../assets/img/hub88.CvKNQs2Q.svg";
import Tether from "../assets/img/tether.Cv3Qd73c.svg";
import EvertonLogo from "../assets/img/everton-logo.DjZkLatD (1).svg";
import SafeGamble from "../assets/img/safe-gamble.Lrrm0l28.svg";
import Age from "../assets/img/18plus.DgozareE (1).svg";
import cryptogambling1 from "../assets/img/cryptogambling1.png";
import { FaCommentAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoShirt } from "react-icons/io5";
import { FaCrown } from "react-icons/fa6";
import { FaBloggerB } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#071d2a] text-gray-400 py-12 px-8 z-auto mt-10">
      {/* Main Navigation Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="max-w-7xl mx-auto mb-12">
          <div className="flex flex-col items-start gap-2">
            <span className="text-white text-5xl font-extrabold italic font-sans cursor-pointer" onClick={() => navigate("/")}>
              Listor
            </span>
            <p className="text-sm text-gray-400">
              © 2024 Listor.com | All Rights Reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-end gap-4 mt-3">
            <a
              href="https://blog.Listor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaBloggerB />
            </a>
            <a
              href="https://forum.Listor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaCommentAlt />
            </a>
            <a
              href="https://www.facebook.com/ListorCasino"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/Listor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/Listor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/c/ListorCasino"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaYoutube />
            </a>
            <a
              href="https://shop.Listor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <IoShirt />
            </a>
            <a
              href="https://Listor.com/vip"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaCrown />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 max-w-7xl mx-auto grid grid-cols-2 gap-x-10  md:grid-cols-4 lg:grid-cols-5 gap-y-4 md:gap-x-4 mb-12">
          {/* Casino Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Casino</h3>
            <ul className="grid gap-1 text-sm font-bold text-[#B1BAD3]">
              <li><a href="/" className="hover:text-white">Casino Games</a></li>
              <li><a href="/slots" className="hover:text-white">Slots</a></li>
              <li><a href="/LiveCasion" className="hover:text-white">Live Casino</a></li>
              <li><a href="/casino/Roulette" className="hover:text-white">Roulette</a></li>
              <li><a href="/ComeSoon" className="hover:text-white">Blackjack</a></li>
              <li><a href="/ComeSoon" className="hover:text-white">Providers</a></li>
              <li><a href="/ComeSoon" className="hover:text-white">Promos & Competitions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Sports</h3>
            <ul className="grid gap-1 text-sm font-bold text-[#B1BAD3]">
              <li><a href="/ComeSoon" className="hover:text-white">Sportsbook</a></li>
              <li><a href="/ComeSoon" className="hover:text-white">Live Sports</a></li>
              <li><a href="/ComeSoon" className="hover:text-white">Soccer</a></li>
              <li><a href="/ComeSoon" className="hover:text-white">Basketball</a></li>
              <li><a href="/ComeSoon" className="hover:text-white">Tennis</a></li>
              <li><a href="/ComeSoon" className="hover:text-white">eSports</a></li>
              <li><a href="/ComeSoon" className="hover:text-white">Bet Bonuses</a></li>
              <li><a href="/ComeSoon" className="hover:text-white">Sports Rules</a></li>
              <li><a href="/ComeSoon" className="hover:text-white">Racing Rules</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="grid gap-1 text-sm font-bold text-[#B1BAD3]">
              <li><a href="/HelpCenter" className="hover:text-white flex items-center">Help Center <svg className="w-3 h-3 ml-1" /></a></li>
              <li><a href="/ComeSoon" className="hover:text-white flex items-center">Fairness</a></li>
              <li><a href="/ComeSoon" className="hover:text-white flex items-center">Gambling Helpline <svg className="w-3 h-3 ml-1" /></a></li>
              <li><a href="/ComeSoon" className="hover:text-white">Live Support</a></li>
              <li><a href="/ComeSoon" className="hover:text-white">Self Exclusion</a></li>
            </ul>
          </div>
          <div>
            <div>
              <h3 className="text-white font-semibold mb-4">About Us</h3>
              <ul className="grid gap-1 text-sm font-bold text-[#B1BAD3]">
                <li><a href="/vip-club" className="hover:text-white">VIP Club</a></li>
                <li><a href="#" className="hover:text-white">Affiliate</a></li>
                <li>   <Link
                  to="/policies/Privacy"
                  className=" hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link></li>
                <li><Link
                  to="/policies/AntiMoneyLaunderings"
                  className=" hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  AML Policy
                </Link></li>
                <li>
                  <Link
                    to="/policies/Terms"
                    className=" hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <div>
            <h3 className="text-white font-semibold mb-4">Payment Info</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Deposit & Withdrawals</a></li>
              <li><a href="#" className="hover:text-white">Currency Guide</a></li>
              <li><a href="#" className="hover:text-white">Crypto Guide</a></li>
              <li><a href="#" className="hover:text-white">Supported Crypto</a></li>
              <li><a href="#" className="hover:text-white">How to Use the Vault</a></li>
              <li><a href="#" className="hover:text-white">How Much to Bet With</a></li>
            </ul>
          </div> */}
          <div>
            <h3 className="text-white font-semibold mb-4">How-to Guides</h3>
            <ul className="grid gap-1 text-sm font-bold text-[#B1BAD3]">
              <li><a href="/ComeSoon" className="hover:text-white">How-to Guides</a></li>
              <li><a href="/OnlineCasinoGuide" className="hover:text-white">Online Casino Guide</a></li>
              <li><a href="/ComeSoon" className="hover:text-white">Sports Betting Guide</a></li>
              <li><a href="/ComeSoon" className="hover:text-white">How to Live Stream Sports</a></li>
              <li><a href="#" className="hover:text-white">Listor VIP Guide</a></li>
              <li><a href="/ComeSoon" className="hover:text-white">House Edge Guide</a></li>
            </ul>
          </div>
        </div>

        {/* Cryptocurrency Icons Section */}
        <div className="border-t border-gray-700 py-8 ">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6">
            <img src={Litecoin} alt="Partner" className="h-11" />
            <img src={Bitcoin} alt="Partner" className="h-11" />
            <img src={Ethereum} alt="Partner" className="h-11" />
            <img src={Tron} alt="Partner" className="h-11" />
            <img src={Dogecoin} alt="Partner" className="h-11" />
            <img src={BitcoinCash} alt="Partner" className="h-11" />
            <img src={Tether} alt="Partner" className="h-11" />
            <img src={Hub88} alt="Partner" className="h-11" />
            <img src={SafeGamble} alt="Partner" className="h-11" />
            <img src={betblocker} alt="Partner" className="h-11" />
            <img src={Age} alt="Partner" className="h-11" />
          </div>
        </div>

        {/* Partners Section */}
        <div className="border-t border-gray-700 py-8">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-12 items-center">
            <img src={cryptogambling1} alt="Partner" className="h-16" />
            <img src={l2} alt="Partner" className="h-16" />
            <img src={EvertonLogo} alt="Partner" className="h-16" />
            <img src={Ufc} alt="Partner" className="h-16" />
          </div>
        </div>

        {/* Legal Section */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <div className="text-center py-2">
            <p className="text-sm">
              Listor is committed to responsible gambling, for more information visit{" "}
              <a
                href="https://www.gamblingtherapy.org"
                className="text-white hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gamblingtherapy.org
              </a>
            </p>
          </div>

          {/* Company Information */}
          <div className="text-center py-2">
            <p className="text-xs max-w-[900px] mx-auto leading-relaxed opacity-80">
              Listor is owned and operated by Medium Rare N.V., registration number: 145353,
              registered address: Korporaalweg 10, Willemstad, Curaçao. Contact us at{" "}
              <a href="mailto:support@Listor.com" className="text-inherit">
                support@Listor.com
              </a>
              . Payment agent company is Medium Rare Limited with address: 7-9 Riga Feraiou,
              LIZANTIA COURT, Office 310, Agioi Omologites, 1087 Nicosia, Cyprus and
              Registration number: HE 410775
            </p>
          </div>

          {/* Contact Links */}
          <div className="text-center py-2 text-sm">
            <span>Support </span>
            <a href="mailto:support@Listor.com" className="text-white hover:underline">
              support@Listor.com
            </a>
            <span> | Partners </span>
            <a href="mailto:partners@Listor.com" className="text-white hover:underline">
              partners@Listor.com
            </a>
            <span> | Press </span>
            <a href="mailto:press@Listor.com" className="text-white hover:underline">
              press@Listor.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
