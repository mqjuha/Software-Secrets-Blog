import { useEffect, useState } from "react";
import Post from "../post/post";
import { response } from "express";

export default function Postlist() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/post').then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        });
    }, []);
    
    return (
        <div>
            {postMessage.length > 0 && postMessage.map( post => (
                <Post {...post} />
            ))}
        </div>
    );
}