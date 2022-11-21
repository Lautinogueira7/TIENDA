const ItemDetail = ({ product }) => {
  return (
    <div className="row">
      <div className="col">
        <img src={product.foto} className="w-50" />
        <p>Categoría: {product.categoria}</p>
        <p>Nombre: {product.name}</p>
        <p>Stock: {product.stock}</p>
        <p>Precio: {product.price}</p>
      </div>
      <div className="col">
        
      </div>
    </div>
  )
}

export default ItemDetail