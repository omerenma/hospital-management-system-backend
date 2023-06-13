export interface Patient {
    name:string;
    sex:string;
    dob:string;
    residential_address:string; 
    // date:string; 
    email:string; 
    phone_no:string;
    next_of_kin_name:string;
    next_of_kin_phone_no:string;
}
export interface UpdatePatient {
    id:string;
    patients_name?:string 
    residential_address?:string; 
    room_admitted?:string; 
    admission_no?:string; 
    id_no?:string; 
    email?:string; 
    phone_number?:string;
    next_of_kin_name?:string;
    next_of_kin_phone_no?:string;
    status?:string;
}