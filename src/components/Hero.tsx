import React from 'react';
import { Trophy, Users, GamepadIcon, Star } from 'lucide-react';

export default function Hero() {
  return (
    <>
      <div className="bg-gradient-to-br from-goc-gray to-goc-rose py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Where Champions Rise
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Join the ultimate gaming tournament platform for both board games and online gaming competitions.
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              <a href="#tournaments" className="rounded-md bg-goc-red px-8 py-3 text-base font-medium text-white hover:bg-goc-coral transition-colors">
                Join Tournament
              </a>
              <button className="rounded-md bg-white px-8 py-3 text-base font-medium text-goc-gray hover:bg-gray-50 transition-colors">
                Create Team
              </button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <StatCard icon={<Trophy />} title="Active Tournaments" value="24+" />
            <StatCard icon={<Users />} title="Active Players" value="2.4k+" />
            <StatCard icon={<GamepadIcon />} title="Game Categories" value="15+" />
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-goc-gray">Why Choose GameOfChampions?</h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <FeatureCard
                icon={<Trophy className="text-goc-red" size={32} />}
                title="Professional Tournaments"
                description="Compete in officially sanctioned tournaments with standardized rules and professional organization."
              />
              <FeatureCard
                icon={<Star className="text-goc-red" size={32} />}
                title="Amazing Prizes"
                description="Win cash prizes, gaming gear, and exclusive opportunities in our sponsored tournaments."
              />
              <FeatureCard
                icon={<Users className="text-goc-red" size={32} />}
                title="Community First"
                description="Join a thriving community of gamers, make friends, and build your team."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function StatCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
      <div className="flex justify-center text-white mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-white">{title}</h3>
      <p className="text-3xl font-bold text-goc-red mt-2">{value}</p>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-goc-gray mb-2">{title}</h3>
      <p className="text-goc-gray">{description}</p>
    </div>
  );
}