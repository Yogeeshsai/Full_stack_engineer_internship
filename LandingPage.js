import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="bg-blue-500 w-full p-4 text-white text-center">Welcome to EdTech</header>
      <main className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Learn from the best, at your own pace.</h1>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Get Started</button>
      </main>
      <footer className="bg-gray-800 w-full p-4 text-white text-center">© 2024 EdTech</footer>
    </div>
  );
};

export default LandingPage;
