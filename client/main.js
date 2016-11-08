import {Template} from 'meteor/templating'
import './main.html'
import {Dates} from '/imports/api/data/dates'
Template.demo.onCreated(function helloOnCreated() {
    // counter starts at 0

});
Template.demo.helpers({
    collection: Dates,
    doc: ()=> Dates.findOne("1"),
})
Template.demo.events({});
