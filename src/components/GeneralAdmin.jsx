import React, { useState } from "react";

const GeneralAdmin = () => {
  const [labs, setLabs] = useState([
    { id: 1, name: "AI Lab", servers: 3 },
    { id: 2, name: "Cloud Lab", servers: 2 },
    { id: 3, name: "Networks Lab", servers: 4 },
  ]);

  const [newLab, setNewLab] = useState("");

  const addLab = () => {
    if (newLab.trim() !== "") {
      setLabs([...labs, { id: Date.now(), name: newLab, servers: 0 }]);
      setNewLab("");
    }
  };

  const removeLab = (id) => {
    setLabs(labs.filter((lab) => lab.id !== id));
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/6 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">General Admin</h2>
        <ul>
          <li className="py-2 hover:bg-gray-700 cursor-pointer">Dashboard</li>
          <li className="py-2 hover:bg-gray-700 cursor-pointer">Add Lab</li>
          <li className="py-2 hover:bg-gray-700 cursor-pointer">Remove Lab</li>
          <li className="py-2 hover:bg-gray-700 cursor-pointer">Reports</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-10">
        <h1 className="text-3xl font-bold mb-6">Lab Management</h1>

        {/* Add Lab Section */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="New Lab Name"
            className="border p-2 mr-2"
            value={newLab}
            onChange={(e) => setNewLab(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={addLab}
          >
            Add Lab
          </button>
        </div>

        {/* Lab List */}
        <div className="grid grid-cols-2 gap-6">
          {labs.map((lab) => (
            <div key={lab.id} className="border p-4 rounded shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{lab.name}</h3>
              <p>Servers: {lab.servers}</p>
              <button
                className="bg-red-600 text-white px-4 py-2 mt-4 rounded"
                onClick={() => removeLab(lab.id)}
              >
                Remove Lab
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneralAdmin;
