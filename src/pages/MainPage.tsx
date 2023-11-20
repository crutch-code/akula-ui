import React, {Component} from 'react'
import {NewsCard} from '../components/NewsCard'
import {NewsType} from '../types/NewsType'
import {REST} from "../api/REST";

export default class MainPage extends Component<any, any> {
    state = {
        news: []
    }

    componentDidMount() {
        REST.getNews().then(n => {
            this.setState({news: n});
        });
    }

    render() {
        const {news} = this.state;
        return (
            <main>
                <div className={'section'}>
                    <div className="container">
                        <div className="row mb-5">
                            {news.map((n: NewsType) =>
                                <div className="col-12 col-md-6 col-lg-6 mb-5">
                                    <NewsCard key={n.id} news={n} isPreview={true}/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}