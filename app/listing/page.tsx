import axios from 'axios';
import Image from 'next/image';
import { DigimonDetails, DigimonPageable } from './type';
import Pagination from '@/components/Pagination';

type ApiReturnType = {
  content: Array<DigimonDetails>;
  pageable: DigimonPageable;
};

const ITEMS_PER_PAGE = 50;

async function getListing(page: number): Promise<ApiReturnType> {
  const pageQuery = page <= 1 ? `&page=${page}` : ``;
  const res = await axios.get<ApiReturnType>(
    `https://digi-api.com/api/v1/digimon?&pageSize=${ITEMS_PER_PAGE}${pageQuery}`,
  );
  const data = await res.data;

  return data;
}

type PageSearchParams = {
  page?: string;
};

type Props = {
  params: object;
  searchParams: PageSearchParams;
};

export default async function Page(props: Props) {
  const { page } = props.searchParams;

  console.log('params', props.searchParams);
  const data = await getListing(Number(page));
  const pageInfo = data.pageable;

  console.log('data', data);

  return (
    <>
      <div className="bay-container my-12">
        <h3 className="text-main mb-6 w-full text-center text-lg font-bold uppercase">
          Listing
        </h3>
        <div className="grid grid-cols-5 gap-4 gap-y-8">
          {data.content.map((mon: DigimonDetails) => (
            <div className="group flex cursor-pointer flex-col items-center justify-start">
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
          totalPages={pageInfo.totalPages + 1}
          currentPage={Number(page) || 1}
          totalItems={pageInfo.totalElements}
          itemPerPage={ITEMS_PER_PAGE}
        />
      </div>
    </>
  );
}
