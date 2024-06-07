import '../css/Carousel.css'

export const Carousel = () => {
    return (

        <div class="container">
            <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                    chevron_left
                </button>
                <ul class="image-list">
                    <img class="image-item" src="img/thominpc.png" alt="img-1" />
                    <img class="image-item" src="img/thominpc.png" alt="img-2" />
                    <img class="image-item" src="img/thominpc.png" alt="img-3" />
                    <img class="image-item" src="img/thominpc.png" alt="img-4" />
                    <img class="image-item" src="img/thominpc.png" alt="img-5" />
                    <img class="image-item" src="img/thominpc.png" alt="img-6" />
                    <img class="image-item" src="img/thominpc.png" alt="img-7" />
                    <img class="image-item" src="img/thominpc.png" alt="img-8" />
                    <img class="image-item" src="img/thominpc.png" alt="img-9" />
                    <img class="image-item" src="img/thominpc.png" alt="img-10" />
                </ul>
                <button id="next-slide" class="slide-button material-symbols-rounded">
                    chevron_right
                </button>
            </div>
            <div class="slider-scrollbar">
                <div class="scrollbar-track">
                    <div class="scrollbar-thumb"></div>
                </div>
            </div>
        </div>
    )
}
