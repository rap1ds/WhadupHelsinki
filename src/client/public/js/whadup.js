(function() {
  $(function() {
    window.EventList = Backbone.Collection.extend({
      model: Event,
      url: '/api/events/'
    });
    window.Events = new EventList();
    window.EventView = Backbone.View.extend({
      tagName: "li",
      template: _.template(($("#event-template")).html()),
      initialize: function() {
        _.bindAll(this, 'render');
        return this.model.view = this;
      },
      render: function() {
        console.log('EventView.render');
        ($(this.el)).html(this.template(this.model.toJSON()));
        return this;
      }
    });
    window.AppView = Backbone.View.extend({
      el: $('#eventapp'),
      initialize: function() {
        _.bindAll(this, 'addOne', 'addAll', 'render');
        Events.bind('add', this.addOne);
        Events.bind('reset', this.addAll);
        Events.bind('all', this.render);
        return Events.fetch();
      },
      render: function() {
        return console.log('AppView.render');
      },
      addOne: function(event) {
        var view;
        console.log('AppView.addOne');
        view = new EventView({
          model: event
        });
        return (this.$("#event-list")).append(view.render().el);
      },
      addAll: function() {
        console.log('AppView.addAll');
        return Events.each(this.addOne);
      }
    });
    return window.App = new AppView;
  });
}).call(this);
