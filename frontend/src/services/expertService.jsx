// 获取专家数据的服务
import Data from '../json/experts.json'

// 模拟从本地 JSON 文件获取专家数据
export const getAllExperts =  () => {
    return Data.experts
}

// 通过id模拟从本地 JSON 文件获取专家数据
export const getExpertById = async (id) => {
    const expert = Data.experts.find((expert) => expert.id === parseInt(id,10));
    return expert;
}

export const getCommentsByExpertId = async (id) => {
    const comments = getExpertById(id).comments;
    return comments;
}