import Link from "next/link";
import style from "./../styles/Nav.module.css";
const Navbar = () => {
  return (
    <nav>
      <div className={style.container}>
        <div className="logo">ShopShop</div>
        <ul className={style.listo}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>
            <Link href="/cart">cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
