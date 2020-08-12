import React from 'react'

const HeaderMobile = () => {
  return (
    <>
      <header className="header-mobile">
        <div className="lay">
          <div className="row">
            <div className="col-6">
              <a href="/" className="header-mobile__logo">
                <i className="logo-la-nacion"></i>
              </a>
            </div>
            <div className="col-6 hlp-text-right">
              {/* <!-- Si el ususario no esta logueado o esta logueado sin suscrip--> */}
              <a>Suscribite</a>
              {/* <!-- Si el ususario esta logueado conn suscrip debe ir vacio el div--> */}
            </div>
          </div>
        </div>
      </header>
      <nav className="com-nav-mobile">
        <div className="row">
          <a href className="col-2 item-foo"><i className="icon-home"></i>
            <p>Home</p>
          </a>
          <a href className="col-4 item-foo"><i className="icon-club"></i>
            <p>
              <nobr>Club LA NACION</nobr>
            </p>
          </a>
          <a href className="col-3 item-foo"><i className="icon-comment"></i>
            <p>Mi cuenta</p>
          </a>
          <button className="col-2 item-foo">
            <i className="icon-menu"></i>
            <p>Menú</p>
          </button>
        </div>
      </nav>
    </>
  )
}

export default HeaderMobile
