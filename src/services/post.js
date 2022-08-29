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
  }),

})

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const { useGetAllVideosQuery, useDeleteUiVideoMutation } = postApi;