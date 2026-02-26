export interface ProductFeature {
  title: string
  description: string
  icon: string
}

export interface ProductPrice {
  plan: string
  price: string
  features: string[]
  recommended?: boolean
}

export interface ProductFAQ {
  question: string
  answer: string
}

export interface Product {
  id: number
  slug: string                    
  name: string
  tagline: string                 
  description: string
  longDescription: string        
  image: string
  icon: string                    
  color: string
  gradient: string
  tag?: string
  
  features: ProductFeature[]
  benefits: string[]              
  useCases: string[]            
  pricing: ProductPrice[]
  faqs: ProductFAQ[]
  
  gallery: string[]            
  demoVideo?: string            
  
  technologies: string[]         
  
  stats: {
    accuracy?: string
    speed?: string
    clients?: string
    [key: string]: string | undefined
  }
}
