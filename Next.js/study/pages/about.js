import NavBar from "../components/NavBar";
import Head from "next/head";
import Seo from "../components/Seo";

export default function About() {  //export default function는 필수
    return (
        <div>
            {/* <NavBar /> */}
            <Seo title="About" />
            <h1>About 페이지 (o゜▽゜)o☆</h1>
        </div>
    ) 
} //react.js 컴포넌트를 export하는 파일을 pages에 두는것 -> next.js가 파일명 가져다 url이름으로 씀