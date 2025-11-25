import type Card from "@/types/Card";
import Image from "next/image";
import style from "./Card.module.css"

export default function Card({ id, title, image, price }: Card) {
  return (
    <>
      <div className={style.cardContainer} key={id}>
        <h3 className={style.cardTitle}>{title}</h3>
        <Image src={image} alt={title} height="300" width="300" />
        <p className={style.cardPrice}>R${price}</p>
      </div>
    </>
  )
}