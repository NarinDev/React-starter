import {useState} from "react";
function MakeCar() {

    const [cars, setCars] = useState(new Array());
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){

        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        }

        setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index: number) {

        setCars(c => c.filter((_, i) => i !== index));
    }

    function handleYearChange(e: React.ChangeEvent<HTMLInputElement>) {

        setCarYear(Number( e.currentTarget.value ));
    }

    function handleMakeChange (e: React.ChangeEvent<HTMLInputElement>) {

        setCarMake(e.currentTarget.value);
    }

    function handleModelChange(e: React.ChangeEvent<HTMLInputElement>) {

        setCarModel(e.currentTarget.value);
    }

    return (
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car, index) => (
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model};
                    </li>
                ))}
            </ul>

            <input type="number" value={carYear} onChange={(e) => handleYearChange(e)} /> <br/>
            <input type="text" value={carMake} onChange={(e) => handleMakeChange(e)} placeholder="Enter the car make"/> <br/>
            <input type="text" value={carModel} onChange={(e) => handleModelChange(e)} placeholder="Enter the car model"/> <br/>
            <button onClick={handleAddCar}>Add car</button>

        </div>
    )
}

export default MakeCar;
