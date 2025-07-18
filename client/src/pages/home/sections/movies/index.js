import React from "react";
import { Icon } from "@iconify/react";

import styles from "./movies.module.scss";
import posterImage from "../../../../assets/image.png";
import Card from "../../../../components/atoms/Card";
import Button from "../../../../components/atoms/Button";

function Movies() {
  const handleViewAll = () => {
    console.log("View All Clicked");
  };
  const handleShowMore = () => {
    console.log("Show More Clicked");
  };
   const handleBuyTicket = () => {
    console.log("Buy Ticket Clicked");
  };
  return (
    <section className={styles.moviesSection}>
      {/*Left*/}
      <div className={styles.header}>
        <h1>Now Showing</h1>
        <div className={styles.right}>
          <p onClick={handleViewAll}>View All</p>
          <Icon icon={"solar:arrow-right-linear"} />
        </div>
      </div>
      
      {/*Card*/}
      <div className={styles.cardContainer}>
        <Card
          image={posterImage}
          title="Alita Battle Angel 4K 2019 Movies"
          description="2018 - Action, Adventure - 2h 8m"
          rating={4.5}
          buttonText="Buy Ticket"
          buttonIcon="material-symbols:shopping-cart"
          onButtonClick={handleBuyTicket}
        />
        <Card
          image={posterImage}
          title="Alita Battle Angel 4K 2019 Movies"
          description="2018 - Action, Adventure - 2h 8m"
          rating={4.5}
          buttonText="Buy Ticket"
          buttonIcon="material-symbols:shopping-cart"
          onButtonClick={handleBuyTicket}
        />
        <Card
          image={posterImage}
          title="Alita Battle Angel 4K 2019 Movies"
          description="2018 - Action, Adventure - 2h 8m"
          rating={4.5}
          buttonText="Buy Ticket"
          buttonIcon="material-symbols:shopping-cart"
          onButtonClick={handleBuyTicket}
        />
        <Card
          image={posterImage}
          title="Alita Battle Angel 4K 2019 Movies"
          description="2018 - Action, Adventure - 2h 8m"
          rating={4.5}
          buttonText="Buy Ticket"
          buttonIcon="material-symbols:shopping-cart"
          onButtonClick={handleBuyTicket}
        />
        <Card
          image={posterImage}
          title="Alita Battle Angel 4K 2019 Movies"
          description="2018 - Action, Adventure - 2h 8m"
          rating={4.5}
          buttonText="Buy Ticket"
          buttonIcon="material-symbols:shopping-cart"
          onButtonClick={handleBuyTicket}
        />
        <Card
          image={posterImage}
          title="Alita Battle Angel 4K 2019 Movies"
          description="2018 - Action, Adventure - 2h 8m"
          rating={4.5}
          buttonText="Buy Ticket"
          buttonIcon="material-symbols:shopping-cart"
          onButtonClick={handleBuyTicket}
        />
        <Card
          image={posterImage}
          title="Alita Battle Angel 4K 2019 Movies"
          description="2018 - Action, Adventure - 2h 8m"
          rating={4.5}
          buttonText="Buy Ticket"
          buttonIcon="material-symbols:shopping-cart"
          onButtonClick={handleBuyTicket}
        />
        <Card
          image={posterImage}
          title="Alita Battle Angel 4K 2019 Movies"
          description="2018 - Action, Adventure - 2h 8m"
          rating={4.5}
          buttonText="Buy Ticket"
          buttonIcon="material-symbols:shopping-cart"
          onButtonClick={handleBuyTicket}
        />
      </div>
      
      {/*Show More*/}
      <div className={styles.btn}>
        <Button text="Show More" clickHandler={handleShowMore} className={styles.customButton}/>
      </div>

    </section>
  );
}

export default Movies;
