import React from "react";

export const Table = () => {
  const data = [
    {
      id: 1,
      order: "#95954",
      status: "Active",
      name: "Jone Doe",
      email: "jonne62@gmail.com",
      date: "2023-06-28",
      time: "10:00 AM",
    },
    {
      id: 2,
      order: "#95954",
      status: "Cancelled",
      name: "Jone Doe",
      email: "jonne62@gmail.com",
      date: "2023-06-29",
      time: "2:30 PM",
    },
    {
      id: 3,
      order: "#95954",
      status: "Complete",
      name: "Jone Doe",
      email: "jonne62@gmail.com",
      date: "2023-06-30",
      time: "9:15 AM",
    },
    {
      id: 4,
      order: "#95954",
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
                          {item.order}
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
        <div className="w-full inline-block align-middle">
          <div className="overflow-hidden ">
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
                    Audi e-tron GT quattro
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    10
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    RS e-tron GT
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    32
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    Q8 e-tron
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    78
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    Q4 Sportback e-tron
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    45
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

export const TableTestDrive = () => {
  const dataTestDrive = [
    {
      id: 1,
      name: "Jone ",
      lastName: "Poppins",
      email: "jonne62@gmail.com",
      address: "Delhi IND",
      contact: "9595468434",
      model: "Audi Car q7",
      status: "Active",
    },
    {
      id: 2,
      name: "Jone ",
      lastName: "Poppins",
      email: "jonne62@gmail.com",
      address: "Delhi IND",
      contact: "9595468434",
      model: "Audi Car q7",
      status: "Cancelled",
    },
    {
      id: 3,
      name: "Jone ",
      lastName: "Poppins",
      email: "jonne62@gmail.com",
      address: "Delhi IND",
      contact: "9595468434",
      model: "Audi Car q7",
      status: "Complete",
    },
    {
      id: 4,
      name: "Mary ",
      lastName: "Poppins",
      email: "marypoppins@gmail.com",
      address: "Delhi IND",
      contact: "9595468434",
      model: "Audi Car q7",
      status: "Active",
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
    <div className="flex flex-col ">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <div className="min-w-full">
              <div style={tableContainerStyles} className="table-container">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                      >
                        First Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                      >
                        Last Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                      >
                        Email Address
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase"
                      >
                        Address
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase"
                      >
                        Contact No
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase"
                      >
                        Model
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-sm font-bold text-right text-gray-500 uppercase"
                      >
                        {" "}
                        <select>
                          <option>Action</option>
                          <option value="complete">Complete</option>
                          <option value="incomplete">Cancelled</option>
                        </select>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {dataTestDrive.map((item) => (
                      <tr key={item.id}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {item.name}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {item.lastName}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {item.email}
                        </td>
                        <td className="px-6 py-4 text-sm text-right whitespace-nowrap">
                          <a className="text-gray-800" href="#">
                            {item.address}
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm text-right whitespace-nowrap">
                          <a className="text-gray-800" href="#">
                            {item.contact}
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <a className="text-gray-800" href="#">
                            {item.model}
                          </a>
                        </td>

                        <td
                          className={`px-6 py-4 text-sm text-gray-800 text-right whitespace-nowrap ${getStatusTextColor(
                            item.status
                          )}`}
                        >
                          {item.status}
                        </td>
                        <td
                          className={`px-6 py-4 text-sm text-gray-800 text-right whitespace-nowrap ${getStatusTextColor(
                            item.status
                          )}`}
                        >
                          {item.status}
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
