function UserList(props) {
    function listItems(members) {
        const items = members.map((member) => 
            <li key={member.id}><b>{member.name}</b>({member.age}/{member.sex})</li>
        );
        return items;
    };

    return (
        <ul>{listItems(props.users)}</ul>
    );
}

export default UserList;