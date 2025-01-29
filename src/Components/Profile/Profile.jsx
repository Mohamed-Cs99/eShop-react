import React from 'react';
import profileImage from '../../assets/profile.jpeg'
export default function Profile() {
  const userProfile = {
    name: 'Mohammed Maher',
    bio: 'Web Developer | Tech Enthusiast ',
    email: 'mohamed2017170366@outlook.com',
    phone: '01009516329',
    social: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://www.linkedin.com/in/mohamed-maher-a6a2b8177/',
      github: 'https://github.com/Mohamed-Cs99?tab=repositories'
    }
  };

  return (
    <div className="max-w-md mx-auto font-serif bg-white shadow-lg rounded-lg overflow-hidden my-5">
      <div className="sm:flex sm:items-center p-6">
        <img
          className="block mx-auto sm:mx-0 sm:flex-shrink-0  object-cover  w-24"
          src={profileImage}
          alt="User Avatar"
        />
        <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
          <div className="text-xl leading-tight font-semibold">{userProfile.name}</div>
          <div className="text-sm text-gray-600 mt-2">{userProfile.bio}</div>
          <div className="mt-4">
            <div className="flex items-center justify-center sm:justify-start mb-2">
              <i className="fas fa-envelope text-gray-600 mr-2"></i>
              <a href={`mailto:${userProfile.email}`} className="text-blue-500 hover:text-blue-700">{userProfile.email}</a>
            </div>
            <div className="flex items-center justify-center sm:justify-start mb-2">
              <i className="fas fa-phone text-gray-600 mr-2"></i>
              <span className="text-gray-700">{userProfile.phone}</span>
            </div>
            <div className="mt-4 flex justify-center sm:justify-start">
            
              <a
                href={userProfile.social.linkedin}
                className="text-blue-500 hover:text-blue-700 mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href={userProfile.social.github}
                className="text-gray-700 hover:text-gray-900 mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
