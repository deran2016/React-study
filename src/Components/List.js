import React from 'react';

function List(props) {
    function listItems(numbers) {
        const items = numbers.map((number) => 
            <li key={number.toString()}>{number}</li>
        );
        return items;
    }

    return (
        <ul>{listItems(props.numbers)}</ul>
    );
}

export default List;