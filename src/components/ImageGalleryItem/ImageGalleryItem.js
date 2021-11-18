import React from "react";
import s from "./ImageGalleryItem.module.css";
export default function ImageGalleryItem() {
  return (
    <li className={s.ImageGalleryItem}>
      <img className={s.ItemImage} src="" alt="" />
    </li>
  );
}
