import { useParams } from "react-router-dom";

const SearchPage = () => {
    const {city} = useParams();
    return (
        <div>
            user {city}
        </div>
    );
};

export default SearchPage;