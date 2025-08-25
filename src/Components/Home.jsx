import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import TrangTri1 from "../assets/img/TrangChu_TrangTri_1.png"
import TrangTri2 from "../assets/img/TrangChu_TrangTri_2.png"
import TrangTri4 from "../assets/img/TrangChu_TrangTri_4.png"
import TrangTri5 from "../assets/img/TrangChu_TrangTri_5.png"
import '../Design/Home.scss';

function Trangchu() {
  const navigate = useNavigate();
  const trang1Ref = useRef(null);
  const trang2Ref = useRef(null);

  useEffect(() => {
    const runOnce = (section) => {
      if (!section) return;
      // các phần tử cần animate bên trong section
      const targets = section.querySelectorAll(".Trang2_chu1, .Trang2_chu2 p, .Trang1_chuchung, .Trang1_chu2, .Trang1_chu4, .Trang1_button");

      const io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              // add .animate cho từng target (giữ delay trong CSS nếu đã set)
              targets.forEach((el) => el.classList.add("animate"));
              obs.unobserve(e.target); // kích hoạt 1 lần
            }
          });
        },
        { 
          threshold: 0.2,
          rootMargin: "0px 0px -10% 0px",
        } 
      );

      io.observe(section);
      return () => io.disconnect();
    };

    const clean1 = runOnce(trang1Ref.current);
    const clean2 = runOnce(trang2Ref.current);
    return () => {
      if (typeof clean1 === "function") clean1();
      if (typeof clean2 === "function") clean2();
    };
  }, []);

    return <>
    {/* Trang 1 */}
    <div ref={trang1Ref} className="Trang_1">
      <img className="TrangTri_1" src={TrangTri1} alt="" />
      <img className="TrangTri_2" src={TrangTri2} alt="" />
      <img className="TrangTri_4" src={TrangTri4} alt="" />

    <svg class="TrangTri_3" viewBox="0 0 1440 340" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fill="#0b4428"
        d="M0,265
         C240,335 480,345 720,315
         C960,290 1200,270 1440,282
         L1440,340 L0,340 Z"/>

      <path fill="none"
        stroke="#86a84e"
        stroke-width="18"
        d="M0,265 C240,335 480,345 720,315
         C960,290 1200,270 1440,282"/>
    </svg>
      <button className="Trang1_button" onClick={() => navigate("/gioithieu")}>Tìm Hiểu Thêm</button>
      <p className="Trang1_chuchung Trang1_chu1 Trang1_chuchungchung">QUỸ HỖ TRỢ</p>
      <p className="Trang1_chu2 Trang1_chuchungchung">TRẺ EM</p>
      <p className="Trang1_chuchung Trang1_chu3 Trang1_chuchungchung">VÙNG SÂU VÙNG XA</p>
      <p className="Trang1_chu4">Vùng sâu vùng xa còn nhiều thiếu thốn, đường đi khó khăn, <br /> 
      đời sống vất vả. Nhưng nơi ấy sáng lên nghị lực, tình người <br /> 
      chân chất và khát vọng vươn lên, nhắc nhở chúng ta chung <br />
      tay góp sức để san sẻ yêu thương, xây dựng tương lai.</p>
    </div>

    {/* Trang 2 */}
    <div ref={trang2Ref} className="Trang_2">
      <p className="Trang2_chu1">VÙNG SÂU VÙNG XA</p>
      {/* Chữ lẻ */}
      <div className="Trang2_chu2">
        <div className="Trang2_chu2_chule">
          <p className="Trang2_chu2_chule_dong1">Vùng sâu vùng xa là những khu vực nằm cách xa trung tâm kinh tế – xã hội, địa hình</p>
          <p className="Trang2_chu2_chule_dong3">thốn về cơ sở hạ tầng. Người dân nơi đây phần lớn sống dựa vào nông nghiệp tự cung</p>
          <p className="Trang2_chu2_chule_dong5">xa vẫn còn nhiều thách thức: đường sá xuống cấp hoặc chưa được bê tông hóa, việc</p>
          <p className="Trang2_chu2_chule_dong7">diễn ra ở nhiều nơi. Ngoài ra, cơ hội việc làm và thu nhập còn thấp, khiến nhiều người</p>
          <p className="Trang2_chu2_chule_dong9">xã hội mà còn tạo ra khoảng cách lớn giữa vùng sâu vùng xa với các khu vực phát triển,</p>
        </div>
        {/* Chữ chẵn */}
        <div className="Trang2_chu2_chuchan">
          <p className="Trang2_chu2_chule_dong2">thường hiểm trở, giao thông đi lại khó khăn, điều kiện tự nhiên khắc nghiệt và thiếu</p>
          <p className="Trang2_chu2_chule_dong4">tự cấp, đời sống người dân còn nhiều khó khăn. Hiện nay, thực trạng ở vùng sâu vùng</p>
          <p className="Trang2_chu2_chule_dong6">tiếp cận y tế và giáo dục còn nhiều hạn chế, tình trạng thiếu điện, thiếu nước sạch vẫn</p>
          <p className="Trang2_chu2_chule_dong8">trẻ phải đi làm ăn xa. Những khó khăn này không chỉ cản trở sự phát triển kinh tế và</p>
          <p className="Trang2_chu2_chule_dong10">đòi hỏi sự chung tay hỗ trợ từ Nhà nước và cộng đồng để nâng cao chất lượng cuộc sống.</p>
        </div>
      </div>
      <img className="TrangTri_5" src={TrangTri5} alt="" />
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