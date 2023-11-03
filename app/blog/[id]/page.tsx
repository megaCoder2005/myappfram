import { Metadata } from 'next'
import React from 'react'
async function getData(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  });
  return response.json()
}
type Props ={
    params: {
        id: string
    }
}

export async function generateMetadata({ params: {id}}: Props): Promise<Metadata> {
   return {
        title: id, 
    }
}

const page= async ({ params: {id}}: Props) => {
  const post = await getData(id);
  return (
    <> 
      <h1>
      {post.title}
      </h1>
    <p>{post.body}</p>
    </>
  )
}

export default page