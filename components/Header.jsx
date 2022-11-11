import Navbar from "./Navbar";
import TopNavbar from "./TopNavbar";
import { useRouter } from "next/router";


const Header = () => {
  const router = useRouter();
 // console.log(router.route);
  return (
    <header>
      <TopNavbar />
      <Navbar />
      <section>
        <div className="h-8 bg-slate-300">
          <h5 className="font-poppins text-sm font-light text-center py-2">
            Explore our shop. It's totally free!!!
          </h5>
        </div>
      </section>
    </header>
  );
};

export default Header;
