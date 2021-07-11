import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {s
  state = {
    isLoading: true,
    movies: []
  };
  /* 자바스크립트에게 getMovies() 함수는 느린 axios.get()이 포함되어 있기 때문에 시간이 필요함. */
  /* async : 자바스크립트에게 getMovies()함수가 비동기라서 기다려야 해. 라고 말하는 것 */
  getMovies = async() => {
    /* movies.data.data.movies의 구조 분해 할당 */
    const {
      data: {
        data: {movies},
      },
    /* await : axios.get()의 실행을 기다려 달라고 말해줌. async와 await는 짝!*/
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    /* movies(state) : movies(구조 분해 할당으로 얻은(axios.get()의 결과를 담은) 영화 데이터가 있는 변수) */
    /* EX6은 객체의 키와 대입할 변수의 이름이 같다면 코드를 축양 형태로 바꿀 수 있음. 그래서 movies: movies = movies가 됨 */
    this.setState({ movies, isLoading: false });
  }
  //App 컴포넌트가 마운트되면 아래 함수가 실행되면서 getMovies함수가 실행됨.
  componentDidMount() {
    this.getMovies();
  }
  render() { /* 리액트 앱이 실행되면 최초로 render()함수가 실행됨 */
    const { isLoading, movies } = this.state;
    /* isLoading이 true이면 Loading, false이면 We are ready가 화면에 뿌려짐 */
    return (
      /* Movie.map()에 전달한 함수가 <Movie />를 반환함 */
      <div>
        {isLoading ? 'Loading...' : movies.map((movie) => {
          console.log(movie); 
          return (
            <Movie 
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium.cover.image}
            />
          );
          })}
      </div>
    );
  }
}

export default App;