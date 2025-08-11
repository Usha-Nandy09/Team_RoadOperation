import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-aa-yellow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* AA Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-aa-blue font-bold text-2xl">Meet the team</span>
            </Link>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="#team" 
              className="text-aa-blue hover:text-aa-blue/80 transition-colors font-bold text-lg"
            >
              Road Operations
            </Link>
          </nav>

          {/* Always Ahead Motto */}
          <div className="hidden md:block">
            <span className="text-aa-blue font-semibold">Always Ahead</span>
          </div>
        </div>
      </div>
    </header>
  );
} 