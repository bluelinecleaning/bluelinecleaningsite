// Portraits
import Commercial from '../../../../assets/cleaning5.jpg'
import Domestic from '../../../../assets/cleaning2.jpg'
import Industrial from '../../../../assets/industrial.jpg'
import School from '../../../../assets/cleaning4.jpg'
import Laundry from '../../../../assets/laundry-service.jpg'
import Restaurant from '../../../../assets/restaurant-cleaning-main.jpg'

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
        metaDescription: "Blueline’s Commercial Cleaning in Tasmania offers customizable solutions to maintain a clean, healthy, and safe environment for offices and commercial spaces.",
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
        description: "Blueline’s Commercial Cleaning services in Tasmania cater to a diverse range of needs of businesses and organizations. We understand the importance of maintaining a clean and healthy environment for employees, clients, work place safety and visitors. Our solutions are customizable to fit the unique requirements of different commercial spaces, ensuring thorough cleaning and sanitization.",
        review1: "From day one, Blueline have shown a commitment to quality assurance and flexibility to meet our varied requirements. Couldn’t speak more highly of our experience",
        reviewer1: "Martin N.",
        reviewer1Position: "Schools Property Manager",
        review2: "It’s been a pleasure working with Blueline across our various office and facility network. They very quickly got up to speed and have proven a valubale asset to our overall businesses",
        reviewer2: "Sean",
        reviewer2Position: "Property and Fleet Manager",
    },
    {
        id: 3,
        title: 'Industrial / Production Cleaning Service',
        short: 'Full suite of cleaning services in Tasmania including comprehensive risk assessments as required and a strategic approach to preventative cleaning of your machines, equipment and facilities.',
        url: 'industrial-production-cleaning-service',
        metaDescription: "Blueline’s Industrial Cleaning in Tasmania meets the rigorous demands of industrial environments. We ensure facilities are clean, safe, and compliant with specialized equipment and safety protocols.",
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
                id: 4,
                optionTitle: "Production Cleaning",
                optionPrice: 45,
                optionContent: [
                    {
                        descriptionId: 1,
                        descriptionText: "Regular cleaning schedules to keep production facilities in optimal condition."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "Preventative maintenance regimes to ensure the efficiency of your machinery."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Tailored cleaning measures to prolong the life of equipment and infrastructure."
                    },
                    {
                        descriptionId: 4,
                        descriptionText: "Services include floor cleaning, equipment cleaning, and general maintenance tasks."
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
            
        ],
        description: "Blueline’s Industrial / Production Cleaning and Preventative Maintenance services meet the rigorous demands of industrial environments. We handle large-scale operations with specialized equipment and safety protocols to ensure facilities are clean, safe, and compliant with regulations.",
        review1: "I have been beyond impressed with the expertise and insight shown by Blueline team in creating preventative and maintenance cleaning risk assessments and safe work protocols specifically for our site. The plant has never looked better, our risks of incidents are greatly reduced, and my upcoming conversation with our insurance broker will be far more comfortable. Thank you Blueline.",
        reviewer1: "Martin O.",
        reviewer1Position: "General Manager Operations",
        review2: "It’s been a pleasure working with Blueline across our various office and facility network. They very quickly got up to speed and have proven a valubale asset to our overall businesses",
        reviewer2: "Sean",
        reviewer2Position: "Property and Fleet Manager",
    },
    // {
    //     id: 2,
    //     title: 'Domestic Cleaning Service',
    //     short: 'Keeping your house tidy has never been easier. Let us keep your home spotless so you can rest easy, knowing you’re contributing to positive community outcomes.',
    //     url: 'domestic-cleaning-service',
    //     image: Domestic,
    //     hero: Domestic,
    //     sticker: DomesticSticker,
    //     card: Avaialability,
    //     options: [
    //         {
    //             id: 1,
    //             optionTitle: "Regular House Cleaning",
    //             optionPrice: 45,
    //             optionContent: [
    //                 {
    //                     descriptionId: 1,
    //                     descriptionText: "Scheduled weekly or bi-weekly cleaning to maintain a clean home."
    //                 },
    //                 {
    //                     descriptionId: 2,
    //                     descriptionText: "General housekeeping tasks including dusting, vacuuming, bathrooms, mopping, and surface cleaning."
    //                 },
    //                 {
    //                     descriptionId: 3,
    //                     descriptionText: "Customizable cleaning plans to fit your household's needs."
    //                 },
    //                 {
    //                     descriptionId: 4,
    //                     descriptionText: "Steam cleaning of carpets and upholstery as required."
    //                 }
    //             ]
    //         },
    //         {
    //             id: 2,
    //             optionTitle: "Deep Cleaning",
    //             optionPrice: 45,
    //             optionContent: [
    //                 {
    //                     descriptionId: 1,
    //                     descriptionText: "Intensive cleaning of all areas, focusing on hard-to-reach and neglected spots."
    //                 },
    //                 {
    //                     descriptionId: 2,
    //                     descriptionText: "Services include scrubbing bathrooms, kitchens, and cleaning behind appliances and furniture. Thorough cleaning of windows, curtains, and air vents, along with regular cleaning tasks."
    //                 },
    //                 {
    //                     descriptionId: 3,
    //                     descriptionText: "Ideal for preparing your home for special occasions or after a prolonged absence."
    //                 },
    //                 {
    //                     descriptionId: 4,
    //                     descriptionText: "Steam cleaning of carpets and upholstery as required."
    //                 },
    //             ]
    //         },
    //         {
    //             id: 3,
    //             optionTitle: "Bond Cleaning",
    //             optionPrice: 45,
    //             optionContent: [
    //                 {
    //                     descriptionId: 1,
    //                     descriptionText: "End-of-lease cleaning to ensure the property is left in pristine condition."
    //                 },
    //                 {
    //                     descriptionId: 2,
    //                     descriptionText: "Detailed cleaning services designed to meet the requirements for bond return."
    //                 },
    //                 {
    //                     descriptionId: 3,
    //                     descriptionText: "Includes carpet cleaning, wall washing, and appliance cleaning."
    //                 },
    //                 {
    //                     descriptionId: 4,
    //                     descriptionText: "Steam cleaning of carpets and upholstery as required"
    //                 },
    //             ]
    //         },
    //         {
    //             id: 4,
    //             optionTitle: "Post-Construction Cleaning",
    //             optionPrice: 45,
    //             optionContent: [
    //                 {
    //                     descriptionId: 1,
    //                     descriptionText: "Cleaning services after home renovations to remove construction dust and debris."
    //                 },
    //                 {
    //                     descriptionId: 2,
    //                     descriptionText: "Detailed cleaning to ensure the building is ready for immediate occupancy."
    //                 },
    //                 {
    //                     descriptionId: 3,
    //                     descriptionText: "Services include window cleaning, dusting, mopping, and removing any construction materials."
    //                 }
    //             ]
    //         }
    //     ],
    //     description: "Blueline’s Domestic Cleaning services are designed to meet the varied needs of households. Whether you require regular upkeep or a deep seasonal clean, our team provides thorough and reliable services tailored to your home.",
    //     review1: "From day one, Blueline have shown a commitment to quality assurance and flexibility to meet our varied requirements. Couldn’t speak more highly of our experience",
    //     reviewer1: "Martin",
    //     reviewer1Position: "Schools Property Manager",
    //     review2: "It’s been a pleasure working with Blueline across our various office and facility network. They very quickly got up to speed and have proven a valubale asset to our overall businesses",
    //     reviewer2: "Sean",
    //     reviewer2Position: "Property and Fleet Manager",
    // },
    {
        id: 4,
        title: 'School Cleaning Service',
        short: 'We ensure a clean, safe, and positive learning environment by keeping classrooms clean, sanitizing common areas and eliminating germs and bacteria that pose a risk to our children and our teachers.',
        url: 'school-cleaning-service',
        metaDescription: "Blueline’s School Cleaning in Tasmania ensures safe, clean learning environments for students and staff. We meet the specific needs of schools and educational institutions with high hygiene standards.",
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
        description: "Blueline’s School Cleaning services in Tasmania create safe and clean learning environments for students and staff. We accommodate the specific needs of schools, childcares, and educational institutions, ensuring high hygiene standards.",
        review1: "From day one, Blueline have shown a commitment to quality assurance and flexibility to meet our varied requirements. Couldn’t speak more highly of our experience",
        reviewer1: "Martin",
        reviewer1Position: "Schools Property Manager",
        review2: "It’s been a pleasure working with Blueline across our various office and facility network. They very quickly got up to speed and have proven a valubale asset to our overall businesses",
        reviewer2: "Sean",
        reviewer2Position: "Property and Fleet Manager",
    },
    {
        id: 5,
        title: 'Laundry Services',
        short: "Tasmanian's leading commercial laundry providing the highest standards in large volume for healthcare, aged care, hospitality industries and more.",
        url: 'https://www.blueline-laundry.com/what-we-do',
        metaDescription: "Blueline’s School Cleaning in Tasmania ensures safe, clean learning environments for students and staff. We meet the specific needs of schools and educational institutions with high hygiene standards.",
        image: Laundry,
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
    },
    {
        id: 6,
        title: 'Restaurant Cleaning Service',
        short: 'We make sure your restaurant stays spotless and inviting by keeping the kitchen clean, sanitizing dining areas, and getting rid of germs that could affect the health of your team and guests. We’re here to help you serve the best of Tasmania with confidence.',
        url: 'restaurant-cleaning-service',
        metaDescription: "Ensure your Tasmanian restaurant stays clean and safe with Blueline Cleaning. Our team, including skilled individuals with disabilities, provides expert cleaning services to keep your kitchen and dining areas spotless for your staff and customers.",
        image: Restaurant,
        hero: Restaurant,
        options: [
            {
                id: 1,
                optionTitle: "Front of House Areas",
                optionPrice: 45,
                optionContent: [
                    {
                        descriptionId: 1,
                        descriptionText: "Comprehensive cleaning of dining areas to ensure a welcoming atmosphere for your guests."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "Use of eco-friendly cleaning products to maintain a healthy environment."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Special attention to high-touch areas like tables, chairs, and menus to prevent the spread of germs."
                    },
                ]
            },
            {
                id: 2,
                optionTitle: "Kitchen Cleaning",
                optionPrice: 45,
                optionContent: [
                    {
                        descriptionId: 1,
                        descriptionText: "Thorough cleaning of kitchen surfaces, equipment, and floors to meet health and safety standards."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "Sanitizing of food preparation areas to ensure compliance with food safety regulations."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Degreasing and cleaning of exhaust hoods, ovens, and grills as required."
                    }
                ]
            },
            {
                id: 3,
                optionTitle: "Deep Cleaning Service",
                optionPrice: 45,
                optionContent: [
                    {
                        descriptionId: 1,
                        descriptionText: "Intensive deep cleaning of the entire restaurant, including hard-to-reach areas."
                    },
                    {
                        descriptionId: 2,
                        descriptionText: "Deep cleaning of carpets, upholstery, and floor waxing to enhance the restaurant’s appearance."
                    },
                    {
                        descriptionId: 3,
                        descriptionText: "Special projects such as window washing and detailed kitchen equipment cleaning."
                    }
                ]
            }
        ],
        description: "Blueline’s Restaurant Cleaning services in Tasmania ensure your kitchen and dining areas are clean and safe for both staff and patrons. We tailor our services to meet the unique needs of restaurants, cafes, and food establishments, maintaining the highest standards of hygiene and cleanliness.",
        review1: "From day one, Blueline have shown a commitment to quality assurance and flexibility to meet our varied requirements. Couldn’t speak more highly of our experience",
        reviewer1: "Martin",
        reviewer1Position: "Schools Property Manager",
        review2: "It’s been a pleasure working with Blueline across our various office and facility network. They very quickly got up to speed and have proven a valubale asset to our overall businesses",
        reviewer2: "Sean",
        reviewer2Position: "Property and Fleet Manager",
    },
]