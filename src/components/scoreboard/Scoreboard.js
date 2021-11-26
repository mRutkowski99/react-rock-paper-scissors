import StyledScoreboard from "./Scoreboard.styled";
import logo from "../../assests/logo-bonus.svg";
import ScoreBadge from "./ScoreBadge";

const Scoreboard = () => {
  return (
    <StyledScoreboard>
      <img src={logo} alt="Game logo" />
      <ScoreBadge />
    </StyledScoreboard>
  );
};

export default Scoreboard;
