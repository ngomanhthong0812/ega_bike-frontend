"use client"

import { useEffect, useState } from "react";

const useFetch = (apiCall: Function, deps: [] = []) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const result = await apiCall()
                setData(result)
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message)
                } else {
                    setError("An unknown error occurred");
                }
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, deps)

    return { data, loading, error }
}
export default useFetch