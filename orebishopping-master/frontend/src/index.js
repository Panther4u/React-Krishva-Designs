import React from "react";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import "slick-carousel/slick/slick.css";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import "./index.css";
import App from "./App";
import Chat from "./components/Whatsapp/Whatsapp";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <StateProvider initialState={initialState} reducer={reducer}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <Chat/>
        </PersistGate>
      </Provider>
    </StateProvider>    


  
);
