import React, { useEffect, useRef, useState } from "react";

export default function Animate({ type = "pop-y", children }) {
  const ref = useRef(null);
  const [typingStyle, setTypingStyle] = useState({});

  useEffect(() => {
    if (type === "typing") {
      const textLength = children?.toString().length || 10;
      setTypingStyle({
        "--steps": textLength,
        "--duration": `${(textLength * 0.1).toFixed(2)}s`,
      });
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("show");
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [type, children]);

  if (type === "typing") {
    return (
      <span className="typing" style={typingStyle}>
        {children}
      </span>
    );
  }

  return (
    <div ref={ref} className={type}>
      {children}
    </div>
  );
}
