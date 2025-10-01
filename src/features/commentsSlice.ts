/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { Comment } from '../types/Comment';
import {
  createComment,
  getWineComments,
  deleteComment as dc,
  // getComments,
} from '../api/comments';
import { Wine } from '../types/Wine';
import Comments from '../api/commentsApi.json';

const initialState = {
  loading: false,
  error: '',
  comments: [] as Comment[],
  allComments: [] as Comment[],
};

export const fetchAllComments = createAsyncThunk(
  'comments/fetchAllComments',
  async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const value = Comments;
    // const value = await getComments();

    return value;
  },
);

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (postId: Wine['id']) => {
    const value = await getWineComments(postId);

    return value;
  },
);

export const addComment = createAsyncThunk(
  'comments/addComment',
  async (comment: Omit<Comment, 'id'>) => {
    const newCommnet = {
      ...comment,
      date: new Date().toISOString(),
    };
    const value = await createComment(newCommnet);

    return value;
  },
);

export const deleteComment = createAsyncThunk(
  'comments/deleteComment',
  async (commentId: Comment['id']) => {
    await dc(commentId);

    return commentId;
  },
);

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      fetchAllComments.fulfilled,
      (state, action: PayloadAction<Comment[]>) => {
        state.allComments = action.payload;
      },
    );
    builder.addCase(fetchAllComments.rejected, (state, action) => {
      state.error = action.error.message || 'Something went wrong!';
    });
    builder.addCase(
      fetchComments.fulfilled,
      (state, action: PayloadAction<Comment[]>) => {
        state.comments = action.payload;
      },
    );
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.error = action.error.message || 'Something went wrong!';
    });

    builder.addCase(
      addComment.fulfilled,
      (state, action: PayloadAction<Comment>) => {
        state.comments.push(action.payload);
      },
    );
    builder.addCase(addComment.rejected, (state, action) => {
      state.error = action.error.message || 'Failed to add comment';
    });

    builder.addMatcher(
      action => action.type.endsWith('/pending'),
      state => {
        state.loading = true;
      },
    );
    builder.addMatcher(
      action =>
        action.type.endsWith('/fulfilled') || action.type.endsWith('/rejected'),
      state => {
        state.loading = false;
      },
    );
  },
});

export const selectComments = (state: RootState) => state.comments;

export default commentsSlice.reducer;
