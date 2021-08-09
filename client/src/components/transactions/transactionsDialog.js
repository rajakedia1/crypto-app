import React from "react";
import { rupees } from "../../utils/constants";
import Button from "../common/button/button";
import { DialogState } from "../common/dialog/dialog";
import styles from "./transactionsDialog.scss";

export default function TransactionsDialog({ value }) {
  function closeDialog() {
    DialogState.close();
  }

  return (
    <div className={styles["dialog"]}>
      <div className={styles["header"]}>
        <div className={styles["title"]}>Transactions List</div>
        <Button
          className={styles["button"]}
          value={<div className={styles["close"]}></div>}
          onClick={closeDialog}
        />
      </div>
      <div className={styles["body"]}>
        {value.length > 0
          ? value.map((v) => (
              <div className={styles["transaction"]}>
                <div className={styles["row"]}>
                  <div className={styles["title"]}>
                    {v.type === "BUY" ? (
                      <div className={styles["buy"]}>Buy</div>
                    ) : (
                      <div className={styles["sell"]}>Sell</div>
                    )}
                    {v.coin}
                  </div>

                  <div className={styles["avg"]}>
                    <span>Avg Price: </span>
                    {rupees} {v.price}
                  </div>
                </div>
                <div className={styles["row"]}>
                  <div className={styles["avg"]}>
                    <span>Quantity: </span>
                    {rupees} {v.quantity}
                  </div>
                  <div className={styles["avg"]}>
                    <span>Total Price: </span>
                    {rupees}{" "}
                    {(parseFloat(v.quantity, 10) * parseFloat(v.price, 10)).toFixed(2)}
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
