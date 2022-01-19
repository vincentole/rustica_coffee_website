import Image from 'next/image';
import IconKaffeeBohnen from '../Icons/IconKaffeeBohnen';
import FrenchPressIcon from '../Icons/IconFrenchPress';
import IconKaffeeSchaufel from '../Icons/IconKaffeeSchaufel';
import * as Yup from 'yup';

import ShopItemType from '../../types/shopItemType';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import FormErrorDiv from '../UI/FormErrorDiv';
import Button from '../UI/Button';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cartSlice';
import { title } from 'process';

const ShopItemDetails: React.FC<{ shopItem: ShopItemType }> = ({ shopItem }) => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <section>
            <div className='cstm-container lg:flex lg:flex-col lg:items-center'>
                <div className='lg:flex gap-[40px]'>
                    <div className='relative h-[396px] bg-theme-kraftpapier lg:w-[612px] lg:h-[741px]'>
                        <Image
                            src={shopItem.img}
                            layout='fill'
                            objectFit='contain'
                            objectPosition='center'
                            alt='Rustica coffe bag type Costa Rica'
                            className='bg-theme-kraftpapier'
                            priority={true}
                        />
                    </div>
                    <div className='spacer-35 lg:spacer-0' />
                    <div className='lg:basis-0 lg:flex-grow lg:max-w-[400px]'>
                        <h2 className='theme-text-h2-m lg:theme-text-h2 '>{shopItem.title}</h2>
                        <div className='spacer-12' />
                        <div className='theme-text-subh-m'>{`${shopItem.prices[0].toFixed(
                            2,
                        )}€ – ${shopItem.prices[shopItem.prices.length-1].toFixed(2)}€`}</div>
                        <div className='spacer-35' />
                        <p className='theme-text-body-m lg:theme-text-body'>{shopItem.summary}</p>
                        <div className='spacer-40' />
                        <Formik
                            initialValues={{ amount: '' }}
                            validationSchema={Yup.object({
                                amount: Yup.string().required('Bitte wähle eine Menge aus.'),
                            })}
                            onSubmit={(values, actions) => {
                                // dispatch(cartActions.addToCart({
                                //     amount: 1,
                                //     bagSize: Number(values.amount.split(' ')[0]),
                                //     id: shopItem.id,
                                //     price: shopItem.price,
                                //     title: shopItem.title
                                // }));
                                console.log(values);
                                actions.resetForm();
                                actions.setSubmitting(false);
                            }}
                        >
                            {(formik) => (
                                <Form className='theme-text-body-m lg:theme-text-body max-w-[300px] mx-auto'>
                                    <div className='flex flex-col gap-[5px] lg:gap-[10px]'>
                                        <label htmlFor='amount' className='sr-only'>
                                            Caffee Menge und Typ
                                        </label>
                                        <Field
                                            id='amount'
                                            name='amount'
                                            as='select'
                                            className='rounded-[5px] border-[3px] border-theme-anthrazit text-theme-anthrazit h-[50px] focus:border-theme-kraftpapier focus:ring-theme-kraftpapier'
                                        >
                                            <option hidden defaultValue={'Wie viel Kaffee brauchst du?'}>
                                                Wie viel Kaffee brauchst du?
                                            </option>
                                            <option value='250 gemahlen'>250g gemahlen</option>
                                            <option value='500 gemahlen'>500g gemahlen</option>
                                            <option value='250 Bohnen'>250g Bohnen</option>
                                            <option value='500 Bohnen'>500g Bohnen</option>
                                        </Field>

                                        <ErrorMessage name='amount' component={FormErrorDiv} />
                                    </div>
                                    <div className='spacer-20' />
                                    <div className='flex justify-center'>
                                        <Button
                                            type='button'
                                            disabled={formik.isSubmitting}
                                            btnType='submit'
                                        >
                                            In den Warenkorb
                                        </Button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                        <div className='spacer-90' />
                        <div className='flex items-center justify-center gap-4 theme-text-body-m lg:theme-text-body'>
                            <div className='max-w-[70px]'>
                                <IconKaffeeBohnen className='w-[46px] h-[51px] lg:w-[55px] lg:h-[62px]' />
                                <div className='spacer-20' />
                                <div>{shopItem.aroma} geröstet</div>
                            </div>
                            <div className='max-w-[70px]'>
                                <FrenchPressIcon className='w-[36px] h-[46px] lg:w-[44px] lg:h-[55px]' />
                                <div className='spacer-20' />
                                <div>Für {shopItem.cookingUtilities}</div>
                            </div>
                            <div className='max-w-[70px]'>
                                <IconKaffeeSchaufel className='w-[45px] h-[47px] lg:w-[53px] lg:h-[56px]' />
                                <div className='spacer-20' />
                                <div>
                                    {shopItem.allVariants.length === 2
                                        ? `Gemahlen oder als Bohne`
                                        : shopItem.allVariants[0].toLowerCase() === 'gemahlen'
                                        ? 'Gemahlen'
                                        : 'Als Bohne'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:max-w-[600px]'>
                    <div className='spacer-60 lg:spacer-125' />
                    <h3 className='theme-text-h3-m lg:theme-text-h3 '>Beschreibung</h3>
                    <div className='spacer-20' />
                    <p className='theme-text-body-m lg:theme-text-body'>{shopItem.description}</p>
                </div>
            </div>
        </section>
    );
};

export default ShopItemDetails;
