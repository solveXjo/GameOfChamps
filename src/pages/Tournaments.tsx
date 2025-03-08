import React, { useState } from 'react';
import { Calendar, MapPin, DollarSign, Users, Trophy, Search } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

type Tournament = {
  id: string;
  title: string;
  category: string;
  type: 'Individual' | 'Team';
  date: Date;
  location: string;
  entryFee: number;
  prizePool: string;
  image: string;
  description: string;
};

const tournaments: Tournament[] = [
  {
    id: '1',
    title: 'Chess Masters Championship',
    category: 'Chess',
    type: 'Individual',
    date: new Date('2024-04-15'),
    location: 'Central Gaming Arena',
    entryFee: 50,
    prizePool: '$5,000',
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800',
    description: 'Join the most prestigious chess tournament in the region. Open to all players with an official rating.',
  },
  {
    id: '2',
    title: 'FIFA World Cup 2024',
    category: 'FIFA',
    type: 'Individual',
    date: new Date('2024-05-01'),
    location: 'Gaming Center',
    entryFee: 75,
    prizePool: '$10,000',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80&w=800',
    description: 'Show your FIFA skills in this high-stakes tournament. Latest FIFA version will be used.',
  },
  {
    id: '3',
    title: 'Catan Championship',
    category: 'Board Games',
    type: 'Team',
    date: new Date('2024-04-20'),
    location: 'Board Game Cafe',
    entryFee: 100,
    prizePool: '$3,000',
    image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&q=80&w=800',
    description: 'Gather your team for the ultimate Catan showdown. Teams of 4 required.',
  },
];

const locations = ['All Locations', 'Central Gaming Arena', 'Gaming Center', 'Board Game Cafe'];
const categories = ['All Categories', 'Chess', 'FIFA', 'Board Games', 'Online Games'];
const types = ['All Types', 'Individual', 'Team'];

export default function Tournaments() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null);

  const filteredTournaments = tournaments.filter(tournament => {
    const matchesSearch = tournament.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === 'All Locations' || tournament.location === selectedLocation;
    const matchesCategory = selectedCategory === 'All Categories' || tournament.category === selectedCategory;
    const matchesType = selectedType === 'All Types' || tournament.type === selectedType;
    const matchesDate = !selectedDate || tournament.date.toDateString() === selectedDate.toDateString();

    return matchesSearch && matchesLocation && matchesCategory && matchesType && matchesDate;
  });

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-goc-gray mb-8">Tournaments</h1>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search tournaments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-goc-red focus:border-goc-red"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>

            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-goc-red focus:border-goc-red"
            >
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-goc-red focus:border-goc-red"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-goc-red focus:border-goc-red"
            >
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="Select date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-goc-red focus:border-goc-red"
              dateFormat="MMMM d, yyyy"
              isClearable
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTournaments.map(tournament => (
            <div
              key={tournament.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedTournament(tournament)}
            >
              <img
                src={tournament.image}
                alt={tournament.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-goc-gray">{tournament.title}</h3>
                  <span className="px-3 py-1 bg-goc-red/10 text-goc-red rounded-full text-sm">
                    {tournament.category}
                  </span>
                </div>
                <div className="space-y-2 text-goc-gray">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {tournament.date.toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    {tournament.location}
                  </div>
                  <div className="flex items-center">
                    <DollarSign size={16} className="mr-2" />
                    Entry Fee: ${tournament.entryFee}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedTournament && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-goc-gray">{selectedTournament.title}</h3>
                <button
                  onClick={() => setSelectedTournament(null)}
                  className="text-goc-gray hover:text-goc-red"
                >
                  ✕
                </button>
              </div>
              
              <img
                src={selectedTournament.image}
                alt={selectedTournament.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <div className="space-y-4">
                <p className="text-goc-gray">{selectedTournament.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center text-goc-gray mb-2">
                      <Calendar size={16} className="mr-2" />
                      {selectedTournament.date.toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-goc-gray mb-2">
                      <MapPin size={16} className="mr-2" />
                      {selectedTournament.location}
                    </div>
                    <div className="flex items-center text-goc-gray mb-2">
                      <Users size={16} className="mr-2" />
                      {selectedTournament.type}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center text-goc-gray mb-2">
                      <DollarSign size={16} className="mr-2" />
                      Entry Fee: ${selectedTournament.entryFee}
                    </div>
                    <div className="flex items-center text-goc-gray">
                      <Trophy size={16} className="mr-2" />
                      Prize Pool: {selectedTournament.prizePool}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {/* TODO: Implement registration flow */}}
                  className="w-full mt-6 bg-goc-red text-white py-3 rounded-lg hover:bg-goc-coral transition-colors"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}