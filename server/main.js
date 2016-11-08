import {Meteor} from 'meteor/meteor';
import {Dates} from '/imports/api/data/dates'


Meteor.startup(()=> {
    if (Meteor.server) {
        if (Dates.find().count() == 0) {
            Dates.insert({
                _id: "1",
                dateRange1: [new Date(), new Date()],
                dateRange2: [new Date(), new Date()],
                singleDate: new Date
            })
        }

    }
})
