function Imagem({ imagem, mostrar }) {
  if (!mostrar) return null;
  return <img src={imagem} />;
}
export default Imagem;