import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface OutletContextType {
  coinId: string;
}

function Chart() {
  const { coinId } = useOutletContext<OutletContextType>();
  const { isLoading, data } = useQuery<IHistorical[]>({
    queryKey: ["ohlcv", coinId],
    queryFn: () => fetchCoinHistory(coinId),
  });

  const candleStickData =
    data?.map((price) => ({
      x: new Date(Number(price.time_close) * 1000).toString(),
      y: [price.open, price.high, price.low, price.close],
    })) || [];

  return (
    <>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              name: "Price",
              data: candleStickData,
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: { show: false },
              background: "transparent",
            },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: "red",
                  downward: "blue",
                },
              },
            },
            grid: { show: false },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              type: "datetime",
            },
            yaxis: { show: true },
          }}
        />
      )}
    </>
  );
}

export default Chart;
