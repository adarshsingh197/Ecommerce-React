import './Home.css';
import CategoryItem from '../../components/categoryItem/CategoryItem';
import useCategory from '../../hooks/useCategory';
import { useContext } from 'react';
import userContext from '../../context/userContext';
import useCart from '../../hooks/useCart';
import { useEffect } from 'react';
const Home = () => {
   const categories = useCategory();
   const {user}= useContext(userContext);
   const [cart]= useCart(user?user.id:undefined);
   useEffect(()=>{
     console.log(user.id)
   },[user])

   return (
     <div className="container welcome-wrapper">
       <div className="row">
         <h2 className="home-title text-center">Welcome to Shop Cart</h2>
         <div className="category-list d-flex flex-row justify-content-around align-items-center" id="categoryList">
           <CategoryItem itemName="All Product" filter="all" />
           {categories && categories.map((x) => (
             <CategoryItem key={x} itemName={x.toUpperCase()} filter={x} />
           ))}
         </div>
         <div className="category-title text-center">
           Select a category to start Shopping
         </div>
       </div>
     </div>
   );
};

export default Home;
