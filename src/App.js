import React, { useEffect, useState } from "react";
import "./App.css";
import Tmdb from "./Tmdb";
import Movierow from "./components/Movierow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Geting the featured
      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  return (
    <div className="page">
      <Header />

      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <Movierow key={key} title={item.title} items={item.items}></Movierow>
        ))}
      </section>
    </div>
  );
}
