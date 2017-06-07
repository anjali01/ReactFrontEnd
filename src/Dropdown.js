import React, { Component } from 'react';

class Dropdown extends Component {
    changeList(option) {
        return (<option value={option.code}>{option.name}</option>);
    }

    sorter(toBeSorted) {
        toBeSorted.sort(function(one, two) {
            var name1 = one.name.toLowerCase();
            var name2 = two.name.toLowerCase();
            if (name1 < name2) {
                return -1;
            }
            else if (name1 > name2) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return toBeSorted;
    }

    render() {
        var sortedArrayList = this.sorter(this.props.arrayList);
        return (
            <div>
                <select id='dropdown' onChange={this.props.onChange}>
                    <option value='firstChoice'>Pick One of the Options</option>
                    {sortedArrayList.map(this.changeList)}
                </select>
            </div>
        );
    }
}

export default Dropdown;