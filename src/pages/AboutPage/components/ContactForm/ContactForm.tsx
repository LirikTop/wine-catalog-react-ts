/* eslint-disable import/no-extraneous-dependencies */
import style from './contactForm.module.scss';
import cn from 'classnames';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '../../../../components/Button';

type Inputs = {
  fullName: string;
  email: string;
  comment: string;
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  // eslint-disable-next-line no-console
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn(style.form)}>
      <div className={cn(style.form__content)}>
        <div className={cn(style['form__input-container'])}>
          <div className={style['form__input-content']}>
            <label htmlFor="fullName" className={cn(style.form__label)}>
              Full Name
            </label>
            <input
              id="fullName"
              {...register('fullName', {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z\s]+$/i,
              })}
              placeholder="Full Name"
              className={cn(style.form__input)}
            />
            {errors.fullName && (
              <span className={cn(style.form__error)}>
                This field is required
              </span>
            )}
          </div>
          <div className={cn(style['form__input-content'])}>
            <label htmlFor="email" className={style.form__lable}>
              Email
            </label>
            <input
              {...register('email', { required: true })}
              placeholder="Email"
              type="email"
              className={style.form__input}
            />
            {errors.email && (
              <span className={style.form__error}>This field is required</span>
            )}
          </div>
        </div>
        <div className={cn(style['form__input-content'])}>
          <label htmlFor="comment" className={cn(style.form__lable)}>
            Comment
          </label>
          <textarea
            {...register('comment', { required: true })}
            className={cn(style.form__input, style['form__input--comment'])}
          />
          {errors.comment && (
            <span className={cn(style.form__error)}>
              This field is required
            </span>
          )}
        </div>
      </div>

      <div className={cn(style.form__button)}>
        <Button type={'submit'}>Send a message</Button>
      </div>
    </form>
  );
};
