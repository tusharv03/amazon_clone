import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Orde({ order }) {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="order">
      <h2>Order</h2>\
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:ma")}</p>
      <p className="order_id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={order.data.amount / 100} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Orde;
