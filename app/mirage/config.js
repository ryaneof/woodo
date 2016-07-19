export default function() {
  this.get('/photos', function () {
    return {
      data: [{
        type: 'photos',
        id: 6,
        attributes: {
          src: '/images/2016-07-19.jpg',
          title: 'Play Possum',
          w: 3772,
          h: 2829
        }
      }, {
        type: 'photos',
        id: 5,
        attributes: {
          src: '/images/2016-02-18.jpg',
          title: 'Handsome',
          w: 2448,
          h: 3264,
        }
      }, {
        type: 'photos',
        id: 4,
        attributes: {
          src: '/images/2015-11-03.jpg',
          title: 'Hippie',
          w: 2448,
          h: 3261,
        }
      }, {
        type: 'photos',
        id: 3,
        attributes: {
          src: '/images/2015-08-30.jpg',
          title: 'Selfie',
          w: 2448,
          h: 3264,
        }
      }, {
        type: 'photos',
        id: 2,
        attributes: {
          src: '/images/2015-08-02.jpg',
          title: 'Staring',
          w: 2448,
          h: 3264,
        }
      }, {
        type: 'photos',
        id: 1,
        attributes: {
          src: '/images/2015-07-21.jpg',
          title: 'Sleeping',
          w: 3264,
          h: 2448,
        }
      }]
    };
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
