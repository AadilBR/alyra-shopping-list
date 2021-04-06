import Product from './Product'
import { useState } from 'react'

const ShoppingList = (props) => {
  const { shopping, removeFromShoppingList } = props
  const [filter, setFilter] = useState("")

  const filteredList = shopping.filter((el) =>
    el.trim().toLowerCase().startsWith(filter.trim().toLowerCase())
  )
  return (
    <>
      <h2 className="mb-3 h4">Produits à acheter ({shopping.length}) :</h2>
      <div className="input-group mb-3">
        <span role="img" aria-label="search" className="input-group-text">
          🔎
        </span>
        <input
          type="search"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Rechercher dans votre liste des courses ..."
          aria-label="Chercher"
          className="form-control"
        />
      </div>
      {filter && (
        <p className="d-flex justify-content-between">
          <span>
            Produits qui commencent par <i>{filter}</i>
          </span>
          <button
            className="btn btn-light btn-sm"
            onClick={() => setFilter("")}
          >
            <span role="img" aria-hidden>
              🔄
            </span>{" "}
            Réinitialiser
          </button>
        </p>
      )}
      <ol className="list-group mb-3 shadow">
        {filteredList.map((product) => {
          return (
            <li className="list-group-item" key={product}>
              <Product
                product={product}
                removeFromShoppingList={removeFromShoppingList}
              />
            </li>
          )
        })}
      </ol>
    </>
  )
}

export default ShoppingList