interface TokenomicProps {
  title: string;
  value: string;
}

export const Tokenomic = ({ title, value }: TokenomicProps) => {
  return (
    <div className="flex flex-col items-center mx-5">
      <div className="flex justify-center items-center bg-purple-light py-2 px-5 border-purple-lighter border-2 rounded-full">
        <h4 className="text-xl text-white">{title}</h4>
      </div>
      <h4 className="mt-5 text-5xl">{value}</h4>
    </div>
  );
};
