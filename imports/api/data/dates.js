/**
 * Created by cesar on 7/11/16.
 */
import {moment} from 'meteor/momentjs:moment'
const exportDates = new Mongo.Collection('dates')
exportDates.allow({
    insert: ()=>false,
    update: () =>true,
    remove: ()=>false,
})
exportDates.deny({
    insert: ()=>true,
    update: ()=>false,
    remove: ()=>true,
})
exportDates.attachSchema(new SimpleSchema({
    dateRange1: {
        type: [Date],
        autoform: {
            type: "daterangepicker",
            dateRangePickerOptions: {
                locale: {
                    format: 'DD/MM/YYYY',
                },
            }
        }
    },
    dateRange2: {
        type: [Date],
        autoform: {
            type: "daterangepicker",
            dateRangePickerOptions: {
                locale: {
                    format: 'DD/MM/YYYY',
                },
                "ranges": {
                    "Last 7 Days": [
                        moment().subtract(7, 'days'),
                        moment(),
                    ],
                    "Last 30 Days": [
                        moment().subtract(30, 'days'),
                        moment(),
                    ],
                    "This Month": [
                        moment().startOf('month'),
                        moment().add(1,'months').startOf('month').subtract(1,'day'),
                    ]
                },
            }
        }
    },
    singleDate: {
        type: Date,
        autoform: {
            type: "daterangepicker",
            dateRangePickerOptions: {
                singleDatePicker: true,
                locale: {
                    format: 'DD/MM/YYYY',
                },
            }
        }
    }
}))

export const Dates = exportDates
