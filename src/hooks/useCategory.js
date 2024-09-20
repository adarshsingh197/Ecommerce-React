import axios from "axios";
import { categoriesapi } from "../api/fakestoreProd";
import { useState, useEffect } from "react";

function useCategory() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const url = categoriesapi();
        const response = await axios.get(url); // Call categoriesapi() to get the URL string
        const data = response.data;
        setCategories(data);
      } catch (error) {
        console.error("Error fetching Categories", error);
      }
    };
    fetchCategories();
  }, []);

  return categories;
}

export default useCategory;
