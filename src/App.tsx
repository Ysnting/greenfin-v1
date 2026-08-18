import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landing/LandingPage";
import LoginPage from "./pages/login/LoginPage";

import FarmerHome from "./pages/farmer/farmer_app/farmer_dashboard/farmer_dashboard";
import FarmerResumePage from "./pages/farmer/farmer_app/farmer_resume/farmer_resume_page";
import FarmerIndicatorsPage from "./pages/farmer/farmer_app/farmer_indicators/farmer_indicators_page";
import FarmerHealthPage from "./pages/farmer/farmer_app/farmer_health/farmer_health_page";
import FarmerMyDataPage from "./pages/farmer/farmer_app/farmer-my-data/page";
import DocumentDetailPage from "./pages/farmer/farmer_app/farmer-my-data/[id]/farmer-my-data-page";
import FarmerUploadPage from "./pages/farmer/farmer_app/farmer_upload/farmer_upload_page";
import FarmerAuthorizationPage from "./pages/farmer/farmer_app/farmer_authorization/farmer_authorization_page";
import FarmerSettingsPage from "./pages/farmer/farmer_app/farmer_settings/farmer_settings_page";

import BankPage from "./pages/bank/bank_app/bank_page";
import BankDashboard from "./pages/bank/bank_app/bank_dashboard/bank_dashboard";

import BankCasesPage
  from "./pages/bank/bank_app/bank_cases/bank_cases_page";
  import BankCaseDetailPage
  from "./pages/bank/bank_app/bank_cases/bank_case_detail_page";
  import BankRequestsPage from "./pages/bank/bank_app/bank_requests/bank_requests_page";
import { BankRequestProvider,} from "./pages/bank/bank_context/BankRequestContext";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing */}
        <Route
          path="/"
          element={<LandingPage />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<LoginPage />}
        />

        {/* Farmer */}
        <Route
          path="/farmer"
          element={<FarmerHome />}
        />

        <Route
          path="/farmer/dashboard"
          element={<FarmerHome />}
        />

        <Route
          path="/farmer/resume"
          element={<FarmerResumePage />}
        />

        <Route
          path="/farmer/indicators"
          element={<FarmerIndicatorsPage />}
        />

        <Route
          path="/farmer/health"
          element={<FarmerHealthPage />}
        />

        <Route
          path="/farmer/my-data"
          element={<FarmerMyDataPage />}
        />

        <Route
          path="/farmer/upload"
          element={<FarmerUploadPage />}
        />

        <Route
        path="/farmer/my-data/:id"
        element={<DocumentDetailPage />}
        />

        <Route
          path="/farmer/authorization"
          element={<FarmerAuthorizationPage />}
        />

        <Route
          path="/farmer/settings"
          element={<FarmerSettingsPage />}
        />

        {/* Bank */}
        <Route
    path="/bank/*"
    element={
      <BankRequestProvider>
        <Routes>
          <Route
            index
            element={<BankPage />}
          />

          <Route
            path="cases"
            element={<BankCasesPage />}
          />

          <Route
            path="cases/:id"
            element={<BankCaseDetailPage />}
          />

          <Route
            path="requests"
            element={<BankRequestsPage />}
          />
        </Routes>
      </BankRequestProvider>
    }
  />

      </Routes>

      
    </BrowserRouter>
  );
}

export default App;
