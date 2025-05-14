//服务器全部接口返回的数据类型
export interface ResponseDate {
    code: number,
    message: string,
    ok: boolean
}

//SPu数据的ts类型:需要修改
export interface SpuData {
    id?: number,
    spuName: string,
    description: string,
    category3Id: string | number,
    tmId: number,
    supSaleAttrList: null,
    spuImageList: null,
}
//数组：元素都是已有spu数据类型
export type Records = SpuData[];
//定义获取已有的spu按口返回的数据ts类型
export interface HasSpuResponseData extends ResponseDate {
    data: {
        records: Records,
        todal: number,
        size: number,
        current: number,
        searchCount: boolean,
        pages: number,
    }
}