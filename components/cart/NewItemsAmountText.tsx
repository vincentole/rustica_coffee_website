import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const NewItems = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const amountItemsSeen = useSelector((state: RootState) => state.cart.seenItemsAmount);

    const cartItemAmount = cartItems.reduce((total, item) => total + item.amount, 0);
    const amountItemsNotSeen = cartItemAmount - amountItemsSeen;

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
        const timeout = setTimeout(() => setAnimate(false), 200); // timing should be equivalent to animation timing
        return () => clearTimeout(timeout);
    }, [amountItemsSeen]);

    // define text output
    let text = 'Es wurden keine neuen Produkte dem Warenkorb hinzugefügt';
    
    if (amountItemsNotSeen > 0) {
        text = `${amountItemsNotSeen} Produkt${
            amountItemsNotSeen > 1 ? 'e' : ''
        } wurde erfolgreich dem Warenkorb hinzugefügt`;
    }
    
    if (amountItemsNotSeen < 0) {
        text = `${Math.abs(amountItemsNotSeen)} Produkt${
            amountItemsNotSeen < -1 ? 'e' : ''
        } wurde erfolgreich aus dem Warenkorb entfernt`;
    }

    return (
        <div>
            <div className='spacer-12' />
            <p className={animate ? 'animate-pulse-once' : ''}>{text}</p>
            <div className='spacer-12' />
        </div>
    );
};

export default NewItems;
