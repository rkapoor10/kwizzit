import { CategoryCard } from "../../components";
import { Logo } from "../../components/logo/Logo";
import styles from "./CategoryPage.module.css"

export const CategoryPage = () => {
  const categories = [
    {
      title: "Naruto Shippuden",
      image:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8b20ec10-f577-44b1-a687-a9fc2564d52f/dab0b2w-9238451c-4b87-4b9f-99d7-9e2b0cb30da2.jpg/v1/fill/w_1024,h_1586,q_75,strp/poster_naruto_shippuden_by_mardarkangel1992mgp_dab0b2w-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTU4NiIsInBhdGgiOiJcL2ZcLzhiMjBlYzEwLWY1NzctNDRiMS1hNjg3LWE5ZmMyNTY0ZDUyZlwvZGFiMGIydy05MjM4NDUxYy00Yjg3LTRiOWYtOTlkNy05ZTJiMGNiMzBkYTIuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.OBLk3ah6bwHa0vnBQoZ5uXe6zfCASziEPtNz8qyo28M",
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
      <Logo/>
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
