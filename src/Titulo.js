function Titulo({ titulo, index, total }) {
  return (
    <div className="titulo">
      <div>{titulo}</div>
      <div>({index} of {total})</div>
    </div>
  );
}
export default Titulo;