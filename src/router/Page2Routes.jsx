import { Page2 } from "../Page2";
import { UrlPrameter } from "../UrlParameter";

export const Page2Routes = [
  {
    path: "/",
    children: <Page2 />
  },
  {
    path: "/:id",
    children: <UrlPrameter />
  }
];
