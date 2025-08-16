import Trangchu1a from "../assets/img/Trangchu_1_a.jpg"
import Trangchu1b from "../assets/img/Trangchu_1_b.jpg"
import Trangchu1c from "../assets/img/Trangchu_1_c.jpg"
import BackgroundTrang1 from "../assets/img/Background_Trang1_TrangChu.png"
import '../Design/Trangchu.scss';

function Trangchu() {
    return <>
    {/* Trang 1 */}
    <div className="Trang_1">
        <img className="BackgroundTrang1" src={BackgroundTrang1} alt="" />
        <img className="Anh AnhTrangchu1a" src={Trangchu1a} alt="" />
        <img className="Anh AnhTrangchu1b" src={Trangchu1b} alt="" />
        <img className="Anh AnhTrangchu1c" src={Trangchu1c} alt="" />
    </div>

    {/* Trang 2 */}
    <div className="Trang_2">

    </div>
    
    {/* Trang 3 */}
    <div className="Trang_3">

    </div>

    {/* Trang 4 */}
    <div className="Trang_4">

    </div>
    </>
}
export default Trangchu;