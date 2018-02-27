import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Chatroom.css';

import Message from './Message.js';

class Chatroom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chats: [{
                username: "Ryan Best",
                content: <p>Hello World!</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "Austen Owens",
                content: <p>Love it! :heart:</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "Ryan Best",
                content: <p>Non</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "Trey Lewis",
                content: <p>Lorem ipsum dolor sit amet, nibh ipsum. Cum class sem inceptos incidunt sed sed. Tempus wisi enim id, arcu sed lectus aliquam, nulla vitae est bibendum molestie elit risus.</p>,
                img: "http://i.imgur.com/ARbQZix.jpg",
            }, {
                username: "Ryan Best",
                content: <p>So</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "Ryan Best",
                content: <p>Look at us: we're figments of my imagination, but that doesn't mean we aren't having a good time!</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "Ryan Best",
                content: <p>You can sign-up now to try out our private beta!</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "Austen Owens",
                content: <p>Definitely! Sounds great!</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }]
        };

        this.submitMessage = this.submitMessage.bind(this);
    }

    componentDidMount() {
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }

    submitMessage(e) {
        e.preventDefault();

        this.setState({
            chats: this.state.chats.concat([{
                username: "Ryan Best",
                content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";
        });
    }

    render() {
        const username = "Ryan Best";
        const { chats } = this.state;

        return (
            <div className="chatroom">
                <ul className="chats" ref="chats">
                    {
                        chats.map((chat) =>
                            <Message chat={chat} user={username} />
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default Chatroom;
