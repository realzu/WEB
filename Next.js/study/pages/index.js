import Axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Divider, Header } from 'semantic-ui-react';
import ItemList from '../src/component/ItemList';
import styles from '../styles/Home.module.css';

export default function Home() {
    const [list, setList] = useState([]);

    const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'; // $ npm i axios

    function getData() {
        Axios.get(API_URL).then(res => {
            setList(res.data);
        });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <Head>
                <title>HOME | 코딩앙마</title> {/* 타이틀 */}
            </Head>
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
        </div>
    )
}