import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <div className={`w-64 bg-gray-800 text-white fixed h-full top-0 left-0 p-4 transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
    <button onClick={toggleSidebar} className="text-white mb-4">Close</button>
    <ul className="space-y-4">
      <li>My Bookings</li>
      <li>Requests Accepted</li>
      <li>Reports</li>
      <li>Notifications</li>
      <li>Logout</li>
    </ul>
  </div>
);

const labs = [
  { id: 1, name: 'Research Computing Lab', booked: 10, free: 20, reserved: 5 },
  { id: 2, name: 'BDL', booked: 8, free: 15, reserved: 2 },
  { id: 3, name: 'SSL', booked: 12, free: 18, reserved: 4 },
  { id: 4, name: 'AI Lab', booked: 5, free: 25, reserved: 3 },
  { id: 5, name: 'IoT Lab', booked: 7, free: 22, reserved: 1 }
];

const LabCard = ({ lab, onClick }) => (
  <div className="p-4 bg-white rounded-lg shadow-lg cursor-pointer" onClick={() => onClick(lab.id)}>
    <h3 className="text-xl font-bold mb-2">{lab.name}</h3>
    <p className="text-green-500">Free: {lab.free}</p>
    <p className="text-red-500">Booked: {lab.booked}</p>
    <p className="text-yellow-500">Reserved: {lab.reserved}</p>
  </div>
);

const SeatLayout = ({ labId }) => {
  const totalSeats = 30;
  const seats = Array.from({ length: totalSeats }, (_, index) => ({
    id: index + 1,
    status: index < 10 ? 'Booked' : index < 15 ? 'Reserved' : 'Free'
  }));

  return (
    <div className="grid grid-cols-6 gap-4 mt-4">
      {seats.map((seat) => (
        <div key={seat.id} className={`p-4 text-center rounded-lg cursor-pointer ${seat.status === 'Booked' ? 'bg-red-500' : seat.status === 'Reserved' ? 'bg-yellow-500' : 'bg-green-500'}`}>
          {seat.id}
        </div>
      ))}
    </div>
  );
};

const StudentDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedLab, setSelectedLab] = useState(null);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLabClick = (labId) => {
    setSelectedLab(labId);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 p-8">
        <button onClick={toggleSidebar} className="mb-4">
          <Menu />
        </button>
        <h2 className="text-3xl font-bold mb-8">Book Your Space</h2>
        {selectedLab === null ? (
          <div className="grid grid-cols-2 gap-8">
            {labs.map((lab) => (
              <LabCard key={lab.id} lab={lab} onClick={handleLabClick} />
            ))}
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-bold">Selected Lab Layout for Lab {selectedLab}</h3>
            <SeatLayout labId={selectedLab} />
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
