import React from 'react';
import { Helmet } from 'react-helmet';

import Products from '../components/Products';

const Home = () => {
  return (
    <>
      <Helmet>
        {/* Title  */}
        <title>Productos - Platzi Conf Merch</title>

        {/* SEO  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@salinatomass" />
        <meta name="twitter:creator" content="@salinatomass" />
        <meta name="twitter:title" content="Platzi Conf Store" />
        <meta
          name="twitter:description"
          content="Compra los productos más interesantes de la PlatziConf"
        />
        <meta
          name="twitter:image"
          content="https://hipertextual.com/wp-content/uploads/2021/09/platziconf-2021.jpeg"
        />
        <meta
          name="twitter:url"
          content="https://salinatomass-platzi-conf-merch.web.app/"
        />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Platzi Conf Merch" />
        <meta
          property="og:description"
          content="Compra los productos más interesantes de la PlatziConf"
        />
        <meta
          property="og:image"
          content="https://hipertextual.com/wp-content/uploads/2021/09/platziconf-2021.jpeg"
        />
        <meta
          property="og:url"
          content="https://salinatomass-platzi-conf-merch.web.app/"
        />
        <meta property="og:site_name" content="Platzi Conf Name" />
        <meta property="og:locale" content="es_ES" />
      </Helmet>
      <Products />
    </>
  );
};

export default Home;
