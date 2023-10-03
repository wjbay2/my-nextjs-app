'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ApiReturnType } from './page';
import DetailsRow from '@/components/DetailsRow';

export default function Content({ data }: { data: ApiReturnType }) {
  return (
    <div className="bay-container my-12">
      <h2 className="mb-3 text-2xl font-bold">{data.name}</h2>
      <Image
        src={data.images[0].href}
        alt={data.name}
        width={350}
        height={350}
      />
      <div className="mt-4 [&>*:not(:last-child)]:mb-8">
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
              <ul>
                {data.skills.map((skillInfo) => (
                  <li>{skillInfo.skill}</li>
                ))}
              </ul>
            </div>
          }
        />
        <DetailsRow
          attribute="Prior Evolutions"
          value={
            <div className="mt-4 grid grid-cols-4 gap-x-2 gap-y-3">
              {data.priorEvolutions.map((priorEvo) => (
                <Link
                  href={`${priorEvo.id}`}
                  className="group flex flex-col items-start justify-center"
                >
                  <Image
                    src={priorEvo.image}
                    alt={priorEvo.digimon}
                    width={60}
                    height={60}
                    className="group-hover:animate-shake-effect"
                  />
                  <div className="mt-2">{priorEvo.digimon}</div>
                </Link>
              ))}
            </div>
          }
        />
        <DetailsRow
          attribute="Next Evolutions"
          value={
            <div className="mt-4 grid grid-cols-4 gap-x-2 gap-y-3">
              {data.nextEvolutions.map((nextEvo) => (
                <Link
                  href={`${nextEvo.id}`}
                  className="group flex flex-col items-start justify-center"
                >
                  <Image
                    src={nextEvo.image}
                    alt={nextEvo.digimon}
                    width={60}
                    height={60}
                    className="group-hover:animate-shake-effect"
                  />
                  <div className="mt-2">{nextEvo.digimon}</div>
                </Link>
              ))}
            </div>
          }
        />
      </div>
    </div>
  );
}
