import "../css/Carousel.css";

export const Carousel = () => {
  return (
    <div className="container">
      <div className="slider-wrapper">
        <button
          id="prev-slide"
          className="slide-button material-symbols-rounded"
        >
          chevron_left
        </button>
        <ul className="image-list">
          <img className="image-item" src="img/thominpc.png" alt="img-1" />
          <img className="image-item" src="img/thominpc.png" alt="img-2" />
          <img className="image-item" src="img/thominpc.png" alt="img-3" />
          <img className="image-item" src="img/thominpc.png" alt="img-4" />
          <img className="image-item" src="img/thominpc.png" alt="img-5" />
          <img className="image-item" src="img/thominpc.png" alt="img-6" />
          <img className="image-item" src="img/thominpc.png" alt="img-7" />
          <img className="image-item" src="img/thominpc.png" alt="img-8" />
          <img className="image-item" src="img/thominpc.png" alt="img-9" />
          <img className="image-item" src="img/thominpc.png" alt="img-10" />
        </ul>
        <button
          id="next-slide"
          className="slide-button material-symbols-rounded"
        >
          chevron_right
        </button>
      </div>
      <div className="slider-scrollbar">
        <div className="scrollbar-track">
          <div className="scrollbar-thumb"></div>
        </div>
      </div>
    </div>
  );
};
