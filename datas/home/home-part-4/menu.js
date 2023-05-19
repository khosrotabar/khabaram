import { MostViewedProducts } from "./most_viewed_products";
import { MostSellProducts } from "./most_sell_products";
import { WoodProducts } from "./wood_products";
import { SteelProducts } from "./steel_products";
import { CeramicProducts } from "./ceramic_products";
import { JustThisProducts } from "./just_this_products";

export const menu = [
  {
    id: 1,
    text: "پر بازدید ترین",
    type: MostViewedProducts,
  },
  {
    id: 2,
    text: "پر فروش ترین",
    type: MostSellProducts,
  },
  {
    id: 3,
    text: "چوبی",
    type: WoodProducts,
  },
  {
    id: 4,
    text: "استیل",
    type: SteelProducts,
  },
  {
    id: 5,
    text: "سرامیک",
    type: CeramicProducts,
  },
  {
    id: 6,
    text: "فقط همین",
    type: JustThisProducts,
  },
];
