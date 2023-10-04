'use client';

import Image from 'next/image';
import Link from 'next/link';
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/navigation';
import Pagination from '@/components/Pagination';
import { ApiReturnType, ITEMS_PER_PAGE } from './page';
import { DigimonDetails } from './type';

export default function Content({
  data,
  page,
}: {
  data: ApiReturnType;
  page: string | undefined;
}) {
  const pageInfo = data.pageable;
  const router = useRouter();

  const handlePageClick = (event) => {
    router.push(`?page=${event.selected + 1}`);
  };

  return (
    <div className="bay-container my-8 sm:my-12">
      <h3 className="text-main mb-6 w-full text-center text-lg font-bold uppercase">
        Listing
      </h3>
      <div className="xxs:grid-cols-3 grid grid-cols-2 gap-x-2 gap-y-5 sm:grid-cols-4 sm:gap-x-4 sm:gap-y-8 lg:grid-cols-5">
        {data.content.map((mon: DigimonDetails) => (
          <Link
            href={`details/${mon.id}`}
            className="group flex cursor-pointer flex-col items-center justify-start"
            key={mon.name}
          >
            <div className="xs:h-[120px] xs:w-[120px] relative h-auto w-full overflow-hidden sm:h-[150px] sm:w-[150px]">
              <Image
                src={mon.image}
                alt={mon.name}
                width={200}
                height={200}
                className="group-hover:animate-shake-effect xs:absolute relative h-full w-full transform object-cover opacity-80 transition duration-500"
              />
            </div>
            <div className="xs:text-sm mt-1 text-center text-[12px] font-bold">
              {mon.name}
            </div>
          </Link>
        ))}
      </div>
      {/* <Pagination
        totalPages={pageInfo.totalPages + 2}
        currentPage={Number(page) || 1}
        totalItems={pageInfo.totalElements}
        itemPerPage={ITEMS_PER_PAGE}
      /> */}
      <ReactPaginate
        breakLabel="..."
        breakLinkClassName="inline-flex px-4 pt-4"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageInfo.totalPages + 2}
        renderOnZeroPageCount={null}
        className="mt-10 flex flex-wrap items-start justify-between border-t border-gray-200 px-4 sm:px-0"
        containerClassName="hidden md:-mt-px md:flex"
        pageLinkClassName="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        activeLinkClassName="border-indigo-500 text-indigo-600"
        previousClassName="mr-auto"
        previousLinkClassName="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        nextClassName="ml-auto"
        nextLinkClassName="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        previousLabel={
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="mr-3 h-5 w-5 text-gray-400"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="hidden md:block">Previous</span>
          </>
        }
        nextLabel={
          <>
            <span className="hidden md:block">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="ml-3 h-5 w-5 text-gray-400"
            >
              <path
                fill-rule="evenodd"
                d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </>
        }
      />
    </div>
  );
}
