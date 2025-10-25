import React from 'react'

interface BlogSubPageProps {
    params: {
      blogId: string;
    };
  }

export default async function blogsubpage({params,}:BlogSubPageProps) 
{
    const {blogId}= await params;
  return (
    <div>this is an individual blog page for blog {blogId}</div>
  );
}

