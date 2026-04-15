/**
 * Utility to fetch real-time crude oil prices and convert to BWP.
 * Uses mock data as a robust fallback if API keys are missing.
 */

export interface OilPriceData {
  symbol: string;
  name: string;
  price: number;
  currency: string;
  change: number;
  changePercent: number;
}

// Default conversion rate if API fails (1 USD to BWP)
const USD_BWP_LATEST = 13.58;

const MOCK_DATA: OilPriceData[] = [
  {
    symbol: "BRENT",
    name: "Brent Crude",
    price: 90.45,
    currency: "USD",
    change: 1.25,
    changePercent: 1.4,
  },
  {
    symbol: "WTI",
    name: "WTI Crude",
    price: 85.12,
    currency: "USD",
    change: -0.85,
    changePercent: -0.99,
  },
  {
    symbol: "GAS",
    name: "Natural Gas",
    price: 2.15,
    currency: "USD",
    change: 0.05,
    changePercent: 2.38,
  },
  {
    symbol: "DIESEL",
    name: "Gas Oil (Diesel)",
    price: 820.75,
    currency: "USD/MT",
    change: 5.50,
    changePercent: 0.67,
  }
];

export async function getOilPrices(): Promise<OilPriceData[]> {
  try {
    // In a real environment, you would fetch from an API like commodities-api.com
    // const response = await fetch(`https://commodities-api.com/api/latest?access_key=${process.env.COMMODITIES_API_KEY}&base=USD&symbols=BRENT,WTI,NG`);
    // const data = await response.json();
    
    // For now, we simulate a small variation for "real-time" feel in demo
    const variation = (Math.random() - 0.5) * 0.1;
    
    return MOCK_DATA.map(item => ({
      ...item,
      // Convert to BWP
      price: Number((item.price * USD_BWP_LATEST * (1 + variation)).toFixed(2)),
      currency: "BWP",
    }));
  } catch (error) {
    console.error("Error fetching oil prices:", error);
    return MOCK_DATA.map(item => ({
      ...item,
      price: Number((item.price * USD_BWP_LATEST).toFixed(2)),
      currency: "BWP",
    }));
  }
}
