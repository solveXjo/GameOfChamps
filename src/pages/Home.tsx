import React from 'react';
import Hero from '../components/Hero';
import TournamentList from '../components/TournamentList';

export default function Home() {
  return (
    <div>
      <Hero />
      
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-goc-gray">About GameOfChampions</h2>
            <p className="mt-4 text-lg text-goc-gray max-w-3xl mx-auto">
              GameOfChampions is the premier platform for competitive gaming, bringing together enthusiasts 
              from both traditional board games and modern online gaming. Our mission is to create a vibrant 
              community where players can compete, connect, and celebrate their passion for gaming.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&q=80&w=1024" 
                alt="Gaming tournament" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-goc-gray mb-2">Our Vision</h3>
                <p className="text-goc-gray">
                  To become the world's leading platform for competitive gaming, fostering a community where 
                  players of all skill levels can thrive and achieve their competitive goals.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-goc-gray mb-2">What We Offer</h3>
                <ul className="space-y-2 text-goc-gray">
                  <li>• Professional tournament organization</li>
                  <li>• Fair play environment</li>
                  <li>• Community-driven events</li>
                  <li>• Competitive rankings</li>
                  <li>• Exclusive prizes and rewards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <TournamentList />
    </div>
  );
}