import { useState } from "react";

function ProductForm({ onAddProduct }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    category: "electronics",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function validate() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Product name is required.";
    }

    if (!formData.price || Number(formData.price) <= 0) {
      newErrors.price = "Price must be a positive number.";
    }

    try {
      new URL(formData.image);
    } catch {
      newErrors.image = "Please enter a valid image URL.";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newProduct = {
      id: Date.now(),
      title: formData.name,
      price: Number(formData.price),
      image: formData.image,
      category: formData.category,
      rating: {
        rate: 0,
      },
    };

    onAddProduct(newProduct);

    setFormData({
      name: "",
      price: "",
      image: "",
      category: "electronics",
    });

    setErrors({});
  }

  return (
    <div className="form-container">
      <h2>Add New Product</h2>

      <form onSubmit={handleSubmit}>
        <label>Product Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter product name"
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter price"
          min="0"
          step="0.01"
        />
        {errors.price && <p className="error">{errors.price}</p>}

        <label>Image URL</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="https://example.com/image.jpg"
        />
        {errors.image && <p className="error">{errors.image}</p>}

        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelry</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default ProductForm;

