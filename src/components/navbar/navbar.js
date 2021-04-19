import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function handleClick(e) {
  if (e.target.textContent === "Dark Mode") {
    document.documentElement.style.setProperty(
      "--clrBackground",
      "hsl(207, 26%, 17%)"
    );
    document.documentElement.style.setProperty("--clrText", "hsl(0, 0%, 100%)");
    document.documentElement.style.setProperty(
      "--clrElements",
      "hsl(209, 23%, 22%)"
    );
    document.documentElement.style.setProperty("--clrInput", "hsl(0, 0%, 98%)");
    document.documentElement.style.setProperty(
      "--clrAccent",
      "hsl(0, 0%, 52%)"
    );
    e.target.textContent = "Light Mode";
  } else {
    document.documentElement.style.setProperty(
      "--clrBackground",
      "hsl(0, 0%, 98%)"
    );
    document.documentElement.style.setProperty(
      "--clrText",
      "hsl(200, 15%, 8%)"
    );
    document.documentElement.style.setProperty(
      "--clrElements",
      "hsl(0, 0%, 100%)"
    );
    document.documentElement.style.setProperty("--clrInput", "hsl(0, 0%, 52%)");
    document.documentElement.style.setProperty(
      "--clrAccent",
      "hsl(209, 23%, 22%)"
    );
    e.target.textContent = "Dark Mode";
  }
}

function Navbar() {
  return (
    <div className="nav__container">
      <h1 className="nav__title">Where in the world?</h1>
      <span className="nav__btn" onClick={handleClick}>
        <FontAwesomeIcon className="nav__icon" icon={faMoon} />
        <span className="toggle">Light Mode</span>
      </span>
    </div>
  );
}

export default Navbar;
