import { useEffect, useState } from "react";
import "./App.scss";
import Articles from "./components/Articles";
import News from "./components/News";
import { useSpring, animated } from "react-spring";

function App() {
  const [scrollOpacity, setScrollOpacity] = useState(0);

  const newsComponent = useSpring({
    opacity: scrollOpacity,
    config: { duration: 400 },
  });

  const articlesComponent = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 300 },
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 700;
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
      <animated.div style={articlesComponent}>
        <Articles />
      </animated.div>
      <animated.div style={newsComponent}>
        <News />
      </animated.div>
    </div>
  );
}

export default App;
