class HomeController {
  constructor($state, wikiService) {
    "ngInject";
    this._$state = $state;
    this._wikiService = wikiService;
    this.query = '';
    this.results = [];
    this.init();
  };
  
  init = () => {};

  onSearch = () => {
    // this._wikiService.searchWiki(this.query)
    //   .then((results) => {
    //     this.results = results;
    //   });
    this._$state.go('search', { q: this.query });
  };

  getWikiUrl = (wikiId) => {
    return `https://en.wikipedia.org/?curid=${wikiId}`;
  };
}

export default HomeController;
