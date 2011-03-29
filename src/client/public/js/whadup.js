(function() {
  $(function() {
    window.Event = Backbone.Model.extend({
      EMPTY: "New event",
      initialize: function() {
        if (!this.get("title")) {
          return this.set({
            title: this.EMPTY
          });
        }
      }
    });
    window.EventList = Backbone.Collection.extend({
      model: Event,
      url: '/api/events/'
    });
    window.Events = new EventList([
      {
        title: "Foo Fighters @ Kalasamata"
      }, {
        title: "Maalaisn���yttelyt @ Messukeskus"
      }
    ]);
    window.EventView = Backbone.View.extend({
      tagName: "li",
      template: _.template(($("#event-template")).html()),
      initialize: function() {
        return this.model.view = this;
      },
      render: function() {
        ($(this.el)).html(this.template(this.model.toJSON()));
        return this;
      }
    });
    window.AppView = Backbone.View.extend({
      el: $('#eventapp'),
      initialize: function() {
        _.bindAll(this, 'addOne', 'addAll');
        Events.bind('add', this.addOne);
        Events.bind('refresh', this.addAll);
        return Events.fetch();
      },
      addOne: function(event) {
        var view;
        view = new EventView({
          model: event
        });
        return (this.$("#event-list")).append(view.render().el);
      },
      addAll: function() {
        return Events.each(this.addOne);
      }
    });
    return window.App = new AppView;
  });
}).call(this);
