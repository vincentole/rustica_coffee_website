type ShopItemType = {
    id: string;
    title: string;
    prices: number[];
    aroma: string;
    cookingUtilities: string[];
    allVariants: string[];
    allWeights: number[];
    summary: string;
    description: string;
    readyForDelivery: boolean;
    img: StaticImageData;
};

export default ShopItemType;
