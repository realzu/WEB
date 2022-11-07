import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import Footer from '../src/component/Footer';
import Top from '../src/component/Top';

function MyApp({Component, pageProps}){
    return (
        <div style={{ width: 1000, margin: '0 auto' }}>
            <Top />
            <Component {...pageProps} />;
            <Footer />
        </div>
    )
}

export default MyApp;

/* with 노마드코더
import Layout from "../components/Layout";
function App({Component, pageProps}){
    return  (        
        <div>
            <Component {...pageProps} />
            <span>hello</span>
        </div>        
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
        <Layout> -- Layout태그안의 컴포넌트들은 children에서 보여질것
            <Component {...pageProps} />
        </Layout>
    );
}
*/