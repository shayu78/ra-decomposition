import React from 'react';
import './App.css';
import Container from './components/Container/Container';
import Teaser from './components/Teaser/Teaser';
import NewsFilter from './components/NewsFilter/NewsFilter';
import DateTime from './components/DateTime/DateTime';
import Quotes from './components/Quotes/Quotes';
import SearchFilter from './components/SearchFilter/SearchFilter';
import SearchForm from './components/SearchForm/SearchForm';
import SearchHint from './components/SearchHint/SearchHint';
import Banner from './components/Banner/Banner';
import Widget from './components/Widget/Widget';
import Weather from './components/Weather/Weather';
import List from './components/List/List';
import ListItem from './components/ListItem/ListItem';

function App() {
  const newsFilters = [
    {
      link: '#',
      title: 'Сейчас в СМИ',
    },
    {
      link: '#',
      title: 'в Германии',
    },
    {
      link: '#',
      title: 'Рекомендуем',
    },
  ];

  const newsResources = [
    {
      image: ' ',
      link: '#',
      title: '«Спартак» проиграл на своем поле «Рубину»',
    },
    {
      image: ' ',
      link: '#',
      title: 'Власти Германии объяснили невозможность отказа от «Северного потока-2»',
    },
    {
      image: ' ',
      link: '#',
      title: 'Боевой российский корабль впервые вошел в порт Судана',
    },
  ];

  const stocksResources = [
    {
      name: 'USD',
      link: '#',
      value: 74.63,
      delta: -0.12,
    },
    {
      name: 'EUR',
      link: '#',
      value: 90.07,
      delta: -0.88,
    },
    {
      name: 'Нефть',
      link: '#',
      value: 64.49,
      delta: -2.32,
      delta_unit: '%',
    },
  ];

  const searchFilters = [
    {
      link: '#',
      title: 'Видео',
    },
    {
      link: '#',
      title: 'Картинки',
    },
    {
      link: '#',
      title: 'Новости',
    },
    {
      link: '#',
      title: 'Карты',
    },
    {
      link: '#',
      title: 'Маркер',
    },
    {
      link: '#',
      title: 'Еще',
    },
  ];

  const highVisitedResources = [
    {
      link: '#',
      title: 'Недвижимость',
      text: '- о сталинках',
    },
    {
      link: '#',
      title: 'Маркет',
      text: '- люсты и светильники',
    },
    {
      link: '#',
      title: 'Авто.ру',
      text: '- привод 4х4 до 500 000',
    },
  ];

  const tvGuideResources = [
    {
      link: '#',
      title: 'THT.Best',
      text: 'THT International',
      time: '02:00',
    },
    {
      link: '#',
      title: 'Джинглики',
      text: 'Карусель INT',
      time: '02:15',
    },
    {
      link: '#',
      title: 'Наедине со всеми',
      text: 'Первый',
      time: '02:25',
    },
  ];

  const broadcastResources = [
    {
      image: ' ',
      link: '#',
      title: 'Управление как исскуство',
      text: 'Успех',
    },
    {
      image: ' ',
      link: '#',
      title: 'Ночь. Мир в это время',
      text: 'earthTV',
    },
    {
      image: ' ',
      link: '#',
      title: 'Андрей Возн...',
      text: 'Сов. секретно',
    },
  ];

  const onSelectNewsFilterHandler = (value) => {
  }

  const onSelectSearchFilterHandler = (value) => {
  }

  const handleSubmit = (event) => {
  }

  return (
    <div className='page__wrapper'>
      <Container className='top__block'>
        <Container className='latest__block'>
          <Container className='newsfilter__datetime__block'>
            <NewsFilter data={newsFilters} onSelectFilter={onSelectNewsFilterHandler} />
            <DateTime />
          </Container>
          <List className='list__items' data={newsResources}>
            {data => data.map((item) => <ListItem key={item.id} className='list__item' item={item}>{item.title}</ListItem>)}
          </List>
          <Quotes data={stocksResources} />
        </Container>
        <Teaser image='' link='#' title='Работа над ошибками' description='Смотрите на Яндексе и запоминайте' />
      </Container>
      <Container className='middle__block'>
        <Container className='search__block'>
          <SearchFilter data={searchFilters} onSelectFilter={onSelectSearchFilterHandler} />
          <SearchForm onHandleSubmit={handleSubmit} />
          <SearchHint />
        </Container>
        <Banner image='' link='#' />
      </Container>
      <Container className='bottom__block'>
        <Container className='first__column'>
          <Widget title='Погода' link='#'>
            <Weather />
          </Widget>
          <Widget title='Посещаемое' link='#'>
            <List className='list__items' data={highVisitedResources}>
              {data => data.map((item) => <ListItem key={item.id} className='list__item' titleClassName='bold' textClassName='normal' item={item}>{item.title}</ListItem>)}
            </List>
          </Widget>
        </Container>
        <Container className='second__column'>
          <Widget title='Карта Германии' link='#'>
            <a className='schedule' href='#'>Расписания</a>
          </Widget>
          <Widget title='Телепрограмма' link='#'>
            <a className='broadcast__view' href="#">Эфир</a>
            <List className='list__items' data={tvGuideResources}>
              {data => data.map((item) => <ListItem key={item.id} className='list__item' item={item}>{item.title}</ListItem>)}
            </List>
          </Widget>
        </Container>
        <Container className='third__column'>
          <Widget title='Эфир' link='#'>
            <List className='list__items' data={broadcastResources}>
              {data => data.map((item) => <ListItem key={item.id} className='list__item' item={item}>{item.title}</ListItem>)}
            </List>
          </Widget>
        </Container>
      </Container>
    </div>
  );

}

export default App;
