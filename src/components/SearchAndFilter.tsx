import { useState } from 'react';
import { Role, Department } from '@/data/team';

interface SearchAndFilterProps {
  onSearch: (searchTerm: string) => void;
  onDepartmentFilter: (department: Department | 'all') => void;
  onRoleFilter: (role: Role | 'all') => void;
}

export default function SearchAndFilter({
  onSearch,
  onDepartmentFilter,
  onRoleFilter
}: SearchAndFilterProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const departments: Department[] = ['Indoor1', 'Indoor2', 'Outdoor'];
  const roles: Role[] = ['Programmer Analyst', 'Associate', 'Senior Associate', 'Manager'];

  return (
    <div className="bg-aa-white p-4 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search Input */}
        <div>
          <input
            type="text"
            placeholder="Search by name, role, or expertise..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aa-blue"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              onSearch(e.target.value);
            }}
          />
        </div>

        {/* Department Filter */}
        <div>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aa-blue"
            onChange={(e) => onDepartmentFilter(e.target.value as Department | 'all')}
          >
            <option value="all">All Departments</option>
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        {/* Role Filter */}
        <div>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aa-blue"
            onChange={(e) => onRoleFilter(e.target.value as Role | 'all')}
          >
            <option value="all">All Roles</option>
            {roles.map(role => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
} 