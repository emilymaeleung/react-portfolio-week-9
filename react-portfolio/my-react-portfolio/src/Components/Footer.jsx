// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-6">
          <p className="text-gray-400">&copy; 2025 Emily Mae. All Rights Reserved.</p>
          <div className="social-links mt-4 md:mt-0 flex space-x-4">
            <a href="https://github.com/emilymaeleung" target="_blank" rel="noopener noreferrer" className="social-link text-gray-400 hover:text-white transition-colors duration-300">
              GitHub 🐙
            </a>
            <a href="https://www.linkedin.com/in/emilymaeleung108/" target="_blank" rel="noopener noreferrer" className="social-link text-gray-400 hover:text-white transition-colors duration-300">
              LinkedIn 💼
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;