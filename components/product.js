import Image from "next/image";
import Link from "next/link";
import style from "./../styles/product.module.css";
const Product = ({ product }) => {
  const { title, image, price } = product;
  console.log(product.title, "product");
  return (
    <>
      <div className={style.product}>
        {/*Error: Invalid src prop 
      hostname 
         "fakestoreapi.com" 
        is not configured under images
         in your `next.config.js`
`next.config.js`  فا فتحنا فايل ال 
وكتبناه فيه 
module.exports = {
  images: { domains: ["fakestoreapi.com"] },
};
   ولازم نقفل ونفتح تاني السيرفر 
*/}
        <Image
          src={product.image}
          alt="Picture of the author"
          width={200}
          height={200}
          className={style.img}
        />
        <ul>
          <li>{title}</li>
          <li>{price}$</li>
        </ul>
        <Link href="productDetails">more detalis</Link>
      </div>
    </>
  );
};

export default Product;
