import React, { useState } from "react";
import "./home.css";
import group from "./assets/group.png";
import icon from "./assets/icon1.png";
import icon4 from "./assets/icon2png.png";
import icon3 from "./assets/icon3.png";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [gender, setGender] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const pattern = /^\d{14}$/;

    if (!pattern.test(inputValue)) {
      setGender("");
      setPlace("");
      setDate("");
      return;
    }

    const lastDigit = Number(inputValue.slice(-1));
    setGender(lastDigit % 2 === 0 ? "انثى" : "ذكر");

    const placeCode = inputValue.slice(7, 9);
    switch (placeCode) {
      case "01":
        setPlace("القاهره");
        break;
      case "02":
        setPlace("اسكندريه");
        break;
      case "02":
        setPlace("اسكندريه");
        break;
      case "03":
        setPlace("بورسعيد");
        break;
      case "04":
        setPlace("السويس");
        break;
      case "11":
        setPlace("دمياط");
        break;
      case "12":
        setPlace("الدقهليه");
        break;
      case "13":
        setPlace("الشرقيه");
        break;
      case "14":
        setPlace("القليوبيه");
        break;
      case "15":
        setPlace("كفرالشيخ");
        break;
      case "16":
        setPlace("الغربيه");
        break;
      case "17":
        setPlace("المنوفيه");
        break;
      case "18":
        setPlace("البحيره");
        break;
      case "19":
        setPlace("الاسماعيليه");
        break;
      case "21":
        setPlace("الجيزه");
        break;
      case "22":
        setPlace("بني سويف");
        break;
      case "23":
        setPlace("الفيوم");
        break;
      case "24":
        setPlace("المنيا");
        break;
      case "25":
        setPlace("اسيوط");
        break;
      case "26":
        setPlace("سوهاج");
        break;
      case "27":
        setPlace("قنا");
        break;
      case "28":
        setPlace("اسوان");
        break;
      case "29":
        setPlace("اقصر");
        break;
      case "31":
        setPlace("البحر الاحمر");
        break;
      case "32":
        setPlace("الوادي الجديد");
        break;
      case "33":
        setPlace("مطروح");
        break;
      default:
        setPlace("غير معروف");
    }

    const year = `20${inputValue.slice(1, 3)}`;
    const month = inputValue.slice(3, 5);
    const day = inputValue.slice(5, 7);

    const months = {
      "01": "يناير",
      "02": "فبراير",
      "03": "مارس",
      "04": "أبريل",
      "05": "مايو",
      "06": "يونيو",
      "07": "يوليو",
      "08": "أغسطس",
      "09": "سبتمبر",
      10: "أكتوبر",
      11: "نوفمبر",
      12: "ديسمبر",
    };

    const formattedDate = `${year},  ${day}, ${months[month] || "غير معروف"} `;
    setDate(formattedDate);
  };

  return (
    <>
      <div className="container">
        <img src={group} alt="group" className="img1" />
        <form onSubmit={handleSubmit}>
          <div className="first">
            <p className="hi">ممكن نتعرف؟</p>
            <p className="text">
              من أي رقم قومي مصري هتقدر تعرف شوية تفاصيل بسيطة
            </p>
            <button type="submit" className="button">
              ابحث
            </button>
            <i
              className="fa-solid fa-magnifying-glass icon-search"
              id="icon"
            ></i>
            <input
              type="text"
              className="input"
              placeholder=" ...رقم البطاقة                 "
              value={inputValue}
              onChange={handleInputChange}
              required
              pattern="\d{14}"
              title="Please enter exactly 14 digits."
            />
          </div>
        </form>
        <div className="second">
          <div className="box1">
            <img src={icon} alt="Date of Birth" className="icon" />
            <p className="title">تاريخ الميلاد</p>
            <div className="line"></div>
            <p className="text13">{date}</p>
          </div>
          <div className="box1">
            <img src={icon4} alt="Place of Residence" className="icon" />
            <p className="title">محل الإقامة</p>
            <div className="line"></div>
            <p className="text12">{place}</p>
          </div>
          <div className="box1">
            <img src={icon3} alt="Gender" className="icon" />
            <p className="title">النوع</p>
            <div className="line"></div>
            <p className="text11">{gender}</p>
          </div>
          <div className="box">
            <p className="text1">قدرنا نعرف الأتي</p>
          </div>
        </div>
        <div className="footer">
          <p className="text2">
            <span>contact@engtechnos.com</span>: تقدر تبعتلنا على الإيميل بتاعنا
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
