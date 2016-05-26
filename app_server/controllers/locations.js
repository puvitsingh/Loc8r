/* GET 'home' page. */
module.exports.homelist = function(req, res) {
  res.render('locations-list', { 
  	title: 'Loc8r - find a place to work with wifi',
  	pageHeader: {
  		title: 'Loc8r',
  		strapline: 'Find places to work with wifi near you!'
  	},
  	sidebar: 'looking for a wifi seat?  go hear and then you can find the nicest place you could without haveing to trudge through the streets to find a place that is suitable',
  	locations: [{
  		name: 'first location',
  		address: '123 Main St, Beverly, MA 01915',
  		rating: 2,
  		facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
  		distance: '120m'
  	}, {
  		name: 'second location',
  		address: '160 Colon St, Beverly, MA 01915',
  		rating: 2,
  		facilities: ['Cold Drinks', 'Fries', 'Premium Wifi'],
  		distance: '60m'
  	}, {
  		name: 'third location',
  		address: '6 Willow St, Beverly, MA 01915',
  		rating: 4,
  		facilities: ['Alcoholic Drinks', 'Desert', 'Premium Wifi'],
  		distance: '10m'
  	}

  	]
  });
};

module.exports.locationInfo = function(req, res) {
  res.render('location-info', { 
  	title: 'first location',
  	pageHeader: {title: 'first location'},
  	sidebar: {
  		context: 'is on Loc8r because it is accessible yadayyada yadayyada yadayyada  yadayyada',
  		callToAction: 'If you\'ve been and you like it then please review'
  	},
  	location: {
  		name: 'General',
  		address: '123 Main St, Beverly, MA 01915',
  		rating: 2,
  		facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
  		coords: {lat: 42.549571, lng: -70.870491},
  		openingTimes: [{
  			days: 'Monday - Friday',
  			opening: '7:00 am',
  			closing: '7:00 pm',
  			closed: false
  		}, {
  			days: 'Saturday',
  			opening: '8:00 am',
  			closing: '4:00 pm',
  			closed: false
  		}, {
  			days: 'Sunday',
  			closed: true
  		}],
  		reviews: [{
  			author: 'one person',
  			rating: 5,
  			timestamp: '5 July 2011',
  			reviewText: 'amazing place.. loved it'
  		},{
  			author: 'second person',
  			rating: 2,
  			timestamp: '5 July 2011',
  			reviewText: 'amazing place.. loved it'
  		}]
  	}
  });
};

/* GET 'Add review' page. */
module.exports.addReview = function(req, res){
  res.render('location-review-form', {
    title: 'Review Location One on Loc8r',
    pageHeader: { title: 'Review Location one' }
  });
};