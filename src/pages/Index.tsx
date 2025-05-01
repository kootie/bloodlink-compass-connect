
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';

const Index = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();

  // If already authenticated, redirect to dashboard
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative blood-cell-bg">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-blood">Blood</span> connects us all, 
                <span className="text-medical-dark"> anonymously</span>.
              </h1>
              <p className="text-xl mb-8 text-muted-foreground">
                Esclapian makes blood donation private and accessible. Connect with donors and request blood while maintaining your privacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => navigate('/login')}>
                  Get Started
                </Button>
                <Button variant="outline" size="lg" onClick={() => navigate('/info')}>
                  Learn More
                </Button>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blood">100%</p>
                  <p className="text-sm text-muted-foreground">Privacy Preserved</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blood">8</p>
                  <p className="text-sm text-muted-foreground">Blood Types Covered</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blood">6°</p>
                  <p className="text-sm text-muted-foreground">Degrees Connection</p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="absolute -z-10 w-64 h-64 bg-blood rounded-full opacity-10 blur-3xl"></div>
                <div className="w-64 h-64 rounded-full bg-white shadow-xl flex items-center justify-center p-4">
                  <div className="w-48 h-48 rounded-full border-8 border-blood flex items-center justify-center">
                    <div className="text-center">
                      <div className="blood-drop mx-auto mb-4"></div>
                      <p className="text-xl font-bold">Esclapian</p>
                      <p className="text-sm text-muted-foreground">Blood Network</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-neutral-light py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Esclapian?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-blood/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blood" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Complete Privacy</h3>
              <p className="text-muted-foreground">
                Your personal details are never shared. Connect with donors anonymously through our secure platform.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-medical-light/30 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-medical-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Blood Request System</h3>
              <p className="text-muted-foreground">
                Create blood requests through verified institutions and share them with potential donors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-blood/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blood" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Network of Donors</h3>
              <p className="text-muted-foreground">
                Access a growing network of blood donors connected through the 6-degrees principle.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-medical-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Esclapian?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sign up today to help save lives while protecting your privacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blood hover:bg-blood-dark" onClick={() => navigate('/signup')}>
              Create Account
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-white border-white hover:bg-white/10"
              onClick={() => navigate('/login')}
            >
              Log In
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold text-lg mb-2">Esclapian</h3>
              <p className="text-sm text-muted-foreground">
                Privacy-first blood donation network
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-medium mb-2">About</h4>
                <ul className="text-sm space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-blood">Our Mission</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-blood">How It Works</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-blood">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Resources</h4>
                <ul className="text-sm space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-blood">Blood Types</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-blood">Donation FAQ</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-blood">Health Info</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Contact</h4>
                <ul className="text-sm space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-blood">Support</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-blood">Become Partner</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-blood">Report Issue</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Esclapian. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
