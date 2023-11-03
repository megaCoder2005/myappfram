'use client'
import React from 'react'

const error = ({error}: {error: Error}) => {
  return (
    <h1>Oops ... {error.message}</h1>
  )
}

export default error