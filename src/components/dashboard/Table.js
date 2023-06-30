import React from "react";

export const Table = () => {
  const data = [
    {
      id: 1,
      status: "Active",
      name: "Jone Doe",
      email: "jonne62@gmail.com",
      date: "2023-06-28",
      time: "10:00 AM",
    },
    {
      id: 2,
      status: "Cancelled",
      name: "Jone Doe",
      email: "jonne62@gmail.com",
      date: "2023-06-29",
      time: "2:30 PM",
    },
    {
      id: 3,
      status: "Complete",
      name: "Jone Doe",
      email: "jonne62@gmail.com",
      date: "2023-06-30",
      time: "9:15 AM",
    },
    {
      id: 4,
      status: "Active",
      name: "Mary Poppins",
      email: "marypoppins@gmail.com",
      date: "2023-06-30",
      time: "3:45 PM",
    },
  ];

  const tableContainerStyles = {
    maxHeight: "400px", // Set an appropriate height for the container
    overflow: "auto",
  };

  const getStatusTextColor = (status) => {
    switch (status) {
      case "Active":
        return "text-green-500";
      case "Cancelled":
        return "text-red-500";
      case "Complete":
        return "text-orange-500";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <div className="flex justify-between items-center p-2">
              <h2 className="text-xl ">Total money spent</h2>
              <button className="px-3 py-1 text-black rounded-lg text-sm font-normal border border-gray-500">
                View Booking
              </button>
            </div>
            <div className="min-w-full">
              <div style={tableContainerStyles} className="table-container">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                      >
                        ORDER
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                      >
                        STATUS
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                      >
                        DATE
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase"
                      >
                        CUSTOMER
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase"
                      >
                        TIME
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {data.map((item) => (
                      <tr key={item.id}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {item.id}
                        </td>
                        <td
                          className={`px-6 py-4 text-sm text-gray-800 whitespace-nowrap ${getStatusTextColor(
                            item.status
                          )}`}
                        >
                          {item.status}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {item.date}
                        </td>
                        <td className="px-6 py-4 text-sm text-right whitespace-nowrap">
                          <a className="text-gray-800" href="#">
                            {item.name}
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <a className="text-gray-800" href="#">
                            {item.time}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Table2 = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-between  p-2">
          <h2 className="text-xl">Test Drive by models</h2>
          <button className="px-3 py-1 text-black rounded-lg text-sm font-normal border border-gray-500">
                View More
              </button>
        </div>
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    MODEL
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    CLICKS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    1
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Jone Doe
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    2
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Jone Doe
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    3
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Jone Doe
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    4
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Mary Poppins
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
