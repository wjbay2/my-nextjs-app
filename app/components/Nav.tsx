'use client';

import { useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/images/logo.png';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      id="header"
      className="bg-main sticky top-0 z-40 w-full py-1 shadow sm:bg-white"
    >
      <div className="bay-container mx-auto mt-0 flex w-full flex-row flex-wrap items-center justify-between px-4 py-2 sm:flex-row sm:px-6 sm:py-3">
        <div
          className="sm:text-main order-3 mt-2 block cursor-pointer text-white md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </div>

        <div
          className={cn(
            'order-4 w-full md:order-2 md:flex md:w-auto md:items-center sm:border-t-0 border-t sm:mt-0 mt-3',
            {
              hidden: !menuOpen,
            },
          )}
        >
          <nav>
            <ul className="sm:text-main items-center justify-between pt-2 text-base text-white sm:pt-4 md:flex md:pt-0">
              <li>
                <Link
                  href="listing"
                  className="inline-block px-0 py-2 no-underline hover:underline sm:px-4"
                >
                  Listing
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="inline-block px-0 py-2 no-underline hover:underline sm:px-4"
                >
                  About Page
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="order-2 md:order-1">
          <a
            className="flex flex-col items-center text-xl font-bold tracking-wide text-gray-800 no-underline hover:no-underline"
            href="/"
          >
            <div className="w-[68px] sm:w-[88px]">
              <Image src={logo} alt="My Digimon Portal" className="w-full" />
            </div>
            <h3 className="sm:text-main mt-1 text-sm font-bold uppercase text-white">
              My Digimon Portal
            </h3>
          </a>
        </div>

        <div
          className="order-1 hidden items-center md:order-3"
          id="nav-content"
        >
          <a className="inline-block no-underline hover:text-black" href="#">
            <svg
              className="fill-current hover:text-black"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <circle fill="none" cx="12" cy="7" r="3" />
              <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
            </svg>
          </a>

          <a
            className="inline-block pl-3 no-underline hover:text-black"
            href="#"
          >
            <svg
              className="fill-current hover:text-black"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
              <circle cx="10.5" cy="18.5" r="1.5" />
              <circle cx="17.5" cy="18.5" r="1.5" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
