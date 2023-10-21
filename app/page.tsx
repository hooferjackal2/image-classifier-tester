"use client"

import { useState, useEffect } from "react";
import SearchBar from '@/components/SearchBar'
import ClassifierTester from '@/components/ClassifierTester';
import ImageSelector from '@/components/ImageSelector';
import ModelSelector from '@/components/ModelSelector';

export default function Home() {
  const [search, setSearch] = useState("");
  const [image, setImage] = useState("vegetables");
  const [model, setModel] = useState("alexnet");

  return (
    <main>
      <div className="main-text-container">
        <h1> Test An Image Classifier! </h1>
        <div className="main-content">
          <ImageSelector setImage={setImage}></ImageSelector>
          <ModelSelector setModel={setModel}></ModelSelector>
          {/*<SearchBar search={search} setSearch={setSearch}></SearchBar>*/}
          <ClassifierTester
            search={search}
            image={image}
            model={model}
          ></ClassifierTester>
        </div>
        <footer>
          <div className="footer-flex">
            <p> Built by Lex Byrne using Next.js</p>
          </div>
        </footer>
      </div>
    </main>
  )
}
