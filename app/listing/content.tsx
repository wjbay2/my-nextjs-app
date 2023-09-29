'use client';

import Image from 'next/image';
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

  return (
    <div className="bay-container my-12">
      <h3 className="text-main mb-6 w-full text-center text-lg font-bold uppercase">
        Listing
      </h3>
      <div className="grid grid-cols-5 gap-4 gap-y-8">
        {data.content.map((mon: DigimonDetails) => (
          <div
            className="group flex cursor-pointer flex-col items-center justify-start"
            key={mon.name}
          >
            <div className="relative h-[150px] w-[150px] overflow-hidden">
              <Image
                src={mon.image}
                alt={mon.name}
                width={200}
                height={200}
                className="group-hover:animate-shake-effect absolute h-full w-full transform object-cover opacity-80 transition duration-500"
              />
            </div>
            <div className="mt-1 text-sm font-bold">{mon.name}</div>
          </div>
        ))}
      </div>
      <Pagination
        totalPages={pageInfo.totalPages + 2}
        currentPage={Number(page) || 1}
        totalItems={pageInfo.totalElements}
        itemPerPage={ITEMS_PER_PAGE}
      />
    </div>
  );
}
