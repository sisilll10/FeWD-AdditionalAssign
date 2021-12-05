function Header() {
    return(
        <header
            className="
                bg-light
                my-2
                mt-3
                rounded
                container
                d-flex
                flex-wrap
                align-items-center
                justify-content-center justify-content-md-between
            "
        >
           <div class="dropdown text-end">
        <a
          href="#"
          class="d-block link-dark text-decoration-none dropdown-toggle fw-bolder text-secondary ms-4"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          ALL TYPES
        </a>
        <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
          <li>
            <a class="dropdown-item text-secondary" href="#">
              Fancy
            </a>
          </li>
          <li>
            <a class="dropdown-item text-secondary" href="#">
              Modern
            </a>
          </li>
          <li>
            <a class="dropdown-item text-secondary" href="#">
              Vintage
            </a>
          </li>
        </ul>
      </div>

            <ul
                className="
                    nav
                    col-12 col-md-auto
                    mb-2
                    justify-content-center
                    mb-md-0
                "
            >
                <li>
                    <a
                        href="#"
                        className="nav-link px-2 active border-bottom border-primary border-2"
                        >Popular Products</a>
                </li>
                <li>
                    <a href="#" className="nav-link px-2 link-secondary">Low Price</a>
                </li>
                <li>
                    <a href="#" className="nav-link px-2 link-secondary">High Price</a>
                </li>
            </ul>

            <div className="dropdown text-end">
                <a
                    href="#"
                    className="d-block link-dark text-decoration-none dropdown-toggle text-secondary fw-bolder" id="dropdownUser1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    PRICE
                </a>
                <ul
                    className="dropdown-menu text-small"
                    aria-labelledby="dropdownUser1"
                >
                    <li>
                        <a className="dropdown-item text-secondary" href="#"
                            >Popular Products</a>
                        
                    </li>
                    <li>
                        <a className="dropdown-item text-secondary" href="#">Low Price</a >
                       
                    </li>
                    <li>
                        <a className="dropdown-item text-secondary" href="#"
                            >High Price</a>
                        
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;