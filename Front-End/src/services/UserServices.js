import axios from "axios";
import { BASE_URL } from "./APIconstants";
import { getToken } from "./TokenUtil";

//Patient
export async function savePatient(userData){
    try {
        console.log(userData);
        const response=await axios.post(`${BASE_URL}/signup`,userData);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

//Patient
export async function getUserProfile(id){
    try{
        const obj = await axios.get(`${BASE_URL}/patient/profile/${id}`);
        return obj.data;
    }
    catch(error){
        console.log(error);
    }
    
}

//Patient
export async function login(credentials){
    const response=await axios.post(`${BASE_URL}/patient/login`,credentials);
    return response.data;
} 

export async function getPatientBookings(patientId){
    try{
        const response = await axios.get(`${BASE_URL}/patient/appointments/${patientId}`);
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}
//for admin login
export async function adminLogin(credentials){
    const response=await axios.post(`${BASE_URL}/admin/login`,credentials);
    return response.data;
} 


export async function PatientServices(){
    try{
        const response= await axios.get(`${BASE_URL}/patientlist`);
        return response;
    }
    catch(error){
        console.log(error);
    }
}

export async function getPatientHistory(patientId){
    try{
        const response = await axios.get(`${BASE_URL}/history/${patientId}`);
        console.log(response);
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}