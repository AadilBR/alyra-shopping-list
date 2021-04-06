const Product = (props) => {
  const { product, removeFromShopping } = props

  const handleButtonClick = () => {
    removeFromShopping(product)
  }

  return (
    <div className="d-flex align-items-center justify-content-between">
      {product}
      <button className="btn btn-sm btn-warning" onClick={handleButtonClick}>
        <span role="img" aria-hidden>
          ✖️
        </span>{" "}
        ok
      </button>
    </div>
  )
}

export default Product