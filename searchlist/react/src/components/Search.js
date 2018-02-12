import React, { Component } from 'react'
import SearchForm from '../components/SearchForm'
import List from '../styled/List'

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            countries: [],
            showMessage: false
        }
    }

    setCountries = (countries) => {
        this.setState({
            countries: countries,
            showMessage: countries.length ? false : true
        })
    }

    render(){
        const hasCountries = this.state.countries.length
        const showMsg = this.state.showMessage
        return (
            <div>
                <SearchForm callbackFromParent={this.setCountries} />
                {hasCountries ? (
                    <div>
                        <p className="message">Your search returned {hasCountries} result(s)</p>
                        <List countries={this.state.countries} />
                    </div>
                ) :
                    showMsg ? (
                        <p className="message error">Your search returned 0 results</p>
                    ) : ''
                }
            </div>
        )
    }
}

export default Search
