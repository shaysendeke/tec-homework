import { useEffect, useState } from "react"


export default function UseFetch(url) {
    const [info, setInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = () => {
        fetch(url)
            .then(res => res.json())
            .then((data) => { setInfo(data); setIsLoading(false) })
            .catch(err => { setError(err); setIsLoading(false) })
    }
    useEffect(getData, []);
    return { info, isLoading, error };
}
