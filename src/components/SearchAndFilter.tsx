import { Department, Role } from '@/data/team';

interface SearchAndFilterProps {
  onSearch: (term: string) => void;
  onDepartmentFilter: (department: Department | 'all') => void;
  onRoleFilter: (role: Role | 'all') => void;
  onLocationFilter: (isOffshore: boolean | 'all') => void;
}

export default function SearchAndFilter({
  onSearch,
  onDepartmentFilter,
  onRoleFilter,
  onLocationFilter
}: SearchAndFilterProps) {
  return (
    <div className="mb-8 space-y-4">
      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search by name, role, or expertise..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-aa-blue focus:border-transparent"
        />
        <span className="absolute right-3 top-3 text-gray-400">🔍</span>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Department Filter */}
        <select
          onChange={(e) => onDepartmentFilter(e.target.value as Department | 'all')}
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-aa-blue focus:border-transparent"
        >
          <option value="all">All Departments</option>
          <option value="Indoor1">Indoor1</option>
          <option value="Indoor2">Indoor2</option>
          <option value="Outdoor">Outdoor</option>
          <option value="Automation">Automation</option>
          <option value="Defect Management">Defect Management</option>
        </select>

        {/* Role Filter */}
        <select
          onChange={(e) => onRoleFilter(e.target.value as Role | 'all')}
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-aa-blue focus:border-transparent"
        >
          <option value="all">All Roles</option>
          <option value="Programmer Analyst">Programmer Analyst</option>
          <option value="Associate">Associate</option>
          <option value="Senior Associate">Senior Associate</option>
          <option value="Manager">Manager</option>
        </select>

        {/* Location Filter */}
        <select
          onChange={(e) => onLocationFilter(e.target.value === 'all' ? 'all' : e.target.value === 'true')}
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-aa-blue focus:border-transparent"
        >
          <option value="all">All Locations</option>
          <option value="true">Offshore</option>
          <option value="false">Onshore</option>
        </select>
      </div>
    </div>
  );
} 