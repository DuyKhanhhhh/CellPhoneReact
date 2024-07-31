import { useNavigate } from "react-router-dom";
import { formatNumberWithCommas } from "../Service/FormartNumber";

export default function ProductDetailMemory({ productDetail, id }) {
    const navigate = useNavigate();
    const priceGet = (price) => {
        sessionStorage.setItem("price", price);
        console.log(price)
        navigate(`/detailProduct/${id}`)
    }
    return (<>
        <p className="list-title">Phiên bản khác </p>
        <div className="related_versions list">

            {productDetail.map(item => (
                <div className="related_versions__item list-item active " onClick={() => priceGet(item.price)}>
                    <p>
                        {item.memory}
                    </p>
                    <span className="js-format-price" >

                        {formatNumberWithCommas(item.price)}₫
                    </span>
                </div>
            ))}
        </div>

    </>
    )
}