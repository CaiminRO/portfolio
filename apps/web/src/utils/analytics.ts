import { GAUtil } from "@/utils/googleAnalytics";
import { VAUtil } from "@/utils/vercelAnalytics";

function buttonBase(eventName: string, buttonName: string) {
  GAUtil.sendEvent(`button_${eventName}`, buttonName);
  VAUtil.sendEvent(`button_${eventName}`, { buttonName });
}

function cardBase(eventName: string, cardName: string) {
  GAUtil.sendEvent(`card_${eventName}`, cardName);
  VAUtil.sendEvent(`card_${eventName}`, { cardName });
}

function buttonHeader(name: string) {
  buttonBase('Header', name);
}

function buttonHero(name: string) {
  buttonBase('Hero', name);
}

function cardPortfolioItem(name: string) {
  cardBase('PortfolioItem', name);
}

export const AnalyticsUtil = {
  buttonHeader,
  buttonHero,
  cardPortfolioItem
};
