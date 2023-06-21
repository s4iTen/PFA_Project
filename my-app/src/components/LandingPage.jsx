import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <h1>Welcome to Nike Shoes Ecommerce</h1>
      {/* Add your content */}
      <Link to="/Main">
        {" "}
        {/* Update the path to "/Main" */}
        <button>Go to Home Page</button>
      </Link>
    </div>
  );
}

export default LandingPage;
