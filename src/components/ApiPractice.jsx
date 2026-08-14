import { useEffect, useState } from "react";

function ApiPractice() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getPosts() {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts"
                );

                if(!response.ok){
                    throw new Error("Request failed");
                }

                console.log("Response:", response);

                const data = await response.json();

                console.log("Data:", data);
                console.log("Number of Posts:", data.length);
                console.log("First Post:", data[0]);
                console.log("First post title:", data[0].title);

                setPosts(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        getPosts();
    }, []);

    if (loading) {
        return <h2>Loading Posts...</h2>;
    }

    if (error) {
        return <h2>Something went wrong</h2>;
    }

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default ApiPractice;