import style from "../css/style.css";

function toggleVisibility(dropDownContentClass) {
  const dropDownContent = document.querySelector(dropDownContentClass);

  if (!dropDownContent.classList.contains("visible")) {
    dropDownContent.classList.add("visible");
  } else {
    dropDownContent.classList.remove("visible");
  }
}

function dropDown(burgerClass, dropDownContentClass) {
  const burger = document.querySelector(burgerClass);

  burger.addEventListener("click", () => {
    toggleVisibility(dropDownContentClass);
  });
}

dropDown(".burger", ".drop-down-content");
