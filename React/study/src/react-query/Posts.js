import { useState } from "react";
import { useQuery } from "react-query"; // 서버에서 데이터 가져올때 사용할 hook

const maxPostPage = 10;

async function fetchPosts() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0"
    );
    return response.json();
}

export function Posts() {
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedPost, setSelectedPost] = useState(null);

    const { data, isError, error, isLoading } = useQuery('posts', fetchPosts); //쿼리이름, 함수(쿼리의 데이터 가져올 방법)
    if (isLoading) return <h3>Loading...</h3>;
    if (isError) return (
        <>
            <h3>something went wrong ㅠ</h3>
            <p>{error.toString()}</p>{/* TypeError: Failed to fetch */}
        </>
    )

    return (
        <>
            <ul>
                {data.map((post) => (
                    <li
                        key={post.id}
                        className='post-title'
                        onClick={() => setSelectedPost(post)}
                    >
                        {post.title}
                    </li>
                ))}
            </ul>
            <div className="pages">
                <button
                    disabled
                    onClick={() => {
                        // TODO
                    }}
                >
                    Next page
                </button>
            </div>
            <hr />
            {/* { selectedPost && } */}
        </>
    );
}