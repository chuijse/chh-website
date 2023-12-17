"use client";
import { motion } from "framer-motion";
import { strengths } from "./Strengths";
import Divider from "../../components/Divider";
import "./_aptitude.scss";

export default function Aptitudes() {
  return (
    <section className="aptitudes-root">
      <h2 className="aptitudes-title">Aptitudes</h2>
      <div className="aptitudes-strengths">
        {strengths.map((strength) => (
          <Item
            main={strength.main}
            categories={strength.categories}
            key={`Aptitud-${strength.main}`}
          />
        ))}
      </div>
    </section>
  );
}

function Item({ main, categories }) {
  return (
    <div className="aptitudes-item-root">
      <h3>{main}</h3>
      <Divider size="light" />
      <p>
        {categories.map((categorie, i) =>
          i !== categories.length - 1 ? `${categorie} - ` : `${categorie}`
        )}
      </p>
    </div>
  );
}
