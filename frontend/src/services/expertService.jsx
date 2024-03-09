// 获取专家数据的服务
import Data from '../experts.json'

// 模拟从本地 JSON 文件获取专家数据
export const getAllExperts = async () => {
    return Data.experts
}

// 通过id模拟从本地 JSON 文件获取专家数据
export const getExpertById = async (id) => {
    const expert = Data.experts.find((expert) => expert.id === id);
    return expert;
}