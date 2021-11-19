import React, { useRef, useEffect } from "react";
import { Carousel as NativeCarousel } from "/static/lib/ui@4.0/carousel.esm.js";

import "/static/lib/ui@4.0/carousel.css";

function ReactCarousel(props) {
  const wrapper = useRef(null);

  useEffect(() => {
    const items = props.items || [];
    const opts = props.options || {};

    opts.slides = [...items].map((val) => {
      return { html: val };
    });

    const instance = new NativeCarousel(wrapper.current, opts);

    return () => {
      instance.destroy();
    };
  }, []);

  return <div className={`carousel ${props.class || ""}`} ref={wrapper}></div>;
}

export default ReactCarousel;

<Carousel items={["1", "2", "3", "4", "5"]} options={{ infinite: false }} />
