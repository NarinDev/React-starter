import List from "./List.tsx";

function App() {
    const fruits = [
        { id: 1, name: "apple", calories: 95},
        { id: 2, name: "banana", calories: 105},
        { id: 3, name: "orange", calories: 45}
    ];

    return(
        <>
            <List items={fruits} category="Fruits"></List>
        </>
    )
}

export default App
