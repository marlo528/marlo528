import "./Luminaria.css"
function Luminaria({ scroll }) {
  return (
    <div className="luminaria" style={{
      transform: `translate(-50%, ${-scroll * 0.5}px)`
    }}>
      <div className="fio-curvado"></div>
      <div className="fio"></div>

      <div className="armacao-lampada">
        <div className="lampada"></div>
      </div>
      <div className="luz"></div>
    </div>
  );
}

export default Luminaria
