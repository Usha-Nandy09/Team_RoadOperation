import Image from 'next/image';
import { TeamMember as TeamMemberType } from '@/data/team';

const DEFAULT_IMAGE = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFNUU3RUIiLz48cGF0aCBkPSJNMTAwIDEyMEM4NS4wMzggMTIwIDczIDEwNy45NjIgNzMgOTNDNzMgNzguMDM4IDg1LjAzOCA2NiAxMDAgNjZDMTE0Ljk2MiA2NiAxMjcgNzguMDM4IDEyNyA5M0MxMjcgMTA3Ljk2MiAxMTQuOTYyIDEyMCAxMDAgMTIwWiIgZmlsbD0iIzk0QTNCOCIvPjxwYXRoIGQ9Ik0xMDAgMTMzQzY4LjU4NSAxMzMgNDMgMTU4LjU4NSA0MyAxOTBIMTU3QzE1NyAxNTguNTg1IDEzMS40MTUgMTMzIDEwMCAxMzNaIiBmaWxsPSIjOTRBM0I4Ii8+PC9zdmc+';

export default function TeamMember({
  name,
  role,
  department,
  location,
  isOffshore,
  experience,
  bio,
  imageUrl,
  expertise,
  email,
  teamsName
}: TeamMemberType) {
  return (
    <div className="bg-aa-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-t-4 border-aa-yellow">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl || DEFAULT_IMAGE}
          alt={name}
          width={200}
          height={200}
          className="object-contain w-full h-full"
          priority
          onError={(e) => {
            // @ts-ignore
            e.target.src = DEFAULT_IMAGE;
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-aa-blue text-xl font-bold mb-2">{name}</h3>
        <p className="text-aa-black mb-2">{role}</p>
        <p className="text-aa-black/80 mb-2">Department: {department}</p>
        
        <div className="flex items-center gap-2 mb-2">
          <span className="text-aa-black/80">📍 {location}</span>
          <span className={`px-2 py-1 rounded-full text-sm ${
            isOffshore 
              ? 'bg-aa-blue/10 text-aa-blue' 
              : 'bg-aa-yellow/20 text-aa-black'
          }`}>
            {isOffshore ? 'Offshore' : 'Onshore'}
          </span>
        </div>

        <p className="text-aa-black/80 mb-4">{experience} years experience</p>
        <p className="text-aa-black/70 mb-4">{bio}</p>

        {/* Contact Information */}
        <div className="mb-4 space-y-2">
          <p className="flex items-center gap-2">
            <span className="text-aa-blue">✉️</span>
            <a href={`mailto:${email}`} className="text-aa-blue hover:underline">
              {email}
            </a>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-aa-blue">👥</span>
            <span className="text-aa-black/80">{teamsName}</span>
          </p>
        </div>

        {/* Expertise Tags */}
        <div className="flex flex-wrap gap-2">
          {expertise.map((skill) => (
            <span 
              key={skill}
              className="bg-aa-blue/5 text-aa-blue px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
} 