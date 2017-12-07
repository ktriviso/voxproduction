import React, {Component} from 'react'
import OwlCarousel from 'react-owl-carousel2';


export default class Featured extends Component {
    render(){
        const featuredPosts = this.props.featuredPosts
        console.log(featuredPosts)
        const options = {
            items: 1,
            nav: false,
            rewind: true,
            autoplay: true
        }
        const posts_html = featuredPosts.map((post) =>  (
                <li>
                    <div className="featured-post-slide">

                        <div className="post-background" style={{backgroundImage: 'url(' + post.fields.mainPhoto.fields.file.url + ')'}}></div>

                        <div className="overlay"></div>

                        <div className="post-content">
                            <ul className="entry-meta">
                                    <li className="entry-excerpt">{post.fields.categories.join(', ')}</li>
                            </ul>

                            <h1 className="slide-title"><a href="single-standard.html" title="">{post.fields.title}</a></h1>
                        </div>

                    </div>
                </li>
            ))

        return (
            <div className="brick entry featured-grid animate-this">
                <div className="entry-content">
                    <div id="featured-post-slider" className="flexslider">
                        <OwlCarousel className='slides' options={options}>
                            {posts_html}
                        </OwlCarousel>
                    </div>
                </div>
            </div>

        )
    }
}
