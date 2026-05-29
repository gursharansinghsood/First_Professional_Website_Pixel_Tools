import { MainHeading, NormalText, ParagraphCard, UnorderList } from "../components/TextComponents"

const sections = [
    {
        heading: "Smart AI Tools for Modern Creators",
        paragraphs: [
            "Welcome to PixelTools — a modern AI-powered platform designed to simplify image editing and digital creativity through fast, intelligent, and easy-to-use tools. Our mission is to make advanced AI technology accessible to everyone through clean design, smooth performance, and practical functionality."
        ],
    },
    {
        heading: "What We Do",
        paragraphs: [
            "PixelTools focuses on building lightweight yet powerful AI utilities that help users complete creative tasks in seconds. From removing image backgrounds to future AI-based editing solutions, every tool is designed with simplicity, speed, and user experience in mind.",
            "Our current featured tool allows users to:"
        ],
        listItems: [
            "Remove image backgrounds instantly",
            "Download high-quality transparent images",
            "Experience fast AI-powered processing",
            "Use the platform seamlessly across devices"
        ]
    },
    {
        heading: "Our Vision",
        paragraphs: [
            "We believe modern tools should be:",
        ],
        listItems: [
            "Empower creators with intelligent, fast, and reliable AI tools",
            "Make professional-grade image editing accessible to all",
            "Continuously innovate to set new standards in digital creativity"
        ],
        trailingParagraphs: [
            "PixelTools is being developed with a vision to create a growing ecosystem of smart digital tools that improve productivity without unnecessary complexity."
        ]
    },
    {
        heading: "Built With Modern Technologies",
        paragraphs: [
            "PixelTools is powered by a modern web stack to ensure performance, scalability, and a smooth user experience."
        ],
        listItems: [
            "React.js for a fast, responsive frontend",
            "Node.js with Express for a robust backend",
            "MongoDB for scalable data storage",
            "AI-powered background removal using advanced algorithms"
        ]
    },
    {
        heading: "Why PixelTools?",
        paragraphs: [
            "Unlike complicated editing software, PixelTools focuses on delivering:",
        ],
        listItems: [
            "Fast and accurate AI-powered background removal",
            "Clean, modern interface designed for ease of use",
            "No sign-up required to get started immediately",
            "Secure and reliable cloud-based processing",
            "Regular updates and new features based on user feedback"
        ],
        trailingParagraphs: [
            "Every detail is designed to create a smooth experience for creators, students, developers, and everyday users."
        ]
    },
    {
        heading: "Future Roadmap",
        paragraphs: [
            "PixelTools is continuously evolving. Upcoming features may include:"
        ],
        listItems: [
            "Advanced AI features for more complex image editing",
            "Batch processing for handling multiple images at once",
            "Integration with popular design and e-commerce platforms",
            "Enhanced customization options for output formats",
            "Expanded toolset for photo retouching and enhancement"
        ]
    },
    {
        heading: "About The Project",
        paragraphs: [
            "PixelTools started as a passion-driven development project focused on learning and building real-world AI applications using modern frontend technologies. The project represents creativity, continuous improvement, and practical development experience while exploring the future of AI-powered web applications."
        ]
    },
    {
        heading: "Thank You",
        paragraphs: [
            "Thank you for visiting PixelTools. We're excited to continue building simple, useful, and modern AI tools that make digital creativity faster and more accessible for everyone."
        ],
        isLast: true
    }
]

// ✅ Reusable section renderer — no more copy-paste JSX
const Section = ({ heading, paragraphs = [], listItems = [], trailingParagraphs = [], isLast = false }) => (
    <ParagraphCard>
        <MainHeading heading={heading} />

        {paragraphs.map((text, i) => (
            <NormalText key={i} text={text} />
        ))}

        {listItems.map((item, i) => (
            <UnorderList key={i} text={item} />
        ))}

        {trailingParagraphs.map((text, i) => (
            <NormalText key={i} text={text} />
        ))}

        {!isLast && <hr className="my-5 text-primary/20" />}
    </ParagraphCard>
)

const About = () => {
    return (
        <div className="flex flex-col justify-center min-h-screen w-full sm:p-10 p-5">
            <p className="text-2xl font-bold text-text text-center">About PixelTools</p>
            <hr className="my-5 text-primary/20" />

            {sections.map((section, index) => (
                <Section key={index} {...section} />
            ))}
        </div>
    )
}

export default About