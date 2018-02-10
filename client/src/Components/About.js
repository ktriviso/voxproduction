import React, {Component} from 'react'
import $ from "jquery"
const ReactMarkdown = require('react-markdown')

export default class About extends Component {

    render(){
        var aboutData = this.props.data.about

        return (
            <div>
                <section id="content-wrap" className="site-page">
                    <div className="row">
                        <div className="col-twelve">
                            <section>
                                <div className="content-media">
                                    <img src={aboutData.fields.mainPhoto.fields.file.url}/>
                                </div>

                                <div className="primary-content">
                                    <h1 className="entry-title add-bottom">{aboutData.fields.mainTitle}</h1>
                                    <p className="lead">{aboutData.fields.featuredContent}</p>
                                    <ReactMarkdown source={aboutData.fields.mainContent} />
                                </div>

                            </section>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
