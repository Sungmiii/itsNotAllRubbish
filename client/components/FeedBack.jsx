import React from 'react'



class FeedBack extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            FeedBack: {
                Name: "a",
                Email: "b",
                Feedback: "c"
            }
        }
        this.submit = this.submit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {

        const feedback = this.state.FeedBack

        // console.log("handle the change for event ", event.target);
        if (event.target.name == "Name") {
            // console.log("handle the change for name");
            feedback.Name = event.target.value
        }
        else if (event.target.name == "Email") {
            // console.log("handle the change for Email");
            feedback.Email = event.target.value
        }
        else if (event.target.name == "Feedback") {
            // console.log("handle the change for feedback");
            feedback.Feedback = event.target.value
        }
        //feedback.Name = event.target.Name.value;
        //feedback.Email = event.target.Email.value;
        //feedback.Feedback = event.target.Feedback.value;

        this.setState({ FeedBack: feedback });
    }

    submit(event) {
        event.preventDefault();

        let dataToSend = {
            who: event.target.Name.value,
            where: event.target.Email.value,
            message: event.target.Feedback.value
        }

        // console.log(this.state)

        //Make a message to send to the server. this was obtained from http://youmightnotneedjquery.com/
        var request = new XMLHttpRequest();
        request.open('POST', '/', true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.send(JSON.stringify(dataToSend));

        request.onload = () => {
            console.log("the server sent something back", request.responseText)
            alert("we are taking your comments very seriously.... Also " + request.responseText)
        }

    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <h2>FeedBack</h2>
                    Name: <input onChange={this.handleChange} placeholder="name" type="text" name="Name" /><br />
                    Email: <input onChange={this.handleChange} placeholder="example@gmail.com" type="text" name="Email" /><br />
                    Feedback: <input onChange={this.handleChange} placeholder="your feedback is importent to us" type="text" name="Feedback" /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default FeedBack