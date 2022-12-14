import { useState } from 'react'
import Head from 'next/head'

export default function Test() {
  const [retrieveKey, setRetrieveKey] = useState()
  const [createKey, setCreateKey] = useState()
  const [createValue, setCreateValue] = useState()
  const [updateKey, setUpdateKey] = useState()
  const [updateValue, setUpdateValue] = useState()
  const [destroyKey, setDestroyKey] = useState()

  const retrieve = async (key) => {
    fetch(`/api/retrieve/${key}`, {
      method: 'get',
    })
      .then((response) => response.json())
      .then((data) => console.log('retrieve', data))
  }

  const create = async (key, value) => {
    fetch(`/api/create/${key}`, {
      method: 'post',
      body: JSON.stringify({ value }),
    })
      .then((response) => response.json())
      .then((data) => console.log('create', data))
  }

  const update = async (key, value) => {
    fetch(`/api/update/${key}`, {
      method: 'put',
      body: JSON.stringify({ value }),
    })
      .then((response) => response.json())
      .then((data) => console.log('update', data))
  }

  const destroy = async (key, value) => {
    fetch(`/api/destroy/${key}`, {
      method: 'delete',
    })
      .then((response) => response.json())
      .then((data) => console.log('destroy', data))
  }

  const handleRetrieveSubmit = (e) => {
    e.preventDefault()
    retrieve(retrieveKey)
  }

  const handleCreateSubmit = (e) => {
    e.preventDefault()
    create(createKey, createValue)
  }

  const handleUpdateSubmit = (e) => {
    e.preventDefault()
    update(updateKey, updateValue)
  }

  const handleDestroySubmit = (e) => {
    e.preventDefault()
    destroy(destroyKey)
  }

  return (
    <div>
      <Head>
        <title>Test Blockchain Contract</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <form className="px-10 py-5" onSubmit={handleRetrieveSubmit}>
          <label className="mr-4">Retrieve</label>
          <input
            className="mr-4 px-2 py-1 border border-black"
            placeholder="key"
            value={retrieveKey}
            onChange={e => setRetrieveKey(e.currentTarget.value)}
          />
          <input className="px-6 py-1 border border-black" value="ok" type="submit" />
        </form>

        <form className="px-10 py-5" onSubmit={handleCreateSubmit}>
          <label className="mr-4">Create</label>
          <input
            className="mr-4 px-2 py-1 border border-black"
            placeholder="key"
            value={createKey}
            onChange={e => setCreateKey(e.currentTarget.value)}
          />
          <input
            className="mr-4 px-2 py-1 border border-black"
            placeholder="value"
            value={createValue}
            onChange={e => setCreateValue(e.currentTarget.value)}
          />
          <input className="px-6 py-1 border border-black" value="ok" type="submit" />
        </form>

        <form className="px-10 py-5" onSubmit={handleUpdateSubmit}>
          <label className="mr-4">Update</label>
          <input
            className="mr-4 px-2 py-1 border border-black"
            placeholder="key"
            value={updateKey}
            onChange={e => setUpdateKey(e.currentTarget.value)}
          />
          <input
            className="mr-4 px-2 py-1 border border-black"
            placeholder="value"
            value={updateValue}
            onChange={e => setUpdateValue(e.currentTarget.value)}
          />
          <input className="px-6 py-1 border border-black" value="ok" type="submit" />
        </form>

        <form className="px-10 py-5" onSubmit={handleDestroySubmit}>
          <label className="mr-4">Destroy</label>
          <input
            className="mr-4 px-2 py-1 border border-black"
            placeholder="key"
            value={destroyKey}
            onChange={e => setDestroyKey(e.currentTarget.value)}
          />
          <input className="px-6 py-1 border border-black" value="ok" type="submit" />
        </form>
      </div>
    </div>
  )
}
