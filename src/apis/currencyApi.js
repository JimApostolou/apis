import axios from "axios";

export default axios.create({
    baseURL: "https://api.coinbase.com/v2/prices/BTC-USD/"
});