import React, {createContext} from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import UserStore from "./store/UserSotre";
import DeviceStore from "./store/DeviceStore";

export const Context = createContext({
    user: new UserStore(),
    device: new DeviceStore()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Context.Provider value={{
            user: new UserStore(),
            device: new DeviceStore()
        }} />
        <App />
    </React.StrictMode>
);


