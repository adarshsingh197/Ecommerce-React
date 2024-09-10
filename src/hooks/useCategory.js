import axios from "axios";
import { categoriesapi } from "../api/fakestoreProd";
import { useState,useEffect } from "react";
function useCategory(){
    const [categories,setcategories] = useState([]);
    useEffect(()=>{
        const fetchCategories = async()=>{
            try{
                const categories = await axios.get(categoriesapi);
                const data = categories.data;
                setcategories(data);

                console.log(data);

            }
            catch(errro){
               console.error("Error fetching Categories");
            }
            

        }  
        fetchCategories();  

    },[])
    console.log(categories)
    return categories
}
export default useCategory