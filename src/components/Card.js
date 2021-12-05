function Card(props) {
  return (
    <div
      className="
                        rounded
                        bg-light
                        d-flex
                        flex-column
                        p-3
                        pt-3
                        my-4
                        shadow-sm
                    ">
      <div className="d-flex justify-content-between">
        <a href="#" className="btn bg-gray text-secondary fw-bold">
          NEW
        </a>
        <div>
          <a href="#">
            <i className="fa-solid fa-bars fs-3 color-gray"></i>
          </a>
          <a href="#">
            <i
              className="
                                        fa-regular fa-heart
                                        color-gray
                                        fs-3
                                        ms-3
                                    "></i>
          </a>
        </div>
      </div>
      <div
        className="
                            d-flex
                            flex-column
                            justify-content-center
                            align-items-center
                            my-3
                        ">
        <img
          src={props.img}
          width="200px"
          height="200px"
          alt="Sofa"
          className="text-center mt-2"
        />
        <h4 className="text-center text-secondary my-2">{props.title}</h4>
      </div>
      <div
        className="
                            d-flex
                            justify-content-between
                            align-items-center
                        ">
        <div>
          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-solid fa-star color-gray"></i>
        </div>
        <div className="input-group w-50">
          <input
            type="text"
            className="form-control border-2 bg-light"
            placeholder={props.pc}
            aria-label="Input group example"
            aria-describedby="btnGroupAddon"
            disabled
          />
          <div
            className="input-group-text bg-light border-2"
            id="btnGroupAddon">
            <i
              className="
                                        fa-solid fa-cart-shopping
                                        text-secondary
                                    "></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
