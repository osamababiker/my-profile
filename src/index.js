import {React, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'ar'],
    fallbackLng: "en",
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    }
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
const loadingMarkup = (
  <div className='py-4 text-center'>
    <h2>Loading ...</h2>
  </div>
);
root.render(
  <Suspense fallback={loadingMarkup}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
);

