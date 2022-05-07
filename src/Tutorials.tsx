import moment from "moment";
import { useState } from "react";
import { BsClock } from "react-icons/bs";
import {BiCopy} from 'react-icons/bi';
const CopyMono = (props: {text:string}) => {
   return <span className="font-mono text-greenish cursor-pointer hover:bg-greenish hover:text-white hover:rounded px-2 text-sm py-1 ease-in duration-100" onClick={() => {navigator.clipboard.writeText(props.text)}}>{props.text}<span className="text-xs"><BiCopy className="inline-block pb-1"/></span></span>
}

export const Tutorials = () => {
  const [blockchain, setBlockchain] = useState("");
  const [pool, setPool] = useState(undefined);
  const [amount, setAmount] = useState("");
  const [deadline, setDeadline] = useState("")
  const eth_pools = [
      {name: 'SXP-USDT', address:'0x1FddF803FAb50935dc5103e706143323Dc9b0635', pid: 0,
        tokenA: "0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9", 
        tokenB:"0xdac17f958d2ee523a2206206994597c13d831ec7"},
      {name: 'SXP-WETH', address:'0xAd31ff64f5DB3dEF8166DaEce0B3E41d0DCCe76c', pid: 1,
      tokenA: "0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9", 
      tokenB:"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"},
      {name: 'WBTC-SXP', address:'0xc295FB99814Aee1a29A425734FCD131e8a9B687E', pid:2,
      tokenA: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599", 
      tokenB:"0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9"},
      {name: 'USDC-WETH', address:'0x53B7420C59a4721cE621283f137E2eadFf26Fa3d',pid:3,
      tokenA: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", 
      tokenB:"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"},
      {name: 'DAI-WETH', address:'0x1bCd6B0E97B51D76FD1752111a1fe2b473F655eE', pid: 4,
      tokenA: "0x6b175474e89094c44da98b954eedeac495271d0f", 
      tokenB:"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"},
      {name: 'WETH-USDT', address:'0x6e7AE922140efed0c7DBc9066B50B9F933Fd755A', pid: 5,
      tokenA: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", 
      tokenB:"0xdac17f958d2ee523a2206206994597c13d831ec7"},
      {name: 'WBTC-WETH', address:'0x41e1633719d5c1DF86888F1E1a8d8d32202B6d27', pid:6,
      tokenA: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599", 
      tokenB:"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"},
      {name: 'USDC-USDT', address:'0x975A4FF7E35565F33Fb9666eE7f08041d0569AEe', pid:7,
      tokenA: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", 
      tokenB:"0xdac17f958d2ee523a2206206994597c13d831ec7"},
      {name: 'DAI-USDC', address:'0x0d0142F28c7C57b041BBF834fd260600a8Ce07bc',pid:8,
      tokenA: "0x6b175474e89094c44da98b954eedeac495271d0f", 
      tokenB:"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"},
    ]
    const bsc_pools = [
        {name: 'SXP-BUSD', address:'0xF570d6e751976D0d10aa64ACfa829A5ea4a51727',pid:0,
        tokenA: "0x47bead2563dcbf3bf2c9407fea4dc236faba485a", 
        tokenB:"0xe9e7cea3dedca5984780bafc599bd69add087d56"},
        {name: 'SXP-WBNB', address:'0xB450606703743D557a1c8384Fffe6b941F8f60F4', pid:1,
        tokenA: "0x47bead2563dcbf3bf2c9407fea4dc236faba485a", 
        tokenB:"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"},
        {name: 'SXP-BTCB', address:'0x70b31Abf9Be826eDc188A15fC35cc6037103a58F', pid:2,
        tokenA: "0x47bead2563dcbf3bf2c9407fea4dc236faba485a", 
        tokenB:"0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c"},
        {name: 'BUSD-T-BUSD', address:'0xA3B511a340017E858DC572355a594Db035525137', pid:3,
        tokenA: "0x55d398326f99059ff775485246999027b3197955", 
        tokenB:"0xe9e7cea3dedca5984780bafc599bd69add087d56"},
        {name: 'BTCB-WBNB', address:'0xa12128Bbb1C24Fb851d8BA6EC6836f00916712c2', pid:4,
        tokenA: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c", 
        tokenB:"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"},
        {name: 'WBNB-XVS', address:'0xDCA1D335D30C9F185D4D70A3FcAc6FeeF9Eb440c', pid:5,
        tokenA: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", 
        tokenB:"0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63"},
        {name: 'VAI-BUSD', address:'0xbE3e418441Cf4EC44147Af1A48Dee11Fa91Da87D', pid:6,
        tokenA: "0x4bd17003473389a42daf6a0a729f6fdb328bbbd7", 
        tokenB:"0xe9e7cea3dedca5984780bafc599bd69add087d56"},
        {name: 'WBNB-BUSD', address:'0xb4E861775E0e3Ee83862149e81245985AD82b861', pid:7,
        tokenA: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", 
        tokenB:"0xe9e7cea3dedca5984780bafc599bd69add087d56"},
        {name: 'VAI-WBNB', address:'0xC61FB584DAf69Bedf912768AEdc0658B11A1A75C', pid:8,
        tokenA: "0x4bd17003473389a42daf6a0a729f6fdb328bbbd7", 
        tokenB:"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"},
        {name: 'ETH-WBNB', address:'0xFD08e722343Ab852F627C3442d924b60CCC5449a', pid:9,
        tokenA: "0x2170ed0880ac9a755fd29b2688956bd959f933f8", 
        tokenB:"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"},
        {name: 'DOT-WBNB', address:'0x95B7693A9dfECA69E1B46031390d5A36bfCaAB9e', pid:10,
        tokenA: "0x7083609fce4d1d8dc0c979aab8c869ea2c873402", 
        tokenB:"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"},
        {name: 'ADA-WBNB', address:'0x98fB4FA5776f1300017dD11365c761dc142fE7BF', pid:11,
        tokenA: "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47", 
        tokenB:"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"},
        {name: 'TWT-WBNB', address:'0xAD68d41305FB22171716c98f81F801F39880cbDa', pid:12,
        tokenA: "0x4b0f1812e5df2a09796481ff14017e6005508003", 
        tokenB:"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"},
        {name: 'ACS-SXP', address:'0xef82bD8287dA9700b004657170746968CF5cA04a', pid:13,
        tokenA: "0x4197c6ef3879a08cd51e5560da5064b773aa1d29", 
        tokenB:"0x47bead2563dcbf3bf2c9407fea4dc236faba485a"},
    ];
    setInterval(() => setDeadline((Math.floor(new Date().getTime() / 1000)+300).toString()),1000)
  return (
    <div className="sm:max-w-5xl text-lg sm:mx-auto px-3 sm:py-16 text-white">
      <div className="text-4xl sm:text-6xl font-black py-6">
        #HowTo: unstake your SXP
      </div>
      <div className="flex my-3 ">
        <img
          src="/logo.jpg"
          className="h-12 rounded-full border border-gray-200 dark:border-dark-secondary cursor-pointer"
        />
        <div className="ml-3">
          <a
            href={`https://delegates.solar.org/delegates/leitesv`}
            className={`text-xl font-bold hover:underline hover:cursor-pointer`}
          >
            leitesv<span className="text-gray-400 text-base"></span>
          </a>
          <div>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 text-sm hover:underline hover:cursor-pointer"
              title={`${moment(1651936704841).format("DD/MM/YYYY hh:mm:ss")}`}
            >
              <BsClock className="inline-block text-base pb-1" /> Posted{" "}
              {moment(1651936704841).fromNow()}
            </a>
          </div>
        </div>
      </div>
      Hello! If you're reading this, you probably didn't unstake your SXP from
      Swipe Swap. No worries. You'll get your tokens back.
      <br />
      <br />
      <p className="italic">
        Just follow the following steps and everything will be fine.
      </p>
      <br />
      <p>First, in which blockchain did you stake your coins?</p>
      <div className="flex space-x-3 my-2">
        <div
          className={`rounded border border-dark-secondary p-3 bg-dark-tertiary cursor-pointer ${
            blockchain == "bsc" ? "bg-greenish" : "bg-dark-tertiary"
          }`}
          onClick={() => {setAmount("");setPool(undefined);setBlockchain("bsc")}}
        >
          BSC
        </div>
        <div
          className={`rounded border border-dark-secondary p-3 bg-dark-tertiary cursor-pointer ${
            blockchain == "eth" ? "bg-greenish" : "bg-dark-tertiary"
          }`}
          onClick={() => {setAmount("");setPool(undefined);setBlockchain("eth")}}
        >
          Ethereum
        </div>
      </div>
      <br />
      {blockchain && (
        <>
          <p className="text-4xl">Perfect!</p>
          <br />
          <p>Now, in which pool did you stake your coins?</p>
          <div className="flex flex-wrap gap-2 py-2">
          {(blockchain == 'bsc'? bsc_pools : eth_pools).map((iPool) => (
              <div>
                  <div
                    className={`rounded border border-dark-secondary p-1 text-sm bg-dark-tertiary cursor-pointer ${
                        pool? pool.name == iPool.name ? "bg-greenish" : "bg-dark-tertiary" : 'bg-dark-tertiary'
                    }`}
                    onClick={() => {setAmount("");setPool(iPool)}}
                    >
                    {iPool.name}
                    </div>                  
              </div>
          ))}
          </div>
          {
              pool &&

              <>
              <br />
              <span className="text-4xl">Great!</span>
              <br /> <br />
              <p>These are the steps to unstake your tokens from the {pool.name} pool!</p>
              <div className="flex py-8 space-x-3">
              <div className="rounded-full bg-dark-secondary h-fit px-5 py-2 text-2xl">1</div>  <div>              
              <div className="text-3xl mb-4">Check how much LP tokens do you have.</div>
              Go to <a href={blockchain == 'bsc'? 'https://bscscan.com/address/0xe6421c0cc2d647be51c11ae952927ab38dd6f753#readContract' : 'https://etherscan.io/address/0x252dd6a11ef272a438a36d1a2370eed820099547#readContract'} target="_blank" className="text-greenish hover:underline">this website</a> and check userInfo.
              <img src="https://i.imgur.com/w4A5m3B.png" className="w-96 my-4 border border-greenish rounded-lg" />
              <p>On the first field, put <CopyMono text={pool.pid}/>.</p>
              <p>On the second field, put your Metamask address.</p>
              <br />
              Then, paste the number here: <input type="text" placeholder="paste here" value={amount} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setAmount(e.currentTarget.value)} className="border border-dark-secondary text-center rounded-lg bg-dark-tertiary w-40" />
              <br />
              <p>That number is the amount of tokens you have (divided by 10e18).</p>
              <p>It's important that you paste it here because you will use it on the next steps</p>
              </div>
              </div>
              <div className="py-8 flex space-x-3">
              <div className="rounded-full bg-dark-secondary h-fit px-4 py-2 text-2xl">2</div> <div>
              <div className="text-3xl mb-4">Withdraw your LP tokens.</div>
              
              <p>Go to <a href={blockchain == 'bsc'? 'https://bscscan.com/address/0xe6421c0cc2d647be51c11ae952927ab38dd6f753#writeContract' : 'https://etherscan.io/address/0x252dd6a11ef272a438a36d1a2370eed820099547#writeContract'} target="_blank" className="text-greenish hover:underline">this website</a>. Connect your Metamask on the website, for which you need to click on this button:</p>
              <img src="https://i.imgur.com/TXFYTni.png" className="w-96 my-4 border border-greenish rounded-lg" />
              Make sure it's connected, and then on the same page go to the withdraw method:
              <img src="https://i.imgur.com/L3r7YBb.png" className="w-96 my-4 border border-greenish rounded-lg" />
              On the first input, put <CopyMono text={pool.pid}/>. On the second input, put <CopyMono text={amount}/>.
              <br /> <br />
              <p>Then, click on the 'Write' button, a Metamask window will appear and then you have to approve the transaction.</p>
              <p className="text-2xl my-3">We're getting there!</p>

              <p>Now you have your LP tokens and the SXP rewards from your staking.</p> <p>We need to split the liquidity tokens so you get both your {pool.name} tokens back.</p>
              </div>
              </div>
              <div className="py-8 flex space-x-3">
              <div className="rounded-full bg-dark-secondary h-fit px-4 py-2 text-2xl">3</div> <div>
              <div className="text-3xl mb-4">Approve selling your LP tokens.</div>
              <p>Go to  <a href={blockchain == 'bsc'? `https://bscscan.com/address/${pool.address}#writeContract` : `https://etherscan.io/address/${pool.address}#writeContract`} target="_blank" className="text-greenish hover:underline">this website</a>.</p>
<br />
              <p>Make sure your Metamask is connected to the website like in the step 2. If not, please connect it.</p>
            <br />
                <p>Then go to where it says 'approve':</p>
              <img src="https://i.imgur.com/vucLpXy.png" className="w-96 my-4 border border-greenish rounded-lg" />
              On the first input, put this address: <CopyMono text={blockchain == 'bsc'? '0x816278bbbcc529f8cdee8cc72c226fb01def6e6c' : '0xcb0cb2d22c529fdc9f6efff2ed21086104b21a79'} />
              <p>On the second input, put <CopyMono text={amount}/></p>
<br />
              <p>Then, click on the 'Write' button, a Metamask window will appear and then you have to approve the transaction.</p>
</div></div>
<div className="py-8 flex space-x-3">
              <div className="rounded-full bg-dark-secondary h-fit px-4 py-2 text-2xl">4</div> <div>
              <div className="text-3xl mb-4">Sell your LP tokens</div>
              Now you can go to <a href={blockchain == 'bsc'? `https://bscscan.com/address/0x816278bbbcc529f8cdee8cc72c226fb01def6e6c#writeContract` : `https://etherscan.io/address/0xcb0cb2d22c529fdc9f6efff2ed21086104b21a79#writeContract`} target="_blank" className="text-greenish hover:underline">this website</a>. You will find in that page this: 3. removeLiquidity

              <img src="https://i.imgur.com/i1WcBZ5.png" className="w-96 my-4 border border-greenish rounded-lg" />

              <p>So, now you will need to put these values on each field:</p>

                <div className="py-3">
                <p>tokenA: <CopyMono text={pool.tokenA}/></p>
                <p>tokenB: <CopyMono text={pool.tokenB}/></p>
                <p>liquidity: <CopyMono text={amount}/></p>
                <p>amountAMin: <CopyMono text={"0"}/></p>
                <p>amountBMin: <CopyMono text={"0"}/></p>
                <p>to: (your Metamask address)</p>
                <p>deadline: <CopyMono text={deadline}/></p>
                </div>
              
              <p>Then, click on the 'Write' button, a Metamask window will appear and then you have to approve the transaction.</p>
               <div className="py-3">
               <span className="text-3xl">Congratulations!</span>
              <p className="my-4"> You have your tokens back! If you have any question, please contact any <a href="https://t.me/Solar" className="text-greenish hover:underline">Solar support or moderator</a>  and they will help you!</p>
               </div>
               </div></div>
              </>
          }
        </>
      )}
    </div>
  );
};
