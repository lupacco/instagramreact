export default function Usuario(props) {
  return (
    <div className="usuario">
      <img alt="" src={props.img} />
      <div className="texto">
        <div className="nome">{props.nome}</div>
        <div className="razao">Segue você</div>
      </div>
    </div>
  );
}
