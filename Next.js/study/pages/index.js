import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "3dc10d4f0f345933678589456591af68";

export default function Home() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        (async () => {
            const {results} = await (
                await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
                )
            ).json();
            setMovies(results);
        })();
    }, []);

    return (
        <div>
            <Seo title="Home" />
            {movies.map((movie) => (
                <div key={movie.id}>
                    <h4>{movie.original_title}</h4>
                </div>
            ))}
        </div>
    );
}




function basic() {
    // const [counter, setCounter] = useState(0);
    return (
        <>
        <div>
            <h4>Hello {counter}</h4>
            <button onClick={() => setCounter(prev => prev + 1)}>+</button>
        </div>
        <div>
            {/* <NavBar /> */}
            <h1 className="active">Hello</h1>
        </div>
    </>
    );
}
// 프레임워크는 나의코드를 호출, 라이브러리는 내가호출

// index.js는 앱의 홈 -> url에서 /슬래시로만 표시
// 앱의 페이지들이 미리 렌더링 = 정적(static)
/*
create react app: client-side render(CSR) = 브라우저가 HTML가져올때 빈 DIV가져옴
    브라우저는 JS코드가 왔을때에만 UI가능
Next.js: HTML(초기상태의 컴포넌트로 미리 생성된)먼저 보면서 API기다림. 이후 react.js로 상호작용
*/