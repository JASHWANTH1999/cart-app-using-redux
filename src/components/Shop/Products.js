import ProductItem from './ProductItem';
import classes from './Products.module.css';


const dummyProducts=[{
  id:"p1",
  price:90,
  
  title:"Peace of life",
  description:"All about life"
},{
  id:"p2",
  price:90,
  
  title:"love Everyone",
  description:"be happy always"
}]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
       {dummyProducts.map(item=>(
         <ProductItem
         key={item.id}
         id={item.id}
         title={item.title}
         price={item.price}
         description={item.description}
       />
       ))}
      </ul>
    </section>
  );
};

export default Products;
