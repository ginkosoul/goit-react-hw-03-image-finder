import { Component } from 'react';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import { getImages } from 'helpers/api';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import { Toaster, toast } from 'react-hot-toast';

export class App extends Component {
  state = {
    images: [],
    loading: false,
    error: false,
    query: '',
    page: 1,
    totalPages: 1,
    modalImage: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const { query, page, loading } = this.state;
    if (!loading && (prevState.query !== query || prevState.page !== page)) {
      this.setState({ loading: true, error: false });
      getImages(query, page)
        .then(({ images, totalPages }) => {
          this.setState(ps => ({
            images: [...ps.images, ...images],
            loading: false,
            totalPages,
          }));
        })
        .catch(error => {
          toast.error(error.message);
          this.setState({ error, loading: false });
        });
    }
  }
  onSearch = query => {
    if (query !== this.state.query)
      this.setState({ query, images: [], page: 1 });
    else toast.success('Already loaded. Try something different');
  };
  onImageClick = modalImage => {
    this.setState({ modalImage });
  };
  onLoadMoreClick = () => {
    this.setState(ps => ({ page: ps.page + 1 }));
  };
  onModalClose = () => {
    this.setState({ modalImage: null });
  };

  render() {
    const { images, loading, modalImage, page, totalPages } = this.state;
    const isGallery = images.length > 0;
    const isButton = page < totalPages;
    return (
      <div className="App">
        <Searchbar onSearch={this.onSearch} disable={loading} />
        <Toaster position="top-right" reverseOrder={false} />
        {isGallery && (
          <ImageGallery images={images} onImageClick={this.onImageClick} />
        )}
        {loading ? (
          <Loader />
        ) : (
          isButton && <Button onClick={this.onLoadMoreClick} />
        )}
        {modalImage && (
          <Modal {...modalImage} onModalClose={this.onModalClose} />
        )}
      </div>
    );
  }
}
