import Request from "@/network";
import { AxiosHeaders } from "axios";
const request = new Request({
    headers: new AxiosHeaders({
        "Content-Type": "application/json",
    }),
    baseURL: "http://39.108.104.70:19999",
    withCredentials: true,
    interceptors: {
        requestInterceptors: (config) => {
            config.headers["Authorization"] = "Bearer " + ""; // token
            return config;
        },
    },
});

// get 请求
export const get = (url: string, params?: any): Promise<any> =>
    request.request({
        headers: new AxiosHeaders({
            "Content-Type": "application/json",
        }),
        method: "get",
        url: url,
        params,
    });

// post 请求
export const post = (url: string, data?: any, isBody: boolean = true) =>
    request.request({
        headers: new AxiosHeaders({
            "Content-Type": "application/json",
        }),
        method: "post",
        url: url,
        params: !isBody ? data : null,
        data: isBody ? data : null,
    });

export const file = (url: string, file_name: string, params?: any) => {
    request
        .request<any>({
            url,
            params,
            headers: new AxiosHeaders({
                "Content-Type": "application/octet-stream",
            }),
            responseType: "blob",
        })
        .then((res) => {
            const blob = new Blob([res.data], {
                type: `text/plain;charset=utf-8`,
            });
            // 获取heads中的filename文件名
            const downloadElement = document.createElement("a");
            // 创建下载的链接
            const href = window.URL.createObjectURL(blob);
            downloadElement.href = href;
            // 下载后文件名
            downloadElement.download = file_name;
            document.body.appendChild(downloadElement);
            // 点击下载
            downloadElement.click(); // 下载完成移除元素
            document.body.removeChild(downloadElement);
            // 释放掉blob对象
        });
};
