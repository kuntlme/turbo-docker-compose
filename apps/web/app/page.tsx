import React from 'react'
import { prismaClient } from 'db/client'

const page = async () => {
  const users = await prismaClient.user.findMany({});
  return (
    <div>{JSON.stringify(users)}</div>
  )
}

export default page