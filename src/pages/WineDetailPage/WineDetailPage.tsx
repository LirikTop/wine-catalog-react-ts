import { useParams } from 'react-router-dom';
import { DetailCard } from './components/DetailCard';
import style from './wineDetailPage.module.scss';
import { useEffect, useState } from 'react';
import { ProductDetail } from '../../types/Wine';
import detailProducts from '../../api/productDetailApi.json';
import cn from 'classnames';
import { Reviews } from './components/Reviews';
import { CommentCreate } from './components/CommentCreate';
import { Loader } from '../../components/Loader';
import { BackButton } from '../../components/BackButton';
import { NotFoundPage } from '../NotFoundPage';

export const WineDetailPage = () => {
  const { wineId } = useParams();
  const [detailProduct, setDetailProduct] = useState<ProductDetail>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchProducts = async () => {
      const response = await new Promise<ProductDetail>(resolve =>
        setTimeout(() => {
          const findProd = detailProducts.find(prod => prod.id === wineId);

          if (wineId && !findProd) {
            // eslint-disable-next-line no-console
            console.error(`Product with ID ${wineId} not found`);
          }

          resolve(findProd as ProductDetail);
        }, 1000),
      );

      setDetailProduct(response);
      setLoading(false);
    };

    fetchProducts();
  }, [wineId]);

  if (!detailProduct && !loading) {
    return <NotFoundPage />;
  }

  return (
    <section className={style.wineDetailPage}>
      <div className={cn('container', style.wineDetailPage__container)}>
        <BackButton />
        {!loading && (
          <>
            <DetailCard detailProduct={detailProduct as ProductDetail} />
            <Reviews />
            <CommentCreate />
          </>
        )}

        {loading && <Loader />}
      </div>
    </section>
  );
};
