import axios from "axios";

const adminAuth = "http://localhost:2023/admin";
export const live = "https://easypayendpoints.onrender.com"

interface adminData {
  companyName: string;
  companyEmail: string;
  yourName: string;
  password: string;
}

interface login {
  companyEmail: string;
  password: string;
}

export const adminReg = async (data:any
 ) => {
  return await axios
    .post(`${adminAuth}/register`, data)
    .then((res) => res.data);
};

export const adminLogin = async ({ companyEmail, password }: login) => {
  return await axios
    .post(`${adminAuth}/login`, {
      companyEmail,
      password,
    })
    .then((res) => res.data);
};


export const getOneAdmin = async(id:any) =>{
return await axios.get(`${live}/admin/${id}`).then((res) => res.data);
}