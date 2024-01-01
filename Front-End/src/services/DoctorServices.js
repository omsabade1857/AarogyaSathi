import axios from "axios";
import { BASE_URL } from "./APIconstants";
import { getToken } from "./TokenUtil";

export async function DoctorServices(){
    try{
        const response= await axios.get(`${BASE_URL}/book-appointment`);
        return response;
    }
    catch(error){
        console.log(error);
    }
}

//Doctor Login
export async function doctorLogin(credentials){
    const response=await axios.post(`${BASE_URL}/doctor/login`,credentials);
    return response.data;
} 
//Doctor Profile
export async function getDoctorProfile( doctorId){
    try{
        const response = await axios.get(`${BASE_URL}/doctor/profile/${doctorId}`);       
        return response.data;
    }
    catch(error){
        console.log(error);
    }
    
}

export async function BookAppointment(booking){
    try{
        const response= await axios.post(`${BASE_URL}/patient/appointment`,booking);
    return response.data;
    }
    catch(error){
        console.log(error);
    }
}

export async function UpdateAppointment(updatedRec, appId){
    try{
        console.log(appId);
        const response= await axios.put(`${BASE_URL}/updateDate/${appId}`,updatedRec);
        console.log(response);
    return response.data;
    }
    catch(error){
        console.log(error);
    }
}

export async function DeleteAppointment(appId){
    try{
        const response= await axios.delete(`${BASE_URL}/delete/${appId}`);
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}

export async function getBookingsByDoctorId(doctorId){
    try{
        const response = await axios.get(`${BASE_URL}/doctor/appointments/${doctorId}`);
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}

