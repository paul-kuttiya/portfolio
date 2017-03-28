(function() {
  var Navigation = {
    $projects: $('main ul'),
    $profile: $('section#profile'),
    bindEvents: function() {
      $('nav').on('click', 'a', this.navigate.bind(this));
    },
    navigate: function(e) {
      e.preventDefault();
      e.stopImmediatePropagation();

      var $t = $(e.target),
          projects = $t.data('nav') === 'projects';
      
      $t.parent('nav a').off('click');

      if (!projects) {
        this.$projects.fadeOut('fast', function() {
          this.$profile.fadeIn('fast');
        }.bind(this));
        return;
      }

      this.$profile.fadeOut('fast', function() {
        this.$projects.fadeIn('fast');
      }.bind(this));
    },
    init: function() {
      this.bindEvents();
    },
  }

  Navigation.init();
}());