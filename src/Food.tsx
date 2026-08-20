import {useState} from "react";
import button from "./Button.tsx";

function Food() {

    const [foods, setFoods] = useState(["Apple"]);

    const handleAddFood = () => {

        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        if (newFood) {
            setFoods(f => [...f, newFood]);
        }
    };

    const handleRemoveFood = (index: number) => {

        setFoods(foods.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>Food List</h2>
            <ul>
                {foods.map((food, index) => (
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                         {food}
                    </li>
                ))}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name" />
            <button onClick={handleAddFood}>Add food</button>
        </div>
    )
}

export default Food;
