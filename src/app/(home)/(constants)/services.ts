// Portraits
import Commercial from '../../../../assets/cleaning5.jpg'
import Domestic from '../../../../assets/cleaning2.jpg'
import Industrial from '../../../../assets/industrial.jpg'
import School from '../../../../assets/cleaning4.jpg'

// Stickers
import CommercialSticker from '../../../../assets/damian.png'
import IndustrialSticker from '../../../../assets/alex.png'
import DomesticSticker from '../../../../assets/Tsega.png'
import FloorSticker from '../../../../assets/Glenda.png'
import SchoolSticker from '../../../../assets/james.png'
import { Avaialability, Colors, Music, Todo } from '../(components)/card'

export const ServicesArray = [
    {
        id: 1,
        title: 'Commercial Cleaning Service',
        short: 'Let us take care of your commercial premises, from offices to medical facilities, we clean and disinfect those everyday areas at the most convinient time for your operations',
        url: 'commercial-cleaning-service',
        image: Commercial,
        sticker: CommercialSticker,
        card: Todo,
        options: [
            {
                id: 1,
                optionTitle: "Office Cleaning",
                optionPrice: 45,
                optionContent: [
                    {
                        descriptionId: 1,
                        descriptionText: "Regular office cleaning schedules to maintain a spotless working environment."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "Cleaning plans to fit the operational hours and specific needs of your office."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Services include dusting, vacuuming, glass cleaning, sanitizing workstations and touch points, and maintaining common areas such as kitchens and restrooms."
                    },
                    {
                        descriptionId: 4,
                        descriptionText: "Steam cleaning of carpets and upholstery as required."
                    },
                ]
            },
            {
                id: 2,
                optionTitle: "Retail Store Cleaning",
                optionPrice: 45,
                optionContent: [
                    {
                        descriptionId: 1,
                        descriptionText: "Daily cleaning routines designed to enhance the shopping experience for customers."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "Attention to detail in high-traffic areas to maintain a pristine retail environment."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Services include floor cleaning, window cleaning, dusting, Bathrooms, Kitchens and sanitizing high-touch surfaces."
                    },
                    {
                        descriptionId: 4,
                        descriptionText: "Vinyl buffering and Steam cleaning of carpets and upholstery as required."
                    },
                ]
            },
            {
                id: 3,
                optionTitle: "Medical Facility Cleaning",
                optionPrice: 45,
                optionContent: [
                    {
                        descriptionId: 1,
                        descriptionText: "Specialized cleaning services for healthcare facilities, including hospitals, clinics, and medical offices."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "Use of medical-grade cleaning products and procedures to ensure a sterile and hygienic environment."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Focus on high-touch areas and surfaces to prevent the spread of infections."
                    },
                    {
                        descriptionId: 4,
                        descriptionText: "Around the clock services available."
                    },
                ]
            },
            {
                id: 4,
                optionTitle: "Event Venue Cleaning",
                optionPrice: 45,
                optionContent: [
                    {
                        descriptionId: 1,
                        descriptionText: "Comprehensive cleaning services for events, ensuring that venues are immaculate before and after the event."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "Flexible scheduling to accommodate event timings, including late-night or early-morning cleaning services."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Handling of waste management and recycling to keep event spaces clean and organized."
                    },
                    {
                        descriptionId: 4,
                        descriptionText: "Vinyl buffering and Steam cleaning of carpets and upholstery as required."
                    },
                ]
            }
        ],
        description: "Blueline’s Commercial Cleaning services cater to a diverse range of needs of businesses and organizations. We understand the importance of maintaining a clean and healthy environment for employees, clients, work place safety and visitors. Our solutions are customizable to fit the unique requirements of different commercial spaces, ensuring thorough cleaning and sanitization.",
        review1: "From day one, Blueline have shown a commitment to quality assurance and flexibility to meet our varied requirements. Couldn’t speak more highly of our experience",
        reviewer1: "Martin",
        reviewer1Position: "Schools Property Manager",
        review2: "It’s been a pleasure working with Blueline across our various office and facility network. They very quickly got up to speed and have proven a valubale asset to our overall businesses",
        reviewer2: "Sean",
        reviewer2Position: "Property and Fleet Manager",
    },
    {
        id: 3,
        title: 'Industrial Cleaning Service',
        short: 'We go beyond factory house keeping activities, we commit to deliver a comprehensive risk assessment and a preventative cleaning schedule for your machines, equipment and facilities',
        url: 'industrial-cleaning-service',
        image: Industrial,
        sticker: FloorSticker,
        card: Colors,
        options: [
            {
                id: 1,
                optionTitle: "Warehouse Cleaning",
                optionPrice: 45,
                optionContent: [
                    {
                        descriptionId: 1,
                        descriptionText: "Regular office cleaning schedules to maintain a spotless working environment."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "Cleaning plans to fit the operational hours and specific needs of your office."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Services include dusting, vacuuming, glass cleaning, sanitizing workstations and touch points, and maintaining common areas such as kitchens and restrooms."
                    },
                    {
                        descriptionId: 4,
                        descriptionText: "Steam cleaning of carpets and upholstery as required."
                    },
                ]
            },
            {
                id: 2,
                optionTitle: "Factory Cleaning",
                optionPrice: 45,
                optionContent: [
                    {
                        descriptionId: 1,
                        descriptionText: "Regular office cleaning schedules to maintain a spotless working environment."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "Cleaning plans to fit the operational hours and specific needs of your office."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Services include dusting, vacuuming, glass cleaning, sanitizing workstations and touch points, and maintaining common areas such as kitchens and restrooms."
                    },
                    {
                        descriptionId: 4,
                        descriptionText: "Steam cleaning of carpets and upholstery as required."
                    },
                ]
            },
            {
                id: 3,
                optionTitle: "Equipment Cleaning",
                optionPrice: 45,
                optionContent: [
                    {
                        descriptionId: 1,
                        descriptionText: "Regular office cleaning schedules to maintain a spotless working environment."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "Cleaning plans to fit the operational hours and specific needs of your office."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Services include dusting, vacuuming, glass cleaning, sanitizing workstations and touch points, and maintaining common areas such as kitchens and restrooms."
                    },
                    {
                        descriptionId: 4,
                        descriptionText: "Steam cleaning of carpets and upholstery as required."
                    },
                ]
            },
            {
                id: 4,
                optionTitle: "Ventilation and Duct Cleaning",
                optionPrice: 45,
                optionContent: [
                    {
                        descriptionId: 1,
                        descriptionText: "Regular office cleaning schedules to maintain a spotless working environment."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "Cleaning plans to fit the operational hours and specific needs of your office."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Services include dusting, vacuuming, glass cleaning, sanitizing workstations and touch points, and maintaining common areas such as kitchens and restrooms."
                    },
                    {
                        descriptionId: 4,
                        descriptionText: "Steam cleaning of carpets and upholstery as required."
                    },
                ]
            }
        ],
        description: "Blueline’s Industrial Cleaning services meet the rigorous demands of industrial environments. We handle large-scale operations with specialized equipment and safety protocols to ensure facilities are clean, safe, and compliant with regulations.",
        review1: "From day one, Blueline have shown a commitment to quality assurance and flexibility to meet our varied requirements. Couldn’t speak more highly of our experience",
        reviewer1: "Martin",
        reviewer1Position: "Schools Property Manager",
        review2: "It’s been a pleasure working with Blueline across our various office and facility network. They very quickly got up to speed and have proven a valubale asset to our overall businesses",
        reviewer2: "Sean",
        reviewer2Position: "Property and Fleet Manager",
    },
    {
        id: 2,
        title: 'Domestic Cleaning Service',
        short: 'Keeping your house tidy has never been easier, plus, we offer free linen for your bedrooms for the first 3 months',
        url: 'domestic-cleaning-service',
        image: Domestic,
        sticker: DomesticSticker,
        card: Avaialability,
        options: [
            {
                id: 1,
                optionTitle: "Regular House Cleaning",
                optionPrice: 45,
                optionContent: [
                    {
                        descriptionId: 1,
                        descriptionText: "Regular office cleaning schedules to maintain a spotless working environment."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "Cleaning plans to fit the operational hours and specific needs of your office."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Services include dusting, vacuuming, glass cleaning, sanitizing workstations and touch points, and maintaining common areas such as kitchens and restrooms."
                    },
                    {
                        descriptionId: 4,
                        descriptionText: "Steam cleaning of carpets and upholstery as required."
                    },
                ]
            },
            {
                id: 2,
                optionTitle: "Deep Cleaning",
                optionPrice: 45,
                optionContent: [
                    {
                        descriptionId: 1,
                        descriptionText: "Regular office cleaning schedules to maintain a spotless working environment."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "Cleaning plans to fit the operational hours and specific needs of your office."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Services include dusting, vacuuming, glass cleaning, sanitizing workstations and touch points, and maintaining common areas such as kitchens and restrooms."
                    },
                    {
                        descriptionId: 4,
                        descriptionText: "Steam cleaning of carpets and upholstery as required."
                    },
                ]
            },
            {
                id: 3,
                optionTitle: "Spring Cleaning",
                optionPrice: 45,
                optionContent: [
                    {
                        descriptionId: 1,
                        descriptionText: "Regular office cleaning schedules to maintain a spotless working environment."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "Cleaning plans to fit the operational hours and specific needs of your office."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Services include dusting, vacuuming, glass cleaning, sanitizing workstations and touch points, and maintaining common areas such as kitchens and restrooms."
                    },
                    {
                        descriptionId: 4,
                        descriptionText: "Steam cleaning of carpets and upholstery as required."
                    },
                ]
            },
            {
                id: 4,
                optionTitle: "Post-Construction Cleaning",
                optionPrice: 45,
                optionContent: [
                    {
                        descriptionId: 1,
                        descriptionText: "Regular office cleaning schedules to maintain a spotless working environment."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "Cleaning plans to fit the operational hours and specific needs of your office."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Services include dusting, vacuuming, glass cleaning, sanitizing workstations and touch points, and maintaining common areas such as kitchens and restrooms."
                    },
                    {
                        descriptionId: 4,
                        descriptionText: "Steam cleaning of carpets and upholstery as required."
                    },
                ]
            }
        ],
        description: "Blueline’s Domestic Cleaning services are designed to meet the varied needs of households. Whether you require regular upkeep or a deep seasonal clean, our team provides thorough and reliable services tailored to your home.",
        review1: "From day one, Blueline have shown a commitment to quality assurance and flexibility to meet our varied requirements. Couldn’t speak more highly of our experience",
        reviewer1: "Martin",
        reviewer1Position: "Schools Property Manager",
        review2: "It’s been a pleasure working with Blueline across our various office and facility network. They very quickly got up to speed and have proven a valubale asset to our overall businesses",
        reviewer2: "Sean",
        reviewer2Position: "Property and Fleet Manager",
    },
    {
        id: 4,
        title: 'School Cleaning Service',
        short: 'Beyond just tidying up, school cleaning is a key strategy for ensuring a safe and encouraging learning environment, sanitizing common areas and killing germs and bacterias that present a risk for our children.',
        url: 'school-cleaning-service',
        image: School,
        sticker: SchoolSticker,
        card: Music,
        options: [
            {
                id: 1,
                optionTitle: "Child Care Centre Cleaning",
                optionPrice: 45,
                optionContent: [
                    {
                        descriptionId: 1,
                        descriptionText: "Regular office cleaning schedules to maintain a spotless working environment."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "Cleaning plans to fit the operational hours and specific needs of your office."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Services include dusting, vacuuming, glass cleaning, sanitizing workstations and touch points, and maintaining common areas such as kitchens and restrooms."
                    },
                    {
                        descriptionId: 4,
                        descriptionText: "Steam cleaning of carpets and upholstery as required."
                    },
                ]
            },
            {
                id: 2,
                optionTitle: "School Cleaning",
                optionPrice: 45,
                optionContent: [
                    {
                        descriptionId: 1,
                        descriptionText: "Regular office cleaning schedules to maintain a spotless working environment."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "Cleaning plans to fit the operational hours and specific needs of your office."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Services include dusting, vacuuming, glass cleaning, sanitizing workstations and touch points, and maintaining common areas such as kitchens and restrooms."
                    },
                    {
                        descriptionId: 4,
                        descriptionText: "Steam cleaning of carpets and upholstery as required."
                    },
                ]
            },
            {
                id: 3,
                optionTitle: "School Holidays Cleaning",
                optionPrice: 45,
                optionContent: [
                    {
                        descriptionId: 1,
                        descriptionText: "Regular office cleaning schedules to maintain a spotless working environment."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "Cleaning plans to fit the operational hours and specific needs of your office."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Services include dusting, vacuuming, glass cleaning, sanitizing workstations and touch points, and maintaining common areas such as kitchens and restrooms."
                    },
                    {
                        descriptionId: 4,
                        descriptionText: "Steam cleaning of carpets and upholstery as required."
                    },
                ]
            }
        ],
        description: "Blueline’s School Cleaning services create safe and clean learning environments for students and staff. We accommodate the specific needs of schools, childcares, and educational institutions, ensuring high hygiene standards.",
        review1: "From day one, Blueline have shown a commitment to quality assurance and flexibility to meet our varied requirements. Couldn’t speak more highly of our experience",
        reviewer1: "Martin",
        reviewer1Position: "Schools Property Manager",
        review2: "It’s been a pleasure working with Blueline across our various office and facility network. They very quickly got up to speed and have proven a valubale asset to our overall businesses",
        reviewer2: "Sean",
        reviewer2Position: "Property and Fleet Manager",
    }
]