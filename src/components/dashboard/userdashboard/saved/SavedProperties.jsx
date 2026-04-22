import SavedInsights from "./SavedInsights";
import SavedPropertyCard from "./SavedPropertyCard";

const SavedProperties = () => {
  return (
    <>
      {" "}
      {/* Fragment use karein, Sidebar/Navbar delete */}
      <div className="space-y-6">
        {" "}
        {/* Thori spacing de di taake cards aur insights mein gap rahe */}
        <h1 className="text-2xl font-bold text-slate-900 mb-4">
          Saved Properties
        </h1>
        <SavedPropertyCard />
        <div className="mt-8">
          <SavedInsights />
        </div>
      </div>
    </>
  );
};

export default SavedProperties;
