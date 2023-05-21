import React from 'react';
import Banner from '../Banner/Banner';
import ImageGallery from '../ImageGallery/ImageGallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import Review from '../Review/Review';
import Featured from '../Featured/Featured';
import useTitle from '../../../Hooks/useTitle';

export default function Home() {
  useTitle('Home');
  return (
    <div>
      <Banner />
      <ImageGallery />
      <Featured />
      <ShopByCategory />
      <Review />
    </div>
  );
}
