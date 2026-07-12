import { productValidationSchema } from "../../validation/productSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./AddProduct.module.css";

function AddProduct({ onAddProduct }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productValidationSchema),
  });

  const onSubmit = (data) => {

    onAddProduct(data);

    navigate("/");
  };

  return (
    <div className={styles.formContainer}>
      <h2>Add a new product</h2>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Product name</label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className={errors.name ? styles.inputError : ""}
          />
          {errors.name && (
            <span className={styles.errorText}>{errors.name.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="price">Prix (€)</label>
          <input
            id="price"
            type="number"
            step="0.01"
            {...register("price")}
            className={errors.price ? styles.inputError : ""}
          />
          {errors.price && (
            <span className={styles.errorText}>{errors.price.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="category">Catégorie</label>
          <select
            id="category"
            {...register("category")}
            className={errors.category ? styles.inputError : ""}
          >
            <option value="">-- Select a category --</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothes">Clothes</option>
            <option value="Micromobility">Micromobility</option>
          </select>
          {errors.category && (
            <span className={styles.errorText}>{errors.category.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="image">URL de l'image</label>
          <input
            id="image"
            type="text"
            placeholder="https://..."
            {...register("image")}
            className={errors.image ? styles.inputError : ""}
          />
          {errors.image && (
            <span className={styles.errorText}>{errors.image.message}</span>
          )}
        </div>

        <button type="submit" className={styles.submitBtn}>
          Ajouter le produit
        </button>
      </form>
    </div>
  );
}

export default AddProduct;