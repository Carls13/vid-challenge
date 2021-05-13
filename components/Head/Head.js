import Head from 'next/head';

export const MyHead = ({ title }) => {
    return (
        <Head>
            <title>Validated ID | {title}</title>
            <link rel="icon" href="/favicon.png" />
            <meta property="og:title" content="Validated ID" />
            <meta property="og:description" content="Página web de Validated ID." />
            <meta property="og:image" content="/favicon.ico" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="es_ES" />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css"
            />
            <script type="text/javascript" src="/pdf.js"></script>
            <script type="text/javascript" src="/pdf.worker.js"></script>
        </Head>
    )
};