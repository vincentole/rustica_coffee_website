import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import CartCloseIcon from '../Icons/CloseIcon';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { cartActions } from '../../store/cartSlice';
import NewItems from './NewItems';

const Cart = () => {
    const dispatch = useDispatch<AppDispatch>();
    const cartShown = useSelector((state: RootState) => state.cart.cartShown);
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const amountItemsSeen = useSelector((state: RootState) => state.cart.seenItemsAmount);

    const cartList = cartItems.map((item) => <CartItem key={item.id} item={item} />);
    const cartTotal = cartItems.reduce((total, item) => total + item.price * item.amount, 0);
    const cartItemAmount = cartItems.reduce((total, item) => total + item.amount, 0);
    const amountItemsNotSeen = cartItemAmount - amountItemsSeen;

    return (
        <Transition show={cartShown} as={Fragment}>
            <Dialog
                open={cartShown}
                onClose={() => dispatch(cartActions.closeCart())}
                className='fixed z-50 inset-0 overflow-y-auto theme-text-body-m lg:theme-text-body'
            >
                {/* Backdrop */}
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <Dialog.Overlay className='fixed inset-0 bg-theme-anthrazit/50' />
                </Transition.Child>

                {/* Content */}
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='ease-in duration-100'
                    leaveFrom='opacity-100 scale-200'
                    leaveTo='opacity-0 scale-90'
                >
                    <div className='relative ml-auto flex flex-col bg-white min-h-screen lg:w-[600px]'>
                        <div className='cstm-container'>
                            <div className='spacer-20' />
                            <div className='flex justify-end'>
                                <button
                                    aria-label='Warenkorb schließen'
                                    type='button'
                                    onClick={() => dispatch(cartActions.closeCart())}
                                >
                                    <CartCloseIcon className='h-[18px] w-[18px]' />
                                </button>
                            </div>

                            <div className='spacer-12' />
                            <Dialog.Title className='flex gap-[35px] md:gap-[50px] justify-between items-end'>
                                <h2 className='theme-text-h3-m lg:theme-text-h3'>Warenkorb</h2>
                                <span>{`${cartItemAmount}`} Products</span>
                            </Dialog.Title>
                        </div>
                        <Dialog.Description></Dialog.Description>
                        <div className='spacer-35' />
                        <div className='cstm-container bg-theme-kraftpapier'>
                            <NewItems amountItemsNotSeen={amountItemsNotSeen} />
                            
                        </div>
                        <div className='cstm-container'>
                            <div className='spacer-20' />
                            <ul>
                                {cartList.length === 0 ? (
                                    <li className='pb-[25px] pt-[25px]'>
                                        Es sind noch keine Produkte im Warenkorb
                                    </li>
                                ) : (
                                    cartList
                                )}
                            </ul>
                        </div>
                        <div className='cstm-container text-theme-white bg-theme-anthrazit mt-auto'>
                            <div className='spacer-40' />
                            <div className='flex gap-4 justify-between'>
                                <div>Zwischensumme</div>
                                <div>{`${cartTotal.toFixed(2)}€`}</div>
                            </div>
                            <div className='flex gap-4 justify-between'>
                                <div>Versandkosten</div>
                                <div>{cartItems.length > 0 ? '3.49€' : '0.00€'}</div>
                            </div>
                            <div className='spacer-24' />
                            <div className='spacer-0 border-t border-theme-light-gray' />
                            <div className='spacer-24' />
                            <div className='flex gap-4 justify-between'>
                                <div>Gesamtbetrag</div>
                                <div>
                                    {cartItems.length > 0
                                        ? `${(cartTotal + 3.49).toFixed(2)}€`
                                        : '0.00€'}
                                </div>
                            </div>
                            <div className='spacer-35' />
                            <div className='flex justify-center'>
                                <button
                                    onClick={() => dispatch(cartActions.closeCart())}
                                    className='py-3 px-12 rounded-[5px] border-[3px] border-theme-kraftpapier bg-theme-kraftpapier text-theme-anthrazit hover:bg-theme-hover-gray hover:border-theme-hover-gray hover:text-theme-white active:bg-theme-kraftpapier active:border-theme-kraftpapier active:text-theme-anthrazit'
                                >
                                    zur Kasse
                                </button>
                            </div>

                            <div className='spacer-35' />
                        </div>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
};

export default Cart;
