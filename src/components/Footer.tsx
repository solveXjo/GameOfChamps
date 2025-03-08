import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-goc-gray">Game<span className="text-goc-red">Of</span></span>
              <span className="text-2xl font-bold text-goc-gray ml-1">Champions</span>
            </div>
            <p className="mt-4 text-goc-gray">
              The ultimate gaming tournament platform for both board games and online gaming competitions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-goc-gray mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <HashLink smooth to="/#about" className="text-goc-gray hover:text-goc-red">
                  About Us
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/tournaments" className="text-goc-gray hover:text-goc-red">
                  Tournaments
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/teams" className="text-goc-gray hover:text-goc-red">
                  Teams
                </HashLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-goc-gray mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-goc-gray hover:text-goc-red">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-goc-gray hover:text-goc-red">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-goc-gray hover:text-goc-red">Rules & Guidelines</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-goc-gray mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-goc-gray hover:text-goc-red">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-goc-gray hover:text-goc-red">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-goc-gray hover:text-goc-red">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-goc-gray hover:text-goc-red">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-goc-gray">
            © {new Date().getFullYear()} GameOfChampions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}