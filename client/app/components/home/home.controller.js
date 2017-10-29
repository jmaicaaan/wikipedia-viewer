class HomeController {
  constructor($state, wikiService) {
    "ngInject";
    this._$state = $state;
    this._wikiService = wikiService;
    this.query = '';
  };

  onSearch = () => {
    if (!this.query) {
      return;
    }
    this._$state.go('search', { q: this.query });
  };

  onRandomSearch = () => {
    return this._wikiService.wikiRandomSearch();
  };
}

export default HomeController;
