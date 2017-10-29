import WkFooterModule from './wkFooter';
import WkFooterController from './wkFooter.controller';
import WkFooterComponent from './wkFooter.component';
import WkFooterTemplate from './wkFooter.pug';

describe('WkFooter', () => {
  let $rootScope, makeController;

  beforeEach(window.module(WkFooterModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new WkFooterController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(WkFooterTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = WkFooterComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(WkFooterTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(WkFooterController);
    });
  });
});
