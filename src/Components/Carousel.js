import React from 'react'
import thejudge from '../Images/Cover/tj.jpg'
import sg2 from '../Images/Cover/sg2.jpg';
import ww from '../Images/Cover/ww84.jpg'
import u from '../Images/Cover/6u.jpg'
import "../CSS/Components/Carousel.scss"

const images = [
    {
        image: ww,
        link: "/display/wonderwoman1984"
    },
    {
        image: sg2,
        link: "/display/sacredgames"
    },
    {
        image: thejudge,
        link: "/display/thejudge"
    },
    {
        image: u,
        link: "/display/6underground"
    },
]

const slides = [
    {
        title: "Wonder Woman 1984",
        subtitle: "Prime Video",
        description: "Adventure is never far away",
        image: ww,
    },
    {
        title: "Chamonix",
        subtitle: "France",
        description: "Let your dreams come true",
        image: sg2,
    },
    {
        title: "The Judge",
        subtitle: "Netflix",
        description: "A piece of heaven",
        image: thejudge,
    },
    {
        title: "Four",
        subtitle: "Australia",
        description: "A piece of heaven",
        image:
            "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
        title: "Five",
        subtitle: "Australia",
        description: "A piece of heaven",
        image:
            "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
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

