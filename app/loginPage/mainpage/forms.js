"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormsTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [forms, setForms] = useState([
    {
      id: 1,
      name: "Fire Extinguisher Form",
      category: "Safety",
      createdDate: "2024-08-06",
    },
    {
      id: 2,
      name: "Monke Readiness Form",
      category: "MONKE OSHA",
      createdDate: "10000BC",
    },
  ]);
  const router = useRouter();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEdit = (id) => {
    console.log(`Edit form with id ${id}`);
  };

  const handleCreate = (id) => {
    router.push("/loginPage/formpage");
    console.log(`Create Copy of form with id ${id}`);
  };

  const handleRemove = (id) => {
    setForms(forms.filter((form) => form.id !== id));
  };

  const filteredForms = forms.filter(
    (form) =>
      form.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      form.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      form.createdDate.includes(searchTerm)
  );

  return (
    <>
      <header className="m-5 flex justify-between items-center">
        <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-orange-500 hover:text-black">
          Add Form
        </button>
        <div className="mb-4">
          <input
            type="text"
            className=" p-2 rounded-lg w-full"
            placeholder="Search Forms..."
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
              <th className="py-2 px-4 border-b">Created Date</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredForms.map((form) => (
              <tr key={form.id}>
                <td className="py-2 px-4 border-b">{form.name}</td>
                <td className="py-2 px-4 border-b">{form.category}</td>
                <td className="py-2 px-4 border-b">{form.createdDate}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-gray-200 text-black px-2 py-1 rounded mr-2 hover:bg-orange-500 "
                    onClick={() => handleEdit(form.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 mr-2 rounded hover:bg-red-700"
                    onClick={() => handleRemove(form.id)}
                  >
                    Remove
                  </button>
                  <button
                    className="bg-gray-200 text-black px-2 py-1 rounded mr-2 hover:bg-orange-500 mt-2"
                    onClick={() => handleCreate(form.id)}
                  >
                    Create a Submission
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
