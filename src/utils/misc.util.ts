import { ICurrency } from "@/types/currency";

export const getImageUrl = (path: string) => {
    if (!path) return '/images/placeholder.png';

    if (path.startsWith('http')) return path;
  
    return `${process.env.NEXT_PUBLIC_ASSET_URL}${path}`;
}

export const exchangeRate = (amount: number): string => {
    if (typeof window === "undefined") return amount.toString() + " USD";

    let currencies: ICurrency[] = [];

    try {
        currencies = JSON.parse(localStorage.getItem("currencies") ?? "[]");
    } catch {
        return amount.toString() + " USD";
    }

    const selectedCurrency = getCookie("currency") ?? "USD";

    const from = currencies.find(currency => currency.isBase === true);
    const to = currencies.find(currency => currency.code === selectedCurrency);

    if (!from || !to || typeof to.exchangeRate !== "number") {
        return amount.toString() + " USD";
    }

    // Correct formula: convert from base → target
    return to.symbol + " " + (amount * to.exchangeRate).toFixed(3) ;
};


export function getCookie(name: string) {
    if (typeof window === "undefined") return "USD";
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() ?? "USD";
    return "USD";
  }