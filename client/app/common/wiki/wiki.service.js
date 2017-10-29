class WikiService {
  constructor($http, $sce) {
    "ngInject";
    this._$http = $http;
    this._$sce = $sce;
    this.baseURL = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrlimit=10&prop=revisions&rvprop=content&format=json`
  };

  searchWiki = (query) => {
    let params = {
      gsrsearch: query
    };
    return this.byJSONP(params);
  };

  byJSONP = (params) => {
    if (!params && !params.gsrsearch) {
      throw `Params cannot be empty. Must contain 'gsrsearch' property`;
    }
    return this._$http.jsonp(this.baseURL, { params })
      .then((resp) => resp.data.query.pages);
  };

  wikiRandomSearch = () => {
    return 'https://en.wikipedia.org/wiki/Special:Random';
  };
}

export default WikiService;