import { useEffect, useRef } from "react";

const STAR_SIZE = 30; // pixels (example)

export default function Star({ id, position, destroyStar }) {
  const starRef = useRef(null);

  // Focus star when mounted
  useEffect(() => {
    if (starRef.current) {
      starRef.current.focus();
    }
  }, []);

  return (
    <div
      ref={starRef}
      tabIndex="0"
      onClick={() => destroyStar(id)}
      style={{
        position: "absolute",
        width: `${STAR_SIZE}px`,
        height: `${STAR_SIZE}px`,
        left: `${position.x}px`,
        top: `${position.y}px`,
        borderRadius: "50%",
        backgroundColor: "yellow",
        boxShadow: "0 0 10px 2px rgba(255, 255, 0, 0.8)",
        cursor: "pointer",
      }}
    >
      ⭐
    </div>
  );
}
