import Link from "next/link"
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
    const router = useRouter();
    
    return (
        <nav>
            <img src="/vercel.svg" /> {/* 경로에 public 안적고 바로 /로 이동 */}
            <div>
                <Link href="/">
                    <a className={router.pathname === "/" ? "active" : ""}>Home</a>
                </Link>
                <Link href="/about">
                    <a className={router.pathname === "/about" ? "active" : ""}>About</a>
                </Link>
            </div>
            <style jsx>{`
                nav {
                    display: flex;
                    gap: 10px;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 20px;
                    padding-bottom: 10px;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                }
                img {
                    max-width: 100px;
                    margin-bottom: 5px;
                }
                nav a {
                    font-weight: 600;
                    font-size: 18px;
                }
                .active {
                    color: tomato;
                }
                nav div {
                    display: flex;
                    gap: 10px;
                }
            `}</style>
        </nav>
    );
}

function NavBar1() {
    const router = useRouter();

    return (
        <>
            <nav className={styles.nav}> {/* 모듈 재사용성 굿. 충돌x */}
                <Link href="/"><a className={`${styles.link} ${
                        router.pathname === '/' ? styles.active : ''
                    }`}>Home</a></Link>{/* Link는 클라이언트 사이드 네비게이션 제공, 태그는 href가 목적일뿐, css는 a태그. + 2개이상의CSS추가 1번 */}
                <Link href="/about"><a className={[
                        styles.link,
                        router.pathname === '/about' ? styles.active : ''
                        ].join(' ')
                    }>About</a></Link>
                    {/* + 2개이상의CSS추가 2번 */}
            </nav>

            {/* styled jsx */}
            <nav className={styles.nav}> 
            <Link href="/">
                <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
            </Link>
            <Link href="/about">
                <a className={router.pathname === '/about' ? 'active' : ''}>About</a>
            </Link>
            {/* styled jsx : 모듈이 독립적(이 컴포넌트 내부에서만 적용. home에서 css줘도 변화x). 이름은 태그쓰면 정할필요x. class명도 타컴포넌트와 중복되도 상관없 */}
            <style jsx>{`
                nav {
                    background-color: pink;
                }
                a {
                    text-decoration: none;
                }
                .active {
                    color: red;
                }
            `}</style>
        </nav>

        </>
    );
}