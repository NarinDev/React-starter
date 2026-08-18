import {useState} from "react";

function Car() {
    const [car, setCar] = useState({
        year: 2024,
        make: "Ford",
        model: "Mustang"
    });

    const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCar(prevState => ({ ...prevState, year: Number( e.target.value )}));
    };

    const handleMakeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCar(prevState => ({ ...prevState, make: e.target.value }));
    };

    const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCar(prevState => ({ ...prevState, model: e.target.value }));
    };

    return (
        <div>
            <p>Your favorite car is {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange}/><br/>
            <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
            <input type="text" value={car.model} onChange={handleModelChange}/><br/>
        </div>
    )
}

export default Car;
