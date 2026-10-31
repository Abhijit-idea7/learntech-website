import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles: Record<string, string> = {
  '/': 'LearnTech Consulting — L&D for the frontline',
  '/content': 'Learning Content & Delivery — LearnTech',
  '/platforms': 'L&D Platforms — LearnTech',
  '/programs': 'Ready-to-run Programs — LearnTech',
  '/work': 'Our Work — LearnTech',
  '/insights': 'L&D Insights — LearnTech',
  '/about': 'About LearnTech — L&D built by people who have run L&D',
  '/contact': 'Contact — LearnTech Consulting',
  '/case-studies/tvs-learning360': 'TVS Motors — Learning360 rollout case study',
};

export default function useScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const title = pageTitles[pathname];
    if (title) {
      document.title = title;
    }
  }, [pathname]);
}
