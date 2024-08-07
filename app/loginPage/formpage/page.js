"use client";
import { useState } from "react";
import { useAuth } from "../_utils/auth_context";
import { addForm } from "../_services/form-service";
import { useRouter } from "next/navigation";

export default function Page() {
  const { logout } = useAuth();
  const { user } = useAuth();
  const router = useRouter();
  const logoutCurrentUser = async () => {
    try {
      await logout();
      router.push("/loginPage");
    } catch (error) {
      console.log(error);
    }
  };
  const [form, setForm] = useState({
    licensePlate: "",
    currentDate: new Date().toISOString().split("T")[0], // Default to today's date
    inspector: "",
    serialNumber: "",
    typeRating: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { licensePlate, currentDate, inspector, serialNumber, typeRating, status1, status2, status3, status4 } = e.target.elements;
    // Handle form submission logic here
    console.log("Form submitted:", form);
    const confirmation = window.confirm(
      "Are you sure you want to submit this form?"
    );
    if (confirmation) {
        await addForm(user.uid,{
          licensePlate: licensePlate.value,
          currentDate: currentDate.value,
          inspector: inspector.value,
          serialNumber: serialNumber.value,
          typeRating: typeRating.value,
          status1: status1.value,
          status2: status2.value,
          status3: status3.value,
          status4: status4.value,
      })
      licensePlate.value = "";
      currentDate.value = "";
      inspector.value = "";
      serialNumber.value = "";
      typeRating.value = "";
      
      window.alert("Form submitted successfully");
      router.push("/loginPage/mainpage");
    }
  };
  const [isNoChecked1, setIsNoChecked1] = useState(false);
  const [isNoChecked2, setIsNoChecked2] = useState(false);
  const [isNoChecked3, setIsNoChecked3] = useState(false);
  const [isNoChecked4, setIsNoChecked4] = useState(false);

  const handleCheckboxChange1 = (e) => {
    setIsNoChecked1(e.target.checked);
    if (!e.target.checked) {
      setForm({
        ...form,
        status1: "",
      });
    }
  };

  const handleCheckboxChange2 = (e) => {
    setIsNoChecked2(e.target.checked);
    if (!e.target.checked) {
      setForm({
        ...form,
        status2: "",
      });
    }
  };

  const handleCheckboxChange3 = (e) => {
    setIsNoChecked3(e.target.checked);
    if (!e.target.checked) {
      setForm({
        ...form,
        status3: "",
      });
    }
  };

  const handleCheckboxChange4 = (e) => {
    setIsNoChecked4(e.target.checked);
    if (!e.target.checked) {
      setForm({
        ...form,
        status4: "",
      });
    }
  };

  const navBack = () => {
    const confirmation = window.confirm(
      "Are you sure you want to leave this page? All Entered Information will be lost."
    );
    if (confirmation) {
      router.push("/loginPage/mainpage");
    }
  };

  return (
    <>
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl">Formless</h1>
        <div className="ml-auto flex space-x-2">
          <button
            onClick={logoutCurrentUser}
            className="bg-gray-800 text-white p-2 rounded-lg hover:bg-orange-500 hover:text-black"
          >
            Logout
          </button>
          <button
            onClick={navBack}
            className="bg-gray-800 text-white p-2 rounded-lg hover:bg-orange-500 hover:text-black"
          >
            Back
          </button>
        </div>
      </header>
      <main className="bg-slate-200 m-2">
        <h1>Fire Extinguisher Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="licensePlate"
            >
              License Plate
            </label>
            <input
              type="text"
              id="licensePlate"
              name="licensePlate"
              value={form.licensePlate}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="License Plate"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="currentDate"
            >
              Current Date
            </label>
            <input
              type="date"
              id="currentDate"
              name="currentDate"
              value={form.currentDate}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="inspector"
            >
              Inspector
            </label>
            <input
              type="text"
              id="inspector"
              name="inspector"
              value={form.inspector}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Inspector"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="serialNumber"
            >
              Serial Number
            </label>
            <input
              type="text"
              id="serialNumber"
              name="serialNumber"
              value={form.serialNumber}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Serial Number"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="typeRating"
            >
              Type/Rating
            </label>
            <input
              type="text"
              id="typeRating"
              name="typeRating"
              value={form.typeRating}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Type/Rating"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="status1"
            >
              Is the Extinguisher Accessible & unobstructed?
            </label>
            <input
              id="accessibility1"
              name="status1"
              value={form.status1}
              onChange={handleChange}
              disabled={!isNoChecked1}
              className="border rounded p-2 mb-2"
              placeholder="Items Needing Action"
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                id="noCheckbox1"
                checked={isNoChecked1}
                onChange={handleCheckboxChange1}
                className="mr-2"
              />
              <label
                htmlFor="noCheckbox1"
                className="text-gray-700 text-sm font-bold"
              >
                No
              </label>
            </div>
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="status2"
            >
              Is the Extinguisher wall-mounted and secured?
            </label>
            <input
              id="accessibility2"
              name="status2"
              value={form.status2}
              onChange={handleChange}
              disabled={!isNoChecked2}
              className="border rounded p-2 mb-2"
              placeholder="Items Needing Action"
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                id="noCheckbox2"
                checked={isNoChecked2}
                onChange={handleCheckboxChange2}
                className="mr-2"
              />
              <label
                htmlFor="noCheckbox2"
                className="text-gray-700 text-sm font-bold"
              >
                No
              </label>
            </div>
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="status3"
            >
              Is the Inspection tag attached, legible, and current? Has the last
              annual inspection been completed?
            </label>
            <input
              id="accessibility3"
              name="status3"
              value={form.status3}
              onChange={handleChange}
              disabled={!isNoChecked3}
              className="border rounded p-2 mb-2"
              placeholder="Items Needing Action"
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                id="noCheckbox3"
                checked={isNoChecked3}
                onChange={handleCheckboxChange3}
                className="mr-2"
              />
              <label
                htmlFor="noCheckbox3"
                className="text-gray-700 text-sm font-bold"
              >
                No
              </label>
            </div>
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="status4"
            >
              Is the Extinguisher fully charged and operable? (needle in the
              green, no visible damage)
            </label>
            <input
              id="accessibility4"
              name="status4"
              value={form.status4}
              onChange={handleChange}
              disabled={!isNoChecked4}
              className="border rounded p-2 mb-2"
              placeholder="Items Needing Action"
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                id="noCheckbox4"
                checked={isNoChecked4}
                onChange={handleCheckboxChange4}
                className="mr-2"
              />
              <label
                htmlFor="noCheckbox4"
                className="text-gray-700 text-sm font-bold"
              >
                No
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-gray-800 text-white p-2 m-2 rounded-lg hover:bg-orange-500 hover:text-black"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
