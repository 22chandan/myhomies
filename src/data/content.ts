import { Feature, Testimonial, FAQ } from '../types';
import { Home, Users, Building, Search, MessageCircle, Shield, Zap, Clock } from 'lucide-react';

export const features: Feature[] = [
  {
    id: 1,
    title: "Find Your Perfect Flat",
    description: "Browse through thousands of verified listings tailored to your preferences and budget.",
    icon: "Building"
  },
  {
    id: 2,
    title: "Connect with Flatmates",
    description: "Meet potential flatmates who match your lifestyle, interests, and living habits.",
    icon: "Users"
  },
  {
    id: 3,
    title: "Verified Profiles",
    description: "Rest easy with our thorough verification process for all users and listings.",
    icon: "Shield"
  },
  {
    id: 4,
    title: "Smart Matching",
    description: "Our AI algorithm suggests the best matches based on your preferences and compatibility.",
    icon: "Zap"
  },
  {
    id: 5,
    title: "Real-time Chat",
    description: "Communicate directly with potential flatmates and landlords through our secure messaging system.",
    icon: "MessageCircle"
  },
  {
    id: 6,
    title: "Virtual Tours",
    description: "Take virtual tours of properties without leaving the comfort of your current home.",
    icon: "Search"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Student",
    content: "My Homies made finding a flat and compatible roommates so easy! Within a week, I found the perfect place with amazing flatmates who share my interests.",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Young Professional",
    content: "After moving to a new city for work, I was worried about finding a good living situation. Thanks to My Homies, I found wonderful flatmates who became my closest friends!",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 3,
    name: "Michael Torres",
    role: "Remote Worker",
    content: "The verification system gave me peace of mind when looking for flatmates. The app's interface is intuitive, and I found a great flat share within days.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "How does My Homies verify users?",
    answer: "We use a multi-step verification process including ID verification, social media connection, and reviews from previous flatmates or landlords to ensure a safe community."
  },
  {
    id: 2,
    question: "Is My Homies available in my city?",
    answer: "My Homies is currently available in major cities across the UK, Europe, Australia, and North America, with new locations being added regularly. Check our app for the most up-to-date coverage information."
  },
  {
    id: 3,
    question: "How much does it cost to use My Homies?",
    answer: "Basic features are completely free! Premium features like advanced filters, priority listing, and unlimited messaging are available with our affordable subscription plans."
  },
  {
    id: 4,
    question: "Can landlords list properties on My Homies?",
    answer: "Yes! Landlords can create verified accounts to list their properties and connect with potential tenants directly through our platform."
  },
  {
    id: 5,
    question: "How is My Homies different from other flat-finding apps?",
    answer: "My Homies focuses on compatibility between flatmates as much as the quality of flats. Our unique matching algorithm helps you find not just a place to live, but people you'll enjoy living with."
  }
];