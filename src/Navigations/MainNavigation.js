import React from 'react';
import { Route, Routes } from "react-router-dom";
import { NavigationBar } from "../Components/NavigationBar";
import { NotFoundPage } from "../Pages/NotFoundPage";
import { HomePage } from "../Pages/HomePage";
import { CategoryPage } from "../Pages/CategoryPage";
import { DevelopmentPage } from "../Pages/DevelopmentPage";
import { AboutPage } from "../Pages/AboutPage";
import classes from "../CSS/MainNavigation.module.css";
import colors from "../CSS/Colors.module.css";

export function MainNavigation({ firebaseApp }) {
  return <>
    <NavigationBar />
    <div className={`${classes.content} ${colors.background}`}>
      <Routes>
        <Route path="/" element={<HomePage firebaseApp={firebaseApp} />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/development" element={<DevelopmentPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  </>
}