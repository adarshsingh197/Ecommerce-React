export const categoriesapi="https://fakestoreapi.com/products/categories"
export const allproductsapi="https://fakestoreapi.com/products"
export function getallproductsbyCategory(category){
    return `https://fakestoreapi.com/products/category/${category}`;
}
export function getProduct(id) {
    return `https://fakestoreapi.com/products/${id}`;
}
