import Image from "next/image";

const Product = ({ product }) => {
  const { title, image, price } = product;
  console.log(product.title, "product");
  return (
    <>
      <div className="prduct">
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
          width={500}
          height={500}
        />
        <ul>
          <li>{title}</li>
          <li>{price}$</li>
        </ul>
      </div>
    </>
  );
};

export default Product;
