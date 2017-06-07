import React, { Component } from 'react';

class Dropdown extends Component {
    changeList(option) {
    return (<option value={option.code}>{option.name}</option>);
    }

    sorter(toBeSorted) {
        toBeSorted.sort(function(one, two) {
            var country1 = one.name.toLowerCase();
            var country2 = two.name.toLowerCase();
            if (country1 < country2) {
                return -1;
            }
            else if (country1 < country2) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return toBeSorted;
    }

    render() {
        var sortedCountries = this.sorter(this.props.countryList);
        return (
            <div>
                <select id='dropdown'>
                    <option value=''>Pick One of the Options</option>
                    {sortedCountries.map(this.changeList)}
                </select>
            </div>
        );
    }
}

export default Dropdown;