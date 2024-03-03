import Header from "./Header"
import ProductTabs from "./ProductTabs"
import ProductImages from "./ProductImages"
import ProductDetails from "./ProductDetails"

function ContainerPop() {
    return (
      <div className="modalCustom container">
        <Header />
        <div className="row">
        <div className="col-6">
            <ProductImages />
            <ProductTabs />
        </div>
        <div className="col-6">
            <ProductDetails />
        </div>
        </div>
      </div>
    )
  }
  
  export default ContainerPop
  