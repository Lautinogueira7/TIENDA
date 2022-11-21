import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { gFetch } from "../../utils/gFetch"

const ItemDetailContainer = () => {
    // llamada a la api para un producto en particular
    // guardar en un estado el producto
    const [product, setProduct] = useState({})
    const {productId} = useParams()
    //console.log(productId)

    useEffect(()=>{
      gFetch(productId)
      .then(resp => setProduct(resp))
    },[])

    console.log(product)

  return (
    <div>
        <ItemDetail product={product}/>
    </div>
  )}

export default ItemDetailContainer
