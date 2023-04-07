import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    });
    // return () => {
    //   window.removeEventListener("mousemove", handleMousePositionChange);
    // };
  }, []);

  return render({ mousePosition });
};

export default MousePosition;
