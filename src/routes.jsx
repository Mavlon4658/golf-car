import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Rental from "./pages/Rental";
import Service from "./pages/Service";

export default function AppRoutes () {
    const routes = [
        {path: '/', element: <Home />},
        {path: 'catalog', element: <Catalog />},
        {path: 'rental', element: <Rental />},
        {path: 'service', element: <Service />},
    ];
    return (<>
        <Routes>
            {routes.map((route, key) => (
                <Route key={key} path={route.path} element={route.element} />
            ))}
        </Routes>
    </>)
}