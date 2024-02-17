
import { baseApi } from '../api/baseApi'

export const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "/products"
        })
    })

})


export const { useGetProductsQuery } = productApi;