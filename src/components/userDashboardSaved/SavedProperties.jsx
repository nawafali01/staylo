import DashboardNavbar from "../dashboard/userdashboard/DashboardNavbar"
import Sidebar from "../dashboard/userdashboard/Sidebar"
import SavedInsights from "./SavedInsights"
import SavedPropertyCard from "./SavedPropertyCard"

const SavedProperties = () => {
  return (
    <div className="flex">
      <Sidebar />
      
      <div className="flex flex-col flex-1">
        <DashboardNavbar/>
        <div className="p-7">
        <SavedPropertyCard/>
       
        <SavedInsights/>
        </div>
      </div>
    </div>
  )
}

export default SavedProperties
