import MenuItem from "./MenuItem";
type Names={
  name1:string,
  name2:string,
  name3:string,
  name4:string,
  name5:string,
}
function MenuItems({ name1, name2, name3, name4, name5 }:Names) {
  return (
    <>
      <MenuItem name={name1} />
      <MenuItem name={name2} />
      <MenuItem name={name3} />
      <MenuItem name={name4} />
      <MenuItem name={name5} />
    </>
  );
}
export default MenuItems;
