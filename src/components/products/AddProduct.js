import React, { useState } from "react";
import Header from "../Header";
import { postProduct } from "../../features/productsSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function AddProduct() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState({
    sku: "",
    name: "",
    price: "",
    size: "",
    height: "",
    length: "",
    width: "",
    weight: "",
  });
  const [type, setCurrentType] = useState("DVD");
  const [err, showErr] = useState(false);

  const handleSubmit = () => {
    const dataArr = Object.values(formData);
    const isSuccessful = dataArr.every((val) => val !== "" || null);
    if (isSuccessful) {
      dispatch(postProduct(formData));
      history.push("/");
    } else {
      showErr(true)
    }
  };

  const selectType = (type) => {
    if (type === "Book") {
      return (
        <>
          <div className="form-input-container">
            <label>Weight (KG)</label>
            <input
              className="form-input"
              type="number"
              placeholder="weight"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  weight: e.target.value,
                  height: null,
                  size: null,
                  width: null,
                  length: null,
                })
              }
            />
          </div>
        </>
      );
    } else if (type === "Furniture") {
      return (
        <>
          <div className="form-input-container">
            <label>Height (CM)</label>
            <input
              className="form-input"
              type="number"
              placeholder="height"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  height: e.target.value,
                  size: null,
                  weight: null,
                })
              }
            />
          </div>
          <div className="form-input-container">
            <label>Width (CM)</label>
            <input
              className="form-input"
              type="number"
              placeholder="width"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  width: e.target.value,
                  size: null,
                  weight: null,
                })
              }
            />
          </div>
          <div className="form-input-container">
            <label>Length (CM)</label>
            <input
              className="form-input"
              type="number"
              placeholder="length"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  length: e.target.value,
                  size: null,
                  weight: null,
                })
              }
            />
          </div>
        </>
      );
    } else {
      return (
        <div className="form-input-container">
          <label>Size (MB)</label>
          <input
            className="form-input"
            type="number"
            placeholder="size"
            onChange={(e) =>
              setFormData({
                ...formData,
                size: e.target.value,
                height: null,
                width: null,
                length: null,
                weight: null,
              })
            }
          />
        </div>
      );
    }
  };

  return (
    <>
      <Header title="Add" btnOne={handleSubmit} />
      <form className="form">
        <div className="form-input-container">
          <label>SKU</label>
          <input
            className="form-input"
            type="text"
            placeholder="sku"
            onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
          />
        </div>
        <div className="form-input-container">
          <label>Name</label>
          <input
            className="form-input"
            type="text"
            placeholder="name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="form-input-container">
          <label>Price ($)</label>
          <input
            className="form-input"
            type="number"
            placeholder="price"
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
          />
        </div>
        <div className="form-input-container">
          <label>Type Switcher</label>
          <select
            onChange={(e) => setCurrentType(e.target.value)}
            className="input-select"
          >
            <option value="DVD">DVD</option>
            <option value="Furniture">Furniture</option>
            <option value="Book">Book</option>
          </select>
        </div>
        <div className="type-switcher-container">{selectType(type)}</div>
        <button class="clear-btn header-btn">
        <span class="text">Clear Form</span>
        <span class="icon clear-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.00003 5C7.82888 5 7.66825 5.08261 7.5687 5.22183L3.64604 10.7077C3.25585 11.2534 3.23706 11.9816 3.59858 12.5466L7.58035 18.7703C7.67192 18.9134 7.83012 19 8.00003 19H19.3589C20.2653 19 21 18.2653 21 17.3589V6.64109C21 5.73474 20.2653 5 19.3589 5H8.00003ZM9.64645 8.14645C9.84171 7.95118 10.1583 7.95118 10.3536 8.14645L13.4807 11.2736L16.575 8.14818C16.7693 7.95194 17.0859 7.95036 17.2821 8.14464C17.4784 8.33892 17.4799 8.6555 17.2857 8.85174L14.1878 11.9807L17.3536 15.1464C17.5488 15.3417 17.5488 15.6583 17.3536 15.8536C17.1583 16.0488 16.8417 16.0488 16.6464 15.8536L13.4843 12.6914L10.3553 15.8518C10.161 16.048 9.84446 16.0496 9.64822 15.8553C9.45199 15.661 9.4504 15.3445 9.64468 15.1482L12.7771 11.9843L9.64645 8.85355C9.45119 8.65829 9.45119 8.34171 9.64645 8.14645Z"
                fill="#fff"
              ></path>{" "}
            </g>
          </svg>
        </span>
      </button>
      {err ? <div className="error">
        <p>Please check the form again!</p>
        <span><svg width={30} height={30} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.5 16V14.5M12.5 9V13M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z" stroke="#fff" stroke-width="1.2"></path> </g></svg></span>
        </div> : ''}
      </form>
    </>
  );
}

export default AddProduct;
