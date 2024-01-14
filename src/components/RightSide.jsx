import Button from "./Button";
import data from "../data.json";
import DataLine from "./DataLine";
const RightSide = () => {
  return (
    <aside className="right w-full py-8 px-6 md:pr-12 rounded-3xl flex flex-col ">
      <h1 className="text-darkGrayBlue font-bold text-xl mb-4">Summary</h1>

      {data.map((item, index) => (
        <DataLine
          key={index}
          icon={item.icon}
          category={item.category}
          score={item.score}
        />
      ))}

      <Button />
    </aside>
  );
};

export default RightSide;
