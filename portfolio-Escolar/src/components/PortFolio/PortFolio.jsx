import "./PortFolio.css";
function PortFolio({ scroll }) {
  return (
    <>
      <section className="PortFolio" style={{
        transform: `translateY(${-scroll * 0.08}px)`
      }}>
        <div className="Conteudo">
          <h2>Meu PortFólio</h2>

          <p>
            Aqui você encpntrara minhas atividades, projetos e aprendizados
            durante o ano.
          </p>
        </div>
      </section>
    </>
  );
}
export default PortFolio;
