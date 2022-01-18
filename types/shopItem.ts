type ShopItemType = {
    id: string;
    title: string;
    price: {
        min: number;
        max: number;
    };
    aroma: string;
    cookingUtilities: string[];
    form: string[];
    weight: number;
    summary: string;
    description: string;
    readyForDelivery: boolean;
    img: StaticImageData;
};

export default ShopItemType;
