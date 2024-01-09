import "./App.scss";
import Articles from "./components/Articles";
import News from "./components/News";
import { useSpring, animated } from "react-spring";

function App() {
  const fadeAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 300 },
  });

  return (
    <div>
      <animated.div style={fadeAnimation}>
        <Articles />
        <News />
      </animated.div>
    </div>
  );
}

export default App;
