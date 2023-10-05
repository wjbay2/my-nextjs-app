'use client';

import Image from 'next/image';
import Link from 'next/link';
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/navigation';
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

  const handlePageClick = (event: { selected: number }) => {
    router.push(`?page=${event.selected + 1}`);
  };
  const currentPage = Number(page) <= 0 ? 1 : Number(page) - 1;
  const { totalPages, totalElements: totalItems } = pageInfo;
  const startCount =
    currentPage > 1 ? (currentPage - 1) * ITEMS_PER_PAGE + 1 : 1;
  const endtCount =
    currentPage === totalPages ? totalItems + 2 : currentPage * ITEMS_PER_PAGE;
  const commonPageCss =
    'inline-flex items-center border-t-2 border-transparent md:pt-4 md:pb-4 py-1.5 px-3 xs:py-3 text-sm font-medium text-gray-500 hover:md:border-gray-300 hover:md:text-gray-700 hover:md:text-main group';

  return (
    <div className="bay-container my-8 sm:my-12">
      <h3 className="text-main xs:text-lg mb-6 w-full text-center text-base font-bold uppercase">
        Listing
      </h3>
      <div className="xxs:grid-cols-3 grid grid-cols-2 gap-x-2 gap-y-5 sm:grid-cols-4 sm:gap-x-4 sm:gap-y-8 lg:grid-cols-5">
        {data.content.map((mon: DigimonDetails) => (
          <Link
            href={`details/${mon.id}`}
            className="group flex cursor-pointer flex-col items-center justify-start"
            key={mon.name}
          >
            <div className="xs:h-[120px] xs:w-[120px] xxs:w-full relative h-auto w-4/5 overflow-hidden sm:h-[150px] sm:w-[150px]">
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
      <div className="mt-8 w-full text-center text-sm">{`Showing ${startCount} to ${endtCount} out of total ${totalItems} digimons`}</div>
      <ReactPaginate
        breakLabel="..."
        initialPage={Number(page) <= 0 ? 1 : Number(page) - 1}
        breakLinkClassName="inline-flex px-4 pt-4"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageInfo.totalPages + 2}
        renderOnZeroPageCount={null}
        className="mt-10 flex flex-wrap items-start justify-center border-t-0 border-gray-200 px-4 sm:px-0 md:justify-between md:border-t"
        containerClassName="hidden md:-mt-px md:flex"
        pageLinkClassName="inline-flex items-center border-t-2 border-transparent xs:text-sm text-xs xs:px-3 md:px-4 xs:py-3 py-2 px-3 md:pt-4 md:pb-0 text-sm font-medium text-gray-500 hover:md:border-gray-300 hover:md:text-gray-700 hover:text-main hover:md:bg-transparent hover:bg-[#368bc13b]"
        activeLinkClassName="md:border-indigo-500 !bg-main md:!text-indigo-600 md:!bg-white !text-white"
        previousClassName="md:mr-auto"
        previousLinkClassName={commonPageCss}
        nextClassName="md:ml-auto"
        nextLinkClassName={commonPageCss}
        previousLabel={
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="group-hover:text-main xs:mr-3 mr-1 h-5 w-5 text-gray-400 group-hover:md:text-gray-700"
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
              className="group-hover:text-main xs:ml-3 ml-1 h-5 w-5 text-gray-400 group-hover:md:text-gray-700"
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
