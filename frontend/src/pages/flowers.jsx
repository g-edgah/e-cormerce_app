import { useEffect } from "react";

const Flowers = ({ setPage }) => {

    useEffect(() => {
        //ensures page is set to flowers when navigation is through other channels apart from button clicking such as navigating back 
        setPage("flowers")
    }, [])

    return (
        <div>flowers</div>
    )
}

export default Flowers