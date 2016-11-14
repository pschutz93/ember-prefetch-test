import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: {
      refreshModel: true,
    }
  },
  prefetch(params) {
    const model = Ember.Object.create({
      message: new Date().toString(),
    });
    return Ember.RSVP.resolve(model);
  }
});
