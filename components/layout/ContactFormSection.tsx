import { Formik, Field, Form, ErrorMessage } from 'formik';

import { useRouter } from 'next/router';
import * as Yup from 'yup';
import Button from '../UI/Button';
import FormErrorDiv from '../UI/FormErrorDiv';

type Values = {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    dataSecurity: boolean;
};

const initialValues = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    dataSecurity: false,
};

const validationSchema = Yup.object({
    name: Yup.string().trim().required('Bitte gib hier deinen Namen an.'),
    email: Yup.string()
        .email('Bitte gib eine gültige E-Mail Adresse an.')
        .required('Bitte gib deine E-Mail Adresse an.'),
    phone: Yup.number()
        .typeError('Bitte gib eine gültige Telefonnummer an.')
        .positive('Bitte gib eine gültige Telefonnummer an.')
        .integer('Bitte gib eine gültige Telefonnummer an.'),
    subject: Yup.string().required('Bitte wähle einen Betreff aus.'),
    message: Yup.string().trim().required('Bitte gib eine Nachricht ein.'),
    dataSecurity: Yup.boolean().isTrue(
        'Du must der Datenschutzerklärung zustimmen um fortzufahren.',
    ),
});

const ContactFormSection = () => {
    const router = useRouter();

    return (
        <section className='flex justify-center theme-text-body-m lg:theme-text-body'>
            <div className='cstm-container'>
                <h2 className='theme-text-h2-m lg:theme-text-h2'>
                    Du hast Fragen?
                    <br />
                    Schreib uns gern!
                </h2>
                <div className='spacer-35 lg:spacer-55' />
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={async (values, actions) => {
                        const sendForm = async (values: Values) => {
                            const response = await fetch('/api/kontakt', {
                                method: 'POST',
                                body: JSON.stringify(values),
                                headers: {
                                    Accept: 'application/json',
                                },
                            });

                            if (!response.ok) {
                                throw new Error(
                                    `Sending message failed. \n Status: ${response.status}`,
                                );
                            }
                        };

                        try {
                            await sendForm(values);
                            actions.resetForm();
                            actions.setSubmitting(false);
                            router.push('/kontakt/senden-erfolgreich');
                        } catch (error) {
                            actions.resetForm();
                            actions.setSubmitting(false);
                            router.push('/kontakt/senden-fehlgeschlagen');
                        }
                    }}
                >
                    {(formik) => (
                        <Form className='flex flex-col gap-[40px] lg:gap-[80px] min-w-[326px]'>
                            <div className='flex flex-col gap-[5px] lg:gap-[10px]'>
                                <label htmlFor='name'>Name*</label>
                                <Field
                                    id='name'
                                    name='name'
                                    type='text'
                                    placeholder='Name'
                                    className={`bg-no-placeholder ${
                                        formik.errors.name &&
                                        formik.touched.name &&
                                        'bg-rose-300 placeholder-rose-500'
                                    }`}
                                />
                                <ErrorMessage name='name' component={FormErrorDiv} />
                            </div>
                            <div className='flex flex-col gap-[5px] lg:gap-[10px]'>
                                <label htmlFor='email'>E-Mail*</label>
                                <Field id='email' name='email' placeholder='E-Mail' type='email' />
                                <ErrorMessage name='email' component={FormErrorDiv} />
                            </div>
                            <div className='flex flex-col gap-[5px] lg:gap-[10px]'>
                                <label htmlFor='phone'>Telefonnummer</label>
                                <Field
                                    id='phone'
                                    name='phone'
                                    type='text'
                                    placeholder='Telefonnummer'
                                    className={`bg-no-placeholder ${
                                        formik.errors.phone &&
                                        formik.touched.phone &&
                                        'bg-rose-300 placeholder-rose-500'
                                    }`}
                                />
                                <ErrorMessage name='phone' component={FormErrorDiv} />
                            </div>
                            <div className='flex flex-col gap-[5px] lg:gap-[10px]'>
                                <label htmlFor='subject' className='sr-only'>
                                    Betreff
                                </label>
                                <Field
                                    id='subject'
                                    name='subject'
                                    as='select'
                                    className='rounded-[5px] border-[3px] border-theme-anthrazit text-theme-anthrazit h-[50px] focus:border-theme-kraftpapier focus:ring-theme-kraftpapier'
                                >
                                    <option hidden defaultValue={'Dein Betreff'}>
                                        Dein Betreff
                                    </option>
                                    <option value='Fragen zur Lieferung'>
                                        Fragen zur Lieferung
                                    </option>
                                    <option value='Fragen zum Produkt'>Fragen zum Produkt</option>
                                    <option value='Vertriebsfragen'>Vertriebsfragen</option>
                                    <option value='einfach nur so!'>einfach nur so!</option>
                                </Field>
                                <ErrorMessage name='subject' component={FormErrorDiv} />
                            </div>
                            <div className='flex flex-col gap-[5px] lg:gap-[10px]'>
                                <label htmlFor='message'>Deine Nachricht</label>
                                <Field
                                    id='message'
                                    name='message'
                                    as='textarea'
                                    placeholder='Was hast du auf dem Herzen?'
                                    className={`bg-no-placeholder ${
                                        formik.errors.message &&
                                        formik.touched.message &&
                                        'bg-rose-300 placeholder-rose-500'
                                    }`}
                                />
                                <ErrorMessage name='message' component={FormErrorDiv} />
                            </div>
                            <div className='flex flex-col gap-[5px] lg:gap-[10px]'>
                                <label>
                                    <Field
                                        id='dataSecurity'
                                        name='dataSecurity'
                                        type='checkbox'
                                        className='mr-[12px] text-theme-anthrazit rounded w-[20px] h-[20px] border-[3px] border-theme-anthrazit focus:ring-theme-anthrazit'
                                    />
                                    Ich aktzeptiere die Datenschutzerklärung
                                </label>
                                <ErrorMessage name='dataSecurity' component={FormErrorDiv} />
                            </div>
                            <div className='mx-auto'>
                                <Button
                                    type='button'
                                    disabled={formik.isSubmitting}
                                    btnType='submit'
                                >
                                    abschicken
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
};

export default ContactFormSection;
