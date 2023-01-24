import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./mui/theme";
import { Provider } from "react-redux";
import { persistor, store } from "./reducers/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);
