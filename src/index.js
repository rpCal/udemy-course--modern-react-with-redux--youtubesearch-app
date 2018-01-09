
import _ from 'lodash';

import React, {Component} from 'react'; 
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCCrFDWxwjFWjavbesbdjNUqRJZvYSVYyE';


class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: [], 
            selectedVideo: null 
        };

        this.videoSearch("surfboard");
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]    
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (<div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail 
                video={this.state.selectedVideo}/>
            <VideoList 
                onVideoSelect={selectedVideo => this.setState({ selectedVideo }) }
                videos={this.state.videos} />
        </div>);
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));



/**
 * Notatki
 *
 * 
 * 16:00. Przerwa.  4,5h nauki, niewiele ale zawsze to cos do przodu.
 * 
// Ucze sie redux'a!! :D
 * 
// dodawanie nowych bibliotek z webpackem jest super, bardzo mi sie to podoba. Koniecznie musze sie tego poduczyc
 * 
// Co wazne, jesli chcemy wykonac metode z rodzica to trzeba to przekazac w propsach. Bardzo ciekawa rzecz, to 
// nic innego jak przekazywanie callbacka dalej. Robilem juz to bardzo dawno temu
 * 
 * 15:00 Koniec 
 */


/**
 * Notatki
 * 
 * 
 * 14:40 przerwa
 * 
// Jak sobie poradzic z nullami? (Can not get id of undefined) Zrobic if(!value) return <div>loading</div>
 * 
 * 
// Mozna uzyc (props) a pozniej const video = props.video. ale lepiej jest zapisac ({video})
 * 
 * 
// staraj sie nie uzywac for each w JSX, ale wlasciwie czemu? Już wiem czemu:
    "JSX expects anything inside of it to return an object to be displayed. A for loop does 
    not return anything, but map does.""
    Czyli JSX oczekuje ze kazdy {} zwroci coś do wyświetlenia, a for loop niczego nie zwraca
    lepiej jest uzyc metody ktora cos zwraca i tam uzyc for loop
    Dobrze jest myslec o tym {} jak o return tbody( for..loop ); = tak nie mozna
// Inne patenty na wyświetlenie czegos:
 {Array.apply(0, Array(10).map(FN))}
 {(function(arr){ FN })(Array(10))}   
 {[...Array(10)].map(FN)}
 {Array(10).fill(1).map(FN)}
 kluczowe jest aby w kazdym elementow do wyswietlania byl attr key, np. <ObjectRow key={i} />
 bo na podstawie tego tworzony jest virtualDOM. Bardzo ciekawy moment!
 * 
 * 
 * 
// Downstream data flow -> chodzi o to aby najbardziej "starszy" komponent pobieral dane
// a reszta komponentow pobiera te dane.
// kazdy atrybut przy inicjalizacji klasy zostanie dodany do props dziecka np. <VideoList videos={this.state.videos} />
 * 
 *  
// Wnioski
-> Funtional component. Nie przechowuje stanu
-> Class component. Przechowuje stan
-> Controled component. Zachowania.
// React posia bardzo male api co jest super.
 * 
 * 
 * 
// Do zmiany stanu uzywamy setState. KONIECZNIE!
// Za kazdym wywolaniem setState sprawiamy ze komponent musi zrobic rerender
// jest cos takiego jak "controled component"
 * 
 * 
 * 
// Ciekawosta. Przypomnialo mi sie ze kurnik.pl byl kiedys na sprzedaz. 
// warto pamietac ze kazda firma przechodzi pewien proces, moze warto
// abym pomyslał by rzeczywiscie nie skupowac aplikacji od innych
// po niższej wartosci, a pozniej zajął sie obslugą tego
// jesli bede znal sie na technologi to bede mogl nad tym pracowac 
// i rozwijac to, a klienci juz są wiec to najwazniejsze...

 * 
// STATE system in react

// 1)
// functional components nie mają stanu, a właściwie nie powinny miec
// a class based component zdecydowanie powinny miec!! Zapamietac to.

// 2) 
// constructor jest aby ustawic podstawowe zmienne
// jesli chcemy uzyc kontruktora rodzica trzeba pamietac o super(props);

 * 
// moge tez zapisac sobie cos w samym jsx uzywajac fat arrow syntax. Ciekawa sprawa
// jesli chce jakis event wystarczy ze uzyje on<EventName> np. onChange 
 * 12:41 Start
 */

/**
 * Notatki
 * 
 * 12:30 Przerwa
// Co wazne kazda klasa ktora rozszerza komponent, musi implementowac metode render()
 * 
// ZAJEBISTE zamiast pisac React.Component mozna zrobic import React, {Component} from 'react'
// i wtedy napisac extends Component
 * 
 *
// Zapis metod w klasie w ES6 powinien byc: render() {}. Pamietac gdzie jest spacje
 *  
 * 
// "functional component" vs "class component". Najlepiej uzywac "class based component"
 * 
// Warto pamietac o tym czym czy jest "export default" i odpowiednie rzeczy wrzucac
 * 
// stworzylem klucz API do youtube AIzaSyCCrFDWxwjFWjavbesbdjNUqRJZvYSVYyE
 * 
// Co ważne starajmy sie podzielić i rozdzielić odpowiedzialnośc każdego z komponenut
// CO Istotniejsze, kazdy komponent powinien miec tylko jeden plik
 * 
// Mozna uzywac fat arrow syntax, ale wtedy zmienia sie this.
// bardzo czesto uzywa sie zapisu z "strzałką"
 * 
// Ciekawe jest to ze te metoda zwraca reference do stworzonego komponentu
// Syntax tej metody render: ReactDOM.render(element, container[, callback])
// Co ciekawe mozna zamykac i otwierac w jednym tagu <App />. Wazne jest /> na koncu  
 * 
 * 
// const App to tylko klasa, a nie instancja aplikacji.
 * 
 * 
// co to robi? import React from 'react' 
// wyszukaj folderu 'react' w ./node_modules/
// pozniej przypisz to co tam masz do zmiennej React 
 * 
// czemu uzywamy JSX?
// bo ten kod jest bardziej czytelny
// "transpilation" to robi, zamienia kod na czysty js
// return React.createElement("div", null, "Hi"); 
 * 
 * Bardzo dobry przykład po co uzywac jsx. Uzyc babeljs.io
 * Zrobilem nowy branch = course, aby oddzielic co ja zrobielem
 * CONTS = to jest składnia z ES6(lub ES2016)
// co zrobie w tym module?
// Stworze nowy komponent, ten komponent powinien wyprodukowac kod HTMl
// wybierz ten komponent, a pozniej dodaj go do strony html
 * * 11:45
 */