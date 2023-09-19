import Blogfilter from "../../components/blog_filter/blog_filter";
import BlogNavbar from "../../components/blog_nav_bar/blog_nav_bar";

import './blog_layout.css'

export default function Technology() {
    return (
        <div className="top-section">
            <BlogNavbar></BlogNavbar>
            <Blogfilter></Blogfilter>
            <p>TECHNOLOGY</p>
        </div>

    );
};