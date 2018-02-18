import React, {Component} from 'react'
import AppStore from '../AppStore/AppStore'
import $ from "jquery"
const ReactMarkdown = require('react-markdown')

export default class Blog extends Component {

    constructor(props){
        super(props)
        this.state = {
            title: '',
            categories: [],
            content: '',
            mainPhoto: '',
            date: '',
            featuredContent: '',
            videoConfig: ''
        }
    }
    componentWillMount(){
        const blogPostId = this.props.match.params.blogPostId
        const blogPosts = AppStore.data.blogPosts
        const currentBlogPost = blogPosts.find((post) => post.sys.id === blogPostId)
        console.log(currentBlogPost)
        this.setState({
            title: currentBlogPost.fields.title,
            categories: currentBlogPost.fields.categories,
            content: currentBlogPost.fields.content,
            mainPhoto: currentBlogPost.fields.mainPhoto.fields.file.url,
            date: currentBlogPost.fields.date,
            featuredContent: currentBlogPost.fields.featuredContent
        })
    }
    componentDidMount(){
        console.log(this.props);
        console.log(this.state);
    }
    render() {

        return (
            <section id="content-wrap" className="blog-single">
                <div className="row">
                    <div className="col-twelve">
                        <article className="format-standard">

                            <div className="content-media">
                                <div className="post-thumb">
                                    <figure><img src={this.state.mainPhoto}/></figure>
                                </div>
                            </div>
                            <div className="primary-content">
                                <h1 className="page-title">{this.state.title}</h1>
                                <ul className="entry-meta">
                                    <li className="date">{this.state.date}</li>
                                    <li className="cat">{this.state.categories}</li>
                                </ul>
                                <p className="lead">{this.state.featuredContent}</p>
                                <p>{this.state.content}</p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        )
    }
}
