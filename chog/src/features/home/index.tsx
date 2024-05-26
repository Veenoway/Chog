export const Home = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      {/* <h2 className="text-9xl mb-[100px]">PURPLE PEPE</h2> */}
      <div className="flex justify-between items-center w-full max-w-6xl  py-[200px]">
        <div className="flex flex-col">
          <span className="inline-flex items-center h-[50px] w-[230px] bg-gradient-to-r from-purple-tint to-purple-dark">
            <h3 className="ml-3 text-3xl text-nowrap uppercase text-purple-light">
              About PPEPE
            </h3>
          </span>
          <h1 className="text-8xl mt-5 font-bold">PURPLE PEPE</h1>
          <h2 className="mt-5 text-5xl uppercase font-normal">
            Meet around the world
          </h2>
          <p className="mt-5 text-xl max-w-[80%]">
            Purple Pepe is a community-driven, fair launched DeFi Token. Three
            simple functions occur during each trade: Reflection, LP
            Acquisition, & Burn.
          </p>
          <div className="flex mt-8 justify-center items-center bg-purple-light py-2 px-5 border-purple-lighter border-2 rounded-full w-fit">
            <h4 className="text-xl text-white">Buy now!</h4>
          </div>
        </div>
        <img
          className="scale-x-[-1]"
          height="500"
          width="500"
          src="/excited.png"
        />
      </div>
      <div className="w-full flex flex-col items-center relative">
        <div className="flex justify-between items-center">
          <div className="triangle-left" />
          <div className="triangle-right" />
        </div>
        <div className="flex h-[250px] w-full bg-purple-tint ">
          <div className="flex glass-effect h-full w-full justify-center items-center">
            <div className="flex flex-col items-center mx-5">
              <div className="flex justify-center items-center bg-purple-light py-2 px-5 border-purple-lighter border-2 rounded-full">
                <h4 className="text-xl text-white">Total Supply</h4>
              </div>
              <p className="mt-5 text-5xl">10B</p>
            </div>
            <div className="flex flex-col items-center mx-5">
              <div className="flex justify-center items-center bg-purple-light py-2 px-5 border-purple-lighter border-2 rounded-full">
                <h4 className="text-xl text-white">Buy Tax</h4>
              </div>
              <p className="mt-5 text-5xl">0%</p>
            </div>
            <div className="flex flex-col items-center mx-5">
              <div className="flex justify-center items-center bg-purple-light py-2 px-5 border-purple-lighter border-2 rounded-full">
                <h4 className="text-xl text-white">Sell Tax</h4>
              </div>
              <p className="mt-5 text-5xl">0%</p>
            </div>
            <div className="flex flex-col items-center mx-5">
              <div className="flex justify-center items-center bg-purple-light py-2 px-5 border-purple-lighter border-2 rounded-full">
                <h4 className="text-xl text-white">Buy Back</h4>
              </div>
              <p className="mt-5 text-5xl">2%</p>
            </div>
          </div>
        </div>
        <div className="triangle-down" />
      </div>
      {/* <div className="flex w-full h-[50px] box-border  border-t-2 border-b-2 border-purple-light bg-purple-dark overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <p
            key={i}
            className="text-purple-light leading-[45px] align-middle text-2xl mx-3"
          >
            $PPEPE
          </p>
        ))}
      </div> */}
    </section>
  );
};
