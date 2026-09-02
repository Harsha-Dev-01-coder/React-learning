interface CardProps {
  title: string;
  price: number;
  available: boolean;
}

function Card({ title, price, available }: CardProps) {
  return (
    <div>
        <h2>{title}</h2>
        <h2>{price}</h2>
        <h2>{available}</h2>
    </div>
  );
}