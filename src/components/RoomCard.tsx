import React from 'react';
import { Wifi, Car, Clock, Coffee } from 'lucide-react';

interface RoomProps {
  room: {
    title: string;
    price: number;
    image: string;
    amenities: string[];
    type: string;
    available: boolean;
  };
}

const RoomCard: React.FC<RoomProps> = ({ room }) => {
  const amenityIcons = {
    'Wi-Fi': <Wifi className="w-4 h-4" />,
    'Parking': <Car className="w-4 h-4" />,
    '24/7 Access': <Clock className="w-4 h-4" />,
    'Breakfast': <Coffee className="w-4 h-4" />
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
      <div className="relative h-64">
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-full object-cover"
        />
        {room.available && (
          <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
            Available
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{room.title}</h3>
        <p className="text-gray-600 mb-4">{room.type}</p>
        <div className="flex flex-wrap gap-3 mb-6">
          {room.amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
            >
              {amenityIcons[amenity as keyof typeof amenityIcons]}
              {amenity}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-3xl font-bold text-blue-600">₹{room.price}</span>
            <span className="text-gray-600">/month</span>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;