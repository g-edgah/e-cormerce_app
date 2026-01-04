import { useEffect } from "react"   

const Bouquets = ({setPage}) => {

    useEffect(() => {
        //ensures page is set to bouquets when navigation is through other channels apart from button clicking such as navigating back 
        setPage("bouquets")
    }, [])
    
    return (
        <div>bouquets</div>
    )
}

export default Bouquets