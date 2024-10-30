import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Analytics } from '@vercel/analytics/react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import GetStarted from "./pages/GetStarted"
import LearnMore from "./pages/LearnMore"
import Contact from "./pages/Contact"
import StayUpdated from "./pages/StayUpdated"
import Library from "./pages/Library"
import ParentDashboard from "./pages/ParentDashboard"
import StoryCreator from "./pages/StoryCreator"
import Community from "./pages/Community"
import AboutUs from "./pages/AboutUs"
import EducatorResources from "./pages/EducatorResources"
import Pricing from "./pages/Pricing"
import SchoolPilot from "./pages/SchoolPilot"
import AIStoryEngine from "./pages/AIStoryEngine"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      retry: 1,
    },
  },
})

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <main>
          <a href="#main-content" className="sr-only focus:not-sr-only">
            Skip to main content
          </a>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/learn-more" element={<LearnMore />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/stay-updated" element={<StayUpdated />} />
            <Route path="/library" element={<Library />} />
            <Route path="/parent-dashboard" element={<ParentDashboard />} />
            <Route path="/story-creator" element={<StoryCreator />} />
            <Route path="/community" element={<Community />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/educator-resources" element={<EducatorResources />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/school-pilot" element={<SchoolPilot />} />
            <Route path="/ai-story-engine" element={<AIStoryEngine />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
)

export default App