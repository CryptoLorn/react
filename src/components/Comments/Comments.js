import {useEffect, useState} from "react";

import Comment from "../Comment/Comment";

export default function Comments() {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments(value);
            });
    }, []);

    return (
        <div className={'comments_block'}>
            <h3>Comments</h3>
            <ul>
                {
                    comments.map(value => <li key={value.id}><Comment props={value}/></li>)
                }
            </ul>
        </div>
    );
}