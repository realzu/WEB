import Axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Divider, Header, Loader } from 'semantic-ui-react';
import ItemList from '../src/component/ItemList';
import styles from '../styles/Home.module.css';

export default function Home() {
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // 데이터 로딩 표시

    const API_URL = process.env.NEXT_PUBLIC_API_URL; // $ npm i axios // 브라우저 환경

    function getData() {
        Axios.get(API_URL).then(res => {
            setList(res.data);
            setIsLoading(false);
        });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <Head>
                <title>HOME | 코딩앙마</title> {/* 타이틀 */}
                <meta name='description' content='코딩 앙마 홈입니다.'></meta>
            </Head>
            {isLoading && (
                <div style={{ padding: '300px 0' }}>
                    <Loader inline='centered' active>
                        Loading
                    </Loader>
                </div>
            )}
            {!isLoading && (
                <>
                    <Header as='h3' style={{ paddingTop: 40 }}>
                        베스트 상품
                    </Header>
                    <Divider />
                    <ItemList list={list.slice(0, 9)} /> {/* ★slice로 배열나누기 */}
                    <Header as='h3' style={{ paddingTop: 40 }}>
                        신상품
                    </Header>
                    <Divider />
                    <ItemList list={list.slice(9)} />
                </>
            )}
        </div>
    )
}


// 정적 생성
export function StaticHome() { // html -> 데이터 바로 생기니까 로딩표시도 필요x
    return (
        <div>
            <Head>
                <title>HOME | 코딩앙마</title>
                <meta name='description' content='코딩 앙마 홈입니다.'></meta>
            </Head>
            <>
                <Header as='h3' style={{ paddingTop: 40 }}>
                    베스트 상품
                </Header>
                <Divider />
                <ItemList list={list.slice(0, 9)} />
                <Header as='h3' style={{ paddingTop: 40 }}>
                    신상품
                </Header>
                <Divider />
                <ItemList list={list.slice(9)} />
            </>
        </div>
    )
}

export async function getStaticProps(context) {
    const apiUrl = process.env.apiUrl; // apiUrl 추가해줬음
    const res = await Axios.get(apiUrl);
    const data = res.data;

    return {
        props: {
            list: data,
            name: process.env.name
        }
    };
} // 위의 list에 data 넣어줌