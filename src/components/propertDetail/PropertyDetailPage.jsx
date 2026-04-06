import PropertyDetailHero from "./PropertyDetailHero";
import PropertyDetailInfo from "./PropertyDetailInfo";
import PropertyDetailBooking from "./PropertyDetailBooking";
import PropertyDetailMap from "./PropertyDetailMap";
import { usePropertyDetail } from "../../utils/feature";

const PropertyDetailPage = () => {
  const { property } = usePropertyDetail();

  if (!property)
    return (
      <p className="text-center mt-20 text-gray-500 text-xl">
        Property not found!
      </p>
    );

  return (
    <>
      <PropertyDetailHero property={property} />
      <div className="flex gap-8 px-6 py-8 max-w-7xl mx-auto w-full">
        <div className="flex-1 min-w-0">
          <PropertyDetailInfo property={property} />
          <PropertyDetailMap property={property} />
        </div>
        <div className="w-80 shrink-0">
          <div className="sticky top-6">
            <PropertyDetailBooking property={property} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetailPage;
