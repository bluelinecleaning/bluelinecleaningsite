import { title } from 'process'
import Commercial from '../../../../assets/cleaning5.jpg'
import Domestic from '../../../../assets/cleaning2.jpg'
import Industrial from '../../../../assets/industrial.jpg'
import School from '../../../../assets/cleaning4.jpg'

export const ServicesArray = [
    {
        id: 1,
        title: 'Commercial Cleaning Service',
        short: 'Let us take care of your commercial premises, from offices to medical facilities, we clean and disinfect those everyday areas at the most convinient time for your operations',
        image: Commercial
    },
    {
        id: 3,
        title: 'Industrial Cleaning Service',
        short: 'We go beyond factory house keeping activities, we commit to deliver a comprehensive risk assessment and a preventative cleaning schedule for your machines, equipment and facilities',
        image: Industrial
    },
    {
        id: 2,
        title: 'Domestic Cleaning Service',
        short: 'Keeping your house tidy has never been easier, plus, we offer free linen for your bedrooms for the first 3 months',
        image: Domestic
    },
    {
        id: 4,
        title: 'School Cleaning Service',
        short: 'Beyond just tidying up, school cleaning is a key strategy for ensuring a safe and encouraging learning environment, sanitizing common areas and killing germs and bacterias that present a risk for our children',
        image: School
    }
]