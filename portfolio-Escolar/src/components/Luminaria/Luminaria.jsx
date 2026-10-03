import "./Luminaria.css"
function Luminaria({ scroll }) {
  const intensidade = Math.min( 1 + scroll / 500, 2.5)


  return (
    <div className="luminaria" style={{
      transform: `translate(-50%, ${-scroll * 0.5}px)`
    }}>
      <div className="fio-curvado"></div>
      <div className="fio"></div>

      <div className="armacao-lampada">
        <div className="lampada"></div>
      </div>
      <div className="luz" style={{
        transform: `scale(${intensidade}, ${1 + scroll / 700})`
      }}></div>
    </div>
  );
}

export default Luminaria
