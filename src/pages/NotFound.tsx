import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-9xl font-bold text-red-600 mb-4">404</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. The page might
          have been moved, deleted, or doesn't exist.
        </p>

        <div className="flex justify-center space-x-4">
          <Link
            to="/"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200"
          >
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="border border-red-600 text-red-600 hover:bg-red-50 font-semibold py-3 px-8 rounded-lg transition duration-200"
          >
            Go Back
          </button>
        </div>

        <div className="mt-12">
          <div className="text-6xl mb-4">🏠</div>
          <p className="text-gray-500">Let's get you back to FC Residency</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
