type Values = {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    dataSecurity: boolean;
};

export default async function handler(
    req: { method: string; body: Values },
    res: {
        status: (arg0: number) => {
            (): any;
            new (): any;
            json: { (arg0: { message: string }): void; new (): any };
        };
    },
) {
    if (req.method === 'POST') {
        const url = process.env.FORMSPREE_POST_API;
        console.log(url);
        const sendForm = async (values: Values) => {
            const response = await fetch(String(url!), {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    Accept: 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Sending message failed. \n Status: ${response.status}`);
            }
        };

        try {
            await sendForm(req.body);
            res.status(200).json({ message: 'Message sent successfully.' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error while sending the data.' });
        }
    } else {
        // Other Requests
    }
}

// type Props = {
//     sendForm: (values: Values) => Promise<void>;
// };

// export const getStaticProps: GetStaticProps = async () => {
//     console.log('env message', process.env.TEST);
//     const url = process.env.FORMSPREE_POST_API;

//     const sendForm = async (values: Values) => {
//         const response = await fetch(url!, {
//             method: 'POST',
//             body: JSON.stringify(values),
//             headers: {
//                 Accept: 'application/json',
//             },
//         });

//         if (!response.ok) {
//             throw new Error(`Sending message failed. \n Status: ${response.status}`);
//         }
//     };

//     return { props: { sendForm: sendForm } };
// };
