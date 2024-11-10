import React from 'react';
import Card from './Card';
import Heading from './Heading';

const data = [
  {
    id: 0,
    title: "Ecommerce Website",
    desc: "A TypeScript and Node.js-based app for Furniture Business",
    img: "/furnitureweb.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 1,
    title: "Scientific Calculator",
    desc: "A TypeScript and Node.js-based app for managing and organizing list items",
    img: "/caluclator.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Todo List",
    desc: "A TypeScript and Node.js-based app for managing and organizing list items",
    img: "/todo.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Currency Converter",
    desc: "A TypeScript and Node.js-based Cli app for coverting Currenccy",
    img: "/curency.png",
    tags: ["Next.js", "TypeScript",  "Tailwind CSS"],
  },
  {
    id: 4,
    title: "ATM Project",
    desc: "A TypeScript and Node.js-based Cli app for Balance managing",
    img: "/atm.png",
    tags: ["Next.js", "TypeScript",  "Tailwind CSS"],
  },
  {
    id: 5,
    title: "Word Counter",
    desc: "A TypeScript and Node.js-based app used for word counting",
    img: "/word.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

const Project = () => {
  return (
    <div id="projects" className="container pt-32">
      <Heading title="My Projects" />
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            image={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
