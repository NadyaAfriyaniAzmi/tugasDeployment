import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductDetails = () => {
    const location = useLocation();
    const product = location.state.product;
  
    if (!product) {
      return <div>Produk tidak ditemukan</div>;
    }
  
    return (
      <div>
        <h2>Detail Produk</h2>
        <p>Nama Produk: {product.productName}</p>
        <p>Kategori Produk: {product.productCategory}</p>
        <p>Kesegaran Produk: {product.productFreshness}</p>
        <p>Deskripsi : {product.additionalDescription} </p>
        <p>Harga : Rp.{product.productPrice}</p>
        {product.productImage && (
          <div>
            <h4>Gambar Produk</h4>
            <img
              src={URL.createObjectURL(product.productImage)}
              alt={product.productName}
              style={{ maxWidth: '300px' }}
            />
          </div>
        )}
        <Link to="/createproduct">Kembali ke CreateProduct</Link>
      </div>
    );
}

export default ProductDetails
