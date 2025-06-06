import { createBrowserRouter } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
import App from "./App";
import Price from "./routes/Price";
import Chart from "./routes/Chart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Coins />,
      },
      {
        path: "/:coinId",
        element: <Coin />,
        children: [
          {
            path: "chart",
            element: <Chart />,
          },
          {
            path: "price",
            element: <Price />,
          },
        ],
      },
    ],
  },
]);
export default router;
