type Props = {
    title: string;
    text: string;
};

const InfoSectionText = ({ title, text }: Props) => {
    return (
        <section>
            <div className='cstm-container max-w-[440px] mx-auto theme-text-body-m lg:theme-text-body lg:max-w-[700px] '>
                <h2 className='theme-text-h2-m lg:theme-text-h2'>Frisches Gebäck von nebenan</h2>
                <div className='spacer-20' />
                <p>
                    Als es die ersten Hügel des Kursivgebirges erklommen hatte, warf es einen
                    letzten Blick zurück auf die Skyline seiner Heimatstadt Buchstabhausen, die
                    Headline von Alphabetdorf. Wehmütig lief ihm eine rhetorische Frage über die
                    Wange, dann setzte es seinen Weg fort. Unterwegs traf es eine Copy. Die Copy
                    warnte das Blindtextchen, da, wo sie herkäme wäre sie zigmal umgeschrieben
                    worden und alles, was von ihrem Ursprung noch übrig wäre, sei das Wort und und
                    das Blindtextchen solle umkehren und wieder in sein eigenes, sicheres Land
                    zurückkehren.
                </p>
            </div>
        </section>
    );
};

export default InfoSectionText;
