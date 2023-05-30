export default function cleanImages(hits){
    const images = hits.map(
      ({
        id,
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        downloads,
        comments,
      }) => ({
        id,
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        downloads,
        comments,
      })
    );
    return images;
  };