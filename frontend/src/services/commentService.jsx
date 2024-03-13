import Data from '../json/comments.json'


export const getComments = async (id) => {
    const comments = Data.comments.filter((comment) => comment.expertid === parseInt(id, 10));
    return comments;
}