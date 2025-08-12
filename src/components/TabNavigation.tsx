'use client';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const tabs = [
    {
      name: 'Team Members',
      icon: '👥',
      description: 'Meet our amazing team'
    },
    {
      name: 'Onboarding Process',
      icon: '🚀',
      description: 'Get started with AA'
    },
    {
      name: 'FAQs',
      icon: '❓',
      description: 'Common questions'
    }
  ];

  return (
    <div className="border-b border-aa-blue/20 bg-white dark:bg-gray-800">
      <nav className="container mx-auto px-4">
        <div className="flex justify-center space-x-1 md:space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => onTabChange(tab.name)}
              className={`group relative py-4 px-3 transition-all duration-300 ${
                activeTab === tab.name
                  ? 'tab-active'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={`tab-icon text-xl ${
                  activeTab === tab.name ? 'scale-110' : ''
                }`}>
                  {tab.icon}
                </span>
                <div className="text-left">
                  <span className={`block font-semibold ${
                    activeTab === tab.name
                      ? 'text-aa-blue dark:text-aa-yellow'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}>
                    {tab.name}
                  </span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">
                    {tab.description}
                  </span>
                </div>
              </div>
              <div className={`absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300 ${
                activeTab === tab.name
                  ? 'bg-aa-blue dark:bg-aa-yellow'
                  : 'bg-transparent group-hover:bg-gray-200 dark:group-hover:bg-gray-600'
              }`} />
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
} 