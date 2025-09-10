import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-900 py-8 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm text-gray-500">
          <Link
            to="/nonexistent"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            Test 404 page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
