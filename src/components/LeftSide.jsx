const LeftSide = () => {
  return (
    <aside className="left w-full text-white rounded-b-3xl md:rounded-3xl flex flex-col items-center gap-4 justify-around text-center p-8 ">
      <h1 className="text-paragraph font-medium text-xl">Your Result</h1>
      <div className="circle w-36 h-36 flex flex-col justify-center gap-1 rounded-full">
        <p className="font-bold text-5xl">76</p>
        <p className="text-paragraph text-sm">of 100</p>
      </div>
      <h2 className="text-2xl font-bold">Great</h2>
      <p className="text-base text-paragraph max-w-[250px]">You scored higher than 65% of the people who have taken these tests.</p>
    </aside>
  );
};

export default LeftSide;
