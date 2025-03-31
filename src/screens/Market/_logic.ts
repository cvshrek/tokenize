import {Dimens} from "@constants";
import {ICurrencyResponse} from "@services/dtos/market";
import MarketService from "@services/market.service";
import {FlashList} from "@shopify/flash-list";
import {useRef, useState} from "react";

function useMarket() {
  const [currencyCategories, setCurrencyCategories] = useState<string[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("");
  const [currencyMarkets, setCurrencyMarkets] = useState<Currency[]>([]);
  const [priceMap, setPriceMap] = useState<Record<string, Price>>();

  const summaryRef = useRef<ICurrencyResponse[]>([]);
  const catListRef = useRef<FlashList<any>>(null);

  async function getCurrencyPrices() {
    const response = await MarketService.getMarketSummaries();
    if (response.data) {
      const priceMap: Record<string, Price> = response.data.reduce(
        (obj, item) => {
          obj[item.marketId] = item;
          return obj;
        },
        {} as Record<string, Price>
      );
      setPriceMap(priceMap);
    }
  }

  async function getMarketSummary() {
    const response = await MarketService.getMarkets();
    if (response?.data) {
      summaryRef.current = response.data;
      const categories = response.data.map(item => item.title);
      setCurrencyCategories(categories);
      setSelectedCurrency(response.data[0].title);
      setCurrencyMarkets(response.data[0].list);
    }
  }

  function onCategoryChange(value: string, index: number) {
    setSelectedCurrency(value);
    setTimeout(() => {
      const mid = Math.floor(currencyCategories.length / 2);
      const direction = index + 1 > mid ? 1 : -1;
      catListRef.current?.scrollToOffset({
        animated: true,
        offset: index * Dimens.dimen_72 * direction
      });
    }, 100);

    const currencyMarket = summaryRef.current.find(
      item => item.title === value
    );
    console.log(currencyMarket);
    if (currencyMarket) {
      setCurrencyMarkets(currencyMarket.list);
    }
  }

  return {
    currencyCategories,
    selectedCurrency,
    currencyMarkets,
    catListRef,
    priceMap,
    getMarketSummary,
    getCurrencyPrices,
    onCategoryChange
  };
}

export default useMarket;
