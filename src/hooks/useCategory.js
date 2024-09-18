import axios from "axios";
import { categoriesapi } from "../api/fakestoreProd";
import { useState, useEffect } from "react";

function useCategory() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        console.log("Fetching categories...");
        const url = categoriesapi();
        console.log(url); // Log the URL
        const response = await axios.get(url); // Call categoriesapi() to get the URL string
        const data = response.data;
        console.log(data); // Log the response data
        setCategories(data);
        console.log("Categories fetched successfully");
      } catch (error) {
        console.error("Error fetching Categories", error);
      }
    };
    fetchCategories();
  }, []);

  console.log(categories); // Log the state after fetching
  return categories;
}

export default useCategory;
