import Ember from 'ember';

export default Ember.Route.extend({
  setupController() {
    this.store.findAll('photo').then((photoResults) => {
      const photoResultsArray = photoResults.toArray().map((photoResult) => {
        return photoResult.toJSON();
      });

      this.controllerFor('index').set('photos', photoResultsArray);
    });
  }
});
