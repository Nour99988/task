export const toggleShow = (item) => {
  const element = item.current.style.overflow;
  if (element === "visible") {
    item.current.style.overflow = "hidden";
  } else {
    item.current.style.overflow = "visible";
  }
};
