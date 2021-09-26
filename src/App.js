import React, { useEffect, useState } from "react";
import './App.css';
import Tmdb from "./Tmdb";
import Movierow from "./components/Movierow";
import FeaturedMovie from "./components/FeaturedMovie";


export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista TOTAL
      let list  = await Tmdb.getHomeList();
      console.log(list);
      setMovieList(list);
    }

    loadAll();
  });


  return (
    <div className="page">

      {/* <FeaturedMovie /> */}

      <section className="lists">   
        {movieList.map((item, key) => (
          <Movierow key={key} title={item.title} items={item.items}></Movierow>
        ))}
      </section>
    </div>
  );
}