import React from 'react'
import "../CSS/Components/Carousel.scss"


const slides = [
    {
        title: "Kaagaz",
        subtitle: "Zee 5",
        description: "A true success story of a dead man",
        image: "https://static.abplive.com/wp-content/uploads/sites/2/2021/01/07142145/kaagaz.jpg",
    },
    {
        title: "Khaali Peeli",
        subtitle: "zee 5",
        image: "https://assets.thehansindia.com/h-upload/2020/10/02/1002913-khaali-peeli-movie-review.webp",
    },
    {
        title: "Pad Man",
        subtitle: "zee 5",
        image: "https://m.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/11/27/Pictures/_919e3394-d34b-11e7-a032-ea4e291afd66.jpg",
    },
    {
        title: "KGF Chapter 1",
        subtitle: "Voot",
        description: "Rebuilding an empire",
        image:"https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/KGF-chapter2.jpg?itok=wpYqmIzZ   "
    }
];

function useTilt(active) {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (!ref.current || !active) {
            return;
        }

        const state = {
            rect: undefined,
            mouseX: undefined,
            mouseY: undefined
        };

        let el = ref.current;

        const handleMouseMove = (e) => {
            if (!el) {
                return;
            }
            if (!state.rect) {
                state.rect = el.getBoundingClientRect();
            }
            state.mouseX = e.clientX;
            state.mouseY = e.clientY;
            const px = (state.mouseX - state.rect.left) / state.rect.width;
            const py = (state.mouseY - state.rect.top) / state.rect.height;

            el.style.setProperty("--px", px);
            el.style.setProperty("--py", py);
        };

        el.addEventListener("mousemove", handleMouseMove);

        return () => {
            el.removeEventListener("mousemove", handleMouseMove);
        };
    }, [active]);

    return ref;
}

const initialState = {
    slideIndex: 0
};

const slidesReducer = (state, event) => {
    if (event.type === "NEXT") {
        return {
            ...state,
            slideIndex: (state.slideIndex + 1) % slides.length
        };
    }
    if (event.type === "PREV") {
        return {
            ...state,
            slideIndex:
                state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
        };
    }
};

function Slide({ slide, offset }) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);

    return (
        <div
            ref={ref}
            className="slide"
            data-active={active}
            style={{
                "--offset": offset,
                "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
            }}
        >
            <div
                className="slideBackground"
            />
            <div
                className="slideContent"
                style={{
                    backgroundImage: `url('${slide.image}')`
                }}
            >
                <div className="slideContentInner">
                    <h2 className="slideTitle">{slide.title}</h2>
                    <h3 className="slideSubtitle">{slide.subtitle}</h3>
                    <p className="slideDescription">{slide.description}</p>
                </div>
            </div>
        </div>
    );
}

function MyCarousel() {
    const [state, dispatch] = React.useReducer(slidesReducer, initialState);

    return (
        <div className="body" >
            <div className="slides">
                <button onClick={() => dispatch({ type: "NEXT" })}>‹</button>

                {[...slides, ...slides, ...slides].map((slide, i) => {
                    let offset = slides.length + (state.slideIndex - i);
                    return <Slide slide={slide} offset={offset} key={i} />;
                })}
                <button onClick={() => dispatch({ type: "PREV" })}>›</button>
            </div>
        </div>
    );
}

export default MyCarousel;

