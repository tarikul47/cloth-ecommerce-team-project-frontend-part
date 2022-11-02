import Link from "next/link";
const MenuItem = ({ name, url = "", textSm = "" }) => {
  return (
    <Link href={url}>
      <a
        className={`${textSm} py-2 border-b-2 border-transparent text-white hover:text-white transition-colors duration-300 transform hover:border-white sm:mx-6`}
      >
        {name}
      </a>
    </Link>
  );
};

export default MenuItem;
