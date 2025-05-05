
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BloodGroup, useAuthStore } from '@/store/authStore';
import { MessageSquare, Search, Link, UserPlus, Share2 } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { useToast } from '@/hooks/use-toast';

// Enhanced mock data with connection info for 6 degrees visualization
const mockResults = [
  { 
    id: 'user1', 
    bloodGroup: 'O+', 
    location: 'Nairobi - Westlands', 
    lastDonation: '45 days ago',
    connectionsCount: 3,
    distanceDegree: 1,
    connections: ['user2', 'user3', 'user5']
  },
  { 
    id: 'user2', 
    bloodGroup: 'A-', 
    location: 'Nairobi - Karen', 
    lastDonation: '3 months ago',
    connectionsCount: 2,
    distanceDegree: 2,
    connections: ['user1', 'user4']
  },
  { 
    id: 'user3', 
    bloodGroup: 'B+', 
    location: 'Nairobi - Kilimani', 
    lastDonation: '2 weeks ago',
    connectionsCount: 4,
    distanceDegree: 3,
    connections: ['user1', 'user5', 'user2', 'user4']
  },
  { 
    id: 'user4', 
    bloodGroup: 'O-', 
    location: 'Mombasa - Nyali', 
    lastDonation: '6 months ago',
    connectionsCount: 1,
    distanceDegree: 4,
    connections: ['user2']
  },
  { 
    id: 'user5', 
    bloodGroup: 'AB+', 
    location: 'Kisumu - CBD', 
    lastDonation: 'Never',
    connectionsCount: 2,
    distanceDegree: 5,
    connections: ['user1', 'user3']
  },
  { 
    id: 'user6', 
    bloodGroup: 'O+', 
    location: 'Nakuru - Town', 
    lastDonation: '1 month ago',
    connectionsCount: 0,
    distanceDegree: 6,
    connections: []
  },
];

const SearchNetwork = () => {
  const { toast } = useToast();
  const { isAuthenticated } = useAuthStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBloodGroup, setSelectedBloodGroup] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searching, setSearching] = useState(false);
  const [connectionRequests, setConnectionRequests] = useState<string[]>([]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    setSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      const filteredResults = selectedBloodGroup && selectedBloodGroup !== 'any'
        ? mockResults.filter(r => r.bloodGroup === selectedBloodGroup) 
        : mockResults;
        
      // Sort by degree of separation (1st through 6th)
      const sortedResults = [...filteredResults].sort((a, b) => a.distanceDegree - b.distanceDegree);
      
      setSearchResults(sortedResults);
      setSearching(false);
    }, 800);
  };

  const handleConnect = (userId: string) => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please log in to connect with donors",
        variant: "destructive"
      });
      return;
    }

    setConnectionRequests(prev => [...prev, userId]);
    toast({
      title: "Connection Request Sent",
      description: "The donor will be notified of your request",
    });
  };
  
  return (
    <div className="container py-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">Search Network</h1>
      <p className="text-muted-foreground mb-6">
        Find blood donors in your area through the 6 degrees of separation network
      </p>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Find Blood Donors</CardTitle>
          <CardDescription>
            Search for donors by blood type and see how closely connected they are to you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/3">
              <Select 
                value={selectedBloodGroup} 
                onValueChange={setSelectedBloodGroup}
              >
                <SelectTrigger id="blood-group">
                  <SelectValue placeholder="Any Blood Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Blood Type</SelectItem>
                  <SelectItem value="A+">A+</SelectItem>
                  <SelectItem value="A-">A-</SelectItem>
                  <SelectItem value="B+">B+</SelectItem>
                  <SelectItem value="B-">B-</SelectItem>
                  <SelectItem value="AB+">AB+</SelectItem>
                  <SelectItem value="AB-">AB-</SelectItem>
                  <SelectItem value="O+">O+</SelectItem>
                  <SelectItem value="O-">O-</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="relative w-full">
              <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by location (optional)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Button type="submit" disabled={searching} className="md:w-auto">
              {searching ? 'Searching...' : 'Search'}
            </Button>
          </form>
        </CardContent>
      </Card>
      
      {searchResults.length > 0 ? (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Your Connection Network</h2>
          <p className="text-sm text-muted-foreground mb-4">
            The donors below are displayed based on degrees of separation from your network.
            <span className="block mt-1">1st degree: direct connections, 6th degree: furthest connections</span>
          </p>
          
          {searchResults.map((result) => (
            <Card key={result.id} className="overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className={`md:w-20 flex-shrink-0 flex justify-center items-center p-4 md:p-6 ${result.distanceDegree <= 2 ? 'bg-medical-light' : result.distanceDegree <= 4 ? 'bg-medical-light/60' : 'bg-medical-light/30'}`}>
                  <span className="text-2xl font-bold text-medical-dark">{result.bloodGroup}</span>
                </div>
                <CardContent className="flex-1 flex flex-col md:flex-row justify-between items-start md:items-center p-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">Anonymous Donor</p>
                      <HoverCard>
                        <HoverCardTrigger>
                          <div className={`inline-flex h-5 items-center rounded-full border px-2 text-xs font-semibold ${result.distanceDegree <= 2 ? 'border-green-500 bg-green-100 text-green-700' : result.distanceDegree <= 4 ? 'border-amber-500 bg-amber-100 text-amber-700' : 'border-blue-500 bg-blue-100 text-blue-700'}`}>
                            {result.distanceDegree}{getOrdinalSuffix(result.distanceDegree)} Degree
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold">Degrees of Separation</h4>
                            <p className="text-xs">
                              This donor is {result.distanceDegree}{getOrdinalSuffix(result.distanceDegree)} degree of separation from you. 
                              They are connected to {result.connectionsCount} people in your extended network.
                            </p>
                            <div className="pt-2">
                              <div className="flex gap-1">
                                {[1, 2, 3, 4, 5, 6].map((degree) => (
                                  <div 
                                    key={degree} 
                                    className={`h-1.5 flex-1 rounded-full ${degree <= result.distanceDegree ? 'bg-primary' : 'bg-muted'}`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                    <p className="text-sm text-muted-foreground">{result.location}</p>
                    <p className="text-sm">Last donation: {result.lastDonation}</p>
                  </div>
                  <div className="flex gap-2 mt-4 md:mt-0">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex gap-2"
                      onClick={() => toast({
                        title: "Message Sent",
                        description: "Your message has been sent to the donor",
                      })}
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Message</span>
                    </Button>
                    <Button 
                      variant={connectionRequests.includes(result.id) ? "secondary" : "default"}
                      size="sm"
                      className="flex gap-2"
                      onClick={() => handleConnect(result.id)}
                      disabled={connectionRequests.includes(result.id)}
                    >
                      {connectionRequests.includes(result.id) ? (
                        <>
                          <Link className="h-4 w-4" />
                          <span>Connected</span>
                        </>
                      ) : (
                        <>
                          <UserPlus className="h-4 w-4" />
                          <span>Connect</span>
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
          
          <div className="mt-6 bg-medical-light/20 p-6 rounded-lg border border-medical-light">
            <h3 className="font-semibold mb-2">Six Degrees of Separation Network</h3>
            <p className="text-sm text-muted-foreground mb-4">
              The six degrees of separation theory states that any person on the planet can be connected 
              to any other person through a chain of acquaintances that has no more than six people.
              Esclapian leverages this concept to help you find blood donors in your extended network.
            </p>
            <div className="flex justify-end">
              <Button variant="outline" size="sm" className="flex gap-2">
                <Share2 className="h-4 w-4" />
                <span>Share Your Network</span>
              </Button>
            </div>
          </div>
        </div>
      ) : searching ? (
        <div className="text-center py-12">
          <div className="animate-pulse-light inline-block p-4 rounded-full bg-medical-light/20 mb-4">
            <div className="blood-drop"></div>
          </div>
          <p className="font-medium">Searching for donors...</p>
        </div>
      ) : (
        <div className="text-center py-12 blood-cell-bg rounded-lg border border-muted">
          <p className="text-muted-foreground">
            Enter a blood type above to start searching for potential donors.
          </p>
        </div>
      )}
    </div>
  );
};

// Helper function to get ordinal suffix (1st, 2nd, 3rd, etc.)
function getOrdinalSuffix(num: number): string {
  const j = num % 10,
        k = num % 100;
  if (j === 1 && k !== 11) {
    return 'st';
  }
  if (j === 2 && k !== 12) {
    return 'nd';
  }
  if (j === 3 && k !== 13) {
    return 'rd';
  }
  return 'th';
}

export default SearchNetwork;
