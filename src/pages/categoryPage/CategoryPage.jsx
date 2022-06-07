import { CategoryCard } from "../../components";
import styles from "./CategoryPage.module.css"

export const CategoryPage = () => {
  const categories = [
    {
      title: "Naruto Shippuden",
      image:
        "https://cdn.anime-planet.com/anime/primary/naruto-shippuden-1.jpg?t=1625766494",
      questionCount: 5,
    },
    {
      title: "Black Clover",
      image:
        "https://akibamarket.com/wp-content/uploads/2020/06/black-clover-1-copia.jpg",
      questionCount: 5,
    },
    {
      title: "My Hero Academia",
      image:
        "https://img.reelgood.com/content/show/d0f7056a-168c-4c79-bc38-eb6bc778793c/poster-780.jpg",
      questionCount: 5,
    },
    {
      title: "Boruto: Naruto next generations",
      image:
        "https://static.wikia.nocookie.net/c958810a-3d28-48f7-a1f0-9edf312182ec",
      questionCount: 5,
    },
  ];
  return (
    <div className={`flex-column-center ${styles.categoryLayout}`}>
      <a className="flex-column-center margin-bottom-4" href="/index.html">
        <img className={styles.logo} src="/assets/bulb.svg" alt="logo" />
        <h1>
          kwizz<span className="darkyellow">it!</span>
        </h1>
      </a>
      <p className="txt-m">Choose your favourite Anime to begin with</p>
      <div className="grid-column-layout margin-top-2 center w-80">
        {categories.map((category) => {
          const {title, image, questionCount} = category
          return (
            <CategoryCard title={title} image={image} questionCount={questionCount}/>
          );
        })}
      </div>
    </div>
  );
};
