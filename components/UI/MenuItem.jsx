const MenuItem = ({ name, design, url = "" }) => {
  return (
    <a href={url} className={design}>
      {name}
    </a>
  );
};

export default MenuItem;
