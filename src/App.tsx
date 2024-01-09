import { useEffect, useState } from "react";
import "./assets/css/animate.css";
import "./App.scss";
import Articles from "./components/Articles";
import News from "./components/News";
import { useSpring, animated } from "react-spring";

function App() {
  const [scrollOpacity, setScrollOpacity] = useState(0);

  const newsProps = useSpring({
    opacity: scrollOpacity,
    config: { duration: 500 },
  });

  const articlesProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 500;
      const opacity = Math.min(1, scrollPosition / maxScroll);
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <animated.div style={articlesProps}>
        <Articles />
      </animated.div>
      <animated.div style={newsProps}>
        <News />
      </animated.div>
    </div>
  );
}

export default App;
