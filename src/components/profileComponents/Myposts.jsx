import React from 'react'
import {useProfile }from '../../hooks/useProfile'
import PostHeader from '../PostElements/PostHeader';
import PostBody from '../PostElements/PostBody';
import PostActions from '../PostElements/PostActions';
import PostComments from '../PostElements/PostComments';

const Myposts = () => {
  const {state} = useProfile();
  const posts = state?.posts;
  return (
    <>
    <section className="w-full h-auto px-2 md:px-14">
      <h1 className="text-xl  font-semibold font-basic tracking-wider">Your posts</h1>
      <div className="flex flex-col gap-2">
        {posts && posts.map((post)=> (
          <div className="p-3 bg-[#0d1321] rounded-sm" key={post.id}>
               <PostHeader post={post}  />
               <PostBody  poster={post?.image} content={post?.content} />
               <PostActions postId={post?.id} commentCount={post?.comments?.length} />
               <PostComments />
          </div>
        ))
           
        }
      </div>
        
    </section>
    </>
  )
}

export default Myposts