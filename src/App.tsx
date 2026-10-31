import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import useScrollTop from '@/hooks/useScrollTop';
import Home from '@/pages/Home';
import Content from '@/pages/Content';
import Platforms from '@/pages/Platforms';
import PlatformDetail from '@/pages/PlatformDetail';
import Programs from '@/pages/Programs';
import ProgramDetail from '@/pages/ProgramDetail';
import Work from '@/pages/Work';
import CaseStudyDetail from '@/pages/CaseStudyDetail';
import CaseStudyTVS from '@/pages/CaseStudyTVS';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Legal from '@/pages/Legal';
import NotFound from '@/pages/NotFound';

function ScrollManager() {
  useScrollTop();
  return null;
}

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollManager />
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

const page = (el: React.ReactNode) => <PublicLayout>{el}</PublicLayout>;

function BlogRedirect() {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={`/insights/${slug ?? ''}`} replace />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={page(<Home />)} />

        <Route path="/platforms" element={page(<Platforms />)} />
        <Route path="/platforms/:slug" element={page(<PlatformDetail />)} />

        <Route path="/programs" element={page(<Programs />)} />
        <Route path="/programs/:slug" element={page(<ProgramDetail />)} />

        <Route path="/work" element={page(<Work />)} />
        <Route path="/work/tvs-learning360" element={page(<CaseStudyTVS />)} />
        <Route path="/work/:slug" element={page(<CaseStudyDetail />)} />
        <Route path="/case-studies/tvs-learning360" element={page(<CaseStudyTVS />)} />

        <Route path="/insights" element={page(<Blog />)} />
        <Route path="/insights/:slug" element={page(<BlogPost />)} />
        <Route path="/blog" element={<Navigate to="/insights" replace />} />
        <Route path="/blog/:slug" element={<BlogRedirect />} />

        <Route path="/content" element={page(<Content />)} />

        <Route path="/about" element={page(<About />)} />
        <Route path="/contact" element={page(<Contact />)} />
        <Route path="/privacy" element={page(<Legal kind="privacy" />)} />
        <Route path="/terms" element={page(<Legal kind="terms" />)} />

        {/* old GoDaddy site addresses */}
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/learning-content" element={<Navigate to="/content" replace />} />

        {/* pages removed in the Oct 2026 simplification */}
        <Route path="/solutions/*" element={<Navigate to="/" replace />} />
        <Route path="/consulting/*" element={<Navigate to="/" replace />} />
        <Route path="/about-us" element={<Navigate to="/about" replace />} />

        <Route path="*" element={page(<NotFound />)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
