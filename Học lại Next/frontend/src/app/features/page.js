"use client";
// Import the components from Next.js
import Head from "next/head";

import Link from "next/link";

// Define the features of the web mindmap app
const features = [
  {
    title: "Create and manage mindmaps",
    description:
      "You can create mindmaps easily and quickly with an intuitive and friendly interface. You can also manage your mindmaps on the cloud platform and share them with others.",
    image: "/images/feature 1.jpg",
    alt: "A screenshot of creating a mindmap",
  },
  {
    title: "Design and customize mindmaps",
    description:
      "You can design and customize mindmaps according to your preferences with various colors, shapes, sizes and icons. You can also add links, images, videos and sounds to your mindmaps.",
    image: "/images/feature 2.jpg",
    alt: "A screenshot of customizing a mindmap",
  },
  {
    title: "Export and import mindmaps",
    description:
      "You can export your mindmaps to different formats such as PDF, PNG, JPG, SVG, HTML and XML. You can also import mindmaps from different sources such as Google Drive, Dropbox, OneDrive and Evernote.",
    image: "/images/feature 3.jpg",
    alt: "A screenshot of exporting and importing a mindmap",
  },
];

// Define the component for the features page
export default function Features() {
  return (
    <div>
      <Head>
        <title>Web Mindmap - Features</title>
        <meta
          name="description"
          content="Learn about the features of the web mindmap app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <h1 className="text-center my-4">Features</h1>
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={feature.image}
                  alt={feature.alt}
                  width={500}
                  height={400}
                />
                <div className="card-body">
                  <h5 className="card-title">{feature.title}</h5>
                  <p className="card-text">{feature.description}</p>
                  <button className="btn btn-primary">Learn more</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center my-4">
          <Link href="/">Back to home</Link>
        </p>
      </div>
    </div>
  );
}
