import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Home = () => {
  useEffect(() => {
    document.body.className = 'home-page';
    return () => {
      document.body.className = '';
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-screen bg-white">
      <Navbar />

      <main className="flex-1 w-screen p-4">
        <h1 className="text-3xl font-semibold mb-4">Home Page</h1>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">Card 1</h2>
            <p>This is the content of Card 1.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">Card 2</h2>
            <p>This is the content of Card 2.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">Card 3</h2>
            <p>This is the content of Card 3.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
