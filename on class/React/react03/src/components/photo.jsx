import React, { useEffect, useState } from "react";
let isLoading = true;
let isMounted;
export default function photo() {
  const [photos, setPhotos] = useState([]);
  const getPhotos = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_limit=10`
    );
    const photos = await response.json();
    if (isMounted) {
      setPhotos(photos);
    }
    isLoading = false;
  };
  useEffect(() => {
    isMounted = true;
    getPhotos();
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        photos.map(({ id, thumbnailUrl }) => (
          <img key={id} src={thumbnailUrl} />
        ))
      )}
    </div>
  );
}
