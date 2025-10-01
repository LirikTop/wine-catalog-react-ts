import { Comment } from '../types/Comment';
import { client } from '../utils/fetchClient';

export const getComments = () => {
  return client.get<Comment[]>('/comment');
};

export const getWineComments = (wineId: number) => {
  return client.get<Comment[]>(`/comments?wineId=${wineId}`);
};

export const createComment = (data: Omit<Comment, 'id'>) => {
  return client.post<Comment>('/comments', data);
};

export const deleteComment = (commentId: number) => {
  return client.delete(`/comments/${commentId}`);
};
