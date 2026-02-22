interface ImageObject {
    "@type": ("ImageObject");
    url: string;
  }
  
  interface Person {
    "@type": ("Person");
    name: string;
    url?: string;
    sameAs?: string;
  }
  
  interface Organization {
    "@type": ("Organization");
    name: string;
    logo?: ImageObject;
  }
  
  interface InteractionCounter {
    "@type": ("InteractionCounter");
    interactionType: {
      "@type": ("HowToDirection");
      name: string;
    };
    userInteractionCount: number;
  }
  
  interface MainEntity {
    "@type": ("Article");
    headline: string;
    author: Person;
    publisher: Organization;
    datePublished: string;
    dateModified: string;
    url: string;
  }
  
  export interface BlogPosting {
    "@context": ("http://schema.org");
    "@type": ("BlogPosting");
    headline: string;
    description: string;
    image: string;
    author: Person;
    publisher: Organization;
    datePublished: string;
    dateModified: string;
    mainEntityOfPage: string;
    articleBody: string;
    keywords: string;
    category: string;
    commentCount: number;
    interactionStatistic: InteractionCounter;
    url: string;
    inLanguage: string;
    wordCount: number;
    mainEntity: MainEntity;
  }
  