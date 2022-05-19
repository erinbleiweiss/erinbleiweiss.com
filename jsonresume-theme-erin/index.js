const
  fs = require('fs'),
  gravatar = require('gravatar'),
  handlebars = require('handlebars'),
  handlebarsWax = require('handlebars-wax'),
  showdown = require('showdown'),
  addressFormat = require('address-format'),
  moment = require('moment'),
  Swag = require('swag');

Swag.registerHelpers(handlebars);

handlebars.registerHelper({
  removeProtocol: function (url) {
    return url.replace(/.*?:\/\//g, '');
  },

  concat: function () {
    let res = '';

    for (let arg in arguments) {
      if (typeof arguments[arg] !== 'object') {
        res += arguments[arg];
      }
    }

    return res;
  },

  formatAddress: function (address, city, region, postalCode, countryCode) {
    let addressList = addressFormat({
      address: address,
      city: city,
      subdivision: region,
      postalCode: postalCode,
      countryCode: countryCode
    });


    return addressList.join('<br/>');
  },

  formatDate: function (date) {
    return moment(date).format('YYYY');
  }
});

handlebars.registerHelper('markdown', function(options) {
  let converter = new showdown.Converter({
    openLinksInNewWindow: true
  });
  let html = converter.makeHtml(options.fn(this));
  return new handlebars.SafeString(html);
});

function render(resume) {
  let dir = __dirname + '/public',
    css = fs.readFileSync(dir + '/styles/main.css', 'utf-8'),
    resumeTemplate = fs.readFileSync(dir + '/views/resume.hbs', 'utf-8');

  let Handlebars = handlebarsWax(handlebars);

  Handlebars.partials(dir + '/views/partials/**/*.{hbs,js}');
  Handlebars.partials(dir + '/views/components/**/*.{hbs,js}');

  resume.basics.capitalName = resume.basics.name.toUpperCase();
  if(resume.basics && resume.basics.email) {
    resume.basics.gravatar = gravatar.url(resume.basics.email, {
      s: '200',
      r: 'pg',
      d: 'mm'
    }, 'https');
  }
  if (resume.basics.image || resume.basics.gravatar) {
    resume.basics.photo = resume.basics.image ? resume.basics.image : resume.basics.gravatar;
    console.log(resume.basics.photo)
  }

  return Handlebars.compile(resumeTemplate)({
    css: css,
    resume: resume
  });
}

module.exports = {
  render: render
};
