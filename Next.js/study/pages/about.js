import { Divider, Header, List } from "semantic-ui-react";

export default function About() {  //export default function는 필수
    return (
        <div>
            <Header as='h3' style={{ paddingTop: 40 }} color='teal'>
                회사 소개
            </Header>
            <Divider />
            <List>
                <List.Item>
                    <List.Icon name="users"/>
                    <List.Content>semantic UI</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name="marker"/>
                    <List.Content>New York, NY</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name="mail"/>
                    <List.Content>
                        <a href="mailto:jinhh501@naver.com">jinhh501@naver.com</a>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name="linkify"/>
                    <List.Content>
                        <a href="http:///www.semantic-ui.com">semantic-ui.com</a>
                    </List.Content>
                </List.Item>
            </List>
        </div>
    ) 
} //react.js 컴포넌트를 export하는 파일을 pages에 두는것 -> next.js가 파일명 가져다 url이름으로 씀