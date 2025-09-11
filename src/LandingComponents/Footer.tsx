import { Link } from "react-router-dom";
import LobsterLogo from "../assets/lobster_logo_white.png";

const Footer = () => {
  return (
    <div className="bg-slate-900 py-6 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center space-y-4">
          {/* Powered by Section */}
          <div className="flex items-center space-x-3 group">
            <span className="text-gray-400 text-sm font-medium">
              Powered by
            </span>
            <a
              href="https://lobsterlabs.net"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-105"
            >
              <img
                src={LobsterLogo}
                alt="Lobster Labs"
                className="h-6 w-auto filter brightness-90 hover:brightness-100 transition-all duration-200"
              />
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-700 pt-2 w-2/3">
            <p className="text-center text-xs text-gray-500">
              © {new Date().getFullYear()} FC Pro Soccer Tryouts. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
