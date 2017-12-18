import React, {Component} from 'react'

export default class About extends Component {
    render(){
        var aboutData = this.props.data.about
        console.log(aboutData);
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
                                    <p className="lead">{aboutData.fields.mainContent}</p>
                                    <p>{aboutData.fields.featuredContent}</p>
                                </div>

                            </section>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
