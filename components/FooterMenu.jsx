const FooterMenu = ({ title, menus = [] }) => {
  return (
    <div>
      <h3 className="uppercase text-white">{title}</h3>
      {menus.map((item) => {
        <MenuItem
          name={item.title}
          design="block mt-2 text-sm text-gray-400 hover:underline"
        />;
      })}
    </div>
  );
};

export default FooterMenu;
