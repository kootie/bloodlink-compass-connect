
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuthStore } from '@/store/authStore';
import BloodGroupCard from './BloodGroupCard';
import { Search, MessageSquare, CalendarIcon, BookOpen, LogOut } from 'lucide-react';

const DashboardView = () => {
  const { userProfile, logout, isAnonymous } = useAuthStore();
  const navigate = useNavigate();

  if (!userProfile) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="container py-6 max-w-4xl">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            {isAnonymous 
              ? 'You are browsing anonymously'  
              : `Welcome back to Esclapian`}
          </p>
        </div>
        <Button variant="ghost" size="sm" onClick={handleLogout}>
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <BloodGroupCard 
            bloodGroup={userProfile.bloodGroup} 
            lastDonationDate={userProfile.lastDonationDate}
            eligibleToDonateDays={userProfile.eligibleToDonateDays}
          />
        </div>

        <Card className="bg-medical-dark text-white">
          <CardHeader className="pb-2">
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription className="text-medical-light">
              What would you like to do today?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="secondary" className="w-full justify-start" onClick={() => navigate('/search')}>
              <Search className="mr-2 h-4 w-4" /> Search for Donors
            </Button>
            <Button variant="secondary" className="w-full justify-start" onClick={() => navigate('/request')}>
              <MessageSquare className="mr-2 h-4 w-4" /> Request Blood
            </Button>
            <Button variant="secondary" className="w-full justify-start" onClick={() => navigate('/events')}>
              <CalendarIcon className="mr-2 h-4 w-4" /> View Events
            </Button>
            <Button variant="secondary" className="w-full justify-start" onClick={() => navigate('/info')}>
              <BookOpen className="mr-2 h-4 w-4" /> Blood Info
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            {isAnonymous ? (
              <p className="text-center text-sm py-4 text-muted-foreground">
                Sign up for a full account to track your activity
              </p>
            ) : (
              <ul className="space-y-2">
                <li className="text-sm pb-2 border-b border-muted">
                  <span className="text-muted-foreground">Yesterday</span>
                  <p>Blood request shared with 3 potential donors</p>
                </li>
                <li className="text-sm py-2 border-b border-muted">
                  <span className="text-muted-foreground">3 days ago</span>
                  <p>Updated your profile information</p>
                </li>
                <li className="text-sm pt-2">
                  <span className="text-muted-foreground">Last week</span>
                  <p>Registered for donation drive at Nairobi Hospital</p>
                </li>
              </ul>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3 pb-2 border-b border-muted">
                <div className="bg-neutral-light text-blood flex flex-col items-center justify-center h-12 w-12 rounded-md">
                  <span className="text-xs">JUN</span>
                  <span className="font-bold">14</span>
                </div>
                <div>
                  <p className="font-medium">Blood Donation Drive</p>
                  <p className="text-sm text-muted-foreground">Kenyatta Hospital</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-neutral-light text-medical-blue flex flex-col items-center justify-center h-12 w-12 rounded-md">
                  <span className="text-xs">JUN</span>
                  <span className="font-bold">28</span>
                </div>
                <div>
                  <p className="font-medium">Blood Type Awareness Day</p>
                  <p className="text-sm text-muted-foreground">Virtual Event</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full text-sm" onClick={() => navigate('/events')}>
              View All Events
            </Button>
          </CardFooter>
        </Card>

        <Card className="md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle>Blood Facts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">Did you know?</h4>
                <p className="text-sm text-muted-foreground">
                  O- is the universal blood donor and can donate to all blood types, 
                  but people with O- can only receive O- blood.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Blood Donation Impact</h4>
                <p className="text-sm text-muted-foreground">
                  One donation can save up to three lives, as blood is separated 
                  into red cells, platelets and plasma.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full text-sm" onClick={() => navigate('/info')}>
              Learn More
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default DashboardView;
