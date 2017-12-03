import React, {Component} from 'react'
import Masonry from 'react-masonry-component'

export default class Home extends Component {
    render() {
        const postBackgroundStyle = {
            backgroundImage: "url(images/thumbs/featured/featured-3.jpg)"
        }
        return (

            <section id="bricks">
                   	<div className="row masonry">
                         <div className="grid-sizer"></div>
                            <Masonry className="bricks-wrapper">
                                <article className="brick entry format-standard animate-this">
                                   <div className="entry-thumb">
                                      <a href="single-standard.html" className="thumb-link">
                    	                  <img src="/diagonal-building.jpg" alt="building"/>
                                      </a>
                                   </div>
                                   <div className="entry-text">
                                       	<div className="entry-header">

                                       		<div className="entry-meta">
                                       			<span className="cat-links">
                                       				<a href="#">Design</a>
                                       				<a href="#">Photography</a>
                                       			</span>
                                       		</div>
                                       		<h1 className="entry-title"><a href="single-standard.html">Just a Standard Format Post.</a></h1>
                                       	</div>
                						<div className="entry-excerpt">
                							Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                						</div>
                                    </div>
                                </article>
                            </Masonry>
                    </div>
            </section>
        )
    }
}
