import React from 'react';

class List extends React.Component {
    listItems(numbers) {
        const items = numbers.map((number) => 
            <li key={number.toString()}>{number}</li>
        );
        return items;
    }

    render() {
        return (
            <ul>{this.listItems(this.props.numbers)}</ul>
        );
    }
}

export default List;