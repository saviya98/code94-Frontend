import axios from "axios";

const apiUrl = 'http://localhost:5000/';

export const getAllProducts = async () => {
    try {
       const {data} = await axios.get(apiUrl+'products/');
       return data;
    } catch (error) {
        throw error;
    }
}

export const addNewProduct = async (data) =>{
    try {
       const result = await axios.post(apiUrl+'products/',data);
       console.log(result);
       return result.data;
    } catch (error) {
        throw error;
    }
}

export const deleteProduct = async (id) =>{
    try {
       const result = await axios.delete(apiUrl+'products/'+id);
       console.log(result);
    } catch (error) {
        throw error;
    }
}

export const searchProducts = async (name) =>{
    try {
        const {data} = await axios.get(apiUrl+'products/search/'+name);
        return data;
     } catch (error) {
         throw error;
     }
}