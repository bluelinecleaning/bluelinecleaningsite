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

export const ServicesArray = [
    {
        id: 1,
        title: 'Commercial Cleaning Service',
        short: 'Let us take care of your commercial premises, from offices to medical facilities, we clean and disinfect those everyday areas at the most convinient time for your operations',
        image: Commercial,
        sticker: CommercialSticker,
        options: [
            {
                id: 1,
                optionTitle: "Office Cleaning",
                optionContent: "Daily, weekly, or monthly cleaning services to maintain a clean and productive work environment."
            },
            {
                id: 2,
                optionTitle: "Retail Store Cleaning",
                optionContent: "Regular cleaning services for retail spaces, including floor care, window cleaning, and restroom sanitation."
            },
            {
                id: 3,
                optionTitle: "Medical Facility Cleaning",
                optionContent: "Specialized cleaning services for clinics, hospitals, and dental offices to ensure hygienic and sterile environments."
            },
            {
                id: 4,
                optionTitle: "Event Venue Cleaning",
                optionContent: "Pre-event and post-event cleaning services for conference centers, exhibition halls, and event spaces."
            }
        ]
    },
    {
        id: 3,
        title: 'Industrial Cleaning Service',
        short: 'We go beyond factory house keeping activities, we commit to deliver a comprehensive risk assessment and a preventative cleaning schedule for your machines, equipment and facilities',
        image: Industrial,
        sticker: FloorSticker,
        options: [
            {
                id: 1,
                optionTitle: "Warehouse Cleaning",
                optionContent: "Regular cleaning services for warehouses, including floor care, dust removal, and cleaning of storage areas."
            },
            {
                id: 2,
                optionTitle: "Factory Cleaning",
                optionContent: "Comprehensive cleaning services for factories, focusing on machinery, work areas, and safety compliance."
            },
            {
                id: 3,
                optionTitle: "Equipment Cleaning",
                optionContent: "Cleaning services for industrial equipment and machinery to ensure optimal performance and safety."
            },
            {
                id: 4,
                optionTitle: "Ventilation and Duct Cleaning",
                optionContent: " Cleaning services for HVAC systems, ducts, and vents to improve air quality and system efficiency."
            }
        ]
    },
    {
        id: 2,
        title: 'Domestic Cleaning Service',
        short: 'Keeping your house tidy has never been easier, plus, we offer free linen for your bedrooms for the first 3 months',
        image: Domestic,
        sticker: DomesticSticker,
        options: [
            {
                id: 1,
                optionTitle: "Regular House Cleaning",
                optionContent: "Scheduled cleaning services for homes, including dusting, vacuuming, mopping, and surface cleaning."
            },
            {
                id: 2,
                optionTitle: "Deep Cleaning",
                optionContent: "Intensive cleaning services that cover all areas of the home, including behind appliances, under furniture, and in hard-to-reach places."
            },
            {
                id: 3,
                optionTitle: "Spring Cleaning",
                optionContent: "Thorough seasonal cleaning services to refresh the home, including decluttering, window washing, and detailed cleaning."
            },
            {
                id: 4,
                optionTitle: "Post-Construction Cleaning",
                optionContent: "Cleaning services for homes that have undergone renovations or construction, removing dust, debris, and residues."
            }
        ]
    },
    {
        id: 4,
        title: 'School Cleaning Service',
        short: 'Beyond just tidying up, school cleaning is a key strategy for ensuring a safe and encouraging learning environment, sanitizing common areas and killing germs and bacterias that present a risk for our children.',
        image: School,
        sticker: SchoolSticker,
        options: [
            {
                id: 1,
                optionTitle: "Child Care Centre Cleaning",
                optionContent: "Cleaning and disinfecting areas with safe products that will allow our children to thrive in healthy environments, free of viruses and bacterias."
            },
            {
                id: 2,
                optionTitle: "School Cleaning",
                optionContent: "No matter how big the school is and its number of students, our team is prepared to deliver high quality results and focus on key administrative, educative and common areas."
            },
            {
                id: 3,
                optionTitle: "School Holidays Cleaning",
                optionContent: "Let's focus on those windows, carpets and shelves that can't be clean during the school term."
            }
        ]
    }
]