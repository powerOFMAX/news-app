import React from 'react'

const Header = () => (
  <header className="header">
    <div className="lay">
      <div className="row">
        <div className="col-4 header__left">
          <div className="com-hamburger">
            <span className="com-hamburger__bar"></span>
            <span className="com-hamburger__bar"></span>
            <span className="com-hamburger__bar"></span>
          </div>
          <form className="com-search ">
            <input type="text" className="com-search__input" placeholder="Buscar" />
            <i className="icon-search"></i>
            <input type="submit" value="Buscar" className="--btn --primary com-search__submit" />
          </form>
        </div>
        <div className="col-4  header__middle">
          <a href="/" className="header__middle__logo">
            <i className="logo-la-nacion"></i>
          </a>
        </div>
        <div className="col-4 header__right">
          {/* Lo hacemos de esta forma para no agregar clases de mas al header ni al com-usuario,
            y mediante un if de react dependiendo de x condicional dibujamos la caja correspondiente
          <!--Se dibuja cuando  NO esta loguedo--> */}
          <div className="com-usuario">
            <button className="--btn --highlight hlp-marginRight-35">Suscribite</button>
            <button className="--btn --secondary">Ingresar</button>
          </div>

          {/* <!--Se dibuja cuando esta loguedo NO tiene suscrip
          <div className="com-usuario">
            <button className="--btn --highlight hlp-marginRight-35">Suscribite</button>
            <div>
              <p className="com-usuario__name">Carlito Peralta</p>
              <p className="com-usuario__valueSuscrib">Sin suscripción digital</p>
            </div>
          </div>
          --> */}

          {/* <!--Se dibuja cuando esta loguedo y tiene suscrip
          <div className="com-usuario">
            <div>
              <p className="com-usuario__name">Carlito Peralta</p>
              <p className="com-usuario__valueSuscrib">Suscriptor digital</p>
            </div>
          </div>
          --> */}
        </div>
      </div>
    </div>
  </header>
)

export default Header
