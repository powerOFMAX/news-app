import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const Article = ({
  source, alt, date, href, title,
}) => (
  <article className="mod-caja-nota w-100-mobile">
    <section className="cont-figure">
      <a href={href} className="figure">
        <picture className="content-pic picture">
          <img src={source} alt={alt} className="content-img" />
        </picture>
      </a>
    </section>
    <div className="mod-caja-nota__descrip">
      <h2 className="com-title-acu">
        <a href={href}>
          <b>
            {title}
            .
          </b>
          {' '}
          que tiene de escudo al Che Guevara y donde izan la
          bandera de Cuba
        </a>
      </h2>
      <h4 className="com-date">{moment(date).locale('es').format('LL')}</h4>
    </div>
  </article>
);

Article.propTypes = {
  source: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Article;
