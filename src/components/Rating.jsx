import {React, useEffect, useState} from 'react'
import axios from 'axios'

const Rating = () => {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)
    const [name, setName] = useState('');
    const [names, setNames] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try{
                const data = await axios.get(
                    'http://127.0.0.1:8000/rating/all'
                ).then(
                    (result) => {
                        setResults(result.data)
                        console.log(result.data)
                    }
                )
                
            }
            catch (e) {
                console.log(e)
            }
        }
        if (loading){
            fetchData()
            setLoading(false)
        }
        
    } )
  return (
    <div className='w-full'>
        <div className="absolute right-2/4 top-1/6 ">
            <div className='font-semibold text-6xl'>
                <h1>Рейтинг</h1>
            </div>
            {
                results.map((result, index) => (
                    <div className="flex font-semibold text-2xl m-12 h-50 rounded-lg bg-gray-200">
                        <div className='m-8 w-full'>
                            <h1>{index+1} место.</h1>
                            <h1>Игрок {result.user_id}</h1>
                            <h1>Кол-во очков {result.points} за {result.time} секунд</h1>
                            <h1 className='mt-5'>({result.speed} очков в секунду)</h1>
                            <h1 className='mt-7'>Дата создания {Date.parse(result.created_at)}</h1>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Rating