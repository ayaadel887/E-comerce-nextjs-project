import Link from "next/link";
import style from "./../styles/Nav.module.css";
const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={`${style.container} container`}>
        <div className={style.logo}>ShopShop</div>
        <ul>
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
