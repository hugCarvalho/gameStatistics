import PropTypes from "prop-types";
import React from "react";
import { useWindowScroll } from "react-use";

function ScrollToTop({
  pixels = 300,
  options,
  background = "white",
  color = "#1f1f1f",
  bRadius = "50%",
  customStyle, //consider transition effects
  opacity = 0, //onShow value
  customOnShowStyle, //consider transition effects
}) {
  const { y: scrollY } = useWindowScroll();
  const [showScrollArrow, setShowScrollArrow] = React.useState(false);

  React.useEffect(() => {
    if (scrollY > pixels) {
      setShowScrollArrow(true);
    } else setShowScrollArrow(false);
  }, [scrollY, pixels]);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "auto", ...options });

  const allStyles = {
    background: background,
    color: color,
    borderRadius: bRadius,
    position: "fixed",
    bottom: "16px",
    right: "20px",
    width: "30px",
    height: "30px",
    border: "none",
    fontSize: "20px",
    pointerEvents: "none",
    transition: "all 0.7s",
    opacity: 0, //always invisible by default

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const onShowStyles = {
    pointerEvents: "auto",
    cursor: "pointer",
    opacity: opacity,
  };

  const setStyle = () => {
    const styles = {
      ...allStyles,
      ...customStyle,
    };
    if (showScrollArrow) {
      return {
        ...styles,
        ...onShowStyles,
        ...customOnShowStyle,
      };
    } else return styles;
  };

  return (
    <div className="ScrollToTop">
      <button style={setStyle()} onClick={scrollToTop}>
        <i className="fas fa-angle-up"></i>
      </button>
    </div>
  );
}

ScrollToTop.propTypes = {
  pixels: PropTypes.number,
  options: PropTypes.object,
  background: PropTypes.string,
  color: PropTypes.string,
  bRadius: PropTypes.string,
  customStyle: PropTypes.object,
  opacity: PropTypes.number,
  customOnShowStyle: PropTypes.object,
};

export default ScrollToTop;
