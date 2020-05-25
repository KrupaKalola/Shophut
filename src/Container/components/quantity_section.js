import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'


function Quantity_section(props) {


    const handleChange = (e, id) => {
        const p = e.target.parentNode.parentNode.getAttribute("id")
        console.log(p)

        debugger
        if (p === 'minus') {
            let value = e.target.parentNode.parentNode.nextSibling.value
            const minus = parseInt(value) - 1

            if(minus>0)
            {
                e.target.parentNode.parentNode.nextSibling.value = minus
            }
            else{
                minus=0
                e.target.parentNode.parentNode.nextSibling.value = minus
            } 
            const obj = {
                quantity: minus,
                cart: props.cart,
                id: id
            }
            props.updateQuantity(obj)
        }
        if(p==='plus') {
            let value = e.target.parentNode.parentNode.previousSibling.value
            const sum = parseInt(value) + 1

            e.target.parentNode.parentNode.previousSibling.value = sum
            const obj = {
                quantity: sum,
                cart: props.cart,
                id: id
            }
            props.updateQuantity(obj)
        }
    }

    const handleQuanitityChange = (e, id) => {
        debugger
        const obj = {
            quantity: e.target.value,
            cart: props.cart,
            id: id
        }
        console.log(obj)
        props.updateQuantity(obj)
    }


    return (
        <div className='quantity-square'>
            <span id='minus' onClick={(e) => handleChange(e, props.id)}><FontAwesomeIcon icon={faMinus} ></FontAwesomeIcon></span>
            <input type='type' value={props.quantity} style={{ width: '50px' }}  readOnly />
            <span id='plus' onClick={(e) => handleChange(e, props.id)}><FontAwesomeIcon icon={faPlus} ></FontAwesomeIcon></span>
        </div>
    )
}

export default Quantity_section
