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
import nprImg from "../img/gnpr.png";
import omrImg from "../img/gomr.png";
import myrImg from "../img/gmyr.png";

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
    "TBC1xDuFb6xQ9wpyBRD1rpFVh3KBvy9JiN" /*gStableAddress nile*/,
  ),
  XCD: new Currency(
    2,
    "XCD",
    "gXCD",
    "Eastern Caribbean Dollar",
    xcddImg,
    "TBP4eU4t6FbaqtAqp82wd4JWJJpZ8dMcFX" /*gStableAddress nile*/,
  ),
  BBD: new Currency(
    3,
    "BBD",
    "gBBD",
    "Barbadian Dollar",
    bbddImg,
    "TEW2Z2f6PtUd9fmX3LDyNy4TcBGqGeNeYE" /*gStableAddress nile*/,
  ),
  JMD: new Currency(
    4,
    "JMD",
    "gJMD",
    "Jamaican Dollar",
    jmddImg,
    "TEpmxrKdiciMwKxxAtMkziCS7dyB914wRu" /*gStableAddress nile*/,
    // "--" /*gStableAddress mainnet*/,
  ),
  AWG: new Currency(
    5,
    "AWG",
    "gAWG",
    "Aruban Florin",
    awgdImg,
    "TLRrtWPBu8aUoJg9MjYgQW3SqVfW1K57P5" /*gStableAddress nile*/,
    // "---" /*gStableAddress mainnet*/,
  ),
  BSD: new Currency(
    6,
    "BSD",
    "gBSD",
    "Bahamian Dollar",
    bsdImg,
    "TSvYTLgr9gYoYzFGa83fo1CSf7CDYsCUkc" /*gStableAddress nile*/,
    // "---" /*gStableAddress mainnet*/,
  ),
  KYD: new Currency(
    7,
    "KYD",
    "gKYD",
    "Cayman Islands Dollar",
    kydImg,
    "TT17cmscjneSR4Bbu2upuHxfDPfTJrUSsP" /*gStableAddress nile*/,
    // "---" /*gStableAddress mainnet*/,
  ),
  DOP: new Currency(
    8,
    "DOP",
    "gDOP",
    "Dominican Peso",
    dopImg,
    "TUUsVuijwmmNk2q8ooPs1ju9N77HC7imZQ" /*gStableAddress nile*/,
    // "---" /*gStableAddress mainnet*/,
  ),
//   CUP: new Currency(
//     9,
//     "CUP",
//     "gCUP",
//     "Cuban Peso",
//     cupImg,
//     "TLtGaj5JJ7oDcYTzyV9XM1ipJZC498D4Tv" /*gStableAddress nile*/,
//     // "---" /*gStableAddress mainnet*/,
//   ),
  HTG: new Currency(
    10,
    "HTG",
    "gHTG",
    "Haitian Gourde",
    htgImg,
    "TFziMsWN9HxypKazeatPUDmZQtFxxHZKZV" /*gStableAddress nile*/,
    // "---" /*gStableAddress mainnet*/,
  ),
//   EUR: new Currency(
//     11,
//     "EUR",
//     "gEUR",
//     "Euro",
//     eurImg,
//     "---" /*gStableAddress nile*/,
//     // "---" /*gStableAddress mainnet*/,
//   ),
//   GBP: new Currency(
//     12,
//     "GBP",
//     "gGBP",
//     "British Pound",
//     gbpImg,
//     "---" /*gStableAddress nile*/,
//     // "---" /*gStableAddress mainnet*/,
//   ),
//   CNH: new Currency(
//     13,
//     "CNH",
//     "gCNH",
//     "Chinese Offshore Yuan",
//     cnhImg,
//     "---" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   HKD: new Currency(
//     14,
//     "HKD",
//     "gHKD",
//     "Hong Kong Dollar",
//     hkdImg,
//     "---" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   SGD: new Currency(
//     15,
//     "SGD",
//     "gSGD",
//     "Singaporean Dollar",
//     sgdImg,
//     "---" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   THB: new Currency(
//     16,
//     "THB",
//     "gTHB",
//     "Thai Baht",
//     thbImg,
//     "---" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   IDR: new Currency(
//     17,
//     "IDR",
//     "gIDR",
//     "Indonesian Rupiah",
//     idrImg,
//     "---" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   INR: new Currency(
//     18,
//     "INR",
//     "gINR",
//     "Indian Rupee",
//     inrImg,
//     "---" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   CAD: new Currency(
//     19,
//     "CAD",
//     "gCAD",
//     "Canadian Dollar",
//     cadImg,
//     "---" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   AUD: new Currency(
//     20,
//     "AUD",
//     "gAUD",
//     "Australian Dollar",
//     audImg,
//     "---" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   JPY: new Currency(
//     21,
//     "JPY",
//     "gJPY",
//     "Japanese Yen",
//     jpyImg,
//     "---" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   CHF: new Currency(
//     23,
//     "CHF",
//     "gCHF",
//     "Swiss Franc",
//     chfImg,
//     "---" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   KRW: new Currency(
//     24,
//     "KRW",
//     "gKRW",
//     "South Korean Won",
//     krwImg,
//     "---" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   TRY: new Currency(
//     26,
//     "TRY",
//     "gTRY",
//     "Turkish Lira",
//     tryImg,
//     "---" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   ILS: new Currency(
//     27,
//     "ILS",
//     "gILS",
//     "Israeli Shekel",
//     ilsImg,
//     "---" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   ZAR: new Currency(
//     30,
//     "ZAR",
//     "gZAR",
//     "South African Rand",
//     zarImg,
//     "---" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   NGN: new Currency(
//     31,
//     "NGN",
//     "gNGN",
//     "Nigerian Naira",
//     ngnImg,
//     "---" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   KES: new Currency(
//     32,
//     "KES",
//     "gKES",
//     "Kenyan Shilling",
//     kesImg,
//     "---" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   RUB: new Currency(
//     33,
//     "RUB",
//     "gRUB",
//     "Russian Ruble",
//     rubImg,
//     "---" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   UAH: new Currency(
//     34,
//     "UAH",
//     "gUAH",
//     "Ukranian Hyrvnia",
//     uahImg,
//     "---" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   GEL: new Currency(
//     35,
//     "GEL",
//     "gGEL",
//     "Georgian Lari",
//     gelImg,
//     "---" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   AED: new Currency(
//     40,
//     "AED",
//     "gAED",
//     "UAE Dirham",
//     aedImg,
//     "---" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   GHS: new Currency(
//     41,
//     "GHS",
//     "gGHS",
//     "Ghanaian Cedi",
//     ghsImg,
//     "---" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   COP: new Currency(
//     44,
//     "COP",
//     "gCOP",
//     "Colombian Peso",
//     copImg,
//     "---" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   BRL: new Currency(
//     45,
//     "BRL",
//     "gBRL",
//     "Brazillian Real",
//     brlImg,
//     "---" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   NPR: new Currency(
//     46,
//     "NPR",
//     "gNPR",
//     "Nepali Rupee",
//     nprImg,
//     "---" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   OMR: new Currency(
//     47,
//     "OMR",
//     "gOMR",
//     "Omani Rial",
//     omrImg,
//     "---" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
//   MYR: new Currency(
//     48,
//     "MYR",
//     "gMYR",
//     "Malaysian Ringgit",
//     myrImg,
//     "---" /*gStableAddress nile*/,
// //   "---" /*gStableAddress mainnet*/,
//   ),
};

export const getCurrencies = () => {
  return Object.values(CurrencyList);
};

export const getCurrency = (currKey) => {
  return CurrencyList[currKey];
};
