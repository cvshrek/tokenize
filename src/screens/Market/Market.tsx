import {Button, Card, Container, Header, Text} from "@components";
import {Colors, Dimens, FontSizes} from "@constants";
import Icon from "@react-native-vector-icons/material-design-icons";
import {FlashList, ListRenderItem} from "@shopify/flash-list";
import useMarket from "./_logic";
import {useCallback, useEffect} from "react";
import FastImage from "@d11/react-native-fast-image";
import styles from "./styles";
import {FlatList} from "react-native";

function MarketScreen(): React.ReactElement {
  const {
    currencyCategories,
    currencyMarkets,
    selectedCurrency,
    catListRef,
    priceMap,
    getMarketSummary,
    getCurrencyPrices,
    onCategoryChange
  } = useMarket();

  useEffect(() => {
    getMarketSummary();
    getCurrencyPrices();
  }, []);

  const renderCategoryItem: ListRenderItem<string> = useCallback(
    ({item, index}) => (
      <Button
        title={item}
        titleProps={{
          color: selectedCurrency === item ? Colors.white : Colors.grey
        }}
        color={selectedCurrency === item ? Colors.blue_500 : Colors.secondary}
        onPress={() => onCategoryChange(item, index)}
        size="sm"
        buttonStyle={{width: Dimens.dimen_72, height: Dimens.dimen_36}}
      />
    ),
    [selectedCurrency]
  );

  const renderMarketItem: ListRenderItem<Currency> = useCallback(
    ({item}) => {
      const price = priceMap ? parseFloat(priceMap[item.id]?.lastPrice) : 0;
      const changePercentage = priceMap
        ? ((parseFloat(priceMap[item.id].lastPrice) -
            parseFloat(priceMap[item.id].openPrice)) /
            parseFloat(priceMap[item.id].lastPrice)) *
          100
        : 0;
      const color = changePercentage >= 0 ? Colors.green : Colors.red;
      return (
        <Card>
          <Container
            flexDirection="row"
            gap={Dimens.dimen_16}
            padding={Dimens.dimen_16}>
            <FastImage
              source={require("@assets/images/btc.png")}
              style={styles.listImage}
            />
            <Container
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              flex={1}>
              <Container>
                <Text fontWeight="bold">{item.marketCurrency}</Text>
                <Text fontSize={FontSizes.font_14}>
                  {item.marketCurrencyLong}
                </Text>
              </Container>
              <Container>
                <Text>{price.toFixed(item.priceTruncate)}</Text>
                {changePercentage ? (
                  <Container
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="flex-end">
                    <Text
                      align="right"
                      fontSize={FontSizes.font_13}
                      color={color}>
                      {`${changePercentage >= 0 ? "+" : "-"}${changePercentage.toFixed(2)}%`}
                    </Text>
                    <Icon
                      name={
                        changePercentage >= 0
                          ? "arrow-up-bold"
                          : "arrow-down-bold"
                      }
                      color={color}
                    />
                  </Container>
                ) : null}
              </Container>
            </Container>
          </Container>
        </Card>
      );
    },
    [priceMap]
  );

  return (
    <Container flex={1} backgroundColor={Colors.lightGrey}>
      <Header
        hideBackButton
        title="MARKETS"
        titleAlign="left"
        rightComponent={
          <Icon
            name="magnify"
            size={FontSizes.font_23}
            color={Colors.darkGrey}
          />
        }
      />
      <Container flex={1} gap={Dimens.dimen_16}>
        {selectedCurrency.length ? (
          <FlashList
            data={currencyCategories}
            extraData={selectedCurrency}
            renderItem={renderCategoryItem}
            ItemSeparatorComponent={() => (
              <Container style={{width: Dimens.dimen_8}} />
            )}
            keyExtractor={item => item}
            style={{width: "100%", height: "100%"}}
            contentContainerStyle={styles.listContainer}
            horizontal
            showsHorizontalScrollIndicator={false}
            ref={catListRef}
          />
        ) : null}
        <Container flex={1}>
          <FlashList
            data={currencyMarkets}
            extraData={priceMap}
            renderItem={renderMarketItem}
            ItemSeparatorComponent={() => (
              <Container style={{height: Dimens.dimen_12}} />
            )}
            ListFooterComponent={() => (
              <Container style={{height: Dimens.dimen_12}} />
            )}
            keyExtractor={item => item.id.toString()}
            style={styles.list}
            contentContainerStyle={styles.listContainer}
          />
        </Container>
      </Container>
    </Container>
  );
}

export default MarketScreen;
