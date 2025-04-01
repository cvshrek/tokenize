import {Dimens} from "@constants";
import {ICurrencyResponse} from "@services/dtos/market";
import MarketService from "@services/market.service";
import {FlashList} from "@shopify/flash-list";
import {useRef, useState} from "react";

function useMarket() {
  const [currencyCategories, setCurrencyCategories] = useState<string[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("");
  const [currencyMarkets, setCurrencyMarkets] = useState<CurrencyPrice[]>([]);

  const summaryRef = useRef<ICurrencyResponse[]>([]);
  const catListRef = useRef<FlashList<any>>(null);
  const priceMapRef = useRef<Record<string, Price>>(null);

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
      priceMapRef.current = priceMap;
    }
  }

  async function getMarketSummary() {
    await getCurrencyPrices();
    const response = await MarketService.getMarkets();
    if (response?.data) {
      summaryRef.current = response.data;
      const categories = response.data.map(item => item.title);
      const currencyPrices: CurrencyPrice[] = [];
      response.data[0].list.forEach(item => {
        currencyPrices.push({
          ...item,
          price: priceMapRef.current?.[item.id] as Price
        });
      });
      setCurrencyCategories(categories);
      setSelectedCurrency(response.data[0].title);
      setCurrencyMarkets(currencyPrices);
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
    if (currencyMarket) {
      const currencyPrices: CurrencyPrice[] = [];
      currencyMarket.list.forEach(item => {
        currencyPrices.push({
          ...item,
          price: priceMapRef.current?.[item.id] as Price
        });
      });
      setCurrencyMarkets(currencyPrices);
    }
  }

  return {
    currencyCategories,
    selectedCurrency,
    currencyMarkets,
    catListRef,
    getMarketSummary,
    getCurrencyPrices,
    onCategoryChange
  };
}

export default useMarket;
