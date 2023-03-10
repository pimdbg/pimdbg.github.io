import '../hexagon.css';
import Observer from './Observer';

function Hexagon(props) {
    const { icon , className } = props;

    return (
        <Observer>
            <div className={"hexagon " + className}>
                {/* functions as border */}
                <div className="hexagon__top" />
                <div className="hexagon__middle" />
                <div className="hexagon__bottom" />

                {/* Inner content */}
                <div className="hexagon hexagon-inner">
                    <div className="hexagon__top hexagon-inner__top" />
                    <div className="hexagon__middle hexagon-inner__middle">
                        <div className="hexagon__content">
                            {icon}
                        </div>
                    </div>
                    <div className="hexagon__bottom hexagon-inner__bottom" />
                </div>
            </div>
        </Observer>
    );
}

export default Hexagon;