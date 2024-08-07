import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, doc, query, getDoc } from "firebase/firestore";

const getForms = async (userId) => {
    const forms = [];
    const q = query(collection(db, `users/${userId}/forms`));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        
        forms.push({
            id: doc.id,
            name: data.name || 'Fire Extinguisher Form',
            category: data.category || 'Safety',
            submittedBy: data.inspector || userId,
            submittedDate: data.currentDate || '',
            
            ...data,
        });
    });
    console.log("Forms: ", forms);
    return forms;

}

const getForm = async (formId, userId) => {
    try{
        const docRef = doc(db, `users/${userId}/forms`, formId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            const form = {
                id: docSnap.id,
                ...docSnap.data(),
            };
            return form;
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Error getting document:", error);
    }
    
};

const addForm = async (userId, form) => {
    try {
        const docRef = await addDoc(collection(db, `users/${userId}/forms`), form);
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
    
    } catch (error) {
        console.error("Error adding document: ", error);
    }
    
}


export { getForms, addForm, getForm };