'use client';

import { useEffect, useState } from 'react';
import { TeamMember as TeamMemberType } from '@/data/team';

const DEFAULT_IMAGE = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFNUU3RUIiLz48cGF0aCBkPSJNMTAwIDEyMEM4NS4wMzggMTIwIDczIDEwNy45NjIgNzMgOTNDNzMgNzguMDM4IDg1LjAzOCA2NiAxMDAgNjZDMTE0Ljk2MiA2NiAxMjcgNzguMDM4IDEyNyA5M0MxMjcgMTA3Ljk2MiAxMTQuOTYyIDEyMCAxMDAgMTIwWiIgZmlsbD0iIzk0QTNCOCIvPjxwYXRoIGQ9Ik0xMDAgMTMzQzY4LjU4NSAxMzMgNDMgMTU4LjU4NSA0MyAxOTBIMTU3QzE1NyAxNTguNTg1IDEzMS40MTUgMTMzIDEwMCAxMzNaIiBmaWxsPSIjOTRBM0I4Ii8+PC9zdmc+';

export default function TeamMember({
  name,
  role,
  departments,
  location,
  isOffshore,
  experience,
  bio,
  imageUrl,
  expertise,
  email,
  teamsName
}: TeamMemberType) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Start animation when component becomes visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`team-member-${name.replace(/\s+/g, '-')}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [name, hasAnimated]);

  return (
    <div
      id={`team-member-${name.replace(/\s+/g, '-')}`}
      className={`team-member-card bg-aa-white dark:bg-aa-dark rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all border-t-4 border-aa-yellow ${
        isVisible ? 'rotate-animation' : ''
      }`}
    >
      <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={imageUrl || DEFAULT_IMAGE}
          alt={name}
          className="w-full h-full object-contain"
          onError={(e) => {
            // @ts-ignore
            e.target.src = DEFAULT_IMAGE;
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-aa-blue dark:text-aa-yellow text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-900 dark:text-gray-100 mb-2">{role}</p>
        <p className="text-gray-700 dark:text-gray-300 mb-2">Department: {departments.join(', ')}</p>
        
        <div className="flex items-center gap-2 mb-2">
          <span className="text-gray-700 dark:text-gray-300">📍 {location}</span>
          <span className={`px-2 py-1 rounded-full text-sm ${
            isOffshore 
              ? 'bg-aa-blue/10 text-aa-blue dark:bg-aa-blue/20 dark:text-aa-yellow' 
              : 'bg-aa-yellow/20 text-gray-900 dark:bg-aa-yellow/10 dark:text-aa-yellow'
          }`}>
            {isOffshore ? 'Offshore' : 'Onshore'}
          </span>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-4">{experience} years experience</p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{bio}</p>

        {/* Contact Information */}
        <div className="mb-4 space-y-2">
          <p className="flex items-center gap-2">
            <span className="text-aa-blue dark:text-aa-yellow">✉️</span>
            <a 
              href={`mailto:${email}`} 
              className="text-aa-blue dark:text-aa-yellow hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {email}
            </a>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-aa-blue dark:text-aa-yellow">👥</span>
            <span className="text-gray-700 dark:text-gray-300">{teamsName}</span>
          </p>
        </div>

        {/* Expertise Tags */}
        <div className="flex flex-wrap gap-2">
          {expertise.map((skill) => (
            <span 
              key={skill}
              className="bg-aa-blue/5 text-aa-blue dark:bg-aa-yellow/10 dark:text-aa-yellow px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
} 