import React from "react";

function Order({ items, setOrder }) {
  let arr = [];
  let total = 0;
  for (let item of items) {
    if (item.qty > 0) {
      arr.push(item);
      total = total + item.qty;
    }
  }

  return (
    <div className="order">
      <div>
        <div>
          {" "}
          <span
            style={{
              float: "right",
              cursor: "pointer",
              fontWeight: "bold",
              color: "dodgerblue",
            }}
            onClick={() => {
              setOrder(false);
            }}
          >
            X
          </span>{" "}
        </div>
        <h2> Thank you for shopping </h2>
        {arr.map((i) => (
          <div className={"itemContainer"}>
            <div className={"item"}>
              <img src={i.product} />
            </div>
            <div className={"buttons"}>
              Qty: <span> {i.qty} </span>
            </div>
          </div>
        ))}
        <h2> Total Items: {total} </h2>
      </div>
    </div>
  );
}

export default Order;
