import React from "react";
import Banner from "../Banner";
import SideBar from "../SideBar";

const Body = () => {
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
            <div id className="cont_tags com-secondary-tag hlp-marginBottom-20">
              <a href class>
                Platos principales
              </a>
              <a href class>
                Cerdo
              </a>
              <a href class>
                Papas
              </a>
              <a href class>
                Date un gustito
              </a>
              <a href class>
                La familia
              </a>
            </div>
          </div>
          <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
            <article className="mod-caja-nota lugares w-100-mobile">
              <section id className="cont-figure">
                <a href className="figure">
                  <picture id className="content-pic picture">
                    <img
                      src="https://bucket1.glanacion.com/anexos/fotos/22/3054322h600.jpg"
                      alt
                      className="content-img"
                    />
                  </picture>
                </a>
              </section>
              <div className="mod-caja-nota__descrip">
                <h2 className="com-title-acu">
                  <a href>
                    <b>La escuela.</b> que tiene de escudo al Che Guevara y
                    donde izan la bandera de Cuba
                  </a>
                </h2>
                <h4 className="com-date">1 de Julio de 2019</h4>
              </div>
            </article>
            <article className="mod-caja-nota ohlala w-100-mobile">
              <section id className="cont-figure">
                <a href className="figure">
                  <picture id className="content-pic picture">
                    <img
                      src="https://bucket1.glanacion.com/anexos/fotos/22/3054322h600.jpg"
                      alt
                      className="content-img"
                    />
                  </picture>
                </a>
              </section>
              <div className="mod-caja-nota__descrip">
                <h2 className="com-title-acu">
                  <a href>
                    <b>La escuela.</b> que tiene de escudo al Che Guevara y
                    donde izan la bandera de Cuba
                  </a>
                </h2>
                <h4 className="com-date">1 de Julio de 2019</h4>
              </div>
            </article>
          </section>
          <section className="row">
            <div className="col-12 hlp-text-center hlp-margintop-40">
              <button className="--btn --secondary">
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
