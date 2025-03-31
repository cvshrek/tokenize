import {http} from "@configs";
import {IBaseResponse} from "./dtos/base";
import {ICurrencyResponse} from "./dtos/market";

class MarketService {
  static getMarkets(): Promise<IBaseResponse<ICurrencyResponse[]>> {
    return http.get("/api-sso/market/getmarkets");
  }
  static getMarketSummaries(): Promise<IBaseResponse<Price[]>> {
    return http.get("/public/v1/market/get-summaries");
  }
}

export default MarketService;
