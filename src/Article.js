import React, { Component } from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }

        this.toggleOpen = this.toggleOpen.bind(this);
    }

    render() {
        const { isOpen } = this.state;
        const { article } = this.props;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.toggleOpen}>{isOpen ? 'close' : 'open'}</button>
                {this.getBody()}
            </div>
        );
    }

    getBody() {
        if (!this.state.isOpen) {
            return null;
        }
        const { article } = this.props;
        return (
            <section>
                <p>{article.text}</p>
                <CommentList comments={article.comments} />
            </section>
        );
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}