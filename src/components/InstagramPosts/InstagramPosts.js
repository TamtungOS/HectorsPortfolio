import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

const InstagramPosts = () => {
    const [posts, setPosts] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInstagramPosts = async () => {
            try {
                const response = await axios.get(
                    "/.netlify/functions/fetchInstagram");
                setPosts(response.data);
            }
            catch (error) {
                console.error("Error fetching Instagram posts: ", error);
                setError("Error fetching Instagram posts");
            }
        }
        fetchInstagramPosts();

        const interval = setInterval(fetchInstagramPosts, 30000);
        return () => clearInterval(interval);
    }
    , []);

    return (
        <Box>
            <Typography variant = "h4" align = "center">Instagram Posts</Typography>
            {error && <Typography color = "error" align = "center">{error}</Typography>}
            <Box display = "flex" justifyContent = "center" flexWrap = "wrap">
                {posts && posts.map((post, index) => (
                    <Card key = {index}
                    sx = {
                        {
                            width: 300,
                            margin: 2
                        }
                    }>
                    <CardMedia
                    component = {post.id_media_type === "IMAGE" ? "img" : "video"}
                    src = {post.media_url}
                    alt = {post.caption}
                    sx = {{ height: 250 }}
                    controls = { post.media_type === "VIDEO" }
                    />
                    <CardContent>
                        <Typography variant = "body2" color = "textSecondary">
                            {post.caption}
                        </Typography>
                        <a href = {post.permalink} target = "_blank" rel = "noreferrer">
                            View on Instagram
                        </a>
                    </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default InstagramPosts