type Props = {
    amountItemsNotSeen: number;
};

const NewItems: React.FC<Props> = ({amountItemsNotSeen}) => {
    return (
        <div>
            <div className='spacer-12' />
            <p className='animate-pulse-once'>
                {amountItemsNotSeen > 0
                    ? `${amountItemsNotSeen} Produkt${
                          amountItemsNotSeen > 1 ? 'e' : ''
                      } wurde erfolgreich zum Warenkorb
                                    hinzugefügt`
                    : `${Math.abs(amountItemsNotSeen)} Produkt${
                          amountItemsNotSeen < -1 ? 'e' : ''
                      } wurde erfolgreich aus dem Warenkorb
                                    entfernt`}
            </p>
            <div className='spacer-12' />
        </div>
    );
};

export default NewItems;