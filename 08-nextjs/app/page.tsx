'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import CountButton from "../components/CountButton/CountButton";
import SearchBar from "../components/SearchBar/SearchBar";
import ParagraphLink from "../components/ParagraphLink/ParagraphLink";

export default function Home() {

  const [productsState, setProductsState] = useState([])

  useEffect(() => {

    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((productsArray) => {
        const newProductsState = productsArray.map((product) => {
          return product.title + " $" + product.price
        })
        setProductsState(newProductsState)
      });

    // setTimeout(() => {
    //   setProductsState([
    //     "tooth paste",
    //     "tooth brush",
    //     "mouth wash"
    //   ])
    // }, 2000)
  }, [])

  const hasProducts = productsState.length > 0

  return (
    <div>
      <CountButton incrementBy={1} buttonColor="lightblue" borderRadius="1px"/>
      <CountButton incrementBy={2} buttonColor="lightcoral" borderRadius="1px"/>
      <ParagraphLink />
      {hasProducts ? <SearchBar products={productsState} /> : "Loading" }
    </div>
  );
}
