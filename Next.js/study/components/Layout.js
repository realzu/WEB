import NavBar from "./NavBar";

export default function Layout({children}){ //children은 react.js가 제공하는 prop (하나의 컴포넌트를 또다른 컴포넌트에)
    return (
        <>
            <NavBar />
            <div>{children}</div>
        </>
    )
}