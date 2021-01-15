import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { incrementCounter, decrementCounter, reduxClick } from "../store/counter/action";
import { setUsername, incrementRedux, unlockStone } from "../store/misc/action";
import Link from "next/link";

function counter() {
  //const counterState = useSelector((state) => state.counter.counter);
  const reduxClicks = useSelector((state) => state.misc.reduxClicks);
  const dispatch = useDispatch();

  return (
    <>
      <h1>GLOBAL COUNTER {reduxClicks}</h1>
      {/* <button onClick={() => dispatch(incrementCounter(counterState))}>
        Increment +
      </button>
      {"  "}
      <button onClick={() => dispatch(decrementCounter(counterState))}>
        Decrement -
      </button> */}
      <button onClick={() => dispatch(incrementRedux(reduxClicks))}>
        Redux Click
      </button>
      <br />
      <br />
      <p>
        Try to reload this page or open a new tab
        <br />
        or view this page another time.
        <br />
        You will see the same value everytime.
        <br />
        Because the global state is persistent
        <br />
        and saved in the localstorage.
      </p>

      <Link href="/counter">
        <a>Reload Page</a>
      </Link>
      <br />
    </>
  );
}

export default counter;