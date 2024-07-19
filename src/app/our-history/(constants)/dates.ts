import Sisters from '../../../../assets/history/1835.jpg'
import Commencement from '../../../../assets/history/1893.jpg'
import Boiler from '../../../../assets/history/1913.jpg'
import Tassie from '../../../../assets/history/1955.jpg'
import Workshop from '../../../../assets/history/1968.jpg'
import Explosion from '../../../../assets/history/1974.png'
import Rebuilding from '../../../../assets/history/1974-2.jpg'
import MtCanice from '../../../../assets/history/1986.jpg'
import Management from '../../../../assets/history/1993.jpg'
import Laundry from '../../../../assets/history/1995.jpg'
import Blessing from '../../../../assets/history/1996.jpg'
import Modernization from '../../../../assets/history/2006.jpg'
import Launceston from '../../../../assets/history/2012.jpg'
import Statewide from '../../../../assets/history/2014.jpg'
import Truck from '../../../../assets/history/2016.jpeg'
import Covid from '../../../../assets/history/2020.jpg'
import Cleaning from '../../../../assets/history/2024.jpg'

export const datesArray = [
    {
        id: 1,
        color: '',
        textColor: 'white',
        year: 1835,
        title: 'Sisters of the Good Shepherd founded',
        text: 'Saint Mary Euphrasia Pelletier founded the Catholic religious order in Angers, France.',
        image: Sisters,
        imageBg: 'black',
        imagetitle: 'Blueline Laundry at 1893',
        imageAlt: 'A 19th century factory'
    },
    {
        id: 2,
        color: 'black',
        textColor: 'white',
        year: 1893,
        title: 'Laundry Commenced',
        text: 'Operations commenced as a laundry at the Magdalen Home at Mount St. Canice. It was started by the Sisters of the Good Shepherd to provide employment for disadvantaged women and girls.',
        image: Commencement,
        imageBg: 'white',
        imagetitle: 'Blueline Laundry at 1893',
        imageAlt: 'A 19th century factory'
    },
    {
        id: 3,
        color: 'green',
        textColor: 'white',
        year: 1913,
        title: 'Modern Boiler House',
        text: 'A modern boiler house was added to the existing facilities in the laundry which included a wash area, an ironing room and a packing room.',
        image: Boiler,
        imageBg: 'white',
        imagetitle: 'Blueline Laundry at 1893',
        imageAlt: 'A 19th century factory'
    },
    {
        id: 4,
        color: 'white',
        textColor: 'black',
        year: 1955,
        title: 'Steady Growth',
        text: 'Laundry operations continued with business having steadily grown throughout the two world wars and into the 1950s.',
        image: Tassie,
        imageBg: 'black',
        imagetitle: 'Blueline Laundry at 1893',
        imageAlt: 'A 19th century factory'
    },
    {
        id: 5,
        color: 'black',
        textColor: 'white',
        year: 1968,
        title: 'Bay View Laundry',
        text: 'A new laundry association was formed and the facility was renamed Bay View Laundry. Lat the following year the laundry commenced operation as a sheltered workshop.',
        image: Workshop,
        imageBg: 'white',
        imagetitle: 'Blueline Laundry at 1893',
        imageAlt: 'A 19th century factory'
    },
    {
        id: 6,
        color: 'green',
        textColor: 'white',
        year: 1974,
        title: 'Boiler Accident',
        text: 'On Thursday 5 September 1974, workmen were testing a new boiler in the laundry when it exploded. Eight people were killed with many more injured.',
        image: Explosion,
        imageBg: 'white',
        imagetitle: 'Blueline Laundry at 1893',
        imageAlt: 'A 19th century factory',
        secondEventImage: Rebuilding,
        secondImagetitle: 'Blueline Laundry at 1893',
        secondImageAlt: 'A 19th century factory',
        secondEventText: 'Following the incident, the decision was made to rebuild the laundry at Mount St. Canice with the aim of providing employment for disable people.'
    },
    {
        id: 7,
        color: 'white',
        textColor: 'black',
        year: 1986,
        title: 'Pope John Paul II',
        text: 'Pope John Paul II visited Mount St. Canice.',
        image: MtCanice,
        imageBg: 'black',
        imagetitle: 'Blueline Laundry at 1893',
        imageAlt: 'A 19th century factory'
    },
    {
        id: 8,
        color: 'black',
        textColor: 'white',
        year: 1993,
        title: 'Voluntary Board',
        text: 'On 25 January the laundry was incorporated and a voluntary board of management appointed.',
        image: Management,
        imageBg: 'white',
        imagetitle: 'Blueline Laundry at 1893',
        imageAlt: 'A 19th century factory'
    },
    {
        id: 9,
        color: '#DFE1E6',
        textColor: 'black',
        year: 1995,
        title: 'Blueline Commences',
        text: 'Bay View Laundry ceased operations at Mount St. Canice on 9 December 1995. Operations moved to Creek Road, New Town and the name was changed to Blueline Laundry. Blueline became a Registered Training Organisation. At the start of accredited training the laundry had 52 employees including 30 people with a disability. ',
        image: Laundry,
        imageBg: '#007FA3',
        imagetitle: 'Blueline Laundry at 1893',
        imageAlt: 'A 19th century factory'
    },
    {
        id: 10,
        color: '',
        textColor: 'white',
        year: 1996,
        title: 'Factory blessed',
        text: "The new factory was blessed by His Grace Archbishop D’Arcy. Blueline remains part of the Archdiocese of Hobart and is a Catholic values based agency.",
        image: Blessing,
        imageBg: 'white',
        imagetitle: 'Blueline Laundry at 1893',
        imageAlt: 'A 19th century factory'
    },
    {
        id: 11,
        color: '#00843F',
        textColor: 'white',
        year: 2006,
        title: 'Modernisation',
        text: "Modernisation of the laundry commenced with installation of the CBWs and more recently new ironers.",
        image: Modernization,
        imageBg: 'white',
        imagetitle: 'Blueline Laundry at 1893',
        imageAlt: 'A 19th century factory'
    },
    {
        id: 12,
        color: 'black',
        textColor: 'white',
        year: 2012,
        title: 'Statewide operation',
        text: "With the securement of work from the Launceston General Hospital, Blueline took a step to becoming a statewide operation by committing to establish a laundry in Launceston.",
        image: Launceston,
        imageBg: 'white',
        imagetitle: 'Blueline Laundry at 1893',
        imageAlt: 'A 19th century factory'
    },
    {
        id: 13,
        color: 'white',
        textColor: 'black',
        year: 2014,
        title: 'Blueline acquires Statewide Linen',
        text: "Statewide Linen was acquired by Blueline in further progression to having a statewide presence. Number of employees increased to 197 including 44 people with a disability.",
        image: Statewide,
        imageBg: '#007FA3',
        imagetitle: 'Blueline Laundry at 1893',
        imageAlt: 'A 19th century factory'
    },
    {
        id: 14,
        color: 'green',
        textColor: 'white',
        year: 2016,
        title: 'Re-brand',
        text: "Re-brand of the organisation commenced, resulting in a new logo, website and truck signage.",
        image: Truck,
        imageBg: '#007FA3',
        imagetitle: 'Blueline Laundry at 1893',
        imageAlt: 'A 19th century factory'
    },
    {
        id: 15,
        color: 'black',
        textColor: 'white',
        year: 2020,
        title: 'Coronavirus Pandemic',
        text: "Emergence of a global pandemic established Blueline as an expert advisor to Public Health, serving hospitals and quarantine hotels with accredited procedures to manage infectious linen and enhanced workplace safety equipment to protect staff.",
        image: Covid,
        imageBg: '#007FA3',
        imagetitle: 'Blueline Laundry at 1893',
        imageAlt: 'A 19th century factory'
    },
    {
        id: 16,
        color: '',
        textColor: 'white',
        year: 2024,
        title: 'Establishment of our Cleaning and Preventative Maintenance branch',
        text: "We expand our operations to Commercial, Industrial and Factory cleaning and preventative maintenance, maximizing our social purpose and impacting more lives.",
        image: Cleaning,
        imageBg: 'white',
        imagetitle: 'Blueline Laundry at 1893',
        imageAlt: 'A 19th century factory'
    },
]