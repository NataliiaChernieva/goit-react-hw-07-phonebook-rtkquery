// import { createApi } from '@reduxjs/toolkit/query';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://612a2381068adf001789ba5f.mockapi.io/api/v1/'
    }),
    tagTypes:['Contacts'],
    endpoints: (builder) => ({
        fetchContacts: builder.query({
            query: () => `/contacts`,
            providesTags: ['Contacts'],
        }),
        postContact: builder.mutation({
            query: (newContact) => ({
                url: '/contacts',
                method: 'POST',
                body: newContact,
            }),
            invalidatesTags:['Contacts'],
        }),
        deleteContact:builder.mutation({
            query: (contactId) => ({
                url: `/contacts/${contactId}`,
                method: 'DELETE',
            }),
            invalidatesTags:['Contacts'],
        }),
    }),
});


export default contactsApi;
 
export const {
    useFetchContactsQuery,
    usePostContactMutation,
    useDeleteContactMutation,
} = contactsApi;

