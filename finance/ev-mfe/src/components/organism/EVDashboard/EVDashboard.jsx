import {evDashboardData} from '../../../data/evdashboarddata.js';

const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-purple-500'];

function EVDashboard() {
    // Create card of items from data
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {evDashboardData.map((item,index) => (
                    <div key={item.id} className={`overflow-hidden border border-gray-200  
     ${colors[index % colors.length]} shadow-md rounded-lg ml-5 mr-5 mt-10 p-5 transition-transform 
     transform hover:scale-105 hover:shadow-lg`}>
                        <div className="flex items-center mb-4">
                            <item.icon className={`w-6 h-6 text-white mr-2`} />
                            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        </div>
                        <p className="text-white">{item.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default EVDashboard;