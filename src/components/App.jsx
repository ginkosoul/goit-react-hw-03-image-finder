import { Component } from 'react';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import { getImages, loadImages } from 'helpers/api';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';

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
  onSearchSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true, error: false, page: 1, images: [] });
    getImages(this.state.query)
      .then(({ images, totalPages }) => {
        this.setState({ images, loading: false, totalPages });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };
  onInputChange = event => {
    this.setState({ query: event.target.value });
  };
  onImageClick = e => {
    e.preventDefault();
    const modalImageId = Number(e.currentTarget.id);
    const { largeImageURL, tags } = this.state.images.find(
      image => image.id === modalImageId
    );
    this.setState({ modalImage: { largeImageURL, tags } });
  };
  onLoadMoreClick = () => {
    const { page, totalPages } = this.state;
    if (page < totalPages) {
      this.setState({ loading: true, error: false });
      loadImages(page + 1)
        .then(images => {
          this.setState(pValue => ({
            images: [...pValue.images, ...images],
            loading: false,
            page: page + 1,
          }));
        })
        .catch(error => {
          this.setState({ error, loading: false });
        });
    } else {
      this.setState({ loading: false });
    }
  };
  onModalClose = () => {
    this.setState({ modalImage: null });
  };
  closeModalOnEsc = e => {
    if (e.keyCode === 27 && this.state.modalImage) {
      this.onModalClose();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.closeModalOnEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalOnEsc);
  }
  render() {
    const { images, loading, modalImage, page, totalPages } = this.state;
    const isGallery = images.length > 0;
    const isButton = page < totalPages;
    return (
      <div className="App">
        <Searchbar
          onChange={this.onInputChange}
          onSubmit={this.onSearchSubmit}
        />
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
