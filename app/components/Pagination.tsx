'use client';

import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/20/solid';
import cn from 'classnames';
import Link from 'next/link';

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  itemPerPage,
}: {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemPerPage: number;
}) {
  const Page = ({ inputArray }: { inputArray: Array<number> }) =>
    inputArray.map((num) => (
      <Link
        href={`?page=${num}`}
        className={cn(
          'inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700',
          {
            '!border-indigo-500 !text-indigo-600': num === currentPage,
          },
        )}
      >
        {num}
      </Link>
    ));
  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  console.log('pagesArray', pagesArray);
  const startCount = currentPage > 1 ? (currentPage - 1) * itemPerPage + 1 : 1;
  const endtCount = currentPage * itemPerPage;

  return (
    <>
      <div className="mt-8 w-full text-center text-sm">{`Showing ${startCount} to ${endtCount} out of total ${totalItems} digimons`}</div>
      <nav className="mt-4 flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
        <div className="-mt-px flex w-0 flex-1">
          {currentPage > 1 && (
            <Link
              href={`?page=${currentPage + 1}`}
              className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              <ArrowLongLeftIcon
                className="mr-3 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Previous
            </Link>
          )}
        </div>

        <div className="hidden md:-mt-px md:flex">
          {totalPages > 8 && (
            <>
              <Page inputArray={pagesArray.slice(0, 4)} />
              <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
                ...
              </span>
              <Page
                inputArray={pagesArray.slice(
                  Math.ceil(totalPages / 2),
                  Math.ceil(totalPages / 2) + 3,
                )}
              />
              <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
                ...
              </span>
              <Page inputArray={pagesArray.slice(-4)} />
            </>
          )}
        </div>

        <div className="-mt-px flex w-0 flex-1 justify-end">
          {currentPage < totalPages && (
            <Link
              href={`?page=${currentPage + 1}`}
              className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              Next
              <ArrowLongRightIcon
                className="ml-3 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}
