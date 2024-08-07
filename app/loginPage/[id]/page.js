"use client";

import { useState, useEffect } from "react";
import { getForm } from '../_services/form-service';
import { useAuth } from '../_utils/auth_context';
import { useRouter } from "next/navigation";

export default function Form({ params }) {
    const [form, setForm] = useState(null);
    const { user } = useAuth();
    const router = useRouter();
    
    const handleBack = () => {
        console.log("Back button clicked");
        router.back();
    };

    useEffect(() => {
        
        const fetchForm = async () => {
            if(user) {  
                try {
                    const form = await getForm(params.id, user.uid);
                    setForm(form);
                    
                } catch (error) {
                    console.error("Error fetching form:", error);
                }
            }
        };
        fetchForm();
    }, [params.id]);

    if (!form) {
        return null;
    }

    return (
        <main className='bg-slate-200 m-2'>
                <h1>Fire Extinguisher Form</h1>
                <form method="">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="licensePlate">
                        License Plate
                    </label>
                    <input
                        type="text"
                        id="licensePlate"
                        name="licensePlate"
                        value={form.licensePlate}
                        readOnly={true}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="License Plate"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="currentDate">
                        Current Date
                    </label>
                    <input
                        type="date"
                        id="currentDate"
                        name="currentDate"
                        value={form.currentDate}
                        readOnly={true}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inspector">
                        Inspector
                    </label>
                    <input
                        type="text"
                        id="inspector"
                        name="inspector"
                        value={form.inspector}
                        readOnly={true}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Inspector"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="serialNumber">
                        Serial Number
                    </label>
                    <input
                        type="text"
                        id="serialNumber"
                        name="serialNumber"
                        value={form.serialNumber}
                        readOnly={true}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Serial Number"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="typeRating">
                        Type/Rating
                    </label>
                    <input
                        type="text"
                        id="typeRating"
                        name="typeRating"
                        value={form.typeRating}
                        readOnly={true}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Type/Rating"
                    />
                </div>
                <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status1">
                        Is the Extinguisher Accessible & unobstructed?
                    </label>
                    <input
                        id="accessibility1"
                        name="status1"
                        value={form.status1}
                        readOnly={true}
                        
                        className="border rounded p-2 mb-2"
                        placeholder='Items Needing Action'
                    />
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="noCheckbox1"
                            
                            readOnly={true}
                            className="mr-2"
                        />
                        <label htmlFor="noCheckbox1" className="text-gray-700 text-sm font-bold">
                            No
                        </label>
                    </div>
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status2">
                        Is the Extinguisher wall-mounted and secured?
                    </label>
                    <input
                        id="accessibility2"
                        name="status2"
                        value={form.status2}
                        readOnly={true}
                        
                        className="border rounded p-2 mb-2"
                        placeholder='Items Needing Action'
                    />
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="noCheckbox2"
                            
                            readOnly={true}
                            className="mr-2"
                        />
                        <label htmlFor="noCheckbox2" className="text-gray-700 text-sm font-bold">
                            No
                        </label>
                    </div>
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status3">
                        Is the Inspection tag attached, legible, and current? Has the last annual inspection been completed?
                    </label>
                    <input
                        id="accessibility3"
                        name="status3"
                        value={form.status3}
                        readOnly={true}
                        
                        className="border rounded p-2 mb-2"
                        placeholder='Items Needing Action'
                    />
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="noCheckbox3"
                            
                            readOnly={true}
                            className="mr-2"
                        />
                        <label htmlFor="noCheckbox3" className="text-gray-700 text-sm font-bold">
                            No
                        </label>
                    </div>
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status4">
                        Is the Extinguisher fully charged and operable? (needle in the green, no visible damage)
                    </label>
                    <input
                        id="accessibility4"
                        name="status4"
                        value={form.status4}
                        readOnly={true}
                        
                        className="border rounded p-2 mb-2"
                        placeholder='Items Needing Action'
                    />
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="noCheckbox4"
                            
                            readOnly={true}
                            className="mr-2"
                        />
                        <label htmlFor="noCheckbox4" className="text-gray-700 text-sm font-bold">
                            No
                        </label>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button type="button" onClick={handleBack}
                       
                        className="bg-gray-800 text-white p-2 m-2 rounded-lg hover:bg-orange-500 hover:text-black"
                    >
                        Back
                    </button>
                </div>
            </form>
            </main>
    );
}