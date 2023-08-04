import React, { useState } from "react";
import "../style/Sell.css";
import sellCover from "../assets/sellCover.jpg";
import axios from "axios";

function Sell() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [engine, setEngine] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState([]);

  const SELL_URL = "http://localhost:8085/sell";

  const addOtherImages = () => {
    setImage([...image, []]);
  };

  const handleDelete = (i) => {
    const deletInput = [...image];
    deletInput.splice(i, 1);
    setImage(deletInput);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "make":
        setMake(value);
        break;
      case "model":
        setModel(value);
        break;
      case "engine":
        setEngine(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "image": // For image input fields
        const updatedImages = [...image];
        const index = Number(event.target.dataset.index);
        updatedImages[index] = value;
        setImage(updatedImages);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    // Create a data object with the form fields
    const data = {
      make: make,
      model: model,
      engine: engine,
      description: description,
      price: price,
      images: image,
    };

    // Make a POST request to the backend using axios
    axios
      .post(SELL_URL, data)
      .then((response) => {
        // Handle successful response if needed
        console.log("Post successful:", response.data);
      })
      .catch((error) => {
        // Handle error if needed
        console.error("Error posting:", error);
      });
  };

  return (
    <>
      <div className="sellContainer">
        <div className="inputSell">
          <input
            type="text"
            className="inputSellText"
            placeholder="Make..."
            value={make}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="inputSellText"
            placeholder="Model..."
            value={model}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="inputSellText"
            placeholder="Engine"
            value={engine}
            onChange={handleInputChange}
          />
          <input
            type="text-area"
            className="inputSellText"
            placeholder="Description..."
            value={description}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="inputSellText"
            placeholder="Price..."
            value={price}
            onChange={handleInputChange}
          />
          <div className="images">
            {image?.map((i) => {
              return (
                <div className="addedButton">
                  <input
                    placeholder="Image url..."
                    value={image}
                    onChange={handleInputChange}
                  />
                  <button onClick={() => handleDelete(i)}>X</button>
                </div>
              );
            })}
            <input
              type="text"
              className="inputSellText"
              id="imageUploader"
              placeholder="Image url..."
              data-index={image.length} // Assign the next index to the new image field
              value={image[image.length - 1]} // Show the value of the last image field in this input
              onChange={handleInputChange}
            />
            <button
              type="button"
              className="plusButton"
              placeholder="Add other images"
              onClick={() => addOtherImages()}>
              +
            </button>
          </div>
          <button
            type="button"
            className="sellButton"
            placeholder="Sell"
            onClick={() => handleSubmit()}>
            Sell
          </button>
        </div>
        <div className="sellCover">
          <img src={sellCover} alt="" />
        </div>
      </div>
    </>
  );
}

export default Sell;
