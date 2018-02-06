import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ReactPlayer from 'react-player'


export default class Featured extends Component {


    render(){
        const featuredPosts = this.props.featuredPosts

        const posts_html = featuredPosts.map((post) =>  (
                <li>
                    <div className="featured-post-slide">
                    <div className="post-background" >
                        <ReactPlayer width='100%' height='100%' url={post.fields.mainPhoto.fields.file.url} playing />
                    </div>
                        <div className="overlay"></div>
                        <div className="post-content">
                            <ul className="entry-meta">
                                    <li className="entry-excerpt">{post.fields.categories.join(', ')}</li>
                            </ul>
                            <h1 className="slide-title">
                                <Link to={'/blog/' + post.sys.id}>{post.fields.title}</Link>
                            </h1>
                        </div>
                    </div>
                </li>
            ))

        return (
            <div className="brick entry featured-grid animate-this">
                <div className="entry-content">
                    <div id="featured-post-slider" className="flexslider slides">
                        {posts_html}
                    </div>
                </div>
            </div>

        )
    }
}
