import { useForm, Controller } from 'react-hook-form';
import { Button } from '../../../../components/Button';
import { StarRating } from '../../../../components/StarRating';
import style from './commentCreate.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { addComment, selectComments } from '../../../../features/commentsSlice';
import { Comment } from '../../../../types/Comment';
import { selectWines } from '../../../../features/wineSlice';
import { Wine } from '../../../../types/Wine';
import { useParams } from 'react-router-dom';
import { Loader } from '../../../../components/Loader';

interface FormValues {
  rating: number;
  comment: string;
}

export const CommentCreate = () => {
  const {
    handleSubmit,
    control,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      rating: 0,
      comment: '',
    },
  });
  const { wineId } = useParams();
  const dispatch = useAppDispatch();
  const { wines } = useAppSelector(selectWines);
  const { loading, error } = useAppSelector(selectComments);
  const baseProduct = wines.find(wine => wine.itemId === wineId) as Wine;

  const onSubmit = async (data: FormValues) => {
    const newData: Omit<Comment, 'id'> = {
      rating: data.rating,
      text: data.comment,
      userId: 0,
      wineId: baseProduct.id,
      date: new Date().toISOString(),
    };

    try {
      // unwrap дозволяє отримати реальний результат або кинути помилку
      await dispatch(addComment(newData)).unwrap();

      alert('✅ Comment was successfully added!');
      reset();
    } catch (err) {
      alert('❌ Something went wrong while adding your comment.');
    }
  };

  return (
    <form className={style['comment-create']} onSubmit={handleSubmit(onSubmit)}>
      <div className={style['comment-create__content']}>
        <div className={style['comment-create__top']}>
          <p className={style['comment-create__text']}>
            Add your own rating and help other WINSET users pick the right wine!
          </p>

          <div className={style['comment-create__rating']}>
            <Controller
              key={watch('rating')}
              name="rating"
              control={control}
              rules={{ required: 'Please add a rating' }}
              render={({ field: { value, onChange } }) => (
                <StarRating value={value} onRating={onChange} />
              )}
            />
          </div>
          {errors.rating && (
            <small className={style['comment-create__error']}>
              {errors.rating.message}
            </small>
          )}
        </div>

        <div className={style['comment-create__bottom']}>
          <label htmlFor="comment" className={style['comment-create__text']}>
            Share your impression about the wine!
          </label>
          <textarea
            id="comment"
            {...register('comment', {
              required: 'Please write a comment',
              minLength: { value: 5, message: 'Too short!' },
            })}
            placeholder="Write your review here"
            className={style['comment-create__textarea']}
          ></textarea>
          {errors.comment && (
            <small className={style['comment-create__error']}>
              {errors.comment.message}
            </small>
          )}
          {error && (
            <small className={style['comment-create__error']}>{error}</small>
          )}
        </div>
      </div>

      <div className={style['comment-create__button']}>
        <Button type="submit" disabled={loading}>
          {!loading && <span>Leave a review</span>}
          {loading && <Loader />}
        </Button>
      </div>
    </form>
  );
};
