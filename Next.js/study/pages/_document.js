import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    render() {
        return (
            <Html lang='ko'> {/* 한국어 */}
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument