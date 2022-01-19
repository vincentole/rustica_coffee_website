import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import CartCloseIcon from '../Icons/CartCloseIcon';

type Props = {
    onOpenCart: () => void;
    onCloseCart: () => void;
    cartIsOpen: boolean;
};

const Cart: React.FC<Props> = ({ onOpenCart, onCloseCart, cartIsOpen }) => {
    return (
        <Dialog
            open={cartIsOpen}
            onClose={onCloseCart}
            className='fixed z-50 bg-white inset-0 overflow-y-auto theme-text-body-m lg:theme-text-body'
        >
            <Dialog.Overlay />
            <div className='cstm-container mx-auto'>
                <div className='spacer-20' />
                <div className='flex justify-end'>
                    <button aria-label='Warenkorb schließen' type='button' onClick={onCloseCart}>
                        <CartCloseIcon className='h-[18px] w-[18px]' />
                    </button>
                </div>
                <div className='spacer-12' />
                <Dialog.Title className='flex gap-[35px] md:gap-[50px] justify-between items-end'>
                    <h2 className='theme-text-h3-m lg:theme-text-h3'>Warenkorb</h2>
                    <span>3 Products</span>
                </Dialog.Title>
                <Dialog.Description>
                    This will permanently deactivate your account
                </Dialog.Description>

                <p>
                    Are you sure you want to deactivate your account? All of your data will be
                    permanently removed. This action cannot be undone.
                </p>

                <button onClick={onCloseCart}>Cancel</button>
            </div>
        </Dialog>
    );
};

export default Cart;
