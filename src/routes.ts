import { LOGIN_ROUTE, MAIN_PAGE_ROUTE } from "./contstants";
import { LoginPage, MainPage } from "./pages";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: LoginPage,
  },
];

export const privateRoutes = [
  {
    path: MAIN_PAGE_ROUTE,
    Component: MainPage,
  },
];
