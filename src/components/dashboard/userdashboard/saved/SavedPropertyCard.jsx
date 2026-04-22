import { savedCardProperties } from "../../../../data/index";
import SavedAddCard from "./SavedAddCard";
export default function SavedPropertyCard(){
    return(
        
        <div>
        <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-600">Saved Properties</h1>
        <p className="text-sm text-gray-400">Quickly access the homes you have bookmarked. </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
        {savedCardProperties.map((property)=>(
            <div key={property.id} className="bg-white rounded-xl border border-gray-200">
               <img 
               src={property.image}
                alt={property.title}
                className="h-40 w-full object-cover rounded-t-xl"
                 />
                 <div className="p-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-sm font-semibold text-gray-600">{property.name}</h2>
                        <span className="text-sm font-semibold text-gray-400">{property.price} </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{property.location}</p>
                    <p className="text-xs text-gray-400">{property.beds} Beds. {property.baths} Baths.</p>
                    <button className="mt-3 w-full bg-blue-600 text-white text-sm py-2 rounded-lg">
                        view details
                    </button>
                 </div>
            </div>
        ))}
        <SavedAddCard />
        </div>
        </div>
    )
}
