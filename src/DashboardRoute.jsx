import { Routes, Route } from "react-router-dom";
import { TooltipProvider } from "./components/ui/tooltip";
import { ThemeProvider } from "./theme/ThemeProvider";
import { SidebarProvider } from "./context/SidebarContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProfileSetup from "./pages/ProfileSetup";
import NotFound from "./pages/NotFound";
import Verification from "./pages/Verification";
import SafetyGuidelines from "./pages/SafetyGuidelines";
import UploadCredentials from "./pages/UploadCredentials";
import SetAvailability from "./pages/SetAvailability";
import Feedback from "./pages/Feedback";
import ScheduleSession from "./pages/ScheduleSession";
import Notes from "./pages/Notes";
import Messages from "./pages/Messages";
import Reports from "./pages/Reports";

const App = () => (
  <ThemeProvider>
    <TooltipProvider>
      <SidebarProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="profile-setup" element={<ProfileSetup />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/safety-guidelines" element={<SafetyGuidelines />} />
            <Route path="/upload-credentials" element={<UploadCredentials />} />
            <Route path="/set-availability" element={<SetAvailability />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/schedule-session" element={<ScheduleSession />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </SidebarProvider>
    </TooltipProvider>
  </ThemeProvider>
);

export default App;
