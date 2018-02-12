function SearchItems() {
    //Normally this would come from API
    var originalData = countries

    return {
        getList: (value, type) => {
            //return matches of value to country based on type or name
            var filteredList = countries.filter(country => {
                var currentType = (type === 'code') ? country.code : country.name

                currentType = currentType.toLowerCase()

                return currentType.indexOf(value.toLowerCase()) !== -1
            })

            return filteredList
        }
    }
}

var Search = new SearchItems()
