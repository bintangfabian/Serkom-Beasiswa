// app/components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="bg-bian-primary p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-bian-secondary font-bold text-xl">
                    <Link href="/">
                        Sakoolarship
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="flex-grow flex justify-center">
                    <ul className={`lg:flex lg:space-x-10 ${isOpen ? 'block' : 'hidden'} lg:block`}>
                        <li className='text-white'>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li className='text-white'>
                            <Link href="/#about">
                                About
                            </Link>
                        </li>
                        <li className='text-white'>
                            <Link href="#contact">
                                Contact
                            </Link>
                        </li>
                        <li className='text-white'>
                            <Link href="/Beasiswa">
                                Beasiswa
                            </Link>
                        </li>
                    </ul>
                </div>

                {pathname !== '/Beasiswa/BeasiswaForm' && (
                    <div>
                        <Link href="/Beasiswa/BeasiswaForm" className="block bg-bian-secondary w-auto px-6 py-2 rounded-full text-center">Daftar</Link>
                    </div>
                )}

                {pathname === '/Beasiswa/BeasiswaForm' && (
                    <div>
                        <Link href="/Beasiswa/BeasiswaForm" className="block bg-bian-primary w-auto px-6 py-2 rounded-full text-center text-bian-primary cursor-default">Daftar</Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
