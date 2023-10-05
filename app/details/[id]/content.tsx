'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ApiReturnType, EvolutionDetails } from './page';
import DetailsRow from '@/components/DetailsRow';

const EvolutionsGrid = ({ data }: { data: EvolutionDetails }) => (
  <div className="xxs:grid-cols-3 border-main mt-3 grid grid-cols-2 gap-x-2 gap-y-3 border-t pt-3 md:mt-4 md:grid-cols-4 md:border-t-0 md:pt-0">
    {data.map((evo) => (
      <Link
        href={`${evo.id}`}
        className="group flex flex-col items-center justify-center md:items-start"
      >
        <div className="xs:w-[120px] w-4/5 md:w-[150px]">
          <Image
            src={evo.image}
            alt={evo.digimon}
            width={200}
            height={200}
            className="group-hover:animate-shake-effect w-full"
          />
        </div>
        <div className="xxs:text-sm mt-2 text-xs font-bold">{evo.digimon}</div>
      </Link>
    ))}
  </div>
);

export default function Content({ data }: { data: ApiReturnType }) {
  return (
    <div className="bay-container xs:my-8 my-4 sm:my-12">
      <h2 className="xs:text-xl xs:mb-6 xxs:text-lg mb-4 text-center text-base font-bold md:text-left">
        {data.name}
      </h2>
      <div className="xs:w-[280px] mx-auto w-[240px] md:mx-0">
        <Image
          src={data.images[0].href}
          alt={data.name}
          width={350}
          height={350}
          className="w-full"
        />
      </div>
      <div className="[&>*:not(:last-child)]:xs:mb-8 border-main [&>*:not(:last-child)]xxs::mb-3 my-6 mt-6 border-t pt-4 [&>*:not(:last-child)]:mb-2">
        <DetailsRow attribute="Level" value={data.levels[0].level} />
        <DetailsRow attribute="Type" value={data.types[0].type} />
        <DetailsRow
          attribute="Attribute"
          value={data.attributes[0].attribute}
        />
        <DetailsRow attribute="Released Date" value={data.releaseDate} />
        <DetailsRow
          attribute="Descriptions"
          value={data.descriptions[0].description}
        />
        <DetailsRow
          attribute="Skills"
          value={
            <div>
              <ul className="ml-5 list-disc">
                {data.skills.map((skillInfo) => (
                  <li>{skillInfo.skill}</li>
                ))}
              </ul>
            </div>
          }
        />
        <DetailsRow
          attribute="Prior Evolutions"
          className="mt-8"
          value={<EvolutionsGrid data={data.priorEvolutions} />}
          mobileCenter
        />
        <DetailsRow
          attribute="Next Evolutions"
          className="mt-10"
          value={<EvolutionsGrid data={data.nextEvolutions} />}
          mobileCenter
        />
      </div>
    </div>
  );
}
