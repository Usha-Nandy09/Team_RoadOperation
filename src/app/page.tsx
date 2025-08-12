'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import TeamMember from '@/components/TeamMember';
import SearchAndFilter from '@/components/SearchAndFilter';
import TabNavigation from '@/components/TabNavigation';
import OnboardingProcess from '@/components/OnboardingProcess';
import FAQSection from '@/components/FAQSection';
import { teamMembers, TeamMember as TeamMemberType, Role, Department } from '@/data/team';

export default function Home() {
  const [activeTab, setActiveTab] = useState('Team Members');
  const [filteredMembers, setFilteredMembers] = useState(teamMembers);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState<Department | 'all'>('all');
  const [selectedRole, setSelectedRole] = useState<Role | 'all'>('all');
  const [selectedLocation, setSelectedLocation] = useState<boolean | 'all'>('all');

  const filterMembers = (
    search: string,
    department: Department | 'all',
    role: Role | 'all',
    location: boolean | 'all'
  ) => {
    return teamMembers.filter(member => {
      const matchesSearch = search === '' || 
        member.name.toLowerCase().includes(search.toLowerCase()) ||
        member.role.toLowerCase().includes(search.toLowerCase()) ||
        member.expertise.some(exp => exp.toLowerCase().includes(search.toLowerCase()));

      const matchesDepartment = department === 'all' || member.departments.includes(department);
      const matchesRole = role === 'all' || member.role === role;
      const matchesLocation = location === 'all' || member.isOffshore === location;

      return matchesSearch && matchesDepartment && matchesRole && matchesLocation;
    });
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setFilteredMembers(filterMembers(term, selectedDepartment, selectedRole, selectedLocation));
  };

  const handleDepartmentFilter = (department: Department | 'all') => {
    setSelectedDepartment(department);
    setFilteredMembers(filterMembers(searchTerm, department, selectedRole, selectedLocation));
  };

  const handleRoleFilter = (role: Role | 'all') => {
    setSelectedRole(role);
    setFilteredMembers(filterMembers(searchTerm, selectedDepartment, role, selectedLocation));
  };

  const handleLocationFilter = (location: boolean | 'all') => {
    setSelectedLocation(location);
    setFilteredMembers(filterMembers(searchTerm, selectedDepartment, selectedRole, location));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-aa-white to-gray-50 dark:from-aa-dark dark:to-gray-900 transition-colors">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 truck-animation">
          <img
            src="/Team_RoadOperation/images/aa-truck.jpg"
            alt="AA Truck"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70 z-10" />
        <div className="relative z-20 container mx-auto px-4 py-20 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg welcome-title">
            Welcome to Road Operations
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-lg">
            Always Ahead - Driving Excellence Together
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Content Sections */}
      {activeTab === 'Team Members' ? (
        <section className="py-16 container mx-auto px-4" id="team">
          <h2 className="text-3xl font-bold text-aa-blue dark:text-aa-yellow mb-8 text-center">
            Our Team
          </h2>
          
          <SearchAndFilter
            onSearch={handleSearch}
            onDepartmentFilter={handleDepartmentFilter}
            onRoleFilter={handleRoleFilter}
            onLocationFilter={handleLocationFilter}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member) => (
              <TeamMember key={member.id} {...member} />
            ))}
          </div>
        </section>
      ) : activeTab === 'Onboarding Process' ? (
        <OnboardingProcess />
      ) : (
        <FAQSection />
      )}
    </div>
  );
} 