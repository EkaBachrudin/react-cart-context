import { Stack, Button } from "react-bootstrap"
import { useShoppingCart } from "../context/ShopingCartContex"
import storeItems from "../data/item.json"
import { formatCurrency } from "../utilities/FormatCurrency"

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({id, quantity}: CartItemProps) {
    const {removeFromCart} = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if(item == null) return null

    return (
         <Stack direction="horizontal" gap={2} className="d-flex aligin-items-center">
            <img src={item.imgUrl} style={{width: "125px", height: "75px", objectFit: "cover"}} />
            <div className="me-auto">
                <div>
                    {item.name}
                    { quantity > 1 &&  <span className="text-muted" style={{fontSize: ".64rem"}}> x {quantity} </span> }
                </div>
                <div className="text-muted" style={{fontSize: ".75rem"}}>
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div>{formatCurrency(item.price * quantity)}</div>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
         </Stack>
    )
}