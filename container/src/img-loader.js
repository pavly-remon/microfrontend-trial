import DeveloperImg from "./assets/developer-img.jpg";

const getDeveloperImg = () => {
  const img = document.createElement("img");
  img.src = DeveloperImg;
  img.alt = "Developer Image";
  return img;
};

export default getDeveloperImg;
