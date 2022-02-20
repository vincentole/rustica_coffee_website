type ShopItemDetailsType = {
    id: string;
    slug: string;
    title: string;
    allPrices: number[];
    aroma: string;
    cookingUtilities: string[];
    allVariants: string[];
    allWeights: number[];
    summary: string;
    description: string;
    readyForDelivery: boolean;
    image: { url: string };
};

export default ShopItemDetailsType;
