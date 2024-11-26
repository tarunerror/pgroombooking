import React from 'react';
import { BedDouble, MapPin, Wifi, Car, Timer, Coffee } from 'lucide-react';
import RoomCard from './components/RoomCard';
import BookingForm from './components/BookingForm';

function App() {
  const rooms = [
    {
      id: 1,
      title: "Deluxe Single Room",
      price: 8000,
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1600",
      amenities: ["Wi-Fi", "Parking", "24/7 Access", "Breakfast"],
      type: "Single Occupancy",
      available: true
    },
    {
      id: 2,
      title: "Premium Double Room",
      price: 12000,
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1600",
      amenities: ["Wi-Fi", "Parking", "24/7 Access", "Breakfast"],
      type: "Double Occupancy",
      available: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative h-[70vh] bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1600"
            className="w-full h-full object-cover opacity-20"
            alt="Background"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white space-y-6">
            <h1 className="text-5xl font-bold">Find Your Perfect PG Room</h1>
            <p className="text-xl max-w-2xl">Discover comfortable and affordable PG accommodations with premium amenities and excellent locations.</p>
            <div className="flex gap-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Book Now
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                View Rooms
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our PG?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <MapPin className="w-8 h-8" />, title: "Prime Location", desc: "Situated in the heart of the city" },
              { icon: <Wifi className="w-8 h-8" />, title: "High-Speed WiFi", desc: "Stay connected with fast internet" },
              { icon: <Car className="w-8 h-8" />, title: "Parking Space", desc: "Secure parking for your vehicle" },
              { icon: <Timer className="w-8 h-8" />, title: "24/7 Access", desc: "Come and go as you please" },
              { icon: <BedDouble className="w-8 h-8" />, title: "Furnished Rooms", desc: "Fully equipped comfortable rooms" },
              { icon: <Coffee className="w-8 h-8" />, title: "Breakfast Included", desc: "Start your day right" }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition">
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Available Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rooms.map(room => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Book Your Room</h2>
          <BookingForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-400">123 Main Street</p>
              <p className="text-gray-400">City, State 12345</p>
              <p className="text-gray-400">Phone: (123) 456-7890</p>
              <p className="text-gray-400">Email: info@pgrooms.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Home</a></li>
                <li><a href="#" className="hover:text-white transition">Rooms</a></li>
                <li><a href="#" className="hover:text-white transition">Amenities</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and offers.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg bg-gray-800 text-white flex-grow"
                />
                <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PG Rooms. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;