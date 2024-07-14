import React, { useState } from 'react';

const BlogItem = ({ imgSrc, category, author, date, title, content }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
            <div className="blog-item bg-light rounded overflow-hidden">
                <div className="blog-img position-relative overflow-hidden">
                    <img className="img-fluid" src={imgSrc} alt="" />
                    <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">
                        {category}
                    </a>
                </div>
                <div className="p-4">
                    <div className="d-flex mb-3">
                        <small className="me-3">
                            <i className="far fa-user text-primary me-2"></i>{author}
                        </small>
                        <small>
                            <i className="far fa-calendar-alt text-primary me-2"></i>{date}
                        </small>
                    </div>
                    <h4 className="mb-3">{title}</h4>
                    <p>{isExpanded ? content : `${content.substring(0, 50)}...`}</p>
                    <button className="text-uppercase border-0" style={{background:'none', color:'#a442ad'}} onClick={toggleReadMore}>
                        {isExpanded ? 'Read Less' : 'Read More'} <i className="bi bi-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [visiblePosts, setVisiblePosts] = useState(6);

    const blogPosts = [
        {
            imgSrc: 'img/blog-1.jpg',
            category: 'Web Design',
            author: 'John Doe',
            date: '01 Jan, 2045',
            title: 'How to build a website',
            content: 'Dolor et eos labore stet justo sed est sed sed sed dolor stet amet. Dolor et eos labore stet justo sed est sed sed sed dolor stet amet. Dolor et eos labore stet justo sed est sed sed sed dolor stet amet.'
        },
        {
            imgSrc: 'img/blog-1.jpg',
            category: 'Web Design',
            author: 'John Doe',
            date: '01 Jan, 2045',
            title: 'How to build a website',
            content: 'Dolor et eos labore stet justo sed est sed sed sed dolor stet amet. Dolor et eos labore stet justo sed est sed sed sed dolor stet amet. Dolor et eos labore stet justo sed est sed sed sed dolor stet amet.'
        },
        {
            imgSrc: 'img/blog-1.jpg',
            category: 'Web Design',
            author: 'John Doe',
            date: '01 Jan, 2045',
            title: 'How to build a website',
            content: 'Dolor et eos labore stet justo sed est sed sed sed dolor stet amet. Dolor et eos labore stet justo sed est sed sed sed dolor stet amet. Dolor et eos labore stet justo sed est sed sed sed dolor stet amet.'
        },

        {
            imgSrc: 'img/blog-1.jpg',
            category: 'Web Design',
            author: 'John Doe',
            date: '01 Jan, 2045',
            title: 'How to build a website',
            content: 'Dolor et eos labore stet justo sed est sed sed sed dolor stet amet. Dolor et eos labore stet justo sed est sed sed sed dolor stet amet. Dolor et eos labore stet justo sed est sed sed sed dolor stet amet.'
        },
        {
            imgSrc: 'img/blog-1.jpg',
            category: 'Web Design',
            author: 'John Doe',
            date: '01 Jan, 2045',
            title: 'How to build a website',
            content: 'Dolor et eos labore stet justo sed est sed sed sed dolor stet amet. Dolor et eos labore stet justo sed est sed sed sed dolor stet amet. Dolor et eos labore stet justo sed est sed sed sed dolor stet amet.'
        },
        {
            imgSrc: 'img/blog-1.jpg',
            category: 'Web Design',
            author: 'John Doe',
            date: '01 Jan, 2045',
            title: 'How to build a website',
            content: 'Dolor et eos labore stet justo sed est sed sed sed dolor stet amet. Dolor et eos labore stet justo sed est sed sed sed dolor stet amet. Dolor et eos labore stet justo sed est sed sed sed dolor stet amet.'
        },
        {
            imgSrc: 'img/blog-1.jpg',
            category: 'Web Design',
            author: 'John Doe',
            date: '01 Jan, 2045',
            title: 'How to build a website',
            content: 'Dolor et eos labore stet justo sed est sed sed sed dolor stet amet. Dolor et eos labore stet justo sed est sed sed sed dolor stet amet. Dolor et eos labore stet justo sed est sed sed sed dolor stet amet.'
        },
        {
            imgSrc: 'img/blog-2.jpg',
            category: 'Graphic Design',
            author: 'Jane Smith',
            date: '01 Feb, 2045',
            title: 'Designing a logo',
            content: 'Dolor et eos labore stet justo sed est sed sed sed dolor stet amet. Dolor et eos labore stet justo sed est sed sed sed dolor stet amet. Dolor et eos labore stet justo sed est sed sed sed dolor stet amet.'
        },
        {
            imgSrc: 'img/blog-2.jpg',
            category: 'Graphic Design',
            author: 'Jane Smith',
            date: '01 Feb, 2045',
            title: 'Designing a logo',
            content: 'Dolor et eos labore stet justo sed est sed sed sed dolor stet amet. Dolor et eos labore stet justo sed est sed sed sed dolor stet amet. Dolor et eos labore stet justo sed est sed sed sed dolor stet amet.'
        },
        {
            imgSrc: 'img/blog-2.jpg',
            category: 'Graphic Design',
            author: 'Jane Smith',
            date: '01 Feb, 2045',
            title: 'Designing a logo',
            content: 'Dolor et eos labore stet justo sed est sed sed sed dolor stet amet. Dolor et eos labore stet justo sed est sed sed sed dolor stet amet. Dolor et eos labore stet justo sed est sed sed sed dolor stet amet.'
        },

        {
            imgSrc: 'img/blog-2.jpg',
            category: 'Graphic Design',
            author: 'Jane Smith',
            date: '01 Feb, 2045',
            title: 'Designing a logo',
            content: 'Dolor et eos labore stet justo sed est sed sed sed dolor stet amet. Dolor et eos labore stet justo sed est sed sed sed dolor stet amet. Dolor et eos labore stet justo sed est sed sed sed dolor stet amet.'
        },


        // Add more blog posts as needed
    ];

    const categories = ['All', 'Web Design', 'Graphic Design']; // Add more categories as needed

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setVisiblePosts(6); // Reset to 6 posts when category changes
    };

    const filteredBlogPosts = selectedCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    const visibleBlogPosts = filteredBlogPosts.slice(0, visiblePosts);

    const handleSeeMore = () => {
        setVisiblePosts(prev => prev + 6);
    };

    const handleSeeLess = () => {
        setVisiblePosts(6);
    };

    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                    <h5 className="fw-bold text-primary text-uppercase">Our projects</h5>
                    <h1 className="mb-0">Read The Latest Our projects</h1>
                </div>
                <div className="text-center mb-5">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'} mx-1`}
                            onClick={() => handleCategoryChange(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="row g-5">
                    {visibleBlogPosts.map((post, index) => (
                        <BlogItem key={index} {...post} />
                    ))}
                </div>
                <div className="text-center mt-4">
                    {visiblePosts < filteredBlogPosts.length && (
                        <button className="btn btn-primary mx-2" onClick={handleSeeMore}>See More</button>
                    )}
                    {visiblePosts > 6 && (
                        <button className="btn btn-primary mx-2" onClick={handleSeeLess}>See Less</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blog;
