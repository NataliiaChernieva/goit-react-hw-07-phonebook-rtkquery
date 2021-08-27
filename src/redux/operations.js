// import { createApi } from '@reduxjs/toolkit/query';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3003' }),
    endpoints: (builder) => ({
        fetchContacts: builder.query({
            query: () => `/contacts`,
        }),
        // postContact: ,
        // deleteContact: ,
    
    }),
});

export default contactsApi;
 
export const {
    useFetchContactsQuery,
    usePostContactMutation,
    useDeleteContactMutation,
} = contactsApi;

