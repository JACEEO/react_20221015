import axios from "axios"

export const postSignIn = async (name, email, password)=>{
    try{
       const result =   axios.post("http://101.101.218.43/users",{
            name,
            email,
            password,
        });

        return result;
    }catch(e){
        console.log(e);
    }

};
