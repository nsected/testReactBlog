import React, {Component} from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
    state = {
        reverted: false
    }
    articles = articles.slice()
    render() {
        console.log('---', 2, this.state)
        return (

            <div className="container">
                <div classname="jumbotron">
                    <h1 className="display-3">
                        app name
                        <button className="btn btn-primary float-right" onClick={this.revert}>revert</button>
                    </h1>
                </div>
                <ArticleList articles={this.articles}/>
            </div>
        )
    }

    revert = () => {
        this.articles.reverse()
        this.setState({
            reverted: !this.state.reverted
        })
    }
}

export default App