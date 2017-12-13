import React, {Component} from 'react'
import Masonry from 'react-masonry-component'
import Featured from './Partials/Featured'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {

        var blogPosts = this.props.data.blogPosts.filter(function(post){
            return !post.fields.featured
        });
        var featuredPosts = this.props.data.featuredPosts
        console.log(featuredPosts);

        return (

            <section id="bricks">
                   	<div className="row masonry">
                         <div className="grid-sizer"></div>
                            <div className="bricks-wrapper">
                                <Featured featuredPosts={featuredPosts}/>
                                    {blogPosts.map(function(blogPost){
                                        return (
                                            <article className="brick entry format-standard animate-this">
                                               <div className="entry-thumb">
                                                  <Link to={'/blog/' + blogPost.sys.id}>
                                                    <img src={blogPost.fields.mainPhoto.fields.file.url} alt="building"/>
                                                  </Link>
                                               </div>
                                               <div className="entry-text">
                                                    <div className="entry-header">

                                                        <div className="entry-meta">
                                                            <span className="cat-links">
                                                                {blogPost.fields.categories.map(function(category){
                                                                    return (
                                                                        <a href="#">{category}</a>
                                                                    )
                                                                })}

                                                            </span>
                                                        </div>
                                                        <h1 className="entry-title">
                                                            <Link to={'/blog/' + blogPost.sys.id}>{blogPost.fields.title}</Link>
                                                        </h1>
                                                    </div>
                                                    <div className="entry-excerpt">{blogPost.fields.content}</div>
                                                </div>
                                            </article>
                                        )
                                    })}
                            </div>
                    </div>
            </section>
        )
    }
}
