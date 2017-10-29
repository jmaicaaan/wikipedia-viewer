class SearchController {
  constructor($state, $stateParams, wikiService) {
    "ngInject";
    this._$stateParams = $stateParams;
    this._wikiService = wikiService;
    this.results = [];
    this.query = this._$stateParams.q || '';
  }

  $onInit = () => {
    this.onSearch();
  };

  onSearch = () => {
    if (this.query) {
      this._wikiService.searchWiki(this.query)
      .then((results) => {
        console.log('results', results);
        this.results = results;
      });
    }
  };

  getWikiUrl = (wikiId) => {
    return `https://en.wikipedia.org/?curid=${wikiId}`;
  };
}

export default SearchController;
