/* eslint-disable camelcase */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import Banner from '../Banner';
import SideBar from '../SideBar';
import { getArticles } from '../../../utils';
import Article from '../Article';

const Body = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getArticles();
      setArticles(data);
    }
    fetchData();
  }, []);

  return (
    <main>
      <Banner />
      <div className="lay-sidebar">
        <div className="sidebar__main">
          <div className="row">
            <div className="com-titleWithfollow hlp-marginBottom-15">
              <h1 className="com-title-section-xl hlp-marginBottom-40">
                Acumulado Grilla
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="cont_tags com-secondary-tag hlp-marginBottom-20">
              {articles.tags && articles.tags.map((tag) => (
                <a key={`tag-${tag[0]}`} href={`/tema/${tag[0]}`}>{tag[1]}</a>
              ))}
            </div>
          </div>
          <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
            {articles.results && articles.results.map((element) => {
              const {
                id, display_date, promo_items: { basic: { url } }, headlines: { basic }, website_url,
              } = element;
              return (
                <Article
                  key={id || basic}
                  alt={basic}
                  source={url}
                  title={basic}
                  date={display_date}
                  href={website_url}
                />
              );
            })}
          </section>
          <section className="row">
            <div className="col-12 hlp-text-center hlp-margintop-40">
              <button type="button" className="--btn --secondary">
                MÁS NOTAS DE ACUMULADO GRILLA
              </button>
            </div>
          </section>
        </div>
        <SideBar />
      </div>
    </main>
  );
};

export default Body;
