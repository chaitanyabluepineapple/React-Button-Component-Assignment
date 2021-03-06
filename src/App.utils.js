export const handleSelects = (e, button, setbutton) => {
  const VariantButton = e.target.name === 'variant' && { color: '' };
  const changeSelect = {
    ...button,
    ...VariantButton,
    [e.target.name]: e.target.value,
  };

  console.log("Handle Selects", changeSelect)

  setbutton(changeSelect);
};

export const handleCheckBoxes = (e, button, setbutton) => {
  const changeCheckBoxes = {
    ...button,
    [e.target.name]: e.target.checked,
  };

  console.log("Handle Checkboxes", changeCheckBoxes)

  setbutton(changeCheckBoxes);
};
