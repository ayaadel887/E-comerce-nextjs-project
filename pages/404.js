import Image from "next/image";

const errorpage = () => {
  return (
    <div>
      <Image src="/error-404.png" width={70} height={50} />
      {/*
       لازم في الصوره / قبل اسمها ولازم عرض وطول
      <Image src="/error-404.png" width={15} height={12} /> */}
      this page is not found ...
    </div>
  );
};

export default errorpage;
