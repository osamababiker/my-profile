import React from 'react';
import cookies from 'js-cookie';
import parse from 'html-react-parser';
import './single_post.css';
import Contact from '../../components/contact/contact';
import Footer from '../../components/footer/footer';
import PostHeader from './post_header';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const SinglePost = () => { 
    
    let { id } = useParams();
    const [post , setPost] = useState({});
    const currentLangCode = cookies.get('i18next') || 'en';


    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/posts/${id}`)
            .then(response => response.json())
            .then(json => setPost(json));
    },[id]);

    return (
        <>
        {post.id ?
        <>
            <PostHeader post={post}/>
            <section className="single-post container">
                <div className="content">
                    <h3>
                        {currentLangCode === 'ar' ? parse(post.arTitle) : parse(post.enTitle)}
                    </h3>
                    <p>
                        {currentLangCode === 'ar' ? parse(post.arContent) : parse(post.enContent)}
                    </p>
                </div>
            </section>
            <Contact />
            <Footer />
        </>
        : 
        <>
            <section className='text-center'>
                <p> Problem loading this content </p>
            </section>
        </>
        }
        </>
  )
}

export default SinglePost;