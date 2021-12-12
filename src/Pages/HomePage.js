import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { PostItem } from '../Components/PostItem';

export function HomePage({ firebaseApp }) {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const db = getFirestore(firebaseApp);
      const postsCol = collection(db, 'posts');
      const postsSnapshot = await getDocs(postsCol);
      const processedPosts = postsSnapshot.docs.map((doc) => {
        const data = doc.data();
        const createdAt = data.createdAt.seconds;
        return {
          ...data,
          createdAt
        }
      });
      const sortedPostsByDateDesc = processedPosts.sort((a, b) => {
        return b.createdAt - a.createdAt;
      });
      setPosts(sortedPostsByDateDesc);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  return <>
    {
      posts.map((post) => <PostItem
        key={post.title + post.createdAt}
        title={post.title}
        content={post.content}
        createdAt={post.createdAt}
        type={post.type} />
      )
    }
  </>
}
