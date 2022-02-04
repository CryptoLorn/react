import {useEffect, useState} from "react";

import Post from "../Post/Post";

export default function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts(value);
            });
    }, []);

    return (
        <div className={'posts_block'}>
            <h3>Posts</h3>
            <ul>
                {
                    posts.map(value => <li key={value.id}><Post props={value}/></li>)
                }
            </ul>
        </div>
    );
}