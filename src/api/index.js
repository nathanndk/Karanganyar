import axiosInterceptor from "@/configs/axios-interceptor";
const api = {
    async post(endpoints, data) {
        try {
            const response = await axiosInterceptor.post(endpoints, data);
            return response;
        } catch (error) {
            return error;
        }
    },
    async patch(endpoints, data) {
        try {
            const response = await axiosInterceptor.patch(endpoints, data);
            return response;
        } catch (error) {
            return error;
        }
    },
    async get(endpoints, params) {
        try {
            // build params from object
            let queryString = "";
            if (params) {
                queryString = Object.keys(params)
                    .map((key) => key + "=" + params[key])
                    .join("&");
                queryString = "?" + queryString;
            }
            const response = await axiosInterceptor.get(
                endpoints + queryString
            );
            return response;
        } catch (error) {
            return error;
        }
    },
    async upload(endpoints, data) {
        try {
            const response = await axiosInterceptor.post(endpoints, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            return response;
        } catch (error) {
            return error;
        }
    },
    async delete(endpoints) {
        try {
            const response = await axiosInterceptor.delete(endpoints);
            return response;
        } catch (error) {
            return error;
        }
    },
};
export default api;
