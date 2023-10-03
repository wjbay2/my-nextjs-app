import axios from 'axios';
import Content from './content';

export type ApiReturnType = {
  id: number;
  name: string;
  images: Array<{ href: string; transparent: boolean }>;
  levels: Array<{ id: number; level: string }>;
  types: Array<{ id: number; type: string }>;
  attributes: Array<{ id: number; attribute: string }>;
  fields: Array<any>;
  releaseDate: string;
  descriptions: Array<{
    origin: string;
    language: string;
    description: string;
  }>;
  skills: Array<{
    id: number;
    skill: string;
    translation: string;
    description: string;
  }>;
  priorEvolutions: Array<{
    id: number;
    digimon: string;
    condition: string;
    image: string;
    url: string;
  }>;
  nextEvolutions: Array<{
    id: number;
    digimon: string;
    condition: string;
    image: string;
    url: string;
  }>;
};

export const ITEMS_PER_PAGE = 50;

async function getDetails(id: string): Promise<ApiReturnType> {
  const res = await axios.get<ApiReturnType>(
    `https://digi-api.com/api/v1/digimon/${id}`,
  );
  const data = await res.data;

  return data;
}

export default async function Page({ params }: { params: { id: string } }) {
  // const params = useParams();
  const { id } = params;

  console.log('params', params);
  const data = await getDetails(id);

  console.log('data', data);

  return <Content data={data} />;
}
