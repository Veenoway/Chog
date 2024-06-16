import { Button } from "./button";

interface TokenomicProps {
  title: string;
  value: string;
}

export const Tokenomic = ({ title, value }: TokenomicProps) => {
  return (
    <div className="flex flex-col items-center mx-5">
      <Button title={title} />
      <h4 className="sm:mt-3.5 lg:mt-5 sm:text-3xl lg:text-5xl">{value}</h4>
    </div>
  );
};
