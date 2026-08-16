function List(props) {
    const listItems = props.items.map((item) =>
        <li key={item.id}>
            {item.name}:&nbsp;{item.calories}</li>);

    return (
        <>
            <h3>{props.category}</h3>
            <ul>{listItems}</ul>
        </>
    )
}

export default List;
