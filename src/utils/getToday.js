export const GetToday =()=>{
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const formatDate = month + '-' + day + '-' + year;

    return formatDate;
}