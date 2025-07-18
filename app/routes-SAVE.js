//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


router.post('/email-address', (req, res) => {
    res.redirect('/code')
})

router.post('/code', (req, res) => {
    res.redirect('/name')
})

router.post('/name', (req, res) => {
    res.redirect('/country')
})

router.post('/country', (req, res) => {
    res.redirect('/musical-instruments')
})

router.post('/musical-instruments', (req, res) => {
if(req.body.musicalInstruments == 'I cannot play a musical instrument without making people wince') {
    res.redirect('/not-eligible')
} else {
    res.redirect('/old-hat')
} 
})

router.post('/old-hat', (req, res) => {
    if(req.body.musicalInstruments == 'No') {
        res.redirect('/not-eligible')
    } else {
        res.redirect('/musical-style')
    }
    })