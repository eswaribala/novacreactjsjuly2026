import {evDashboardData} from '../../../data/evdashboarddata.js';

const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-purple-500'];

function EVDashboard() {
    {/* Create card of items from data */}
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {evDashboardData.map((item,index) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center mb-4">
                            <item.icon className={`w-6 h-6 ${colors[index % colors.length]} mr-2`} />
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                        </div>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default EVDashboard;