Meteor.startup(function () {
    // Publicaciones
    Meteor.publish('Coords', function () {
        return Coords.find();
    });

    return Meteor.methods({
        removeAllCoords: function () {
            return Coords.remove({});
        }
    });
});