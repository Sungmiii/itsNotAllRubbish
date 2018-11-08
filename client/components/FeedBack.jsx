import React from 'react'



class FeedBack extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            FeedBack: {
                Name: "",
                Email: "",
                Feedback: ""
            }
        }
    this.submit = this.submit.bind(this)

    }

    submit(event){
        const feedback = this.state.feedback
        console.log({feedback},event)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <h2>FeedBack</h2>
                    Name: <input placeholder="name" type="text" name="Name" /><br />
                    Email: <input placeholder="example@gmail.com" type="text" name="Email" /><br />
                    Feedback: <input placeholder="your feedback is importent for us" type="text" name="Feedback" /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default FeedBack