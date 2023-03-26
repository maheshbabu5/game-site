import { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
    const [old, setold] = useState([]);
    const [best, setbest] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:1337/api/olds').then((old) => {
            setold(old.data.data)
        }).catch(() => {

        }).finally(() => {

        });
        axios.get('http://localhost:1337/api/bests').then((best) => {
            setbest(best.data.data)
        }).catch(() => {

        }).finally(() => {

        });
    }, [])
    return (
        <>
        </>
    )
}

export default Main;