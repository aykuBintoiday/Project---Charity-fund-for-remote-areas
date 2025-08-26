import { useEffect, useMemo, useRef, useState } from "react";
import '../Styles/Home.scss';

function useCarousel(items, visible = 3, intervalMs = 5000) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(timerRef.current);
  }, [items.length, intervalMs]);

  // Xoay vòng mảng để luôn render đúng thứ tự hiển thị
  const windowItems = useMemo(() => {
    const out = [];
    for (let k = 0; k < items.length; k++) {
      out.push(items[(index + k) % items.length]);
    }
    return out;
  }, [items, index]);

  return { windowItems };
}

export default function Home_Carousel_Img({ images, style }) {
  const { windowItems } = useCarousel(images, 3, 5000);

  return (
    <div className="carousel" style={style}>
      <div className="carousel-track">
        {windowItems.slice(0, 3).map((src, i) => {
          let cls = "carousel-slide ";
          if (i === 1) cls += "is-center";
          else if (i === 0) cls += "is-side is-left";
          else if (i === 2) cls += "is-side is-right";
          return (
            <div className={cls} key={src}>
              <img src={src} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}