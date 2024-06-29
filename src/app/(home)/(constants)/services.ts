// Portraits
import Commercial from '../../../../assets/cleaning5.jpg'
import Domestic from '../../../../assets/cleaning2.jpg'
import Industrial from '../../../../assets/industrial.jpg'
import School from '../../../../assets/cleaning4.jpg'

// Service page hero
import CommercialHero from '../../../../assets/commercial.jpg'

// Stickers
import CommercialSticker from '../../../../assets/damian.png'
import DomesticSticker from '../../../../assets/Tsega.png'
import FloorSticker from '../../../../assets/Glenda.png'
import SchoolSticker from '../../../../assets/james.png'
import { Avaialability, Colors, Music, Todo } from '../(components)/card'

export const ServicesArray = [
    {
        id: 1,
        title: 'Commercial Cleaning Service',
        short: 'Let us take care of your commercial premises. From offices to healthcare or retail locations, we thoroughly clean and disinfect your space at the most convenient time for your operations.',
        url: 'commercial-cleaning-service',
        image: Commercial,
        hero: CommercialHero,
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
        reviewer1: "Martin N.",
        reviewer1Position: "Schools Property Manager",
        review2: "It’s been a pleasure working with Blueline across our various office and facility network. They very quickly got up to speed and have proven a valubale asset to our overall businesses",
        reviewer2: "Sean",
        reviewer2Position: "Property and Fleet Manager",
    },
    {
        id: 3,
        title: 'Industrial Cleaning Service',
        short: 'Full suite of cleaning services including comprehensive risk assessments as required and a strategic approach to preventative cleaning of your machines, equipment and facilities.',
        url: 'industrial-cleaning-service',
        image: Industrial,
        hero: Industrial,
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
                        descriptionText: "Large-scale cleaning operations that include sweeping, mopping, and dusting."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "Use of industrial-grade cleaning equipment to handle extensive spaces efficiently."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Ensuring safety and minimizing disruption to warehouse operations."
                    }
                ]
            },
            {
                id: 2,
                optionTitle: "Factory Cleaning",
                optionPrice: 45,
                optionContent: [
                    {
                        descriptionId: 1,
                        descriptionText: "Detailed cleaning of heavy machinery and production areas to maintain hygiene and operational efficiency."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "Importance of minimizing downtime through scheduled maintenance cleaning."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Safe handling and disposal of industrial waste."
                    }
                ]
            },
            {
                id: 3,
                optionTitle: "End of Build",
                optionPrice: 45,
                optionContent: [
                    {
                        descriptionId: 1,
                        descriptionText: "Post-construction cleaning services to prepare sites for occupancy."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "Removal of construction debris, dust, and residue."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Ensuring the site is ready for inspection and handover."
                    }
                ]
            },
            {
                id: 4,
                optionTitle: "Maintenance Cleaning",
                optionPrice: 45,
                optionContent: [
                    {
                        descriptionId: 1,
                        descriptionText: "Regular maintenance cleaning schedules to keep industrial facilities in optimal condition."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "Preventative cleaning measures to prolong the life of equipment and infrastructure."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Services include floor cleaning, equipment cleaning, and general maintenance tasks."
                    }
                ]
            }
        ],
        description: "Blueline’s Industrial Cleaning services meet the rigorous demands of industrial environments. We handle large-scale operations with specialized equipment and safety protocols to ensure facilities are clean, safe, and compliant with regulations.",
        review1: "I have been beyond impressed with the expertise and insight shown by Juan and the team in creating preventative and maintenance cleaning risk assessments and safe work protocols specifically for our site. The plant has never looked better, our risks of incidents are greatly reduced, and my upcoming conversation with our insurance broker will be far more comfortable. Thank you Blueline.",
        reviewer1: "Martin O.",
        reviewer1Position: "Schools Property Manager",
        review2: "It’s been a pleasure working with Blueline across our various office and facility network. They very quickly got up to speed and have proven a valubale asset to our overall businesses",
        reviewer2: "Sean",
        reviewer2Position: "Property and Fleet Manager",
    },
    {
        id: 2,
        title: 'Domestic Cleaning Service',
        short: 'Keeping your house tidy has never been easier. Let us keep your home spotless so you can rest easy, knowing you’re contributing to positive community outcomes.',
        url: 'domestic-cleaning-service',
        image: Domestic,
        hero: Domestic,
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
                        descriptionText: "Scheduled weekly or bi-weekly cleaning to maintain a clean home."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "General housekeeping tasks including dusting, vacuuming, bathrooms, mopping, and surface cleaning."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Customizable cleaning plans to fit your household's needs."
                    },
                    {
                        descriptionId: 4,
                        descriptionText: "Steam cleaning of carpets and upholstery as required."
                    }
                ]
            },
            {
                id: 2,
                optionTitle: "Deep Cleaning",
                optionPrice: 45,
                optionContent: [
                    {
                        descriptionId: 1,
                        descriptionText: "Intensive cleaning of all areas, focusing on hard-to-reach and neglected spots."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "Services include scrubbing bathrooms, kitchens, and cleaning behind appliances and furniture. Thorough cleaning of windows, curtains, and air vents, along with regular cleaning tasks."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Ideal for preparing your home for special occasions or after a prolonged absence."
                    },
                    {
                        descriptionId: 4,
                        descriptionText: "Steam cleaning of carpets and upholstery as required."
                    },
                ]
            },
            {
                id: 3,
                optionTitle: "Bond Cleaning",
                optionPrice: 45,
                optionContent: [
                    {
                        descriptionId: 1,
                        descriptionText: "End-of-lease cleaning to ensure the property is left in pristine condition."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "Detailed cleaning services designed to meet the requirements for bond return."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Includes carpet cleaning, wall washing, and appliance cleaning."
                    },
                    {
                        descriptionId: 4,
                        descriptionText: "Steam cleaning of carpets and upholstery as required"
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
                        descriptionText: "Cleaning services after home renovations to remove construction dust and debris."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "Detailed cleaning to ensure the building is ready for immediate occupancy."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Services include window cleaning, dusting, mopping, and removing any construction materials."
                    }
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
        short: 'We ensure a clean, safe, and positive learning environment by keeping classrooms clean, sanitizing common areas and eliminating germs and bacteria that pose a risk to our children and our teachers.',
        url: 'school-cleaning-service',
        image: School,
        hero: School,
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
                        descriptionText: "Safe and hygienic cleaning practices tailored to childcare centres."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "Use of non-toxic, child-safe cleaning products to ensure a healthy environment for children."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Focus on sanitizing toys, play areas, and sleeping areas to maintain a germ-free space."
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
                        descriptionText: "Daily cleaning schedules to maintain cleanliness throughout the school day."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "Special attention to high-touch areas such as door handles, desks, and restrooms to prevent the spread of germs."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Services include classroom cleaning, corridor maintenance, and sanitizing common areas like libraries and cafeterias."
                    },
                    {
                        descriptionId: 4,
                        descriptionText: "Steam cleaning of carpets and upholstery as required"
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
                        descriptionText: "Intensive cleaning services during school holidays to prepare the school for the new term."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "Deep cleaning of classrooms, administrative offices, and common areas."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Special projects such as carpet cleaning, window washing, and floor waxing to enhance the school’s appearance."
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