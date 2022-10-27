import MenuItem from "./UI/MenuItem";

const TopNavbar = () => {
  return (
    <section className="h-8 bg-slate-300  ">
      <div className="container">
        <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0 justify-end">
          <MenuItem
            name="Contact & FAQ"
            design="p-2 text-black text-xs font-light font-poppins"
          />
          <MenuItem
            name="Return Policy"
            design="p-2 text-black text-xs font-light font-poppins"
          />{" "}
          <MenuItem
            name="Helpline: 01738880000"
            design="p-2 text-black text-xs font-medium font-poppins"
          />
          <MenuItem
            name="Login"
            design="p-2 text-black text-xs font-medium font-poppins"
          />
          <MenuItem
            name=" Register"
            design="p-2 text-black text-xs font-medium font-poppins"
          />
        </div>
      </div>
    </section>
  );
};

export default TopNavbar;
