import React, { useRef, useState, useEffect } from "react";
import "./FadeInTransition.scss";

export default function FadeInTransition(props) {
  const [isVisible, setVisible] = useState(true);

  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
