import React, { useState } from 'react';
import { Calendar, MapPin, DollarSign, Users, Trophy } from 'lucide-react';

type Tournament = {
  id: string;
  title: string;
  category: string;
  type: 'Individual' | 'Team';
  date: string;
  location: string;
  entryFee: number;
  prizePool: string;
  image: string;
  description: string;
};

const categories = ['All', 'Chess', 'FIFA', 'Board Games', 'Online Games'];

const tournaments: Tournament[] = [
  {
    id: '1',
    title: 'Chess Masters Championship',
    category: 'Chess',
    type: 'Individual',
    date: '2024-04-15',
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
    date: '2024-05-01',
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
    date: '2024-04-20',
    location: 'Board Game Cafe',
    entryFee: 100,
    prizePool: '$3,000',
    image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&q=80&w=800',
    description: 'Gather your team for the ultimate Catan showdown. Teams of 4 required.',
  },
];

export default function TournamentList() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null);

  const filteredTournaments = selectedCategory === 'All'
    ? tournaments
    : tournaments.filter(t => t.category === selectedCategory);

  return (
    <div className="py-16 bg-gray-50" id="tournaments">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-goc-gray text-center mb-8">Available Tournaments</h2>
        
        <div className="flex justify-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-goc-red text-white'
                  : 'bg-white text-goc-gray hover:bg-goc-coral hover:text-white'
              } transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    {new Date(tournament.date).toLocaleDateString()}
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
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
                      {new Date(selectedTournament.date).toLocaleDateString()}
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