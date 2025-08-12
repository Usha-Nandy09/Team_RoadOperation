import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-aa-yellow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          {/* Navigation */}
          <nav className="flex items-center">
            <Link 
              href="#team" 
              className="road-ops-title text-aa-blue hover:text-aa-blue/80 transition-colors font-bold text-2xl tracking-wider"
            >
              ROAD OPERATIONS
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 