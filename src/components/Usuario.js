export default function Usuario(props) {
  return (
    <div class="usuario">
      <img src={props.img} />
      <div class="texto">
        <div class="nome">{props.nome}</div>
        <div class="razao">Segue você</div>
      </div>
    </div>
  );
}
