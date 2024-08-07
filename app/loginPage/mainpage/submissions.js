"use client";
import { useState } from "react";

export default function Submissions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [submissions, setSubmissions] = useState([
    {
      id: 1,
      name: "Fire Extinguisher Form",
      category: "Safety",
      submittedBy: "John Halo",
      submittedDate: "2024-08-06",
    },
    {
      id: 2,
      name: "Monke Readiness Form",
      category: "MONKE OSHA",
      submittedBy: "John BaldursGate",
      submittedDate: "3024AD",
    },
  ]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleView = (id) => {
    console.log(`View submission with id ${id}`);
  };
  const handleEdit = (id) => {
    console.log(`Edit submission with id ${id}`);
  };

  const handleRemove = (id) => {
    setSubmissions(submissions.filter((submission) => submission.id !== id));
  };

  const filteredSubmissions = submissions.filter(
    (submission) =>
      submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.submittedBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.submittedDate.includes(searchTerm)
  );

  return (
    <>
      <header className="m-5 flex justify-between items-center">
        <div className="mb-4">
          <input
            type="text"
            className=" p-2 rounded-lg w-full"
            placeholder="Search Submissions..."
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
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Submitted By</th>
              <th className="py-2 px-4 border-b">Submitted Date</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredSubmissions.map((submission) => (
              <tr key={submission.id}>
                <td className="py-2 px-4 border-b">{submission.name}</td>
                <td className="py-2 px-4 border-b">{submission.category}</td>
                <td className="py-2 px-4 border-b">{submission.submittedBy}</td>
                <td className="py-2 px-4 border-b">
                  {submission.submittedDate}
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-gray-200 text-black px-2 py-1 rounded mr-2 hover:bg-orange-500 "
                    onClick={() => handleView(submission.id)}
                  >
                    View
                  </button>
                  <button
                    className="bg-gray-200 text-black px-2 py-1 rounded mr-2 hover:bg-orange-500 "
                    onClick={() => handleEdit(submission.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 mt-1"
                    onClick={() => handleRemove(submission.id)}
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
