import * as ReactDOM from "react-dom";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {routes} from "./routes";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
