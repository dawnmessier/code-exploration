import React from 'react'

const List = (props) => {
    this.items = props.countries.map((country, index) =>
        <tr key={country.code} index={index}><td>{country.name}</td><td>{country.code}</td></tr>
    )

    return (
        <div>
            <table className="country-table">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Code</td>
                    </tr>
                </thead>
                <tbody className="country-list">
                    {this.items}
                </tbody>
            </table>
        </div>
    )
}

export default List
