import React from 'react'
import ProfileHeader from '../components/ProfileHeader'
import ProfilePosts from '../components/ProfilePosts'
import ProfileFriends from '../components/ProfileFriends'
import CreatePost from '../components/CreatePost'

const UserProfile = () => {
  return (
    <div className="container mx-auto py-8">
      <ProfileHeader/>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
        <CreatePost onPost={(postText) => handlePostSubmission(postText)} />
          <ProfilePosts/>
        </div>
        <div>
          <ProfileFriends/>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
