export default async function handler(
    req: { method: string; body: string },
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
        const sendForm = async (values: string) => {
            const response = await fetch(String(url!), {
                method: 'POST',
                body: values,
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
            res.status(201).json({ message: 'Message sent successfully.' });
        } catch (error) {
            res.status(500).json({ message: 'Error while sending the data.' });
        }
    } else {
        // Other Requests
    }
}
