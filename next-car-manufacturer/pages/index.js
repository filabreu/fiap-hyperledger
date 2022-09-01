import { useCallback, useEffect, useState } from 'react'
import Head from 'next/head'

import { get } from '../utils/http'

export default function Home() {
  const [nextCarKey, setNextCarKey] = useState(1)
  const [carList, setCarList] = useState([])

  const keyExists = (key) => get(`/api/exists/${key}`)
  const retrieveCar = (key) => get(`/api/retrieve/${key}`)

  useEffect(() => {
    keyExists(nextCarKey).then(() => {
      retrieveCar(nextCarKey)
        .then(car => {
          if (!car.isManufactured) {
            setCarList([...carList, car])
          }
        })
      
      setNextCarKey(nextCarKey + 1)
    })
    .catch(() => console.log("All cars fetched!"))
  }, [nextCarKey])

  console.log('carList', carList)

  return (
    <div>
      <Head>
        <title>Car Manufacturer</title>
        <meta name="description" content="FIAP MBA Hyperledger Car Manufacturer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
