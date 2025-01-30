import { ChartBarIcon } from "lucide-react";

export default[
    

   {
    name: "Social Media Caption",
    desc: "An AI Tool that generates catchy captions for social media posts based on your input.",
    category: "social media",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111463.png",
    aiPrompt: "Generate 5 creative social media captions based on the provided content and tone. Result should be in plain text format.",
    slug: "generate-social-media-caption",
    form: [
      {
        label: "Enter your content description",
        field: "textarea",
        name: "content",
        required: true
      },
      {
        label: "Select tone of the caption",
        field: "textarea",
        name: "tone",
      //  options: ["Professional", "Funny", "Casual", "Inspirational"],
        required: true
      }
    ]
  },

  {
    name: "Email Subject Line",
    desc: "An AI Tool that crafts compelling email subject lines based on the content and goal of your email.",
    category: "email",
    icon: "https://cdn-icons-png.flaticon.com/128/732/732200.png",
    aiPrompt: "Generate 5 email subject lines that are attention-grabbing and relevant to the provided purpose and audience.",
    slug: "generate-email-subject-line",
    form: [
      {
        label: "Enter email content summary",
        field: "textarea",
        name: "emailSummary",
        required: true
      },
      {
        label: "Enter target audience",
        field: "input",
        name: "audience",
        required: true
      },
      {
        label: "Enter email goal",
        field: "input",
        name: "goal",
        required: true
      }
    ]
  },

  {
    name: "Product Description",
    desc: "An AI Tool that creates engaging product descriptions tailored for e-commerce platforms.",
    category: "e-commerce",
    icon: "https://cdn-icons-png.flaticon.com/128/869/869636.png",
    aiPrompt: "Write a product description in a persuasive tone. Highlight key features and benefits. Format the result as plain text.",
    slug: "generate-product-description",
    form: [
      {
        label: "Enter product name",
        field: "input",
        name: "productName",
        required: true
      },
      {
        label: "Enter product features",
        field: "textarea",
        name: "features",
        required: true
      },
      {
        label: "Select description length",
        field: "dropdown",
        name: "length",
        options: ["Short", "Medium", "Detailed"],
        required: true
      }
    ]
  },


  {
    name: "Ad Copy",
    desc: "An AI Tool that generates engaging ad copy to promote your products or services.",
    category: "advertising",
    icon: "https://cdn-icons-png.flaticon.com/128/906/906406.png",
    aiPrompt: "Generate 3 advertising copy ideas based on the given product, audience, and platform. Include a call to action.",
    slug: "generate-ad-copy",
    form: [
      {
        label: "Enter product/service name",
        field: "input",
        name: "productService",
        required: true
      },
      {
        label: "Enter target audience",
        field: "input",
        name: "audience",
        required: true
      },
      {
        label: "Select platform",
        field: "dropdown",
        name: "platform",
        options: ["Facebook", "Google Ads", "Instagram", "LinkedIn"],
        required: true
      }
    ]
  },

  {
    name: "Resume Bullet Points",
    desc: "An AI Tool that improves or generates professional bullet points for your resume.",
    category: "career",
    icon: "https://cdn-icons-png.flaticon.com/128/3593/3593984.png",
    aiPrompt: "Generate 5 professional and concise resume bullet points based on the given job description and role details.",
    slug: "enhance-resume-bullet-points",
    form: [
      {
        label: "Enter your role description",
        field: "textarea",
        name: "roleDescription",
        required: true
      },
      {
        label: "Enter target job title",
        field: "input",
        name: "jobTitle",
        required: true
      }
    ]
  },

  {
    name: "SEO Keywords",
    desc: "An AI Tool that generates relevant keywords for SEO optimization.",
    category: "SEO",
    icon: "https://cdn-icons-png.flaticon.com/128/1077/1077059.png",
    aiPrompt: "Suggest 10 SEO keywords based on the provided topic and target audience. List them in bullet format.",
    slug: "generate-seo-keywords",
    form: [
      {
        label: "Enter topic or niche",
        field: "input",
        name: "topic",
        required: true
      },
      {
        label: "Enter target audience",
        field: "input",
        name: "audience",
      }
    ]
  },

  {
    name: "Interview Questions",
    desc: "An AI Tool that generates relevant interview questions based on the given role and industry.",
    category: "career",
    icon: "https://cdn-icons-png.flaticon.com/128/1040/1040251.png",
    aiPrompt: "Generate 10 interview questions tailored for the provided job role and industry. Focus on role-specific and behavioral questions.",
    slug: "generate-interview-questions",
    form: [
      {
        label: "Enter job role",
        field: "input",
        name: "jobRole",
        required: true
      },
      {
        label: "Enter industry",
        field: "input",
        name: "industry",
        required: true
      }
    ]
  },

  {
    name: "Poem Generator",
    desc: "An AI Tool that creates poems based on the selected theme and tone.",
    category: "creative writing",
    icon: "https://cdn-icons-png.flaticon.com/128/2460/2460216.png",
    aiPrompt: "Write a short poem based on the provided theme and tone. Use rhyming words if possible.",
    slug: "generate-poem",
    form: [
      {
        label: "Enter theme",
        field: "input",
        name: "theme",
        required: true
      },
      {
        label: "Select tone",
        field: "dropdown",
        name: "tone",
        options: ["Romantic", "Inspirational", "Humorous", "Melancholy"],
        required: true
      }
    ]
  },

  {
    name: "Chatbot Script",
    desc: "An AI Tool that generates scripts for chatbot conversations based on user input.",
    category: "chatbots",
    icon:"https://cdn-icons-png.flaticon.com/128/2728/2728212.png",
    aiPrompt: "Generate a chatbot script for a customer support scenario. Include greetings, FAQs, and responses.",
    slug: "generate-chatbot-script",
    form: [
      {
        label: "Enter chatbot purpose",
        field: "input",
        name: "purpose",
        required: true
      },
      {
        label: "Enter target audience",
        field: "input",
        name: "audience",
        required: true
      }
    ]
  },


  {
    name: "Story Outline",
    desc: "An AI Tool that generates creative story outlines based on your ideas.",
    category: "creative writing",
    icon: "https://cdn-icons-png.flaticon.com/128/1197/1197460.png",
    aiPrompt: "Create a story outline with a protagonist, conflict, and resolution based on the provided idea. Use bullet points for clarity.",
    slug: "generate-story-outline",
    form: [
      {
        label: "Enter story idea",
        field: "textarea",
        name: "idea",
        required: true
      },
      {
        label: "Select story genre",
        field: "dropdown",
        name: "genre",
        options: ["Fantasy", "Mystery", "Romance", "Sci-fi", "Thriller"],
        required: true
      }
    ]
  },

  {
    name: "Cover Letter",
    desc: "An AI Tool that drafts professional cover letters based on your input.",
    category: "career",
    icon: "https://cdn-icons-png.flaticon.com/128/151/151891.png",
    aiPrompt: "Write a personalized cover letter for the given job title and company. Highlight skills and achievements.",
    slug: "generate-cover-letter",
    form: [
      {
        label: "Enter job title",
        field: "input",
        name: "jobTitle",
        required: true
      },
      {
        label: "Enter company name",
        field: "input",
        name: "companyName",
        required: true
      },
      {
        label: "Enter skills/achievements",
        field: "textarea",
        name: "skills",
      }
    ]
  },

  {
    name: "Business Name",
    desc: "An AI Tool that suggests creative business names based on your niche.",
    category: "branding",
    icon: "https://cdn-icons-png.flaticon.com/128/1055/1055684.png",
    aiPrompt: "Suggest 5 creative business names based on the provided niche. Use modern and catchy language.",
    slug: "generate-business-name",
    form: [
      {
        label: "Enter business niche",
        field: "input",
        name: "niche",
        required: true
      },
      {
        label: "Enter keywords (optional)",
        field: "input",
        name: "keywords",
      }
    ]
  },
  {
    name:'Blog Title',
    desc:'An AI tool that generate blog title depends on yout blog information',
    category:'Blog',
    icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
    aiPrompt:'Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format (no html tags)',
    slug:'generate-blog-title',
    form:[
        {
            label:'Enter your blog niche',
            field:'input',
            name:'niche',
            required:true
        },
        {
            label:'Enter blog outline',
            field:'textarea',
            name:'outline',
            
        }
    ]
},
{
    name: 'Blog Content',
    desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
    category: 'blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
    slug: 'blog-content-generation',
    aiPrompt: 'Generate Blog Content based on topic and outline in rich text editor format (no html tags)',
    form: [
        {
            label: 'Enter your blog topic',
            field: 'input',
            name: 'topic',
            required:true
        },
        {
            label: 'Enter blog Outline here',
            field: 'textarea',
            name: 'outline'
        }
    ]
},
{
    name: 'Blog Topic Ideas',
    desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
    category: 'Blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
    slug: 'blog-topic-idea',
    aiPrompt: 'Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format (no html tags)',
    form: [
        {
            label: 'Enter your Niche',
            field: 'input',
            name: 'niche',
            required:true
        },
    ]
},
{
    name: 'Youtube SEO Title',
    desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
    category: 'Youtube Tools',
    icon: 'https://cdn-icons-png.flaticon.com/128/402/402075.png',
    slug: 'youtube-seo-title',
    aiPrompt: 'Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format (no html tags)',
    form: [
        {
            label: 'Enter your youtube video topic keyowords',
            field: 'input',
            name: 'keywords',
            required:true
        },
        {
            label: 'Enter youtube description Outline here',
            field: 'textarea',
            name: 'outline'
        }
    ]

},
{

    name: 'Youtube Description',
    desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
    category: 'Youtube Tool',
    icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
    slug: 'youtube-description',
    aiPrompt: 'Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format (no html tags)',
    form: [
        {
            label: 'Enter your blog topic/title',
            field: 'input',
            name: 'topic',
            required:true
        },
        {
            label: 'Enter youtube Outline here',
            field: 'textarea',
            name: 'outline'
        }
    ]
},
{
    name: 'Youtube Tags',
    desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
    category: 'Youtube Tool',
    icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
    slug: 'youtube-tag',

    aiPrompt: 'Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format (no html tags)',

    form: [
        {
            label: 'Enter your youtube title',
            field: 'input',
            name: 'title',
            required:true
        },
        {
            label: 'Enter youtube video Outline here (Optional)',
            field: 'textarea',
            name: 'outline'
        }
    ]
},

{
    name: 'Rewrite Article (Plagiarism Free)',
    desc: 'Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.',
    icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
    category: 'Rewriting Tool',
    slug: 'rewrite-article',
    aiPrompt: 'Rewrite give article without any Plagiarism in rich text editor format (no html tags)',
    form: [
        {
            label: '🤖 Provide your Article/Blogpost or any other content to rewrite.',
            field: 'textarea',
            name: 'article',
            required:true
        }
    ]
},
{
    name: 'Text Improver',
    desc: 'This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.',
    icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
    category: 'Writing Assistant',
    slug: 'text-improver',
    aiPrompt: 'Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format (no html tags)',
    form: [
        {
            label: 'Enter text that you want to re-write or improve',
            field: 'textarea',
            name: 'textToImprove'
        }
    ]
},
{
    name: 'Add Emojis to Text',
    desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
    icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
    category: 'blog',
    slug: 'add-emoji-to-text',
    aiPrompt: 'Add Emoji to outline text depends on outline and rewrite it in rich text editor format (no html tags)',
    form: [
        {
            label: 'Enter your text to add emojis',
            field: 'textarea',
            name: 'outline',
            required:true
        }
    ]
},
{
    name: 'Instagram Post Generator',
    desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
    icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
    category: 'blog',
   
    slug: 'instagram-post-generator',
    aiPrompt: 'Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format (no html tags)',
    form: [
        {
            label: 'Enter Keywords for your post',
            field: 'input',
            name: 'keywords',
            required:true
        },
       
    ]
},
{
    name: 'Instagram Hash Tag Generator',
    desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
    icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
    category: 'blog',
   
    slug: 'instagram-hash-tag-generator',
    aiPrompt: 'Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format (no html tags)',
    form: [
        {
            label: 'Enter Keywords for your instagram hastag',
            field: 'input',
            name: 'keywords',
            required:true
        },
       
    ]
},
{
    name: 'Instagram Post/Reel Idea',
    desc: 'An AI tool that generate New and trending instagram idea depends on your niche',
    icon: 'https://cdn-icons-png.flaticon.com/128/1029/1029183.png',
    category: 'instagram',
   
    slug: 'instagram-post-idea-generator',
    aiPrompt: 'Generate 5-10 Instagram idea depends on niche with latest trend and give output in  in rich text editor format (no html tags)',
    form: [
        {
            label: 'Enter Keywords / Niche for your instagram idea',
            field: 'input',
            name: 'keywords',
            required:true
        },
       
    ]
},
{
    name: 'English Grammer Check',
    desc: 'AI Model to Correct your english grammer by providing the text',
    icon:'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
    category: 'english',
   
    slug: 'english-grammer-checker',
    aiPrompt: 'Rewrite the inputText by correcting the grammer and give output in  in rich text editor format (no html tags)',
    form: [
        {
            label: 'Enter text to correct the grammer',
            field: 'input',
            name: 'inputText',
            required:true
        },
       
    ]
},
{
    name: 'Write Code',
    desc: 'AI Model to generate programming code in any language',
    icon:'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
    category: 'Coding',
   
    slug: 'write-code',
    aiPrompt: 'Depends on user codeDescription write a code and give output in  in rich text editor format in code block (no html tags) ',
    form: [
        {
            label: 'Enter description of code you want along with Programming Lang',
            field: 'textarea',
            name: 'codeDesscripton',
            required:true
        },
       
    ]
},
{
    name: 'Explain Code',
    desc: 'AI Model to explain programming code in any language',
    icon:'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
    category: 'Coding',
   
    slug: 'explain-code',
    aiPrompt: 'Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block (no html tags) ',
    form: [
        {
            label: 'Enter code which you want to understand',
            field: 'textarea',
            name: 'codeDesscripton',
            required:true
        },
       
    ]
},
{
    name: 'Code Bug Detector',
    desc: 'This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.',
    icon:'https://cdn-icons-png.flaticon.com/128/4426/4426267.png',
    category: 'code-bug-detector',
   
    slug: 'code-bug-detector',
    aiPrompt: 'Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block (no html tags) ',
    form: [
        {
            label: 'Enter code which you want to test bug',
            field: 'textarea',
            name: 'codeInput',
            required:true
        },
       
    ]
},
{
    name: 'Tagline Generator',
    desc: 'Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.',
    icon:'https://cdn-icons-png.flaticon.com/128/2178/2178616.png',
    category: 'Marketting',
   
    slug: 'tagline-generator',
    aiPrompt: 'Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output  in rich text editor format (no html tags)',
    form: [
        {
            label: 'Product/Brand Name',
            field: 'input',
            name: 'productName',
            required:true
        },
        {
            label: 'What you are selling / Marketting',
            field: 'textarea',
            name: 'outline',
            required:true
        },
       
    ]
},
{
    name: 'Product Description',
    desc: 'This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.',
    icon:'https://cdn-icons-png.flaticon.com/128/679/679922.png',
    category: 'Marketting',
   
    slug: 'product-description',
    aiPrompt: 'Depends on user productName and description generate small description for product for e-commer business give output  in rich text editor format (no html tags) ',
    form: [
        {
            label: 'Product Name',
            field: 'input',
            name: 'productName',
            required:true
        },
        {
            label: 'Product Details',
            field: 'textarea',
            name: 'outline',
            required:true
        },
       
    ]
},


]