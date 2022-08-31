import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/'
  }),

  endpoints: (builder) => ({
    // get all video for dashboard from main videosCollection { mohiuddin }
    getAllVideos: builder.query({
      query: () => ({
        url: 'videos',
        method: 'GET'
      }),
    }),

    // delete video by Id for dashboard from main videosCollection { mohiuddin }
    deleteUiVideo: builder.mutation({
      query: (id) => ({
        url: `uiVideo/${id}`,
        method: 'DELETE'
      }),
    }),

    // post video by admin for dashboard stored main videosCollection { mohiuddin }
    uploadByAdmin: builder.mutation({
      query: (userUploadVideo) => ({
        url: 'adminUploadVideo',
        method: 'POST',
        body: userUploadVideo,
        headers: {
          'content-type': 'application/json; charset=UTF-8',
        }
      }),
    }),

    // update user profile in my profile route { mohiuddin }
    updateUserProfile: builder.mutation({
      query: (userProfile) => {
        const { profileEmail, ...data } = userProfile;
        // console.log({profileEmail, data});
        return {
          url: `userProfile/${profileEmail}`,
          method: 'PUT',
          body: data,
          headers: {
            'content-type': 'application/json; charset=UTF-8',
          }
        }
      },
    }),
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    // post final upload video by admin for dashboard stored main videosCollection
    uploadFinalVideo: builder.mutation({
      query: (video) => {
        console.log(video);
        return {
          url: 'finalUploadByAdmin',
          method: 'POST',
          body: video,
          headers: {
            'content-type': 'application/json; charset=UTF-8',
          }
        }
      },
    }),







    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  }),

})

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const { useGetAllVideosQuery, useDeleteUiVideoMutation, useUploadByAdminMutation, useUpdateUserProfileMutation, useUploadFinalVideoMutation } = postApi;