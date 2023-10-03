export default function DetailsRow({
  attribute,
  value,
}: {
  attribute: string;
  value: string | JSX.Element;
}) {
  return (
    <div>
      <b>{attribute}</b>: <div>{value}</div>
    </div>
  );
}
