(function() {
  var Navigation = {
    $projects: $('main ul'),
    $profile: $('section#profile'),
    bindEvents: function() {
      $('nav').on('click', 'a', this.navigate.bind(this));
    },
    navigate: function(e) {
      e.stopImmediatePropagation();

      var $t = $(e.target),
          projects = $t.data('nav') === 'projects',
          profile = $t.data('nav') === 'profile';
      
      $t.parent('nav a').off('click');

      if (profile) {
        e.preventDefault();
        this.$projects.fadeOut('fast', function() {
          this.$profile.fadeIn('fast');
        }.bind(this));
        return;
      } else if (projects) {
        e.preventDefault();
        console.log('project')
        this.$profile.fadeOut('fast', function() {
          this.$projects.fadeIn('fast');
        }.bind(this));
        return;
      } else {
        return;
      }
    },
    init: function() {
      this.bindEvents();
    },
  }

  Navigation.init();
}());