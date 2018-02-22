import React, { Component } from 'react'
import {findDOMNode} from 'react-dom'
import CommentList from './CommentList'
import PropTypes from 'prop-types'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    }

    constructor(props) {
        super(props);        
    }

    componentWillReceiveProps(){

    }

    componentWillMount(){
    }

    render() {        
        const { article, isOpen, toggleOpen } = this.props;
        return (
            <div ref = {this.setContainerRef}>
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>{isOpen ? 'close' : 'open'}</button>
                {this.getBody()}
            </div>
        );
    }

    setContainerRef = ref => {
        this.container = ref;
    }

    componentDidMount(){
    }

    getBody() {        
        const { article, isOpen } = this.props;
        if (!isOpen) {
            return null;
        }
        return (
            <section>
                <p>{article.text}</p>
                <CommentList comments={article.comments} ref = {this.setCommentRef}/>
            </section>
        );
    }

    setCommentRef = ref => {
        this.container = ref;
    }

    
}

export default Article