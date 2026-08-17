function List(props: {
    category: string,
    items: Array<{
        id: number,
        name: string,
        calories: number
    }>
}) {

    const category = props.category || "Category";
    const itemList = props.items || [];

    const listItems = itemList.map((item) =>
        <li key={item.id}>
            {item.name}:&nbsp;{item.calories}</li>);

    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    )
}

export default List;
