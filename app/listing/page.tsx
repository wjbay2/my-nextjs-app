import axios from 'axios';
import { redirect } from 'next/navigation';
import { DigimonDetails, DigimonPageable } from './type';
import Content from './content';

export type ApiReturnType = {
  content: Array<DigimonDetails>;
  pageable: DigimonPageable;
};

export const ITEMS_PER_PAGE = 50;

async function getListing(page: number): Promise<ApiReturnType> {
  const pageQuery = page > 1 ? `&page=${page - 1}` : ``;
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

  console.log('page', page);
  if (!page) redirect('?page=1');
  console.log('params', props.searchParams);
  const data = await getListing(Number(page));

  console.log('data', data);

  return <Content data={data} page={page} />;
}
