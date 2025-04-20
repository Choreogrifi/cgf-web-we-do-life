import { NavItem, Service, Testimonial, FAQItem } from '../types';
import { Sparkles, Heart, Brain, Users, Goal, MessageCircle } from 'lucide-react';

export const siteConfig = {
  name: "Mindful Growth",
  description: "Professional life coaching and psychological services to help you thrive",
  author: "Dr. Alex Johnson",
  credentials: "PhD, Clinical Psychology | Certified Life Coach",
  contactEmail: "contact@mindfulgrowth.com",
  social: {
    instagram: "https://instagram.com/mindfulgrowth",
    twitter: "https://twitter.com/mindfulgrowth",
    linkedin: "https://linkedin.com/in/mindfulgrowth",
  },
  googleFormUrl: "https://forms.gle/FKm8yEJ4g5nABc7N8"
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const services: Service[] = [
  {
    title: "Life Coaching",
    description: "Personalized guidance to help you achieve your goals and create a more fulfilling life through action-oriented strategies.",
    icon: "Goal",
    benefits: [
      "Clarify your personal and professional goals",
      "Develop actionable strategies for success",
      "Overcome obstacles and limiting beliefs",
      "Build confidence and resilience"
    ]
  },
  {
    title: "Therapy Sessions",
    description: "Evidence-based psychological therapy to address emotional challenges, heal from past experiences, and improve mental wellness.",
    icon: "Brain",
    benefits: [
      "Process difficult emotions and experiences",
      "Develop healthy coping mechanisms",
      "Improve relationship patterns",
      "Reduce anxiety and depression symptoms"
    ]
  },
  {
    title: "Couples Counseling",
    description: "Strengthen your relationship through improved communication, conflict resolution, and deeper emotional connection.",
    icon: "Heart",
    benefits: [
      "Enhance communication skills",
      "Resolve recurring conflicts",
      "Rebuild trust and intimacy",
      "Create a stronger partnership"
    ]
  },
  {
    title: "Group Workshops",
    description: "Interactive group sessions focused on specific themes like stress management, mindfulness, and personal development.",
    icon: "Users",
    benefits: [
      "Learn from shared experiences",
      "Practice skills in a supportive environment",
      "Build community connections",
      "Cost-effective personal growth"
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    content: "Working with Dr. Johnson completely transformed my approach to life's challenges. The combination of practical coaching and psychological insight was exactly what I needed.",
    author: "Sarah M.",
    role: "Marketing Executive",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    content: "I was skeptical about therapy, but after six months of sessions, I've developed tools that help me manage my anxiety and build healthier relationships.",
    author: "Michael T.",
    role: "Software Engineer",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    content: "The couples workshop saved our marriage. We learned to communicate effectively and understand each other's needs in ways we never could before.",
    author: "Jennifer & David K.",
    role: "Married 12 years",
    image: "https://images.pexels.com/photos/3768139/pexels-photo-3768139.jpeg?auto=compress&cs=tinysrgb&w=300"
  }
];

export const faqs: FAQItem[] = [
  {
    question: "What's the difference between coaching and therapy?",
    answer: "Therapy typically focuses on healing past wounds and addressing mental health conditions, while coaching is more future-oriented and focuses on achieving specific goals. I'm qualified to provide both services and can help determine which approach best suits your needs."
  },
  {
    question: "How long does a typical session last?",
    answer: "Individual sessions typically last 50 minutes, while initial consultations are 90 minutes to allow for a thorough assessment of your needs and goals."
  },
  {
    question: "Do you offer virtual sessions?",
    answer: "Yes! I provide secure video sessions for all services, making it convenient to get support regardless of your location."
  },
  {
    question: "How many sessions will I need?",
    answer: "This varies widely depending on your goals and challenges. Some clients achieve their objectives in 6-8 sessions, while others benefit from longer-term support. We'll regularly assess your progress and adjust our approach accordingly."
  },
  {
    question: "Is our work together confidential?",
    answer: "Absolutely. I maintain strict confidentiality in accordance with professional ethics and legal requirements. The only exceptions are cases involving risk of harm to yourself or others, which I'll discuss with you during our first session."
  }
];

export const chatbotResponses = {
  greeting: "Hi there! I'm the Mindful Growth assistant. How can I help you today?",
  default: "I'm sorry, I don't have enough information to answer that question. Would you like to book a session with Dr. Johnson to discuss this further?",
  questions: {
    "services": "We offer life coaching, individual therapy, couples counseling, and group workshops. Each service is tailored to your specific needs and goals.",
    "pricing": "Session rates vary depending on the type of service. Individual sessions start at $150, with package options available. Would you like more detailed pricing information?",
    "schedule": "Dr. Johnson typically sees clients Monday through Thursday, with both morning and evening slots available. Would you like to check availability for a specific day?",
    "insurance": "Dr. Johnson works with several major insurance providers. We recommend contacting your insurance company to verify coverage for psychological services.",
    "location": "We have an office in downtown for in-person sessions, and also offer secure virtual sessions for your convenience.",
    "qualifications": "Dr. Johnson holds a PhD in Clinical Psychology and is a certified life coach with over 10 years of experience helping clients achieve their personal and professional goals."
  }
};