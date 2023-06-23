import React from 'react';

const Header = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img src="/images/OIG.png" className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">Welcome To My Portfolio</h1>
        <p className="py-6">Hello, I'm PurpxPanda, thank you for visiting my developer portfoio. I'm Looking forward to wokring with you in the future.</p>
        < button className="btn btn-primary">About Me</button>
      </div>
    </div>
  </div>
  );
};

export default Header;
