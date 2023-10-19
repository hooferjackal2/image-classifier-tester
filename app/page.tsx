"use client"

import { useState } from "react";
import SearchBar from '@/components/SearchBar'
import ClassifierTester from '@/components/ClassifierTester';

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <main>
      <div className="main-text-container">
        <h1> Test An Image Classifier! </h1>
        <div className="main-content">
          <SearchBar search={search} setSearch={setSearch}></SearchBar>
          <ClassifierTester search={search}></ClassifierTester>
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
