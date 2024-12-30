import { Image, Video } from 'lucide-react'
import React from 'react'

const Query = () => {
  function handleCreatePost() {

  }
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-full md:w-[60%] 2xl:w-[40%] border rounded-lg p-2 space-y-2 ml-4 mr-4">
          <div className="flex items-center">
            {/* <User /> */}
            <div className="flex w-full">
              <input
                type="text"
                placeholder="Post a query"
                className="border-2 p-2 rounded-l-full pl-3 w-full outline-none"
              />
              <button onClick={handleCreatePost} className="rounded-r-full border-2 p-2 bg-[#2a458a] text-white w-20">
                Post
              </button>
            </div>
          </div>
          <div className='flex justify-around items-center'>
            <Image className='text-[#247933]' />
            <Video className='text-[#2a458a]' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Query
