import cn from 'classnames';

export default function DetailsRow({
  attribute,
  value,
  mobileCenter = false,
  className,
}: {
  attribute: string;
  value: string | JSX.Element;
  mobileCenter?: boolean;
  className?: string;
}) {
  return (
    <div className={`xs:text-base xxs:text-sm text-xs ${className ?? ''}`}>
      <b
        className={cn('text-left', {
          'md:text-left text-center w-full block': mobileCenter,
        })}
      >
        {attribute}
        <span className={mobileCenter ? 'hidden md:inline-block' : ''}>: </span>
      </b>
      <div>{value}</div>
    </div>
  );
}
