import React from 'react'

import styles from "./details.module.scss";

import { useParams } from 'react-router';
function MovieDetails() {
  const {id} = useParams();
  return (
    <main className={styles.container}>
      <h1>Movie Details Page - {id} </h1>
    </main>
  )
}

export default MovieDetails;