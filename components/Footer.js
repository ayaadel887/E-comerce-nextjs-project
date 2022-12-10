import style from "./../styles/footer.module.css";
//  لازم الاسم يكون موديول وليس موديولس عشان النكست بتزعل
// وبتشوفه جلوبال فايل عايزين نحطه
// في فايل عادي مش في الاب
const Footer = () => {
  return (
    <>
      <footer>
        <div className={style.footer}>copy Rights@2022</div>
      </footer>
    </>
  );
};

export default Footer;
