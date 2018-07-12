import React from 'react';

import NewsSlider from '../../../widgets/NewsSlider/slider';
import NewsList from '../../../widgets/NewsList/newsList';

const NewsMain = () => (
    <div>
        <NewsSlider
            type="featured"
            start={0}
            amount={3}
            settings={{ dots: false }}
        />
        <NewsList
            type="cardMain"
            loadMore={true}
            start={3}
            amount={3}
        />
    </div>
)

export default NewsMain;