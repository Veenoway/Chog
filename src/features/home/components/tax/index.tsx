import { Tokenomic } from "@/components/tokenomic";

export const Tax = () => {
  return (
    <section className="w-full flex flex-col items-center relative mb-[100px]">
      <div className="flex justify-between items-center">
        <div className="triangle-left" />
        <div className="triangle-right" />
      </div>
      <div className="flex h-[140px] sm:h-[180px] lg:h-[250px] w-full bg-purple-tint ">
        <div className="flex glass-effect h-full w-full justify-center items-center">
          <Tokenomic title="Total Supply" value="10M" config={[0.2, 0.3]} />
          <Tokenomic title="Buy Tax" value="5%" config={[0.4, 0.5]} />
          <Tokenomic title="Sell Tax" value="6%" config={[0.6, 0.7]} />
        </div>
      </div>
      <div className="triangle-down" />
    </section>
  );
};
