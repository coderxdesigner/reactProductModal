import CloseBtn from "./CloseBtn"
import ProductTabs from "./ProductTabs"
import ProductImages from "./ProductImages"
import ProductDetails from "./ProductDetails"

function ContainerPop() {
    return (
      <div className="modalCustom container">
        <div className="row">
        <div className="col-6">
            <ProductImages />
            <ProductTabs />
        </div>
        <div className="col-6 right">
            <CloseBtn />
            <ProductDetails />
        </div>
        </div>
      </div>
    )
  }
  
  export default ContainerPop
  