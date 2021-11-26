import iconLizard from "../../assests/icon-lizard.svg";
import iconPaper from "../../assests/icon-paper.svg";
import iconRock from "../../assests/icon-rock.svg";
import iconScissors from "../../assests/icon-scissors.svg";
import iconSpock from "../../assests/icon-spock.svg";

const optionsAttributes = {
  lizard: {
    icon: iconLizard,
    gradient: "linear-gradient(180deg, hsl(261, 72%, 63%), hsl(261, 73%, 60%))",
    dropshadow: "hsl(261, 73%, 50%)",
    left: "18%",
    top: "100%",
  },
  paper: {
    icon: iconPaper,
    gradient: "linear-gradient(180deg, hsl(230, 89%, 65%), hsl(230, 89%, 62%))",
    dropshadow: "hsl(230, 89%, 52%)",
    left: "100%",
    top: "38%",
  },
  rock: {
    icon: iconRock,
    gradient: "linear-gradient(180deg, hsl(349, 70%, 56%), hsl(349, 71%, 52%))",
    dropshadow: "hsl(349, 71%, 42%)",
    left: "82%",
    top: "100%",
  },
  scissors: {
    icon: iconScissors,
    gradient: "linear-gradient(180deg, hsl(40, 84%, 53%), hsl(39, 89%, 49%))",
    dropshadow: "hsl(39, 89%, 39%)",
    left: "50%",
    top: "0%",
  },
  spock: {
    icon: iconSpock,
    gradient: "linear-gradient(180deg, hsl(189, 58%, 57%), hsl(189, 59%, 53%))",
    dropshadow: "hsl(189, 59%, 43%)",
    left: "0%",
    top: "38%",
  },
};

export default optionsAttributes;
