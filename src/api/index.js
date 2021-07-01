//管理请求各种接口地址

import network from "./network";

export const getBanner = () => network.get('/banner?type=2')