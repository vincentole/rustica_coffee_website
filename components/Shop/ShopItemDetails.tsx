import Image from 'next/image';
import IconKaffeeBohnen from '../Icons/IconKaffeeBohnen';
import FrenchPressIcon from '../Icons/IconFrenchPress';
import IconKaffeeSchaufel from '../Icons/IconKaffeeSchaufel';
import * as Yup from 'yup';

import ShopItemDetailsType from '../../types/shopItemDetailsType';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import FormErrorDiv from '../UI/FormErrorDiv';
import Button from '../UI/Button';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cartSlice';

const ShopItemDetails: React.FC<{ shopItem: ShopItemDetailsType }> = ({ shopItem }) => {
    const dispatch = useDispatch<AppDispatch>();
    const optionList: JSX.Element[] = [];
    for (let i = 0; i < shopItem.allWeights.length; i += 1) {
        for (let j = 0; j < shopItem.allVariants.length; j += 1) {
            optionList.push(
                <option
                    key={'' + i + j}
                    value={`${shopItem.allWeights[i]} ${shopItem.allVariants[j]}`}
                >
                    {`${shopItem.allWeights[i]}g ${shopItem.allVariants[j]}`}
                </option>,
            );
        }
    }

    return (
        <section>
            <div className='cstm-container lg:flex lg:flex-col lg:items-center'>
                <div className='lg:flex gap-[40px]'>
                    <div className='relative h-[396px] bg-theme-kraftpapier lg:w-[612px] lg:h-[741px]'>
                        <Image
                            src={shopItem.image.url}
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
                        <div className='theme-text-subh-m'>
                            {shopItem.allPrices.length > 1
                                ? `${shopItem.allPrices[0].toFixed(2)}??? ??? ${shopItem.allPrices[
                                      shopItem.allPrices.length - 1
                                  ].toFixed(2)}???`
                                : `${shopItem.allPrices[0].toFixed(2)}???`}
                        </div>
                        <div className='spacer-35' />
                        <p className='theme-text-body-m lg:theme-text-body'>{shopItem.summary}</p>
                        <div className='spacer-40' />
                        <Formik
                            initialValues={{ amount: '' }}
                            validationSchema={Yup.object({
                                amount: Yup.string().required('Bitte w??hle eine Menge aus.'),
                            })}
                            onSubmit={(values, actions) => {
                                const bagSize = Number(values.amount.split(' ')[0]);
                                const weightIndex = shopItem.allWeights.findIndex(
                                    (w) => w === bagSize,
                                );
                                const variant = values.amount.split(' ')[1];

                                dispatch(
                                    cartActions.addOneToCart({
                                        id: `${shopItem.id}-${bagSize}-${variant.toLowerCase()}`,
                                        title: shopItem.title,
                                        amount: 1,
                                        bagSize: Number(values.amount.split(' ')[0]),
                                        variant: variant,
                                        price: shopItem.allPrices[weightIndex],
                                        image: { url: shopItem.image.url },
                                    }),
                                );

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
                                            <option
                                                hidden
                                                defaultValue={'Wie viel Kaffee brauchst du?'}
                                            >
                                                Wie viel Kaffee brauchst du?
                                            </option>
                                            {optionList}
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
                            <div className='w-[70px] flex justify-center items-center'>
                                <IconKaffeeBohnen className='w-[46px] h-[51px] lg:w-[55px] lg:h-[62px]' />
                            </div>
                            <div className='w-[70px] flex justify-center items-center'>
                                <FrenchPressIcon className='w-[36px] h-[46px] lg:w-[44px] lg:h-[55px]' />
                            </div>
                            <div className='w-[70px] flex justify-center items-center'>
                                <IconKaffeeSchaufel className='w-[45px] h-[47px] lg:w-[53px] lg:h-[56px]' />
                            </div>
                        </div>
                        <div className='spacer-20' />
                        <div className='flex items-start justify-center gap-4 theme-text-body-m lg:theme-text-body'>
                            <div className='w-[70px]'>
                                <div>{shopItem.aroma} ger??stet</div>
                            </div>
                            <div className='w-[70px]'>
                                <div>
                                    F??r{' '}
                                    {shopItem.cookingUtilities.map((item) =>
                                        item.split('_').join(' '),
                                    )}
                                </div>
                            </div>
                            <div className='w-[70px]'>
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
