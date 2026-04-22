
const StatCard = ({ stat }) => {

  const Icon = stat.icon;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">

        <div
          className="p-3 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: stat.color }}
        >
          {Icon && (
            <Icon
              className="w-6 h-6"
              style={{ color: '#1D4ED8' }}
            />
          )}
        </div>


        {stat.changePercent ? (
          <span className="text-xs font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full border border-green-100">
            {stat.changePercent}
          </span>
        ) : stat.tag ? (
          <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-100">
            {stat.tag}
          </span>
        ) : null}
      </div>
      <div>
        <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          {stat.count.toLocaleString()}
        </h3>
        <p className="text-xs font-bold text-gray-400 mt-1 tracking-wider uppercase">
          {stat.label}
        </p>
      </div>
    </div>
  );
};

export default StatCard;