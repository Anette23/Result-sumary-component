const DataLine = ({ category, score, icon }) => {
  const categoryColors = {
    Reaction: { backgroundColor: 'bg-reaction', categoryColor: 'text-lightRed' },
    Memory: { backgroundColor: 'bg-memory', categoryColor: 'text-orangeyYellow' },
    Verbal: { backgroundColor: 'bg-verbal', categoryColor: 'text-greenTeal' },
    Visual: { backgroundColor: 'bg-visual', categoryColor: 'text-cobaltBlue' },
  };

  const { backgroundColor, categoryColor } = categoryColors[category] || {};
  return (
    <article className={`flex justify-between gap-10 mb-5 ${backgroundColor} p-3 rounded-xl`}>
    <div className="flex gap-2">
      <img src={icon} alt={`${category} icon`} />
      <h2 className={`font-bold ${categoryColor} text-base`}>{category}</h2>
    </div>
    <div className="flex gap-2">
      <span className="font-bold text-darkGrayBlue">{score}</span>
      <p className="text-paragraph">/ 100</p>
    </div>
  </article>

  );
};

export default DataLine;
