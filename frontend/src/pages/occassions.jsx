import { useEffect } from "react";

const Occassions = ({setPage}) => {

    useEffect(() => {
        //ensures page is set to occassions when navigation is through other channels apart from button clicking such as navigating back 
        setPage("occassions")
    }, [])

    return (
        <div>Occassions</div>
    )
}

export default Occassions