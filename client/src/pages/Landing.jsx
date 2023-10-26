import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo></Logo>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Est mollit ea ea dolore anim. Fugiat ut tempor dolore aute aliqua
            eiusmod sunt. Enim officia aliquip anim commodo.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn register-link">
            Login
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-image"></img>
      </div>
    </Wrapper>
  );
};

export default Landing;
