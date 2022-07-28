import Layout from "../components/Layout";

// Next.js는 시작 시 _app.js 를 먼저 (파일명(_app.js) 무조건. 함수명(App) 상관x)
export default function App({Component, pageProps}){    //외부의어떤컴포넌트, 컴포넌트+밑의return
    return  (
        /*
        <div>
            <Component {...pageProps} />
            <span>hello</span>
        </div>
        */
        
        /*
        <>
            <NavBar />
            <Component {...pageProps} />
            <footer></footer>
            <style jsx global>{`
                a {
                    color: white;
                }
            `}</style>
        </>
        */

        <Layout>    {/* Layout태그안의 컴포넌트들은 children에서 보여질것 */}
            <Component {...pageProps} />
        </Layout>

    );
}