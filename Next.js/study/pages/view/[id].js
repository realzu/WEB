import Axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Item from '../../src/component/item';
import { Loader } from 'semantic-ui-react';
import Head from 'next/head';

const Post = ({item, name}) => { // getServerSideProps에서 넘어온 item
    return (
        <>
            {item && (
                <>
                    <Head>
                        <title>{item.name}</title>
                        <meta name='description' content={item.description}></meta> {/* 검색엔진에 내용이 담기므로 SEO 최적화 굿 */}
                    </Head>
                    {/* {name} 환경 입니다. */}
                    <Item item={item} />
                </>
            )}
        </>
    )
}

export default Post

export async function getServerSideProps(context) {
    const id = context.params.id; // 넘어온 상품아이디
    const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await Axios.get(apiUrl);
    const data = res.data;

    return {
        props: {
            item: data, // data를 item에 넣어줌
            name: process.env.name // 서버니까
        },
    };
;}