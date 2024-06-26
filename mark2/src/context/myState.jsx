import { useEffect, useState } from 'react';
import MyContext from './myContext';
import { collection, deleteDoc, doc, onSnapshot, orderBy, query,getDoc } from 'firebase/firestore';
import { fireDB } from '../firebase/FirebaseConfig';
import toast from 'react-hot-toast';

function MyState({ children }) {
    // Loading State 
   
    const [loading, setLoading] = useState(false);
    // User State
    const [getAllCompany, setGetAllCompany] = useState([]);
    const [getAllStudent, setGetAllStudent] = useState([]);
    const [getAllCDetail, setGetAllCDetail] = useState([]);
    const [getAllSDetail, setGetAllSDetail] = useState([]);

   const getAllCompanyFunction = async () => {
        setLoading(true);
        try {
            const q = query(
                collection(fireDB, "company")
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let userArray = [];
                QuerySnapshot.forEach((doc) => {
                    userArray.push({ ...doc.data(), id: doc.id });
                });
                setGetAllCompany(userArray);
                setLoading(false);
            });
            return () => data;
        } catch (error) {
            console.log(error);
             setLoading(false);
        }
    }

    const getAllSDetailFunction = async () => {
        setLoading(true);
        try {
            const q = query(
                collection(fireDB, "SDetails")
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let userArray = [];
                QuerySnapshot.forEach((doc) => {
                    userArray.push({ ...doc.data(), id: doc.id });
                });
                setGetAllSDetail(userArray);
                setLoading(false);
            });
            return () => data;
        } catch (error) {
            console.log(error);
             setLoading(false);
        }
    }
    
    const getAllCDetailFunction = async () => {
        setLoading(true);
        try {
            const q = query(
                collection(fireDB, "CDetails")
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let userArray = [];
                QuerySnapshot.forEach((doc) => {
                    userArray.push({ ...doc.data(), id: doc.id });
                });
                setGetAllCDetail(userArray);
                setLoading(false);
            });
            return () => data;
        } catch (error) {
            console.log(error);
             setLoading(false);
        }
    }

    const getAllStudentFunction = async () => {
        setLoading(true);
        try {
            const q = query(
                collection(fireDB, "student")
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let userArray = [];
                QuerySnapshot.forEach((doc) => {
                    userArray.push({ ...doc.data(), id: doc.id });
                });
                setGetAllStudent(userArray);
                setLoading(false);
            });
            return () => data;
        } catch (error) {
            console.log(error);
             setLoading(false);
        }
    }
    useEffect(() => {
        getAllCompanyFunction();
        getAllStudentFunction();
        getAllSDetailFunction();
        getAllCDetailFunction();
    }, []);


    return (
        <MyContext.Provider value={{
            getAllCompany,
            getAllCompanyFunction,
            getAllStudentFunction,
            getAllStudent,
            getAllSDetail,
            getAllCDetail
            }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyState