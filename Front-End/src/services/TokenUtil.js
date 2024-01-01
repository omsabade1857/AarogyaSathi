export function isAuthenticated(){
    return getToken() ? true:false;
}
export function getToken(){
    const adminId=sessionStorage.getItem('adminId');
    const patientId= sessionStorage.getItem('patientId');
    const dctrId=sessionStorage.getItem('doctorId');
    if(patientId>0 || dctrId >0 ||adminId>0)
    return true;
else
return false;
}
export function logout(){
    sessionStorage.removeItem('patientId');
    sessionStorage.removeItem('doctorId');
    sessionStorage.removeItem('adminId');
}
