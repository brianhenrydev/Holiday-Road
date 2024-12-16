import { getParksData } from "../parks/ParkProvider.js";
import { getAttractions } from "../attractions/AttractionProvider.js";
import { getEateries } from "../eateries/EateryProvider.js";

const TransientState = new Map();

TransientState.set("parks", await getParksData());
TransientState.set("attractions", await getAttractions());
TransientState.set("eateries", await getEateries());

export const useParksData = () => TransientState.get("parks");

export const useAttractionsData = () => TransientState.get("attractions");

export const useEateriesData = () => TransientState.get("eateries");
