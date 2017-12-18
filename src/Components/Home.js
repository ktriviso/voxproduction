import React, {Component} from 'react'
import Masonry from 'react-masonry-component'
import Featured from './Partials/Featured'
import {Link} from 'react-router-dom'

export default class Home extends Component {

    componentDidlMount() {
        const script_1 = document.createElement('script')
        const script_2 = document.createElement('script')
        const script_3 = document.createElement('script')

        script_1.src = 'js/jquery-2.1.3.min.js'
        script_2.src = 'js/plugins.js'
        script_3.src = 'js/main.js'

        [script_1, script_2, script_3].forEach((script) => document.querySelector('body').appendChild(script))
    }
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
                         <Featured featuredPosts={featuredPosts}/>
                            <div className="bricks-wrapper">

                            <Masonry>

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
                                                                    <ul className="entry-meta">
                                                                            <li className="entry-excerpt">
                                                                                {blogPost.fields.categories.join(', ')}
                                                                            </li>
                                                                    </ul>
                                                        </span>
                                                    </div>
                                                    <h1 className="entry-title">
                                                        <Link to={'/blog/' + blogPost.sys.id}>{blogPost.fields.title}</Link>
                                                    </h1>
                                                </div>
                                                <div className="entry-excerpt">{blogPost.fields.featuredContent}</div>
                                            </div>
                                        </article>
                                    )
                                })}
                            </Masonry>

                            </div>
                    </div>
            </section>
        )
    }
}
