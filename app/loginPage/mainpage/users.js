"use client";
import { useState } from "react";

export default function Users() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Halo",
      position: "1 - Worker",
      email: "worker@formless.ca",
    },
    {
      id: 2,
      name: "John BaldursGate",
      position: "2 - Supervisor",
      email: "Supervisor@formless.ca",
    },
    {
      id: 3,
      name: "John Helldiver",
      position: "3 - Admin",
      email: "admin@formless.ca",
    },
  ]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEdit = (id) => {
    // Handle edit user logic here
    console.log(`Edit user with id ${id}`);
  };

  const handleRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <header className="m-5 flex justify-between items-center">
        <div className="mb-4">
          <input
            type="text"
            className=" p-2 rounded-lg w-full"
            placeholder="Search users..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </header>
      <main className="p-4">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Position</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.position}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-gray-200 text-black px-2 py-1 rounded mr-2 hover:bg-orange- "
                    onClick={() => handleEdit(user.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                    onClick={() => handleRemove(user.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
