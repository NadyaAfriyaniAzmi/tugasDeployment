import React from 'react';
import { useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './redux/actions'; 
// import { Link, useNavigate } from 'react-router-dom';
// import article from "./components/article.jsx";
// import bootstrapLogo from "../src/assets/bootstrap-logo.png";
// import "./createProduct.css";

const CreateProducts = () => {
  const dispatch = useDispatch();
  // const Navigate = useNavigate();
  const initialState = {
    products: [
      {
        id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
        productName: "John",
        productCategory: "Doe",
        productFreshness: "Doe",
        productPrice: "Doe",
        image: "Doe",
        additionalDescription: "Doe",
      },
    ],
  };
  const [products, setProducts] = useState(initialState.products);
  // const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productNameError, setProductNameError] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [additionalDescription, setAdditionalDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productPriceError, setProductPriceError] = useState("");

  useEffect(() => {
    alert("Welcome");
  }, []);

  const handleProductNameChange = (e) => {
    const value = e.target.value;
    
    const productNameRegex = /^[a-zA-Z0-9\s]*$/; // Pola yang hanya memungkinkan huruf, angka, dan spasi

    if (!productNameRegex.test(value)) {
      setProductNameError("Produk name tidak boleh mengandung symbol");
    } else if (value.length > 25) {
      setProductNameError("Produk name tidak boleh lebih dari 25 karakter.");
    } else {
      setProductNameError("");
    }

    setProductName(value);
  };

  const handleProductCategoryChange = (e) => {
    setProductCategory(e.target.value);
  };

  const handleProductImageChange = (e) => {
    const imageFile = e.target.files[0];

    if (!imageFile) {
      return;
    }

    const imageRegex = /\.(jpg|jpeg|png|gif|bmp)$/i;

    if (!imageRegex.test(imageFile.name)) {
      window.alert(
        "File yang diunggah harus berupa gambar (jpg, jpeg, png, gif, bmp)."
      );
      e.target.value = "";
      return;
    }

    setProductImage(imageFile);
  };

  const handleProductFreshnessChange = (e) => {
    setProductFreshness(e.target.value);
  };

  const handleAdditionalDescriptionChange = (e) => {
    setAdditionalDescription(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    const value = e.target.value;

    if (!/^\d+(\.\d{1,2})?$/.test(value) || parseFloat(value) <= 0) {
      setProductPriceError("Harga Produk harus berupa angka valid");
    } else {
      setProductPriceError("");
    }

    setProductPrice(value);
  };

  const handleDeleteProduct = (product) => {
    const confirmDelete = window.confirm(
      "Apakah Anda ingin menghapus produk ini?"
    );
    if (confirmDelete) {
      const updatedProducts = [...products];
      const index = updatedProducts.findIndex((item) => item.no === product.no);
      if (index !== -1) {
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
        window.alert("Produk berhasil dihapus.");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!productName) {
      alert("Please enter a valid product name.");
      return;
    }
    setProductName("");

    const newProduct = {
      no: products.length + 1,
      productName,
      productCategory,
      productImage,
      productFreshness,
      additionalDescription,
      productPrice,
    };
    dispatch(addProduct(newProduct));

    setProducts([...products, newProduct]);
    setProductName("");
    setProductCategory("");
    setProductImage("");
    setProductFreshness("");
    setAdditionalDescription("");
    setProductPrice("");
  };

  return (
    <div id="root">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      />
      <header>
        <h3>Simple Header</h3>
        <nav>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* <div className="logo-bootstrap pt-5">
        <img src={bootstrapLogo} alt="" />
        <h3>{article.title.en}</h3>
        <p className="pt-3">{article.description.en}.</p>
      </div> */}
      <div className="d-flex justify-content-center pt-4">
        <form onSubmit={handleSubmit} className="" id="product-form">
          <h4>Detail Product</h4>
          <div className="product mb-3">
            <label htmlFor="productName" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="productName"
              value={productName}
              onChange={handleProductNameChange}
            />
            {productNameError && (
              <div className="text-danger">{productNameError}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="product-category" className="form-label">
              Product Category
            </label>
            <select
              className="form-select"
              id="product-category"
              required=""
              onChange={handleProductCategoryChange}
            >
              <option value="">Choose</option>
              <option value="Sepeda">Sepeda</option>
              <option value="Handphone">Handphone</option>
              <option value="Kipas">Kipas</option>
            </select>
            <div className="invalid-feedback">Please select a valid state.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="image-product" className="form-label">
              Image of Product
            </label>
            <input
              type="file"
              className="form-control"
              onChange={handleProductImageChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="product-freshness" className="form-label">
              Product Freshness
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                defaultValue="Brand New"
                name="product-freshness"
                id="flexRadioDefault1"
                required=""
                onChange={handleProductFreshnessChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Brand New
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                defaultValue="Second Hand"
                name="product-freshness"
                id="flexRadioDefault2"
                required=""
                onChange={handleProductFreshnessChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Second Hand
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                defaultValue="Refurbished"
                name="product-freshness"
                id="flexRadioDefault3"
                required=""
                onChange={handleProductFreshnessChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                Refurbished
              </label>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="additional-description" className="form-label">
                Additional Description
              </label>
              <textarea
                id="additional-description"
                className="form-control"
                name="additional-description"
                rows={5}
                defaultValue={""}
                onChange={handleAdditionalDescriptionChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="product-price" className="form-label">
              Product Price
            </label>
            <input
              type="text"
              className="form-control"
              id="product-price"
              placeholder="$100"
              onChange={handleProductPriceChange}
            />
            {productPriceError && (
              <div className="text-danger">{productPriceError}</div>
            )}
          </div>
          <input
            type="submit"
            name='submit'
            id='submit'
            className="col-12 btn btn-primary"
            defaultValue="Submit"
          />
        </form>
      </div>

      <div className="container mt-5">
        <h4>Product List</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>No</th>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Image</th>
              <th>Product Freshness</th>
              <th>Additional Refreshmen</th>
              <th>Product Price</th>
              <th>Detail</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="product-list">
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.no}</td>
                <td>{product.productName}</td>
                <td>{product.productCategory}</td>
                <td>
                  {product.productImage && (
                    <img
                      src={URL.createObjectURL(product.productImage)}
                      alt={product.productName}
                      style={{ maxWidth: "100px", maxHeight: "100px" }}
                    />
                  )}
                </td>
                <td>{product.productFreshness}</td>
                <td>{product.additionalDescription}</td>
                <td>{product.productPrice}</td>
                {/* <td>
                  <button
                  className='btn-primary'
                  onClick={() => {
                    Navigate(`/detailsproduct/${index + 1}`, {
                      state: { product },
                    });
                  }}
                >
                  Lihat Detail
                </button>
                  </td> */}
                <td>
                  <button
                    className="btn-danger"
                    onClick={() => handleDeleteProduct(product)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreateProducts;
