import Card from "./Card";
import styles from "./CardGrid.module.css"

const destinos = [];

destinos.push(
  { 
    id: 1,
    title: "Paris",
    image: "/assets/paris.jpg",
    price: 500000
  }, {
    id: 2,
    title: "Londres",
    image: "/assets/londres.jpg",
    price: 500000
  }, {
    id: 3,
    title: "Roma",
    image: "/assets/roma.jpg",
    price: 500000
  }, {
    id: 4,
    title: "Lisboa",
    image: "/assets/lisboa.jpg",
    price: 500000
  }
)


export default function CardGrid() {
  return (
    <>
      <div className={styles.grid}>
        {destinos.map(destinos => <Card key={destinos.id} {...destinos} />)}
      </div>
    </>
  )
}