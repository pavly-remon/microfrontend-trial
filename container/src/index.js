import("./bootstrap");
import getDeveloperImg from "./img-loader";

const appContainer = document.getElementById("app");
appContainer.appendChild(document.createElement("hr"));
appContainer.appendChild(getDeveloperImg());
