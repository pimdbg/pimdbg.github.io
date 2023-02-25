import { useEffect, createRef, useState } from "react";

function Observer(props) {
    let { className = "", style = {} } = props;

    const [isIntersecting, setIsIntersecting] = useState(false);
    const containerRef = createRef();

    // Create observer
    useEffect(() => {
        if(! containerRef) {
            return;
        }

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.8
        };

        const callback = (entries, observer) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    setIsIntersecting(entry.isIntersecting);
                }
            });
          };
        
        const observer = new IntersectionObserver(callback, options);
        observer.observe(containerRef.current);
    }, [containerRef]);

    return (
        <div className={"observer " + ((isIntersecting) ? "observer--active " : "") + className} style={style} ref={containerRef}>
            {props.children}
        </div>
    );
}

export default Observer;