import Axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Item from '../../src/component/item';
import { Loader } from 'semantic-ui-react';
import Head from 'next/head';

// 기존의 view/[id].js를 정적페이지로 만들기
const Post = ({item, name}) => {
    const router = useRouter();

    if (router.isFallback) { // isFallback통해서 동기처리 (처음엔 true -> false)
        return (
            <div style={{ padding: '100px 0' }}>
                <Loader active inline='centered'>
                    Loading
                </Loader>
            </div>
        )
    }

    return (
        <>
            {item && (
                <>
                    <Head>
                        <title>{item.name}</title>
                        <meta name='description' content={item.description}></meta>
                    </Head>
                    <Item item={item} />
                </>
            )}
        </>
    )
}

export default Post

// 프로덕션 모드로 실행 : 속도 빠름
export async function getStaticPaths() {
    const apiUrl = process.env.apiUrl;
    const res = await Axios.get(apiUrl);
    const data = res.data;

    return {
        // paths: [
        //     { params: { id: '740' } },
        //     { params: { id: '730' } },
        //     { params: { id: '729' } },
        // ],

        // 리스트 결과 기반으로 staticPath 넘겨줌
        paths: data.slice(0, 9).map(item => ({
            params: {
                id: item.id.toString(),
            }
        })),
        fallback: true
    };
}
// fallback이 false면 없는페이지 대응 안해줌

export async function getStaticProps(context) {
    const id = context.params.id;
    const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await Axios.get(apiUrl);
    const data = res.data;

    return {
        props: {
            item: data,
            name: process.env.name
        },
    };
;}