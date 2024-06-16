import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

const ImageLoaderComponent = ({ url, hashCode, alt, className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = url;
  }, [url]);

  return (
    <>
      {!imageLoaded && (
        <Blurhash
          hash={hashCode}
          resolutionX={32}
          resolutionY={32}
          punch={1}
          className={className}
        />
      )}

      {imageLoaded && <img src={url} alt={alt} className={className} />}
    </>
  );
};

export default ImageLoaderComponent;
