import React, {Component} from 'react'
import axios from 'axios'
import EmailStatus from './EmailStatus'

export default class Contact extends Component{

    constructor(props){
        super(props)
        this.state={
            emailWasSent: false,
            name: '',
            email: '',
            number: '',
            message: ''
        }
    }

    handleNameInput(e){
        e.preventDefault()
        this.setState({name: e.target.value})
    }
    handleEmailInput(e){
        e.preventDefault()
        this.setState({email: e.target.value})
    }
    handleNumberInput(e){
        e.preventDefault()
        this.setState({number: e.target.value})
    }
    handleMessageInput(e){
        e.preventDefault()
        this.setState({message: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault()
        const _this = this
        axios.post('/sendEmail', {
            data: _this.state
        }).then(function(response){
            console.log(response)
            if(response.status === 200){
                _this.setState({
                    emailWasSent: true
                })
            }
        }).catch(function(error){
            console.log(error)
        })
    }

    render(){
        var contactData = this.props.data.contact
        console.log(contactData)
        let successStatus

        if(this.state.emailWasSent){
            successStatus = <EmailStatus/>
        }

        return (
            <section id="content-wrap" className="site-page">
                {successStatus}
                <div className="row">
                    <div className="col-twelve">
                        <section>
                            <div className="primary-content">

                                <h1 className="entry-title add-bottom">{contactData.fields.mainTitle}</h1>
                                <p className="lead">{contactData.fields.featuredContent}</p>
                                <p>{contactData.fields.mainContent}</p>


                                <div className="row">
                                    <div className="col-six tab-full">
                                        <h4>Where to Find Us</h4>
                                        <p>
                                        1600 Amphitheatre Parkway<br/>
                                        Mountain View, CA<br/>
                                        94043 US
                                        </p>
                                    </div>

                                    <div className="col-six tab-full">
                                        <h4>Contact Info</h4>
                                        <p>someone@abstractwebsite.com<br/>
                                        info@abstractwebsite.com <br/>
                                        Phone: (+63) 555 1212
                                        </p>
                                    </div>

                                </div>

                                <form name="cForm" id="cForm" onSubmit={this.handleSubmit.bind(this)}>
                                    <fieldset>
                                        <div className="form-field">
                                            <input name="cName" type="text" id="cName" className="full-width" placeholder="Your Name" value={this.state.name} onChange={this.handleNameInput.bind(this)}/>
                                        </div>
                                        <div className="form-field">
                                            <input name="cEmail" type="text" id="cEmail" className="full-width" placeholder="Your Email" value={this.state.email} onChange={this.handleEmailInput.bind(this)}/>
                                        </div>
                                        <div className="form-field">
                                            <input name="cWebsite" type="text" id="cWebsite" className="full-width" placeholder="Your number"  value={this.state.number} onChange={this.handleNumberInput.bind(this)}/>
                                        </div>
                                        <div className="form-field">
                                            <textarea name="cMessage" id="cMessage" className="full-width" placeholder="Your Message" value={this.state.message} onChange={this.handleMessageInput.bind(this)}></textarea>
                                        </div>
                                        <button type="submit" className="submit button-primary full-width-on-mobile">Submit</button>
                                    </fieldset>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        )
    }
}
