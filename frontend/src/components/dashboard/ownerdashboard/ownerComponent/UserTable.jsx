import { ownerRecentUsers } from "../../../../data/index";

const UserTable = () => (
  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-bold text-gray-900">Recent Users</h2>
      <button className="text-blue-600 font-medium hover:text-blue-700">
        View Directory
      </button>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 text-left">
            <th className="py-3 px-4 font-medium text-gray-600 text-sm">
              USER
            </th>
            <th className="py-3 px-4 font-medium text-gray-600 text-sm">
              ROLE
            </th>
            <th className="py-3 px-4 font-medium text-gray-600 text-sm">
              STATUS
            </th>
            <th className="py-3 px-4 font-medium text-gray-600 text-sm">
              ACTION
            </th>
          </tr>
        </thead>
        <tbody>
          {ownerRecentUsers.map((userData) => (
            <tr
              key={userData.id}
              className="border-b border-gray-100 last:border-0"
            >
              <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                    {userData.initials}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{userData.name}</p>
                    <p className="text-sm text-gray-500">{userData.email}</p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4 text-gray-700">{userData.role}</td>
              <td className="py-4 px-4">
                <span
                  className="text-sm font-medium px-3 py-1 rounded"
                  style={{ backgroundColor: userData.statusColor }}
                >
                  {userData.status}
                </span>
              </td>
              <td className="py-4 px-4">
                <button className="text-blue-600 font-medium hover:text-blue-700">
                  Manage
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default UserTable;
