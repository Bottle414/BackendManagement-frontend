//spu管理模块接口
import request from "@/api";
import type { HasSpuResponseData } from "./type";
enum API {
    //获取已有的spu数据
    HASSPU_URL = '/admin/product/'
}
//获取某个三级分类下已有的spu数据
export const reqHasSpu = (page: number, limit: number, category3Id: string | number) => request.get<any, HasSpuResponseData>(API.HASSPU_URL + '${page}/${limit}?category3Id=${categroy3Id}');