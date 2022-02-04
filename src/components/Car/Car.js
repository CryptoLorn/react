import {useDispatch} from "react-redux";

import {carToUpdate} from "../../store/car.slice";
import "./Car.css"

const Car = ({car}) => {
    const {model, year, price} = car;
    const dispatch = useDispatch();

    return (
        <div className={'car'}>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => dispatch(carToUpdate({car}))}>Update</button>
        </div>
    )
}

export default Car;