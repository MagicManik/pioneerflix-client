import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://infinite-island-65121.herokuapp.com/'
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
        // console.log(video);
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

    // delete user uploaded video by Id for manageVideo
    deleteUsersVideo: builder.mutation({
      query: (id) => ({
        url: `uploadedVideo/${id}`,
        method: 'DELETE'
      }),
    }),



    // to post or create like || Manik Islam Mahi
    uploadLike: builder.mutation({
      query: (newLike) => ({
        url: 'like',
        method: 'POST',
        body: newLike,
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        }
      }),
    }),

    // to delete or remove like || Manik Islam Mahi
    deleteLike: builder.mutation({
      query: (likedId) => ({
        url: `likes/${likedId}`,
        method: 'DELETE'
      }),
    }),


    // to post or create comment || Manik Islam Mahi
    // uploadComment: builder.mutation({
    //   query: (newComment) => ({
    //     url: 'comment',
    //     method: 'POST',
    //     body: newComment,
    //     headers: {
    //       'Content-Type': 'application/json; charset=UTF-8',
    //     }
    //   })
    // }),

    // to load all comments || Manik Islam Mahi
    // loadComments: builder.query({
    //   query: () => ({
    //     url: 'comments',
    //     method: 'GET'
    //   }),
    // }),


    // to put or upsert my list data || Manik Islam Mahi
    updateWatchList: builder.mutation({
      query: (sendData) => {
        const { id, ...data } = sendData;
        // console.log({ id, data });
        return {
          url: `watchlist/${id}`,
          method: 'PUT',
          body: data,
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          }
        }
      },
    }),

    // to delete or remove my list data || Manik Islam Mahi
    deleteMyList: builder.mutation({
      query: (id) => ({
        url: `mylist/${id}`,
        method: 'DELETE'
      }),
    }),

    // to put or upsert my list data || Manik Islam Mahi
    upsertWatchList: builder.mutation({
      query: (sendData) => {
        const { email, ...data } = sendData;
        return {
          url: `mylist/${email}`,
          method: 'PUT',
          body: data,
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          }
        }
      }
    }),


    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  }),

})

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const { useGetAllVideosQuery, useDeleteUiVideoMutation, useUploadByAdminMutation, useUpdateUserProfileMutation, useUploadLikeMutation, useUpdateWatchListMutation, useDeleteLikeMutation, useUploadCommentMutation, useDeleteMyListMutation, useUpsertWatchListMutation, useLoadCommentsQuery, useUploadFinalVideoMutation, useDeleteUsersVideoMutation } = postApi;