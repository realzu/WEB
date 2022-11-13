import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";

export default function Gnb() {
    const router = useRouter();
    let activeItem;

    if (router.pathname === '/') {
        activeItem = 'home';
    } else if (router.pathname === '/about') {
        activeItem = 'about';
    } else if (router.pathname === '/admin') {
        activeItem = 'admin';
    } // admin은 관리자 계정만 출입가능

    function goLink(e, data) { // data는 Menu.Item들의 속성을 가리킴
        if (data.name === 'home') {
            router.push('/');
        } else if (data.name === 'about') {
            router.push('/about');
        }
    }

    return (
        <Menu inverted>
        <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={goLink}
        />
        <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={goLink}
        />
        <Menu.Item
            name='admin'
            active={activeItem === 'admin'}
            onClick={() => {
                router.push('/admin')
            }}
        />
        </Menu>
    )
}