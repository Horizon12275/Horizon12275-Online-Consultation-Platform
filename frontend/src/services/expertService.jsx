// 获取专家数据的服务
import Data from '../experts.json'
import comments from '../comments.json'

// 模拟从本地 JSON 文件获取专家数据
export const getAllExperts =  () => {
    return Data.experts
}

// 通过id模拟从本地 JSON 文件获取专家数据
export const getExpertById = async (id) => {
    const expert = Data.experts.find((expert) => expert.id === parseInt(id,10));
    return expert;
}

export const getComments = async (id) => {
    const comments = comments;
    return comments;
}