import gStableContract from "../contracts/gStableContract ";
import SwapUSDDFactory from "./swapUSDDFactory";
import VaultUSDDFactory from "./vaultUSDDFactory";
import MarketFactory from "./marketFactory";


import ttddImg from "../img/ttdd.png";
import xcddImg from "../img/gxcd.png";
import bbddImg from "../img/gbbd.png";
import jmddImg from "../img/gjmd.png";
import awgdImg from "../img/gawg.png";
import dopImg from "../img/gDOP.png";
import bsdImg from "../img/gbsd.png";
import kydImg from "../img/gKYD.png";
import cupImg from "../img/gcup.png";
import htgImg from "../img/gHTG.png";
import eurImg from "../img/gEUR.png";
import gbpImg from "../img/gGBP.png";
import cnhImg from "../img/gcnh.png";
import hkdImg from "../img/ghkd.png";
import sgdImg from "../img/gsgd.png";
import cadImg from "../img/gcad.png";
import audImg from "../img/gaud.png";
import aedImg from "../img/gaed.png";
import ghsImg from "../img/gghs.png";
import copImg from "../img/gcop.png";
import zarImg from "../img/gzar.png";
import ngnImg from "../img/gngn.png";
import kesImg from "../img/gkes.png";
import inrImg from "../img/ginr.png";
import rubImg from "../img/grub.png";
import uahImg from "../img/guah.png";
import gelImg from "../img/ggel.png";

import thbImg from "../img/gthb.png";
import idrImg from "../img/gidr.png";
import jpyImg from "../img/gjpy.png";
import chfImg from "../img/gchf.png";
import krwImg from "../img/gkrw.png";
import tryImg from "../img/gtry.png";
import ilsImg from "../img/gils.png";
import brlImg from "../img/gbrl.png";

class Currency {
  id = 0;
  key = null;
  label = null;
  text = null;
  icon = null;
  gStableAddress = null;
  gStableContract_ = null;
  constructor(
    _id,
    _key,
    _label,
    _text,
    _icon,
    _gStableAddress,
  ) {
    this.id = _id;
    this.key = _key;
    this.label = _label;
    this.text = _text;
    this.icon = _icon;
    this.gStableAddress = _gStableAddress;
  }
  swapContract = async () => {
    return SwapUSDDFactory.getSwapUSDD();
  };
  vaultContract = async () => {
    return VaultUSDDFactory.getVaultUSDD();
  };
  marketContract = async () => {
    return MarketFactory.getMarket()
  };
  gStableContract = async () => {
    if (!this.gStableContract_) {
      console.log("initializing gStableContract");
      const contract_ = new gStableContract(this.gStableAddress);
      this.gStableContract_ = await contract_.init();
    }
    return this.gStableContract_;
  };
}

const CurrencyList = {
  TTD: new Currency(
    1,
    "TTD",
    "gTTD",
    "Trinidad & Tobago Dollar",
    ttddImg,
    "TEhTXahLuKVgnBX1yWVmLaykLGeEZ8yq9K" /*gStableAddress nile*/,
    // "TTyTrwsnsi5Fr6YjhPsqc3cbTLqPALTe4U" /*gStableAddress mainnet*/,
  ),
  XCD: new Currency(
    2,
    "XCD",
    "gXCD",
    "Eastern Caribbean Dollar",
    xcddImg,
    "TMqjGVksF4RLN67YugsUbbNHiZejzsSWq6" /*gStableAddress nile*/,
    // "TBovdWbXNQEhERaRTB7MdY2h1Ykchji1Xw" /*gStableAddress mainnet*/,
  ),
  BBD: new Currency(
    3,
    "BBD",
    "gBBD",
    "Barbadian Dollar",
    bbddImg,
    "TNpqgkKcaKa7vZH5GC4nxSL6FMjMfdCRSn" /*gStableAddress nile*/,
    // "TGsz1q1ryn5DLZngM2xxek3jN1X53qW7vZ" /*gStableAddress mainnet*/,
  ),
  JMD: new Currency(
    4,
    "JMD",
    "gJMD",
    "Jamaican Dollar",
    jmddImg,
    "TBeTCPQFXjgVk1xKpFw5b24MsgCkvLdBnk" /*gStableAddress nile*/,
    // "TPoyDSNF7F2h5ZTRh25ypXvtn5hJfjaZ2K" /*gStableAddress mainnet*/,
  ),
  AWG: new Currency(
    5,
    "AWG",
    "gAWG",
    "Aruban Florin",
    awgdImg,
    "TQT5dFRmWCR2mJNpSrypVUfq4Rar4WSe8Y" /*gStableAddress nile*/,
    // "---" /*gStableAddress mainnet*/,
  ),
  BSD: new Currency(
    6,
    "BSD",
    "gBSD",
    "Bahamian Dollar",
    bsdImg,
    "TTQTdMtxiastmhKU8CkgWomYzwhBEfnNuX" /*gStableAddress nile*/,
    // "---" /*gStableAddress mainnet*/,
  ),
  KYD: new Currency(
    7,
    "KYD",
    "gKYD",
    "Cayman Islands Dollar",
    kydImg,
    "TTWSqDo9g5K86G5xQVLhBEzWwgy8tgURHQ" /*gStableAddress nile*/,
    // "---" /*gStableAddress mainnet*/,
  ),
  DOP: new Currency(
    8,
    "DOP",
    "gDOP",
    "Dominican Peso",
    dopImg,
    "TUpoXcrgPMMzvvzGdbtWwzcdU39D27ab8w" /*gStableAddress nile*/,
    // "---" /*gStableAddress mainnet*/,
  ),
  CUP: new Currency(
    9,
    "CUP",
    "gCUP",
    "Cuban Peso",
    cupImg,
    "TUMPPfnX5jnKvJbh8CtDAeUKTUXSv9Bhkx" /*gStableAddress nile*/,
    // "---" /*gStableAddress mainnet*/,
  ),
  HTG: new Currency(
    10,
    "HTG",
    "gHTG",
    "Haitian Gourde",
    htgImg,
    "THyUafLhw1w4bJzSvH2BDGA4ph5iRaqeyV" /*gStableAddress nile*/,
    // "---" /*gStableAddress mainnet*/,
  ),
  EUR: new Currency(
    11,
    "EUR",
    "gEUR",
    "Euro",
    eurImg,
    "TNLtM7F696Qjcc7Lj5krBqCAoXNzS2enQH" /*gStableAddress nile*/,
    // "---" /*gStableAddress mainnet*/,
  ),
  GBP: new Currency(
    12,
    "GBP",
    "gGBP",
    "British Pound",
    gbpImg,
    "TVnCkaJUjrek5H2xcVq9azLMVBLiyUAnvx" /*gStableAddress nile*/,
    // "---" /*gStableAddress mainnet*/,
  ),
  CNH: new Currency(
    13,
    "CNH",
    "gCNH",
    "Chinese Offshore Yuan",
    cnhImg,
    "TPhaYXi9Vsiy8mHB3XmVhdw81oK3mTh22j" /*gStableAddress nile*/,
//   "---" /*gStableAddress mainnet*/,
  ),
  HKD: new Currency(
    14,
    "HKD",
    "gHKD",
    "Hong Kong Dollar",
    hkdImg,
    "TMtFngpiqqMbD3bBr4Q52H5ode8htZYUVx" /*gStableAddress nile*/,
//   "---" /*gStableAddress mainnet*/,
  ),
  SGD: new Currency(
    15,
    "SGD",
    "gSGD",
    "Singaporean Dollar",
    sgdImg,
    "TCgmFarW3w4ggbYcnShnSTfA1xF7YWmuxB" /*gStableAddress nile*/,
//   "---" /*gStableAddress mainnet*/,
  ),
  THB: new Currency(
    16,
    "THB",
    "gTHB",
    "Thai Baht",
    thbImg,
    "TB6FLKkJCzWrLoXUf59DXqrx2yJeFyybuZ" /*gStableAddress nile*/,
//   "---" /*gStableAddress mainnet*/,
  ),
  IDR: new Currency(
    17,
    "IDR",
    "gIDR",
    "Indonesian Rupiah",
    idrImg,
    "TZDGv8KXKkuWyW42y1R5LowCDRNS73PNYY" /*gStableAddress nile*/,
//   "---" /*gStableAddress mainnet*/,
  ),
  INR: new Currency(
    18,
    "INR",
    "gINR",
    "Indian Rupee",
    inrImg,
    "TNEkYuizmQmtRebkoVh6X3b7ABMGXxuSbA" /*gStableAddress nile*/,
//   "---" /*gStableAddress mainnet*/,
  ),
  CAD: new Currency(
    19,
    "CAD",
    "gCAD",
    "Canadian Dollar",
    cadImg,
    "TSxJPmq2E3x8dkjKH3WXHiP98LsL8Q8WtJ" /*gStableAddress nile*/,
//   "---" /*gStableAddress mainnet*/,
  ),
  AUD: new Currency(
    20,
    "AUD",
    "gAUD",
    "Australian Dollar",
    audImg,
    "TSZNuSom4zZoqysjyRJS5KfuycSPYhrrqG" /*gStableAddress nile*/,
//   "---" /*gStableAddress mainnet*/,
  ),
  JPY: new Currency(
    21,
    "JPY",
    "gJPY",
    "Japanese Yen",
    jpyImg,
    "TF94kdQRB7iAtKBDHKZB722zGw4x5BkWqp" /*gStableAddress nile*/,
//   "---" /*gStableAddress mainnet*/,
  ),
  CHF: new Currency(
    23,
    "CHF",
    "gCHF",
    "Swiss Franc",
    chfImg,
    "THDmfApaF51W2Kc88hPF9WohBV5PkuRDC2" /*gStableAddress nile*/,
//   "---" /*gStableAddress mainnet*/,
  ),
  KRW: new Currency(
    24,
    "KRW",
    "gKRW",
    "South Korean Won",
    krwImg,
    "TLf8Ff4Qu1jMTt9SmA6W4XiraqSgtstBwU" /*gStableAddress nile*/,
//   "---" /*gStableAddress mainnet*/,
  ),
  TRY: new Currency(
    26,
    "TRY",
    "gTRY",
    "Turkish Lira",
    tryImg,
    "TLj7Vi5jXTqczEwDPXF91qs7bz5a4M9EcF" /*gStableAddress nile*/,
//   "---" /*gStableAddress mainnet*/,
  ),
  ILS: new Currency(
    27,
    "ILS",
    "gILS",
    "Israeli Shekel",
    ilsImg,
    "THqsYnbi1aTRrscQfht3LUN1RU1kPtMHGT" /*gStableAddress nile*/,
//   "---" /*gStableAddress mainnet*/,
  ),
  ZAR: new Currency(
    30,
    "ZAR",
    "gZAR",
    "South African Rand",
    zarImg,
    "TY2h18u8w7MDYZPJTqqzWbZx64YYqSY71y" /*gStableAddress nile*/,
//   "---" /*gStableAddress mainnet*/,
  ),
  NGN: new Currency(
    31,
    "NGN",
    "gNGN",
    "Nigerian Naira",
    ngnImg,
    "TSPYHAkk1dGSrzbePavZpAz61EnUtYTFYn" /*gStableAddress nile*/,
//   "---" /*gStableAddress mainnet*/,
  ),
  KES: new Currency(
    32,
    "KES",
    "gKES",
    "Kenyan Shilling",
    kesImg,
    "TFtHWkmp6snaJk6AuEsUATLUdGjFdfhcBu" /*gStableAddress nile*/,
//   "---" /*gStableAddress mainnet*/,
  ),
  RUB: new Currency(
    33,
    "RUB",
    "gRUB",
    "Russian Ruble",
    rubImg,
    "TUbfqwY9hoiNaeQufPfvz5FXD7w2jGLzQX" /*gStableAddress nile*/,
//   "---" /*gStableAddress mainnet*/,
  ),
  UAH: new Currency(
    34,
    "UAH",
    "gUAH",
    "Ukranian Hyrvnia",
    uahImg,
    "TLmBGyZjkghA4CwM7qjKUpS6PyHmeSU3hb" /*gStableAddress nile*/,
//   "---" /*gStableAddress mainnet*/,
  ),
  GEL: new Currency(
    35,
    "GEL",
    "gGEL",
    "Georgian Lari",
    gelImg,
    "TRJLh5ihgREmvMyScQQyW75F4zvUAsWSWD" /*gStableAddress nile*/,
//   "---" /*gStableAddress mainnet*/,
  ),
  AED: new Currency(
    40,
    "AED",
    "gAED",
    "UAE Dirham",
    aedImg,
    "TM9hBrFdzRUai5gfm1LvQqMAckNoNmYvAf" /*gStableAddress nile*/,
//   "---" /*gStableAddress mainnet*/,
  ),
  GHS: new Currency(
    41,
    "GHS",
    "gGHS",
    "Ghanaian Cedi",
    ghsImg,
    "TNYsoACVMVWwSPpj358HAu8EBEc5quzW3W" /*gStableAddress nile*/,
//   "---" /*gStableAddress mainnet*/,
  ),
  COP: new Currency(
    44,
    "COP",
    "gCOP",
    "Colombian Peso",
    copImg,
    "TXnWSBPDgdb1DY4AviLYzBs6He69kyzTrd" /*gStableAddress nile*/,
//   "---" /*gStableAddress mainnet*/,
  ),
  BRL: new Currency(
    45,
    "BRL",
    "gBRL",
    "Brazillian Real",
    brlImg,
    "TXx98qV2e7cQ2KFVavjjkHSChi9yrr7CJL" /*gStableAddress nile*/,
//   "---" /*gStableAddress mainnet*/,
  ),
};

export const getCurrencies = () => {
  return Object.values(CurrencyList);
};

export const getCurrency = (currKey) => {
  return CurrencyList[currKey];
};
