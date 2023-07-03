<script lang="ts">
  async function fetchCoinPrice(symbol: string, exchange: string) {
    const url = `https://api.${exchange}/v1/ticker?symbol=${symbol}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      return parseFloat(data[0].trade_price);
    } catch (error) {
      console.error(`Failed to fetch ${symbol} price from ${exchange}`, error);
      return null;
    }
  }

  async function compareCoinPrices() {
    const symbol = "BTC";
    const upbitPrice = await fetchCoinPrice(symbol, "upbit");
    const binancePrice = await fetchCoinPrice(symbol, "binance");

    if (upbitPrice && binancePrice) {
      const priceDifference = binancePrice - upbitPrice;
      console.log(`Price difference for ${symbol}: ${priceDifference}`);
    }
  }

  compareCoinPrices();
</script>
