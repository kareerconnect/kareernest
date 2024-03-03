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
        <div className="flex flex-col min-h-screen w-screen">
            <Navbar />
            <div className='flex flex-col items-center space-y-1 m-3'>
                <div className="p-6 max-w-sm mx-auto bg-teal-400 rounded-xl shadow-md flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        {/* Icon for "About Us" */}
                        <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM5 5H19V11H5V5ZM5 13V19H19V13H5Z" fill="#4F46E5" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-xl font-medium text-black">About Us</div>
                        <p className="text-gray-500">Learn more about our company and our mission.</p>
                    </div>
                </div>

                <div className="p-6 max-w-sm mx-auto bg-teal-400 rounded-xl shadow-md flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        {/* Icon for "Support Us" */}
                        <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4C6.47715 4 2 8.47715 2 14C2 16.6192 3.10536 18.9435 4.87645 20.5658L11.0002 23.9996L17.1239 20.5658C18.895 18.9435 20 16.6192 20 14C20 8.47715 15.5228 4 10 4V4ZM18 14C18 16.2091 16.2091 18 14 18C11.7909 18 10 16.2091 10 14C10 12.8638 10.6321 11.8787 11.5786 11.3639L12 11.1488L12.4214 11.3639C13.3679 11.8787 14 12.8638 14 14C14 14.5304 13.8555 15.0391 13.5984 15.5L11.0002 17.9361L8.40197 15.5C8.14486 15.0391 8.00039 14.5304 8.00039 14C8.00039 12.4086 9.26339 11.1564 10.815 11.0051L11.0002 11L11.1855 11.0051C12.7366 11.1564 13.9996 12.4086 13.9996 14C13.9996 14.5304 13.8551 15.0391 13.598 15.5L13.5786 15.5361L16.0002 17.9376L18.4214 15.5361L18.4019 15.5C18.1448 15.0391 18.0004 14.5304 18.0004 14Z" fill="#4F46E5" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-xl font-medium text-black">Support Us</div>
                        <p className="text-gray-500">Find out how you can support our cause.</p>
                    </div>
                </div>

                <div className="p-6 max-w-sm mx-auto bg-teal-400 rounded-xl shadow-md flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        {/* Icon for "Advertise With Us" */}
                        <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3ZM19 5V8.27344L12.7266 12.7266C12.5785 12.8287 12.4215 12.8287 12.2734 12.7266L5 8.27344V5H19ZM5 19V10.4922L11.3672 14.6328C11.5428 14.7309 11.7217 14.7793 11.9004 14.7793C12.0789 14.7793 12.2578 14.7309 12.4336 14.6328L18.75 10.4922V19H5Z" fill="#4F46E5" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-xl font-medium text-black">Advertise With Us</div>
                        <p className="text-gray-500">Explore advertising opportunities with our platform.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
