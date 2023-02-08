export const convertDate = (inputFormat:any)=>{
    const pad=(s:any)=>{
        return(s<10)?'0' + s:s;
    }
    
    return [pad(inputFormat.getDate()), pad(inputFormat.getMonth()+1),inputFormat.getFullYear()].join('/')
}