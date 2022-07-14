import React from 'react';
import cookies from 'js-cookie';
import './single_post.css';
import Contact from '../../components/contact/contact';
import Footer from '../../components/footer/footer';
import PostHeader from './post_header';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const SinglePost = () => { 
    
    let { id } = useParams();
    const [post , setPost] = useState([]);
    const currentLangCode = cookies.get('i18next') || 'en';

    const fetchPost = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/posts/${id}`);
        const data = await response.json();
        return data;
    }

    useEffect(() => {
        const getPost = async () => {
            const post = await fetchPost();
            setPost(post);
        }
        getPost();
    });

    return (
        <>
        <PostHeader post={post}/>
        <section className="single-post container">
            <div className="content">
                <h3>
                    {currentLangCode === 'ar' ? post.arTitle : post.enTitle}
                </h3>
                <p>
                    {currentLangCode === 'ar' ? post.arContent : post.enContent}
                </p>
            </div>
        </section>
        <Contact />
        <Footer />
        </>
  )
}

export default SinglePost;