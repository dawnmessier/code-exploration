import React, { Component } from 'react'
import {countries} from '../json/countries' //normally pull from API

class SearchForm extends Component {
    constructor(props){
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
        //this.handleChange = this.handleChange.bind(this)
    }

    //NOTE: If manipulating the form values, use controlled handleChange(). Otherwise, can use uncontrolled refs to just grab values
    // handleChange = (e) => {
    //     const target = e.target
    //     if(target.type === 'search'){
    //         this.searchValue = target.value
    //     } else {
    //         this.searchType = target.value
    //     }
    // }

    handleSubmit = (e) => {
        e.preventDefault()

        const finalCountries = this.chooseList(this.searchType.value, this.searchValue.value)

        this.props.callbackFromParent(finalCountries)
    }

    chooseList = (type, value) => {
        //return matches of value to country based on type or name
        var filteredList = countries.filter(country => {
            var currentType = (type === 'code') ? country.code : country.name

            currentType = currentType.toLowerCase()

            return currentType.indexOf(value.toLowerCase()) !== -1
        })

        return filteredList
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="search-countries" method="get">
                    <label htmlFor="searchValue" className="sr-only">Search By Name or Code</label>
                    <input id="searchValue" ref={input => this.searchValue = input} type="search" name="searchValue" placeholder="Search..." required />

                    <label htmlFor="searchType" className="sr-only">Choose to search by Name or Code</label>
                    <select id="searchType" defaultValue="name" name="searchType" ref={input => this.searchType = input}>
                        <option value="name">By Name</option>
                        <option value="code">By Code</option>
                    </select>

                    <input type="submit" value="Find it!" />
                </form>
            </div>
        )
    }
}

export default SearchForm
