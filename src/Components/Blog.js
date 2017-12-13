import React, {Component} from 'react'
import AppStore from '../AppStore/AppStore'

export default class Blog extends Component {

    constructor(props){
        super(props)
        this.state = {
            title: '',
            categories: [],
            content: '',
            mainPhoto: ''
        }
    }
    componentWillMount(){
        const blogPostId = this.props.match.params.blogPostId
        const blogPosts = AppStore.data.blogPosts
        const currentBlogPost = blogPosts.find((post) => post.sys.id = blogPostId)
        console.log(currentBlogPost)
        this.setState({
            title: currentBlogPost.fields.title,
            categories: currentBlogPost.fields.categories,
            content: currentBlogPost.fields.content,
            mainPhoto: currentBlogPost.fields.mainPhoto.fields.file.url
        })
    }
    componentDidMount(){
        console.log(this.props);
        console.log(this.state)
    }
    render() {
        var singleBlog = this.props.data.blogPosts;
        console.log(singleBlog);
        return (
            <section id="content-wrap" className="blog-single">
        <div className="row">
            <div className="col-twelve">
                <article className="format-standard">

                    <div className="content-media">
                        <div className="post-thumb">
                            <img src={this.state.mainPhoto} alt="building"/>
                        </div>
                    </div>

                            <div className="primary-content">

                            <h1 className="page-title">Hey, This Is A Standard Format Post.</h1>

                            <ul className="entry-meta">
                            <li className="date">September 06, 2016</li>
                            <li className="cat"><a href="">Wordpress</a><a href="">Design</a></li>
                            </ul>

                            <p className="lead">Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint.</p>

                            <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
                            </p>

                        </div>

                </article>
            </div>
        </div>
    </section>
        )
    }
}
