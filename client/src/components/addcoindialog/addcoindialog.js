import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { firebaseDatabase } from "../../utils/firebaseutils";
import Button from "../common/button/button";
import { DialogState } from "../common/dialog/dialog";
import Input from "../common/input/input";
import Radio from "../common/radio/radio";
import styles from "./addcoindialog.scss";

// @Todo: Get All coin list
export default function AddCoinDialog() {
  const datastore = useSelector((state) => state.datastore);

  const coinList = Object.keys(
    Object.keys(datastore).reduce(
      (acc, cur) => ({ ...acc, [datastore[cur].coin]: true }),
      {}
    )
  )
    .map((key) => key)
    .concat("Add New");
//   console.log("D datastore: ", datastore, coinList);

  const [coin, setCoin] = useState(coinList[0]);
  const [newCoin, setNewCoin] = useState("");
  const [addCoin, setAddCoin] = useState(
    coinList[0] === "Add New" ? true : false
  );
  const [isBuy, setIsBuy] = useState(true);
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [isLoading, setIsLoading] = useState("");

  function closeDialog() {
    DialogState.close();
  }

  function toggleBuy() {
    setIsBuy(() => !isBuy);
  }

  function submitHandler() {
    // @TODO: Add validation
    const coinData = {
      coin: coin !== "Add New" ? coin : newCoin,
      price,
      quantity,
      type: isBuy ? "BUY" : "SELL",
    };
    setIsLoading(true);
    firebaseDatabase.push(coinData, (err) => {
      if (err) {
        console.log("Err: ", err);
      }
      setIsLoading(false);
      closeDialog();
    });
  }

  function changeCoin(evt) {
    const selectedValue = evt.target.value;
    if (selectedValue !== "Add New") {
      setCoin(selectedValue);
      setAddCoin(false);
    } else {
      setCoin(selectedValue);
      // @Todo: Handle this case
      setAddCoin(true);
    }
  }

  return (
    <div className={styles["dialog"]}>
      <div className={styles["header"]}>
        <div className={styles["title"]}>Add Crypto</div>
        <Button
          className={styles["button"]}
          value={<div className={styles["close"]}></div>}
          onClick={closeDialog}
        />
      </div>
      <div className={styles["body"]}>
        <div className={styles["row"]}>
          <div className={styles["col"]}>
            <div className={styles["title"]}>Select Coin</div>
            <div className={styles["selector"]}>
              <select className={styles["select"]} onChange={changeCoin}>
                {coinList.map((coinValue) => (
                  <option value={coinValue}>{coinValue}</option>
                ))}
                {/* <option value={"Add New"}>Add New</option>
                <option value={"Matic"}>Matic</option>
                <option value={"Doge"}>Doge</option> */}
              </select>
            </div>
          </div>
          {addCoin ? (
            <div className={styles["col"]}>
              <Input
                value={newCoin}
                onTextChange={setNewCoin}
                placeholder={"Add Coin"}
                className={styles["input-coin"]}
              />
            </div>
          ) : null}
        </div>

        <div className={styles["row"]}>
          <div className={styles["radio-box"]}>
            <Radio value={"Buy"} checked={isBuy} onClick={toggleBuy} />
            <Radio value={"Sell"} checked={!isBuy} onClick={toggleBuy} />
          </div>
        </div>

        <div className={styles["row"]}>
          <Input
            value={quantity}
            onTextChange={setQuantity}
            placeholder={"Quantity"}
            className={styles["input"]}
            type={"number"}
          />
          <Input
            value={price}
            onTextChange={setPrice}
            placeholder={"Price"}
            className={styles["input"]}
            type={"number"}
          />
        </div>

        <div className={styles["row"]}>
          <Button
            value={
              isLoading ? <div className={styles["loading"]}></div> : "Submit"
            }
            onClick={submitHandler}
            className={styles["submit-button"]}
          />
        </div>
      </div>
    </div>
  );
}
