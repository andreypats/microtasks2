export {}

type TopCarsPropsType = {
    cars: Array<CarPropsType>
}

type CarPropsType = {
    manufacturer: string,
    model: string
}

export const TopCars = (props: TopCarsPropsType) => {
    return (
        <>
            <table>
                {props.cars.map(car => {
                    return (
                        <tr>
                            <th>{car.manufacturer}</th>
                            <td>- {car.model}</td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}