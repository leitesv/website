import React, { useEffect, useState } from "react";

import { FaGithub, FaTwitter } from "react-icons/fa";
import { BsTelegram, BsInfoCircle } from "react-icons/bs";
import ReactTooltip from "react-tooltip";
function App() {
  const [rank, setRank] = useState(0);
  const [votes, setVotes] = useState(0);
  const [amount, setAmount] = useState(100);

  useEffect(() => {
    function init() {
      fetch("https://sxp.mainnet.sh/api/delegates/leitesv")
      .then((d) => {
        return d.json();
      })
      .then((d) => {
        setVotes(d.data.votes);
        setRank(d.data.rank);
      });
    }

    init();
    setInterval(init,30000);
  }, []);

  return (
    <div className="pt-5">
      <header className="App-header">
        <img
          src="logo.jpg"
          className="rounded-full h-60 border-4 border-greenish"
          alt="logo"
        />
        <p className="my-5 text-5xl">
          <span className="hidden sm:inline-block">Hello</span>
          <span className="inline-block sm:hidden">Hi! </span>
          <span className="hidden sm:inline-block">,</span> I'm leitesv.
        </p>

        <div className="w-full sm:w-fit mx-auto">
          <p className="text-center">
            {" "}
            I'm rank #{rank} in Solar. <br className="sm:hidden" /> You can read
            my proposal{" "}
            <a href="https://delegates.solar.org/sxp/delegates/leitesv" className="text-greenish hover:underline">
              here
            </a>
            .
          </p>
          <div className="text-gray-300 text-lg my-3 text-center bg-dark-tertiary p-4 rounded">
            <a data-tip="Be aware that this changes all the time based on rank and votes." ><BsInfoCircle className="inline-block m-2" /></a>
            <ReactTooltip/>
  If you vote for me
            with <br className="sm:hidden" />
            <input
              type="text"
              value={amount}
              className="rounded bg-transparent border border-gray-700 outline-0 focus-within:bg-dark-secondary focus-within:border-greenish w-28 text-center mx-2"
              onChange={(e) => {
                if (parseFloat(e.currentTarget.value)) {
                  setAmount(parseFloat(e.currentTarget.value));
                }
              }}
            />{" "}
            SXP <br className="sm:hidden" /> you'll get{" "}
            {(
              ((((rank + 53) / 53) * ((10 / 80) * 53) * 211) /
                (votes / 100000000 + amount)) *
              amount
            ).toFixed(2)}{" "}
            per 211 blocks (around a day).
          </div>
          <div className="pt-4  w-full grid grid-cols-1 sm:grid-cols-4">
            <a
              href="https://github.com/leitesv"
              className="p-2 m-2 border-dark-tertiary hover:border-greenish hover:bg-dark-tertiary ease-in border-2 rounded text-lg flex"
            >
              {" "}
              <FaGithub className="m-1 mx-2" /> GitHub
            </a>
            <a
              href="https://delegates.solar.org/sxp/delegates/leitesv"
              className="p-2 m-2 border-dark-tertiary hover:border-greenish hover:bg-dark-tertiary ease-in border-2 rounded text-lg flex"
            >
              {" "}
              <img
                src="solar.png"
                alt="solar"
                className="w-7 h-7 ml-1 mr-2"
              />{" "}
              Solar Delegates
            </a>
            <a
              href="https://t.me/rbeobachter"
              className="p-2 m-2 border-dark-tertiary hover:border-greenish hover:bg-dark-tertiary ease-in border-2 rounded text-lg flex"
            >
              {" "}
              <BsTelegram className="m-1  mx-2" /> Telegram
            </a>
            <a
              href="https://twitter.com/leitesv_dev"
              className="p-2 m-2 border-dark-tertiary hover:border-greenish hover:bg-dark-tertiary ease-in border-2 rounded text-lg flex"
            >
              {" "}
              <FaTwitter className="m-1  mx-2" /> Twitter
            </a>
          </div>
        </div>
        <hr />
        <div className="my-16">2022 - leitesv</div>
      </header>
    </div>
  );
}

export default App;
