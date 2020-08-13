import React from 'react';

const Header = () => (
  <header className="header">
    <div className="lay">
      <div className="row">
        <div className="col-4 header__left">
          <div className="com-hamburger">
            <span className="com-hamburger__bar" />
            <span className="com-hamburger__bar" />
            <span className="com-hamburger__bar" />
          </div>
          <form className="com-search ">
            <input
              type="text"
              className="com-search__input"
              placeholder="Buscar"
            />
            <i className="icon-search" />
            <input
              type="submit"
              value="Buscar"
              className="--btn --primary com-search__submit"
            />
          </form>
        </div>
        <div className="col-4  header__middle">
          <a href="/" className="header__middle__logo">
            <i className="logo-la-nacion" />
          </a>
        </div>
        <div className="col-4 header__right">
          {/* Se dibuja cuando  NO esta loguedo} */}
          <div className="com-usuario">
            <button type="button" className="--btn --highlight hlp-marginRight-35">
              Suscribite
            </button>
            <button type="button" className="--btn --secondary">Ingresar</button>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
