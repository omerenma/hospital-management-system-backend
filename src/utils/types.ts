export type Users = {
    id?: Number;
    name?: string;
    email: string;
    role:string;
    password: string
    // issent:Number
}
export type Verify = {
    username:string;
    email:string;
    token:string;
}
export type Login =  {
    email:string
    password:string
}