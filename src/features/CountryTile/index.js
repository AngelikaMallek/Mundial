import { useParams } from "react-router-dom";

const CountryTile = () => {
    const { id } = useParams();
    const counrtyId = id;

    return (
        <p>{counrtyId}</p>
    )
}

export default CountryTile;